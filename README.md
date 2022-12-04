# blockchain-electronic-urn

 ## Dependências necessárias
 
 É necessário instalar o [Ganache](https://trufflesuite.com/ganache/), [Node](https://nodejs.org/en/download/), a extensão [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) no navegador Google Chrome, escolhido para o desenvolvimento e por fim o Truffle, utilizando o comando abaixo.
 
 ```
npm install -g truffle@5.0.5
```
 
 
### Como rodar o projeto
Baixe o código fonte do projeto:
```
git clone https://github.com/thiagohsc21/blockchain-electronic-urn.git
```

Entre no arquivo **truffle-config.js** e altere o **host** e **port** de acordo com seu ganache, como na imagem abaixo:

![image](https://user-images.githubusercontent.com/61644143/205504368-8cb7d493-58b0-4537-a643-1e24ef6da02a.png)


Entre na pasta do projeto:
 ```
 cd sistemavotacao
 ```
 
 Execute o seguinte comando para instalar as dependências:
 ```
 npm install
```

 Execute o seguinte comando para compilar os contratos e realizar o deploy:
 ```
 truffle migrate
```

