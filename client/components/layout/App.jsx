var React = require('react');
var Reqwest = require('reqwest');

var Menu = require('./Menu.jsx');
var PostsView = require('../posts/View.jsx');

// var RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    };
  },
  getInitialState: function() {
    return {
      showMenu: false
    };
  },
  handleMenuClick: function() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  },
  readFromAPI: function(url, success) {
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
  },
  render: function() {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id="app" className={menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <PostsView origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});
