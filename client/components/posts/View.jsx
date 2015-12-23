import React from 'react';

import PostList from './List.jsx';

export default class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this._readPostsFromAPI = this._readPostsFromAPI.bind(this);
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

  render() {
    return (
      <div className="posts-view">
        <PostList data={this.state.data} />
      </div>
    );
  }
}
