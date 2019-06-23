import React from 'react';
import LoginPopup from './LoginPopup';
import PostPopup from './PostPopup'

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      popupStatus: false
    }
  }

  showPopup = () => {
    this.setState({popupStatus: true});
  };

  hidePopup = () => {
    this.setState({popupStatus: false});
  };

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
        {
          this.props.user
          ?
          <section>
            <span>
              <a href="#" onClick={this.showPopup} className="login-btn">POST</a>
            </span>
            <PostPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
          </section>
          :
          <section>
            <span>
              <a href="#" onClick={this.showPopup} className="login-btn">Login</a>
              <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup}/>
            </span>
          </section>
        }
      </section>
    );
  };

  render() {
    return (
      <section>
        <section className="navbar">
          {this.renderProductSearch()}
          {this.renderLogo()}
          {this.renderUser()}
        </section>
      </section>
    );
  };
}

export default Navbar;