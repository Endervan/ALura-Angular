import api from "../api";

export async function pegarRepositorioDadosUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    }
    catch (error){
        console.log(error);
        return [];
    }
}

export async function salvaRepositorioDadosUsuario(postId,name,data,id) {
    try {
        await api.put(`/repos/${id}`,{
            name,
            data,
            postId,
            id
        });
        return 'sucesso';
    }
    catch (error){
        console.log(error);
        return 'Erro';
    }
}

export async function PegarRepositoriosDoUsuarioPeloNome(id, nome){
    return await api.get(`/repos?postId=${id}&name=${nome}`).then(response => {
        return response.data.filter(a=> a.name === nome);
        // return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    });
}

export async function criarRepositorioDadosUsuario(postId,name,data) {
    try {
        await api.post(`/repos`,{
            name,
            data,
            postId,
        });
        return 'sucesso';
    }
    catch (error){
        console.log(error);
        return 'Erro';
    }
}

