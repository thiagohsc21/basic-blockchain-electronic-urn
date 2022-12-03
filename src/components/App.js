import React, { Component } from 'react';
import Web3 from 'web3'
import SistemaVotacao from '../json-contratos/SistemaVotacao'
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // detecta a presença de um provedor Ethereum no navegador da web, o que nos permite conectar nosso aplicativo ao blockchain
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  // responsável por carregar os dados da blockchain
  async loadBlockchainData() {
    const web3 = window.web3
    // busca as contas do metamask e as registra no console
    const accounts = await web3.eth.getAccounts()
    // armazena a conta em questao no object state do React 
    this.setState({ account: accounts[0] })
    // le o networkID para determinar qual rede estamos conectados com metamask (ganache)
    const networkId = await web3.eth.net.getId()
    const networkData = SistemaVotacao.networks[networkId]
    // usaremos esse ID de rede para conectar ao contrato inteligente implantado na rede ganache
    if(networkData) {
      const sistemavotacao = web3.eth.Contract(SistemaVotacao.abi, networkData.address)
      this.setState({ sistemavotacao })
      this.setState({ loading: false})
    } else {
      window.alert('Problema na detecção do contrato do sistema de votação.')
    }
  }

  constructor(props) {
    super(props)

    // valores dafult para o state do react
    this.state = {
      account: '',
      votosLula: 0,
      votosBolsonaro: 0,
      loading: true
    }

    this.validaVoto = this.validaVoto.bind(this)
  }

    validaVoto(numero){
      this.setState({ loading: true })
      this.state.sistemavotacao.methods.validaVoto(numero).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Processando dados...</p></div>
                : <Main validaVoto = {this.validaVoto} />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
