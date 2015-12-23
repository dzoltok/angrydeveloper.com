import React from 'react';

import Post from './Post.jsx';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}

PostList.propTypes = {
  data: React.PropTypes.array
};
