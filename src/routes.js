import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Notfound from "./components/NotFound";
import Main from "./layouts/Main";

const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route component={Notfound} />
          </Switch>
        </Main>
      </Switch>
    </Router>
  );
};

export default App;
