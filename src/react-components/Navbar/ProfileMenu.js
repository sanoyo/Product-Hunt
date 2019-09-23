import React from 'react';

class ProfileMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      showProfileNav: false
    }
  }

  handleClick = () => {
    if(this.state.showProfileNav) {
      this.setState({showProfileNav: false});
    } else {
      this.setState({showProfileNav: true});
    }
  };

  handleClickOutsite = (e) => {
    if (e.target != this.refs.profileBtn) {
      this.setState({showProfileNav: false});
    }
  };

  componentWillMount() {
    window.addEventListener("click", this.handleClickOutsite, false);
  }

  componentWillUnMount() {
    window.addEventListener("click", this.handleClickOutsite, true);
  }


  renderProfileNav() {
    return (
      <nav className="profile-nav" ref="profileNav">
        <a href="#">My Profile</a>
        <a href="#">Logout</a>
      </nav>
    );
  }

  render() {
    return (
      <section className="profile-menu">
        <img src={this.props.user.avatar} onClick={this.handleClick} className="profile-btn medium-avatar" ref="profileBtn"/>
        {
          this.state.showProfileNav? this.renderProfileNav() : null
        }
      </section>
    );
  }
}

export default ProfileMenu;