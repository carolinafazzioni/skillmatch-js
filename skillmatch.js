// SkillMatch JS - Simulador de Compatibilidade de Candidatos com Vagas de emprego Front-end Júnior
// Projeto desenvolvido em JavaScript
// Desenvolvido por: Carolina Minuzzi Parmagnani
// Data: [01/09/2026]
// Versão: 1.0

// Perfil dos candidatos
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
//Vagas Disponíveis
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
// Função para calcular a compatibilidade entre candidato e vaga de emprego disponível
function calcularCompatibilidade(candidato, vaga) {
const requisitosAtendidos = vaga.requisitos.filter((requisito) => candidato.habilidades.includes(requisito));
const compatibilidade = (requisitosAtendidos.length / vaga.requisitos.length) * 100;
return compatibilidade;
}
// Função para classificar a compatibilidade entre candidatos e vagas de emprego disponíveis
function classificarCompatibilidade(candidato, vaga) {
  const compatibilidade = calcularCompatibilidade(candidato, vaga);
  if (compatibilidade >= 80) {
    console.log("Alta compatibilidade");
  } else if (compatibilidade >= 50) {
    console.log("Média compatibilidade");
  } else {
    console.log("Baixa compatibilidade");
  }
}
//Exibir o resultado da compatibilidade entre candidato e vaga

// Candidato 1 e Vaga 1
classificarCompatibilidade(candidatos[0], vagas[0]); 
const compatibilidade = calcularCompatibilidade(candidatos[0], vagas[0]);
console.log (candidatos[0].nome + " possui " + compatibilidade.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);

// Candidato 2 e Vaga 1
classificarCompatibilidade(candidatos[1], vagas[0]); 
const compatibilidade2 = calcularCompatibilidade(candidatos[1], vagas[0]);
console.log (candidatos[1].nome + " possui " + compatibilidade2.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[0].empresa  + " para o cargo de " + vagas[0].cargo);

// Candidato 1 e Vaga 2
classificarCompatibilidade(candidatos[0], vagas[1]); 
const compatibilidade3 = calcularCompatibilidade(candidatos[0], vagas[1]);
console.log (candidatos[0].nome + " possui " + compatibilidade3.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);

// Candidato 2 e Vaga 2
classificarCompatibilidade(candidatos[1], vagas[1]); 
const compatibilidade4 = calcularCompatibilidade(candidatos[1], vagas[1]);
console.log (candidatos[1].nome + " possui " + compatibilidade4.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[1].empresa  + " para o cargo de " + vagas[1].cargo);

// Candidato 1 e Vaga 3
classificarCompatibilidade(candidatos[0], vagas[2]); 
const compatibilidade5 = calcularCompatibilidade(candidatos[0], vagas[2]);
console.log (candidatos[0].nome + " possui " + compatibilidade5.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);

// Candidato 2 e Vaga 3
classificarCompatibilidade(candidatos[1], vagas[2]); 
const compatibilidade6 = calcularCompatibilidade(candidatos[1], vagas[2]);
console.log (candidatos[1].nome + " possui " + compatibilidade6.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[2].empresa  + " para o cargo de " + vagas[2].cargo);

// Candidato 1 e Vaga 4
classificarCompatibilidade(candidatos[0], vagas[3]); 
const compatibilidade7 = calcularCompatibilidade(candidatos[0], vagas[3]);
console.log (candidatos[0].nome + " possui " + compatibilidade7.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);

// Candidato 2 e Vaga 4
classificarCompatibilidade(candidatos[1], vagas[3]); 
const compatibilidade8 = calcularCompatibilidade(candidatos[1], vagas[3]);
console.log (candidatos[1].nome + " possui " + compatibilidade8.toFixed(2) + "% de compatibilidade coma vaga de emprego disponível na " +  vagas[3].empresa  + " para o cargo de " + vagas[3].cargo);