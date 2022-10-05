#Introdução

Neste guia você terá um passo a passo de quais ferramentas e os processos necessários para
clonar e fazer alterações no projeto.

#Ferramentas

1 - Baixe e instale o editor de código de sua preferência. (Indico o visual studio code).
Link para download do visual studio code: https://code.visualstudio.com/

2 - Baixe a versão LTS do Node.Js.
Link para download do Node.Js: https://nodejs.org/en/
Para verificar se a instalação do Node.Js foi bem sucedida, abra um prompt de comando
(aperte a tecla winkey e digite cmd, depois aperte enter) e digite o seguinte comando:
node --version
Deverá exibir uma mensagem com a versão instalada do Node.js.


3 - Baixe e instale a versão atual do Git.
Link para download do Git: https://git-scm.com/

Para verificar se a instalação do git foi bem sucedida, abra um prompt de comando
(aperte a tecla winkey e digite cmd, depois aperte enter) e digite o seguinte comando:
git --version
Deverá exibir uma mensagem com a versão instalada do git.

#Clonando o projeto


Para clonar o projeto, siga os seguintes passos:

1 - Crie uma pasta com o nome que você desejar e onde você desejar.

2 - Inicie o visual studio code, vá em arquivos no canto superior esquerdo,
depois clicque em abrir pasta. Vá até a pasta que você criou no passo anterior
e clique em abrir.

3 - Abra um terminal no visual studio code com o seguinte comando:
CTRL + SHIFT + "

4 - Agora clique no terminal e cole o seguinte comando:
git clone https://github.com/RobertoCosta33/Project-ads-github-search.git

5 - Agora para instalar todos os pacotes necessários para abrir o programa, digite o seguinte comando:
npm install

#Rodando o projeto no navegador

Agora finalmente para ver o projeto em seu navegador, no terminal do visual studio code, 
basta digitar o seguinte comando:
npm run dev

Este comando irá gerar um link com o seguinte endereço:
http://localhost:3000

Basta segurar a tecla CTRL e clicar no link para abrir o projeto em seu navegador.


#Fazendo alterações

Para fazer alterações no código, você precisará criar uma feature e fazer uma pull request seguindo os seguintes passos:

1 - Abra um terminal no visual studio code e digite o seguinte comando para criar sua branch de trabalho:
git checkout -b feature/nome-da-sua-branch

IMPORTANTE!
Sempre antes de fazer qualquer alteração no código, faça um pull da branch principal 
para evitar possiveis conflitos digitando o seguinte comando:
git pull origin master

Isso se deve pelo fato da master ser sempre a branch que estará recebendo todas as alterações
bem sucedidas do projeto, ou seja, ela seria em um projeto real o equivalente a branch de produção.

2 - Agora que sua branch foi criada como uma ramificação da master, você poderá fazer alterações no código.
Para subir o progresso para a sua branch remota, você deverá executar o seguinte comando no terminal:
git push origin feature/nome-da-sua-branch

3 - Uma vez tendo finalizado sua tarefa, você precisará fazer um merge request para subir as alterações
salvas na sua branch, para a branch principal do projeto (master).
Para isso siga os passos deste tutorial: https://www.youtube.com/watch?v=Du04jBWrv4A
Ou se preferir fale comigo através do Linkdein: https://www.linkedin.com/in/roberto-b-costa-000b91218


#Endpoints ultilizados no projeto:

Para receber a lista de usuários:
a. **https://api.github.com/users/<nome do usuário>** *(retorna as informações do usuário)*

Para receber a lista de repositórios publicos:
b. **https://api.github.com/users/<nome do usuário>/repos** *(retorna a lista de repositórios do usuário)*
