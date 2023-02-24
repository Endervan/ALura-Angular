const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    const indice = listaDeAlunosEMedias[0].indexOf(aluno); // verifica se existe
    const mediaDoAluno = listaDeAlunosEMedias[1][indice]; // pega nota aluno selecionado de acordo com indice
    console.log(`${aluno} tem a média ${mediaDoAluno}.`);

  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("juliana");
