var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Angry Developer</span>
            <ul>
              <li><Link to="posts">Posts</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
