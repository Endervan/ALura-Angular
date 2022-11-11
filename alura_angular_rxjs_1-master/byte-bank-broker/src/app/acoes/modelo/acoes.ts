// modelo abreviado
export interface Acoes extends Array<Acao> {
}

export interface Acao {
  id: number;
  codigo: string;
  descricao: string;
  preco: any;
}

export interface AcoesApi {
  payload: Acoes;
}
