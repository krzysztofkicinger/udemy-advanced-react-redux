import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './core/store';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/auth/feature';
import Welcome from './components/welcome';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={App}>
              <IndexRoute component={Welcome} />
              <Route path="signin" component={SignIn} />
              <Route path="signout" component={SignOut} />
              <Route path="signup" component={SignUp} />
              <Route path="feature" component={Feature} />
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
