const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)]; // retira itens duplicados da lista

console.log(nomesAtualizados);
