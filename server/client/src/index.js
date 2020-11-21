import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './components/App';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

// const socket = io();
const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={store(reducers)}>
<Router>
  <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Chat" component={App} />
      </Switch>
  </Fragment>
</Router>
</Provider>,document.getElementById("root")
);
