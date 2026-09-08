// SkillMatch JS - Simulador de Compatibilidade de Candidatos com Vagas de emprego Front-end Júnior
// Projeto desenvolvido em JavaScript
// Desenvolvido por: Carolina Minuzzi Parmagnani
// Data: [01/09/2026]
// Versão: 1.0

// RF01 - Perfil dos candidatos
const candidatos = [
    //Candidato 1
  {
    nome: "Carolina Minuzzi Parmagnani",
    idade: 34,
    areaDeInteresse: ["Desenvolvedor Front-End Júnior"],
    habilidades: ["HTML", "CSS", "JavaScript", "Kanban", "Inglês"],
    anosDeExperiência: 1,
  },
  //Candidato 2
  {
    nome: "Carlos Eduardo Silva",
    idade: 42,
    areaDeInteresse: ["Desenvolvedor Front-End Júnior", "Desenvolvedor Full-Stack"],
    habilidades: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Kanban", "Inglês"],
    anosDeExperiência: 4,
  }
];
// RF02 - Vagas de Emprego Disponíveis
const vagas = [
  //Vaga 1
  {
    empresa: "WebFusion",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Kanban", "Inglês"],
    modalidade: "Remoto",
    salário: 6000,
  },
  //Vaga 2
  {
    empresa: "ACSHealth",
    cargo: "Desenvolvedor Front-End Sênior",
    requisitos: ["HTML", "CSS", "JavaScript","React", "TypeScript", "Git", "API Rest", "TDD", "Figma", "SQL", "Docker", "Tailwind CSS", "AWS", "CloudFront", "Arquitetura de Software", "Code Review", "Segurança de Aplicações", "Scrum", "Kanban"],
    modalidade: "Semi-presencial",
    salário: 15000,
  },
  //Vaga 3
  {
    empresa: "InovaTech",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML","CSS","JavaScript","React","TDD","API Rest", "Git"],
    modalidade: "Remoto",
    salário: 10000,
  },
  //Vaga 4
  {
    empresa: "BaironDev",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML", "CSS", "JavaScript", "Kanban"],
    modalidade: "Presencial",
    salário: 5000,
  }
];

// RF03 - Função para calcular a compatibilidade entre candidato e vaga de emprego disponível
function calcularCompatibilidade(candidato, vaga) {
const requisitosAtendidos = vaga.requisitos.filter((requisito) => candidato.habilidades.includes(requisito));
const compatibilidade = (requisitosAtendidos.length / vaga.requisitos.length) * 100;
return compatibilidade;
};

// RF04 - Função para classificar a compatibilidade entre candidatos e vagas de emprego disponíveis
function classificarCompatibilidade(candidato, vaga) {
  const compatibilidade = calcularCompatibilidade(candidato, vaga);
  if (compatibilidade >= 80) {
    return "Alta compatibilidade";
  } else if (compatibilidade >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
};

// RF05 - Lista de habilidades faltantes para o candidato
function listarHabilidadesFaltantes (candidato, vaga){
  const habilidadesFaltantes = vaga.requisitos.filter((requisito) => !candidato.habilidades.includes(requisito));
  return habilidadesFaltantes;
}

function exibirHabilidadesFaltantes(candidato, vaga) {
  const habilidadesFaltantes = listarHabilidadesFaltantes(candidato, vaga);
  console.log("Candidato: " + candidato.nome);
  console.log("Empresa: " + vaga.empresa);

  if (habilidadesFaltantes.length === 0) {
    console.log("Habilidades faltantes: Nenhuma habilidade faltante.");
  } else {
    console.log("Habilidades faltantes: " + habilidadesFaltantes.join(", "));
  }
};

//RF06 - Função para encontrar a vaga com maior compatibilidade para o candidato
function encontrarVagaComMaiorCompatibilidade(candidato, vagas) {
  let vagaMaisCompativel = null;
  let maiorCompatibilidade = -1;

  for (const vaga of vagas) {
    const compatibilidade = calcularCompatibilidade(candidato, vaga);

    if (compatibilidade > maiorCompatibilidade) {
      maiorCompatibilidade = compatibilidade;
      vagaMaisCompativel = vaga;
    }
  }
  return vagaMaisCompativel;
};

//RF07 - Gerar recomendação de estudo 
function gerarRecomendacaoEstudo(candidato, vagas) {
  const habilidadesPorVaga = vagas.map((vaga) => {
    return listarHabilidadesFaltantes(candidato, vaga);
  });

  const frequenciaHabilidades = {};

  habilidadesPorVaga.forEach((habilidades) => {
    habilidades.forEach((habilidade) => {
      if (frequenciaHabilidades[habilidade]) {
        frequenciaHabilidades[habilidade]++;
      } else {
        frequenciaHabilidades[habilidade] = 1;
      }
    });
  });

  let maiorFrequencia = 0;
  let habilidadeMaisFaltante = null;

  for (const habilidade in frequenciaHabilidades) {
    if (frequenciaHabilidades[habilidade] > maiorFrequencia) {
      maiorFrequencia = frequenciaHabilidades[habilidade];
    }
  }
  const habilidades = Object.keys(frequenciaHabilidades);
  
  const habilidadePrioritaria = habilidades.filter((habilidade) => frequenciaHabilidades[habilidade] === maiorFrequencia);

  const vagaRelacionada = vagas.find((vaga) => {
    return vaga.requisitos.includes(habilidadePrioritaria[0]);
  });

  return {
    habilidades: habilidadePrioritaria,
    frequencia: maiorFrequencia,
    vaga: vagaRelacionada
  };

}


/////////////RESULTADOS/////////

//Exibir compatibilidade candidato x vaga
console.log("\n===== RF03 - COMPATIBILIDADE CANDIDATO X VAGA =====\n");
candidatos.forEach((candidato) => {
  vagas.forEach((vaga) => {
    const compatibilidade = calcularCompatibilidade(candidato, vaga);
    console.log("Candidato: " + candidato.nome);
    console.log("Empresa:" + vaga.empresa);
    console.log("Compatibilidade: " + compatibilidade.toFixed(2) + "%");
    console.log("-----------------------------");
  });
});


///Exibir o grau de compatibilidade entre o candidato e a vaga
console.log("\n===== RF04 - GRAU DE COMPATIBILIDADE =====\n");
// Candidato 1 e Vaga 1
const classificacao = classificarCompatibilidade(candidatos[0], vagas[0]); 
const compatibilidade = calcularCompatibilidade(candidatos[0], vagas[0]);
console.log (candidatos[0].nome + " possui " + compatibilidade.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);
console.log("Classifica├º├úo: " + classificacao);
console.log("-----------------------------");


// Candidato 1 e Vaga 2
const classificacao1 = classificarCompatibilidade(candidatos[0], vagas[1]);
const compatibilidade3 = calcularCompatibilidade(candidatos[0], vagas[1]);
console.log (candidatos[0].nome + " possui " + compatibilidade3.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);
console.log("Classifica├º├úo: " + classificacao1);
console.log("-----------------------------");

// Candidato 1 e Vaga 3
const classificacao2 = classificarCompatibilidade(candidatos[0], vagas[2]);
const compatibilidade5 = calcularCompatibilidade(candidatos[0], vagas[2]);
console.log (candidatos[0].nome + " possui " + compatibilidade5.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);
console.log("Classifica├º├úo: " + classificacao2);
console.log("-----------------------------");

// Candidato 1 e Vaga 4
const classificacao3 = classificarCompatibilidade(candidatos[0], vagas[3]);
const compatibilidade7 = calcularCompatibilidade(candidatos[0], vagas[3]);
console.log (candidatos[0].nome + " possui " + compatibilidade7.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);
console.log("Classifica├º├úo: " + classificacao3);
console.log("-----------------------------");

// Candidato 2 e Vaga 1
const classificacao4 = classificarCompatibilidade(candidatos[1], vagas[0]);
const compatibilidade2 = calcularCompatibilidade(candidatos[1], vagas[0]);
console.log (candidatos[1].nome + " possui " + compatibilidade2.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);
console.log("Classifica├º├úo: " + classificacao4);
console.log("-----------------------------");

// Candidato 2 e Vaga 2
const classificacao5 = classificarCompatibilidade(candidatos[1], vagas[1]);
const compatibilidade4 = calcularCompatibilidade(candidatos[1], vagas[1]);
console.log (candidatos[1].nome + " possui " + compatibilidade4.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);
console.log("Classifica├º├úo: " + classificacao5);
console.log("-----------------------------");

// Candidato 2 e Vaga 3
const classificacao6 = classificarCompatibilidade(candidatos[1], vagas[2]);
const compatibilidade6 = calcularCompatibilidade(candidatos[1], vagas[2]);
console.log (candidatos[1].nome + " possui " + compatibilidade6.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);
console.log("Classifica├º├úo: " + classificacao6);
console.log("-----------------------------");

// Candidato 2 e Vaga 4
const classificacao7 = classificarCompatibilidade(candidatos[1], vagas[3]);
const compatibilidade8 = calcularCompatibilidade(candidatos[1], vagas[3]);
console.log (candidatos[1].nome + " possui " + compatibilidade8.toFixed(2) + "% de compatibilidade coma vaga de emprego dispon├¡vel na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);
console.log("Classifica├º├úo: " + classificacao7);
console.log("-----------------------------");


///////Exibir as habilidades faltantes dos candidatos para cada vaga pretendida///////
console.log("\n===== RF05 - HABILIDADES FALTANTES =====\n");

//Habilidades faltantes do candidato 1 para a vaga 1
const habilidadesFaltantes1 = listarHabilidadesFaltantes(candidatos[0], vagas[0]);
console.log("candidatos:" + candidatos[0].nome);
console.log("Empresa:" + vagas[0].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes1);
console.log("-----------------------------");

//Habilidades faltantes do candidato 1 para a vaga 2
const habilidadesFaltantes2 = listarHabilidadesFaltantes(candidatos[0], vagas[1]);
console.log("candidatos:" + candidatos[0].nome);
console.log("Empresa:" + vagas[1].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes2);
console.log("-----------------------------");

//Habilidades faltantes do candidato 1 para a vaga 3
const habilidadesFaltantes3 = listarHabilidadesFaltantes(candidatos[0], vagas[2]);
console.log("candidatos:" + candidatos[0].nome);
console.log("Empresa:" + vagas[2].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes3);
console.log("-----------------------------");

//Habilidades faltantes do candidato 1 para a vaga 4
const habilidadesFaltantes4 = listarHabilidadesFaltantes(candidatos[0], vagas[3]);
console.log("candidatos:" + candidatos[0].nome);
console.log("Empresa:" + vagas[3].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes4);
console.log("-----------------------------");
exibirHabilidadesFaltantes(candidatos[0], vagas[3]);

//Habilidades faltantes do candidato 2 para a vaga 1
const habilidadesFaltantes5 = listarHabilidadesFaltantes(candidatos[1], vagas[0]);
console.log("candidatos:" + candidatos[1].nome);
console.log("Empresa:" + vagas[0].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes5);
console.log("-----------------------------");

//Habilidades faltantes do candidato 2 para a vaga 2
const habilidadesFaltantes6 = listarHabilidadesFaltantes(candidatos[1], vagas[1]);
console.log("candidatos:" + candidatos[1].nome);
console.log("Empresa:" + vagas[1].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes6);
console.log("-----------------------------");

//Habilidades faltantes do candidato 2 para a vaga 3
const habilidadesFaltantes7 = listarHabilidadesFaltantes(candidatos[1], vagas[2]);
console.log("candidatos:" + candidatos[1].nome);
console.log("Empresa:" + vagas[2].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes7);
console.log("-----------------------------");
//Habilidades faltantes do candidato 2 para a vaga 4
const habilidadesFaltantes8 = listarHabilidadesFaltantes(candidatos[1], vagas[3]);
console.log("candidatos:" + candidatos[1].nome);
console.log("Empresa:" + vagas[3].empresa);
console.log("Habilidades faltantes:" + habilidadesFaltantes8);
console.log("-----------------------------");




//RF06 - Exibir a vaga com maior compatibilidade para cada candidato

console.log("\n===== RF06 - VAGA COM MAIOR COMPATIBILIDADE =====\n");
const vagaMaisCompativelCandidato1 = encontrarVagaComMaiorCompatibilidade(candidatos[0], vagas);
console.log("A vaga com maior compatibilidade para " + candidatos[0].nome + " ├® na empresa " + vagaMaisCompativelCandidato1.empresa + " para o cargo de " + vagaMaisCompativelCandidato1.cargo);

const vagaMaisCompativelCandidato2 = encontrarVagaComMaiorCompatibilidade(candidatos[1], vagas);
console.log("A vaga com maior compatibilidade para " + candidatos[1].nome + " ├® na empresa " + vagaMaisCompativelCandidato2.empresa + " para o cargo de " + vagaMaisCompativelCandidato2.cargo);



//RF07 - Exibir a recomendação de estudo para cada candidato
///Candidato 1
console.log("\n===== RF07 - RECOMENDAÇÃO DE ESTUDO =====\n");
const recomendacaoCandidato1 = gerarRecomendacaoEstudo(candidatos[0], vagas);
console.log("Candidato:" + candidatos[0].nome);
if (recomendacaoCandidato1.habilidades) {
  console.log("Habilidade prioritária para estudo: " + recomendacaoCandidato1.habilidades.join(", "));
  console.log("Essa habilidade é exigida em: " + recomendacaoCandidato1.frequencia + " vagas");
  console.log("Recomendação: Estudar " + recomendacaoCandidato1.habilidades);
} else {
  console.log("Não há recomendações de estudo.");}

///Candidato 2
console.log("\n===== RF07 - RECOMENDAÇÃO DE ESTUDO =====\n");
const recomendacaoCandidato2 = gerarRecomendacaoEstudo(candidatos[1], vagas);
console.log("Candidato:" + candidatos[1].nome);
if (recomendacaoCandidato2.habilidades) {
  console.log("Habilidade prioritária para estudo: " + recomendacaoCandidato2.habilidades.join(", "));
  console.log("Essa habilidade é exigida em: " + recomendacaoCandidato2.frequencia + " vagas");
  console.log("Recomendação: Estudar " + recomendacaoCandidato2.habilidades);
} else {
  console.log("Não há recomendações de estudo.");}
