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
