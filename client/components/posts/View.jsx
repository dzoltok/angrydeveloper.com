import React from 'react';

import PostList from './List.jsx';
import PostForm from './Form.jsx';

export default class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this._readPostsFromAPI = this._readPostsFromAPI.bind(this);
    this._writePostToAPI = this._writePostToAPI.bind(this);
  }

  componentDidMount() {
    this._readPostsFromAPI()
  }

  _readPostsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/posts', function(posts) {
      this.setState({
        data: posts
      });
    }.bind(this));
  }

  _writePostToAPI(data) {
    this.props.writeToAPI('post', this.props.origin + '/posts', data, function(post) {
      var posts = this.state.data;
      posts.unshift(post);
      this.setState({
        data: posts
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="posts-view">
        <PostForm writePostToAPI={this._writePostToAPI} signedIn={this.props.signedIn} />
        <PostList data={this.state.data} />
      </div>
    );
  }
}
