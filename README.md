# SkillMatch

Projeto desenvolvido em JavaScript puro para cadastrar candidatos, cadastrar vagas e verificar compatibilidade entre eles.

## Descrição

O SkillMatch é um projeto proposto e desenvolvido durante a sexta semana de aulas do curso de Desenvolvimento de Software Front-End React do projeto SCTech.
O projeto é intitulado "SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior".
O sistema foi desenvolvido em JavaScript e permite cadastrar candidatos e vagas de emprego, analisando a compatibilidade entre as habilidades dos candidatos e os requisitos das vagas.
Além do cálculo de compatibilidade, o sistema classifica o nível de compatibilidade, identifica as habilidades que ainda faltam ao candidato e encontra a vaga com maior compatibilidade para cada perfil.

## Tecnologias e Ferramentas Utilizadas 

- JavaScript
- Node.js
- Visual Studio Code
- Git
- GitHub
- Github Desktop
- Kanban
- Trello

## Funcionalidades

- Criar perfis de candidatos;
- Criar vagas de emprego Front-End;
- Comparar as habilidades dos candidatos com os requisitos das vagas;
- Calcular o percentual de compatibilidade entre candidato e vaga;
- Classificar a compatibilidade como alta, média ou baixa;
- Listar as habilidades faltantes do candidato para cada vaga;
- Identificar a vaga com maior compatibilidade para cada candidato;
- Gerar recomendações de estudo com base nas habilidades faltantes.

## Regra de cálculo da compatibilidade

A compatibilidade entre o candidato e a vaga é calculada comparando as habilidades do candidato com os requisitos da vaga.
Cada requisito possui o mesmo peso. O percentual de compatibilidade é obtido dividindo a quantidade de requisitos atendidos pelo candidato pela quantidade total de requisitos da vaga e multiplicando o resultado por 100.

Exemplo:
Se uma vaga possui 4 requisitos e o candidato possui 3 deles, sua compatibilidade com a vaga será de 75%.

## Classificação da compatibilidade

Após o cálculo do percentual, o sistema classifica a compatibilidade entre o candidato e a vaga de acordo com os seguintes critérios:
- De 80% a 100%: Alta compatibilidade;
- De 50% a 79%: Média compatibilidade;
- De 0% a 49%: Baixa compatibilidade.
Para realizar essa classificação foi utilizada uma estrutura de decisão `if/else`.

## Habilidades faltantes

O sistema compara as habilidades do candidato com os requisitos de cada vaga e identifica quais requisitos ainda não fazem parte das habilidades do candidato.
Quando o candidato possui todos os requisitos da vaga, o sistema informa que não existem habilidades faltantes.
Para realizar essa análise foi utilizado o método de array `filter()`.

## Critério para encontrar a vaga com maior compatibilidade

Para encontrar a vaga com maior compatibilidade, o sistema percorre as vagas disponíveis e calcula individualmente a compatibilidade de cada uma com o candidato.
Durante essa análise, o sistema armazena a vaga que possui o maior percentual de compatibilidade encontrado.
Foi utilizado um laço `for...of` para percorrer as vagas.
Caso duas vagas apresentem o mesmo maior percentual de compatibilidade, o sistema mantém a primeira vaga encontrada na lista. Esse comportamento ocorre porque uma nova vaga somente substitui a anterior quando possui um percentual maior.

## Recomendação de estudo

O sistema analisa os requisitos de todas as vagas cadastradas e identifica quais habilidades exigidas ainda não são possuídas pelo candidato. 
A habilidade faltante que aparece com maior frequência entre as vagas é considerada prioritária para o estudo. Quando duas ou mais habilidades empatam, todas são consideradas prioritárias e então recomendadas. 

## Métodos de array

O projeto utiliza métodos de array para realizar diferentes operações sobre os dados dos candidatos e das vagas.
O método `filter()` é utilizado para selecionar requisitos e habilidades de acordo com determinados critérios. O método 'map()' é utilizado na análise das habilidades faltantes entre as vagas e o método 'find()' é utilizado para localizar uma vaga relacionada a habilidade recomendada para estudo.

## Variáveis em JavaScript

No desenvolvimento do projeto foram utilizados principalmente `const` e `let`.
`const` é utilizada quando a variável não precisa receber um novo valor após sua declaração.
`let` é utilizada quando o valor armazenado na variável precisa ser alterado durante a execução do programa.
`var` é uma forma mais antiga de declarar variáveis em JavaScript e apresenta diferenças de escopo em relação a `let` e `const`. Neste projeto foi dada preferência ao uso de `const` e `let`.

## Como a internet funciona

A internet é uma rede mundial que permite a comunicação entre diferentes dispositivos.
Quando um usuário acessa um recurso disponível na internet, seu dispositivo envia uma solicitação através da rede. Essa solicitação pode chegar a um servidor, que processa o pedido e envia uma resposta com as informações solicitadas.
Essa comunicação permite, por exemplo, que navegadores acessem páginas e dados disponibilizados por servidores.

## Arquitetura cliente-servidor

Na arquitetura cliente-servidor, o cliente realiza uma solicitação e o servidor recebe e processa essa solicitação, devolvendo uma resposta.
Em uma aplicação web, por exemplo, o navegador pode atuar como cliente e solicitar informações a um servidor.

## Controle de versão

O projeto utiliza Git para controle de versão e GitHub para armazenar o repositório remoto.
Durante o desenvolvimento foram realizados commits para registrar diferentes etapas da construção do projeto, permitindo acompanhar sua evolução e manter um histórico das alterações realizadas.

## Organização com Kanban

As tarefas necessárias para desenvolver o SkillMatch foram organizadas utilizando um quadro Kanban no Trello.
O quadro foi utilizado para acompanhar as atividades do projeto durante seu desenvolvimento, permitindo visualizar tarefas planejadas, em andamento e concluídas.

## Como executar o projeto

Para executar o projeto é necessário ter o Node.js instalado no computador.
Após baixar ou clonar o repositório, abra a pasta do projeto no Visual Studio Code.
No terminal, execute: node skillmatch.js
Os resultados das análises dos candidatos e das vagas serão exibidos no terminal

## Desenvolvedor 
Carolina Minuzzi Parmagnani
