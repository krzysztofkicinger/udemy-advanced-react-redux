import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <Route path="signin" component={SignIn} />
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
