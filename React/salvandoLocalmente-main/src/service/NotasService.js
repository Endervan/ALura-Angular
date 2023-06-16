import {db} from "./SQLite";


export function criarTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT,titulo TEXT,categoria TEXT,texto TEXT);")
    })
}

export async function adicionaNota(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Notas (titulo,categoria,texto) VALUES(?,?,?);",
                [nota.titulo, nota.categoria, nota.texto],
                () => {
                    resolve("Nota Adicionada com Sucesso")
                })
        })

    })

}

export async function buscarNotas() {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Notas", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })

    })

}

export async function atualizarNotas(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Notas SET titulo = ?,categoria = ? ,texto = ?  where id = ?;", [nota.titulo, nota.categoria, nota.texto, nota.id], (transaction, resultado) => {
                resolve("Nota atualizada com sucesso")
            })
        })

    })

}

export async function removeNota(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql(" DELETE FROM Notas where id = ?;", [nota.id], () => {
                resolve("Nota deletada com sucesso")
            })
        })

    })

}
