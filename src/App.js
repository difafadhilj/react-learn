import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import About from "./component/About";
import Notfound from "./component/NotFound";
import Main from "./layout/Main";

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
