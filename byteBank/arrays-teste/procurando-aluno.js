const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
  // const alunos = listaDeAlunosEMedias[0];
  // const medias = listaDeAlunosEMedias[1]; msm codigo abaixo resumido
  const [alunos,medias] = listaDeAlunosEMedias;
  if (alunos.includes(aluno)) {
    const indice = alunos.indexOf(aluno); // verifica se existe
    const mediaDoAluno = medias[indice]; // pega nota aluno selecionado de acordo com indice
    console.log(`${aluno} tem a média ${mediaDoAluno}.`);

  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Juliana");
