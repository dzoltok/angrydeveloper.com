import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <p>By {this.props.author}</p>
      </div>
    )
  }
}

Post.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string
};
