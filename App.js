import React from "react";
import useEffect from "react";
import auth from "./reducer";
import dispatch from "./reducer";
import "./App.css";
import "./Header.css";
// eslint-disable-next-line
import { useDispatch } from 'react-redux';
import Login from "./Login.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
// eslint-disable-next-line
import reducer from "./reducer";
function App() {
return (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/login">
          <Login /> 
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
useEffect(() => {
  // will only run once when the app component loads...
  
  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
export default App;