import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import store from './core/store';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/auth/feature';

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <Route path="signin" component={SignIn} />
              <Route path="signout" component={SignOut} />
              <Route path="signup" component={SignUp} />
              <Route path="feature" component={Feature} />
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
