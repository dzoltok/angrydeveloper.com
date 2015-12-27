import React from 'react';
import ReactDOM from 'react-dom';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    var title = this.refs.title.value.trim();
    var body = this.refs.body.value.trim();
    if (!title || !body) {
      return;
    }
    if (this.props.signedIn) {
      this.props.writePostToAPI(JSON.stringify({post: {title: title, body: body}}));
      this.refs.title.value = '';
      this.refs.title.blur();
      this.refs.body.value = '';
      this.refs.body.blur();
    } else {
      alert('Please sign in to post!');
    }
  }

  render() {
    return (
      <form className="posts-form pure-form" onSubmit={this._handleSubmit}>
        <input type="text" placeholder="Title" ref="title" />
        <textarea placeholder="Body..." ref="body" />
        <button type="submit" className="pure-button pure-button-primary">Post</button>
      </form>
    );
  }
}

PostForm.propTypes = {
  signedIn: React.PropTypes.bool,
  writePostToAPI: React.PropTypes.func
};
