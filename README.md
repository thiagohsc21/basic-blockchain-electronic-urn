# basic-blockchain-electronic-urn

 ### Dependências necessárias
 
 É necessário instalar o [Ganache](https://trufflesuite.com/ganache/), [Node](https://nodejs.org/en/download/), a extensão [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) no navegador Google Chrome, escolhido para o desenvolvimento e por fim o Truffle, utilizando o comando abaixo.
 
 ```
npm install -g truffle@5.0.5
```
 
 
### Como rodar o backend 

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

Nesse ponto você já consegue acessar o contrato executando:

```
 truffle console
 sistema = await SistemaVotacao.deployed()
```

E por meio dele consegue acessar variáveis e funções, utilizando alguns comandos como:

```
 sistema.address 
 sistema.nome()
 sistema.qntVotosLula()
 sistema.qntVotosBolsonaro()
 sistema.atualVencedor()
```

### Como rodar o frontend

Primeiro é necessário importas uma (ou mais) contas do ganache para a Metamask:

![image](https://user-images.githubusercontent.com/61644143/205504818-2bd33246-f864-428b-81ff-f3c92c0a9ff2.png)
<br />
***OBS**: Para obter tais endereços, entre no ganache e clique na chave ao lado de cada endereço, ele estará lá.*
<br /><br />


Agora precisamos inserir uma nova rede na Metamask:

![image](https://user-images.githubusercontent.com/61644143/205505156-0cabee5b-5c15-4a6f-a461-6556b0a21b0e.png)
<br /> 
*E no campo em questão coloque as mesmas informações passadas no **truffle-config.json** obtidas no ganache.*
<br /> <br />


Agora com as contas e a rede corretas, execute o comando abaixo para inicializar o front-end:
 ```
 npm run start
```

Se tudo ocorrer bem, você poderá realizar seus votos utilizando as contas do ganache e verificar a contagem no console do truffle como ensinado acima. 

