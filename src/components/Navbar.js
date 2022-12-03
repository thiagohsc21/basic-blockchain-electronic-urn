import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a> Endereço votante: {this.props.account} </a>
        {/* eslint-disable-next-line */}
      </nav>
    );
  }
}

export default Navbar;
