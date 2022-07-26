import React, { Component } from 'react';
import trybeLogo from '../assets/images/logo-trybe.png';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const { qtd } = this.props;
    return (
      <header>
        <div className="header--logo">

          <img src={ trybeLogo } alt="Trybe logo" className="header--img" />
          <div className="qtd danger">{qtd}</div>
        </div>
      </header>
    );
  }
}

export default Header;
