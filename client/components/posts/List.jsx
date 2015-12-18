var React = require('react');
var Post = require('./Post.jsx');

module.exports = React.createClass({
  render: function() {
    var posts = this.props.data.map(function(post) {
      return (
        <Post key={post.id} title={post.title} body={post.body} />
      );
    });

    return (
      <div className="posts-list">
        {posts}
      </div>
    );
  }
});
