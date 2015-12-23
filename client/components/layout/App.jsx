import React from 'react';
import Reqwest from 'reqwest';

import Menu from './Menu.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this._handleMenuClick = this._handleMenuClick.bind(this);
    this._readFromAPI = this._readFromAPI.bind(this);
  }

  _readFromAPI(url, success) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: success,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  }

  _handleMenuClick() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={this._handleMenuClick} />
        <div id="content">
          {this.props.children && React.cloneElement(this.props.children, {
            origin: this.props.origin,
            readFromAPI: this._readFromAPI
          })}
        </div>
      </div>
    );
  }
};

App.defaultProps = {
  origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
};
