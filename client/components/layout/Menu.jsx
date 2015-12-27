import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this._handleSignOutLink = this._handleSignOutLink.bind(this);
  }

  _handleSignOutLink() {
    sessionStorage.setItem('jwt', '');
    location = '/';
  }

  render() {
    if (this.props.signedIn) {
      var signInLink = <li><span onClick={this._handleSignOutLink}>Sign Out</span></li>;
    } else {
      var signInLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }

    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Angry Developer</span>
            <ul>
              <li><Link to="posts">Posts</Link></li>
              <li><Link to="about">About</Link></li>
              {signInLink}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  signedIn: React.PropTypes.bool
};
