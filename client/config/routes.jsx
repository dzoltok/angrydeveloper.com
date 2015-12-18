var React = require('react');

var App = require('../components/layout/App.jsx');
var PostsView = require('../components/posts/View.jsx');
var AboutView = require('../components/static/AboutView.jsx');

var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;

module.exports = (
  <Route path="/" component={App}>
    <Route path="posts" component={PostsView} />
    <Route path="about" component={AboutView} />
  </Route>
);
