import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route, Switch } from 'react-router'

import './App.scss';
import createRootReducer from './reducers/createRootReducer';
import HomePage from 'components/HomePage';
import ContactModal from 'components/ContactModal';

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactModal />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
