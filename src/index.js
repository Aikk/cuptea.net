import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Blog from './components/Blog';
import Github from './components/Github';
import Weibo from './components/Weibo';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={App} />
    </Route>
    <Route path='/blog' component={Blog} />
    <Route path='/github' component={Github} />
    <Route path='/weibo' component={Weibo} />
  </Router>
), document.getElementById('app'));
