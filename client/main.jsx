import './assets/app.css';
import './assets/menu.css';
import './assets/posts.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './components/layout/App.jsx';
import PostView from './components/posts/View.jsx';
import AboutView from './components/static/AboutView.jsx';

const history = createBrowserHistory()

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PostView} />
      <Route path="posts" component={PostView} />
      <Route path="about" component={AboutView} />
    </Route>
  </Router>
), document.getElementById('root'));
