import React from 'react';

export default class AboutView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="about-view">
        <h1>About</h1>
        <p>An example of a stateless Ruby application, blah blah blah</p>
      </div>
    );
  }
}
