import React, { useEffect } from "react";
import "./App.css";
import Search from "./Search";
import Navbar from "./Navbar";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Navbar />
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
