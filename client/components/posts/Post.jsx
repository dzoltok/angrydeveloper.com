var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
});
