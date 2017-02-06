import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import itemList from 'ItemList';

// import TodoApp from 'TodoApp';
// import Login from 'Login';
// import firebase from 'app/firebase/';


// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next()
// };
//
// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if(firebase.auth().currentUser) {
//     replace('/todos');
//   }
//   next()
// };

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={itemList} />
    </Route>
  </Router>
);

// OLD ROUTE:  <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
