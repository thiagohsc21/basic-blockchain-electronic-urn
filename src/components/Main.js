import React, { Component } from 'react';
import urna from './urna.jpeg'

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Escolha seu futuro presidente</h1>
        <form onSubmit={(event) => {        
          event.preventDefault()
          const numero = this.numeroVotado.value
          this.props.validaVoto(numero)
        }}>
          <img src={urna} alt="foto urna" />
          <div className="form-group mr-sm-2">
            <input
              id="numeroEscolhido"
              type="text"
              ref={(input) => { this.numeroVotado = input }}
              className="form-control"
              placeholder="Digite 13 ou 22"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Submeter voto</button>
        </form>
      </div>
    );
  }
}

export default Main;
