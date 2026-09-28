# Sabor em Foco

Aplicação React que consome a API púplica TheMealDB para permitir a busca e o filtro de forma simples e visual.

## Problemática
Encontrar receitas na internet costuma ser confuso: os sites são cheios de anúncios, o texto é longo antes de chegar aos ingredientes, e não há uma forma simples de filtrar receitas por categoria. Isso torna a experiência de quem quer decidir o que cozinhar mais demorada do que precisa ser.

## Objetivo
Desenvolver uma aplicação React que consuma a API púplica TheMealDB e oferaça uma forma rápida e visual de buscar receitas, filtrar por categoria e visualizar os detalhes de preparo de cada prato, sem distrações.

## Tecnologias utilizadas
- React
- Vite
- CSS puro (com media queries para responsividade)
- JavaScript (fetch/await)

## API utilizada
[TheMealDB] (https://www.themealdb.com/api.php) -- API púplica e gratuita de receitas culinárias.

## Princioais funcionalidades
- Busca de receitas por nome do prato
- Filtro por categoria (sobremesa, frango, vegano, etc.)
- Listagem de receitas em cards com imagem e nome
- Tela de detalhes com ingredientes e modo de preparo
- Interface responsiva (celular, tablet e desktop)

## Como rodar o projeto localmente
git clone hptts://github.com/borgesleandra111-droid/Sabor-em-Foco.git
cd Sabor-em-Foco
npm install
npm run dev
Depois é só abrir o endereço mostrado no terminal(geralmente `http://localhost:5173`).

## Aplicação publicada
[sabor-em-foco.vercel.app](https://sabor-em-foco.vercel.app)

## Uso de Imteligência Artificial
Usei o Claude (Anthropic) como apoio durante todo o desenvolvimento do projeto -- desde a escolha da API até a estruturação dos componentes React. Como eu não tinha experiência prévia com React, a IA foi essencial para eu entender a lógica por trás de cada peça (componentes, props, hooks) antes de escrever o código, e para me dar segurança para avançar em cada etapa.

### Prompt utilizado
"Eu prefiro que voc~e me explique a lógica por trás de cada peça. Depois, você me manda um arquivo por vez, explicando o que cada trecho faz, enquanto eu digito."

### Objetivo
Eu queria entender a lógica do projeto antes de escrever o código, e não só copiar. Com esse prompt, a IA me explicou os conceitos(componentes, props, useState, useEffect) e depois me guiou arquivo por arquivo, e eu digitei e revisei cada um.

### Como a IA foi usada ao longo do projeto
Além da escolha da API, usei a IA para:
- Entender conceitos de React (useState, useEffect, props) antes de aplicá-los
- Revisar meu código linha por linha em busca de erros de digitação
- Organizar o cornograma de estudo e entrega do desafio
- Tirar dúvidas sobre Git, GitHub e o processo de publicação (deploy)
Todo o código foi digitado, testado e corrigido por mim -- a IA explicou a lógica e revisou o que eu escrevi, mas o aprendizado e a execução foram meus.
