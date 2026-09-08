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
    requisitos: ["HTML5", "CSS", "JavaScript","React","Redux Toolkit", "API/Rest", "Git", "TDD", "Testes automatizados", "Responsividade", "Figma", "SQL", "Docker", "Tailwind CSS", "AWS", "CloudFrond", "Arquitetura de Software", "Code Review", "Segurança de Aplicações", "Scrum", "Kanban"],
    modalidade: "Semi-presencial",
    salário: 15000,
  },
  //Vaga 3
  {
    empresa: "InovaTech",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["HTML","CSS","JavaScript","React","TDD/Testes","API/Rest", "Git"],
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
}

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
}

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
    console.log("Habilidades faltantes:Nenhuma habilidade faltante.");
  } else {
    console.log("Habilidades faltantes: " + habilidadesFaltantes.join(", "));
  }
}

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
}


//Resultados
///Exibir o grau de compatibilidade entre o candidato e a vaga
console.log("\n===== RF04 - GRAU DE COMPATIBILIDADE =====\n");
// Candidato 1 e Vaga 1
const classificacao = classificarCompatibilidade(candidatos[0], vagas[0]); 
const compatibilidade = calcularCompatibilidade(candidatos[0], vagas[0]);
console.log (candidatos[0].nome + " possui " + compatibilidade.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);
console.log("Classificação: " + classificacao);
console.log("-----------------------------");


// Candidato 1 e Vaga 2
const classificacao1 = classificarCompatibilidade(candidatos[0], vagas[1]);
const compatibilidade3 = calcularCompatibilidade(candidatos[0], vagas[1]);
console.log (candidatos[0].nome + " possui " + compatibilidade3.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);
console.log("Classificação: " + classificacao1);
console.log("-----------------------------");

// Candidato 1 e Vaga 3
const classificacao2 = classificarCompatibilidade(candidatos[0], vagas[2]);
const compatibilidade5 = calcularCompatibilidade(candidatos[0], vagas[2]);
console.log (candidatos[0].nome + " possui " + compatibilidade5.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);
console.log("Classificação: " + classificacao2);
console.log("-----------------------------");

// Candidato 1 e Vaga 4
const classificacao3 = classificarCompatibilidade(candidatos[0], vagas[3]);
const compatibilidade7 = calcularCompatibilidade(candidatos[0], vagas[3]);
console.log (candidatos[0].nome + " possui " + compatibilidade7.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);
console.log("Classificação: " + classificacao3);
console.log("-----------------------------");

// Candidato 2 e Vaga 1
const classificacao4 = classificarCompatibilidade(candidatos[1], vagas[0]);
const compatibilidade2 = calcularCompatibilidade(candidatos[1], vagas[0]);
console.log (candidatos[1].nome + " possui " + compatibilidade2.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);
console.log("Classificação: " + classificacao4);
console.log("-----------------------------");

// Candidato 2 e Vaga 2
const classificacao5 = classificarCompatibilidade(candidatos[1], vagas[1]);
const compatibilidade4 = calcularCompatibilidade(candidatos[1], vagas[1]);
console.log (candidatos[1].nome + " possui " + compatibilidade4.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);
console.log("Classificação: " + classificacao5);
console.log("-----------------------------");

// Candidato 2 e Vaga 3
const classificacao6 = classificarCompatibilidade(candidatos[1], vagas[2]);
const compatibilidade6 = calcularCompatibilidade(candidatos[1], vagas[2]);
console.log (candidatos[1].nome + " possui " + compatibilidade6.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);
console.log("Classificação: " + classificacao6);
console.log("-----------------------------");

// Candidato 2 e Vaga 4
const classificacao7 = classificarCompatibilidade(candidatos[1], vagas[3]);
const compatibilidade8 = calcularCompatibilidade(candidatos[1], vagas[3]);
console.log (candidatos[1].nome + " possui " + compatibilidade8.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);
console.log("Classificação: " + classificacao7);
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
console.log("A vaga com maior compatibilidade para " + candidatos[0].nome + " é na empresa " + vagaMaisCompativelCandidato1.empresa + " para o cargo de " + vagaMaisCompativelCandidato1.cargo);

const vagaMaisCompativelCandidato2 = encontrarVagaComMaiorCompatibilidade(candidatos[1], vagas);
console.log("A vaga com maior compatibilidade para " + candidatos[1].nome + " é na empresa " + vagaMaisCompativelCandidato2.empresa + " para o cargo de " + vagaMaisCompativelCandidato2.cargo);