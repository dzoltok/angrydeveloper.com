require('./assets/app.css');
require('./assets/menu.css');
require('./assets/posts.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes.jsx');
var createBrowserHistory = require('history/lib/createBrowserHistory');

ReactDOM.render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('root'));
