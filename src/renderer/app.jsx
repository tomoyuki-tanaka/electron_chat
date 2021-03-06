import { Route, Router, hashHistory } from 'react-router';
import { render } from "react-dom";
import React from "react";
import firebase from 'firebase/firebase-browser';

import Login from './Login';
import Room from './Room';
import Rooms from './Rooms';
import Signup from './Signup';
import config from './config'

const appRouting = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomId" component={Room} />
      </Route>
    </Route>
  </Router>
);

if(!location.hash.length){
  location.hash = "#/login";
}

firebase.initializeApp(config);

render(
  appRouting,
  document.getElementById("app")
);
