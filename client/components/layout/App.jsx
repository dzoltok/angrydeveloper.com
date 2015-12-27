import React from 'react';
import Reqwest from 'reqwest';
import Uri from 'jsuri';

import Menu from './Menu.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      signedIn: false,
      currentUser: {
        handle: ''
      }
    };
    this._handleMenuClick = this._handleMenuClick.bind(this);
    this._readFromAPI = this._readFromAPI.bind(this);
    this._getCurrentUserFromAPI = this._getCurrentUserFromAPI.bind(this);
  }

  componentWillMount() {
    let jwt = new Uri(location.search).getQueryParamValue('jwt');
    if (!!jwt) {
      sessionStorage.setItem('jwt', jwt);
    }
  }

  componentDidMount() {
    if (!!sessionStorage.getItem('jwt')) {
      this._getCurrentUserFromAPI();
    }
  }

  _handleMenuClick() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  _readFromAPI(url, success) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: success,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  }

  _getCurrentUserFromAPI() {
    this._readFromAPI(this.props.origin + '/current_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  }

  render() {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu origin={this.props.origin} sendMenuClick={this._handleMenuClick} signedIn={this.state.signedIn} />
        <div id="content">
          {this.props.children && React.cloneElement(this.props.children, {
            origin: this.props.origin,
            readFromAPI: this._readFromAPI,
            signedIn: this.state.signedIn
          })}
        </div>
      </div>
    );
  }
};

App.defaultProps = {
  origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
};
