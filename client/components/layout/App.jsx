var React = require('react');
var Reqwest = require('reqwest');
var PostsView = require('../posts/View.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
    };
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
    return (
      <div className="app">
        <h1>Angry Developer</h1>
        <div className="content">
          <PostsView origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});
