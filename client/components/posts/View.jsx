var React = require('react');
var PostsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.setState({
      data: [{id: 2, title: 'Front-end defined post', body: 'Not actually real'}]
    });
  },
  render: function() {
    return (
      <div className="posts-view">
        <PostsList data={this.state.data} />
      </div>
    )
  }
});