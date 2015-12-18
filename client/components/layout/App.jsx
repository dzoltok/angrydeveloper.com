var React = require('react');
var PostsView = require('../posts/View.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h1>Angry Developer</h1>
        <div className="content">
          <PostsView />
        </div>
      </div>
    );
  }
});
