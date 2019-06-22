import React from 'react';

class Navbar extends React.Component {
  renderProductSearch() {
    return (
      <section className="left-side">
        <input className="product-search" placeholder="SEARCH" />
      </section>
    );
  };

  renderLogo() {
    return (
      <a href="#"><img src="/img/favicon.ico" /></a>
    );
  };

  renderUser() {
    return (
      <section className="right-side">
        <a href="#" className="login-btn">LOGIN</a>
      </section>
    );
  };

  render() {
    return (
      <section className="navbar">
        {this.renderProductSearch()}
        {this.renderLogo()}
        {this.renderUser()}
      </section>
    );
  };
}

export default Navbar;