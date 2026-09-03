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
    modalidade: "Remoto"
    salário: 6000,
  },
  //Vaga 2
  {
    empresa: "ACSHealth"
    cargo: "Desenvolvedor Front-End Sênior",
    requisitos: ["HTML5","CSS","JavaScript","React","Redux Toolkit", "API/Rest", "Git", "TDD", "Testes automatizados" "Responsividade", "Figma", "SQL", "Docker", "Tailwind CSS", "AWS", "CloudFrond", "Arquitetura de Software", "Code Review", "Segurança de Aplicações", "Scrum", "Kanban"],
    modalidade: "Semi-presencial"
    salário: 15000,
  },
  //Vaga 3
  {
    empresa: "InovaTech"
    cargo: "Desenvolvedor Front-End Júnior"
    requisitos: ["HTML","CSS","JavaScript","React","TDD/Testes","API/Rest", "Git"],
    modalidade: "Remoto"
    salário: 10000,
  },
  //Vaga 4
  {
    empresa: "BaironDev"
    cargo: "Desenvolvedor Front-End Júnior"
    requisitos: ["HTML", "CSS", "JavaScript", "Kanban"],
    modalidade: "Presencial"
    salário: 5000,
  }
];