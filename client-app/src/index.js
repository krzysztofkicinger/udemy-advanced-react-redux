import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import store from './core/store';

import App from './components/app';
import SignIn from './components/auth/signin';
import Feature from './components/auth/feature';

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <Route path="signin" component={SignIn} />
              <Route path="feature" component={Feature} />
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
