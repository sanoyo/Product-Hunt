import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
  render() {
    return (
      <Popup {...this.props}>
        <img src="/img/kitty.png"/>
        <h1>Login</h1>
        <button className="facebook-btn">Login with Facebook</button>
      </Popup>
    );
  }
}

export default LoginPopup;