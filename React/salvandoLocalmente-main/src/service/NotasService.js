import {db} from "./SQLite";


export function criarTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas1 " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT,titulo TEXT,categoria TEXT,texto TEXT);")
    })
}

export async function adicionaNota(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Notas1 (titulo,categoria,texto) VALUES(?,?,?);",
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
            transaction.executeSql("SELECT * FROM Notas1", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })

    })

}

export async function filtraPorCategoria(categoria) {
    return new Promise((resolve) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM Notas1 WHERE categoria = ?;", [categoria], (tx, results) => {
                resolve(results.rows._array)
            });
        });
    });
}

export async function atualizarNotas(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Notas1 SET titulo = ?,categoria = ? ,texto = ?  where id = ?;", [nota.titulo, nota.categoria, nota.texto, nota.id], (transaction, resultado) => {
                resolve("Nota atualizada com sucesso")
            })
        })

    })

}

export async function removeNota(nota) {
    return new Promise(resolve => {
        db.transaction((transaction) => {
            transaction.executeSql(" DELETE FROM Notas1 where id = ?;", [nota.id], () => {
                resolve("Nota deletada com sucesso")
            })
        })

    })

}
