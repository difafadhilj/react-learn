import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import InputBook from "./components/InputBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Notfound from "./components/NotFound";
import Main from "./components/layouts/Main";
import Login from "./components/Login";
import Register from "./components/Register";

const App = props => {
  return (
    <Router>
      <Switch>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books/:id" component={Books} />
            <Route path="/DeleteBook/:id" component={DeleteBook} />
            <Route path="/EditBook/:id" component={EditBook} />
            <Route path="/inputBook" component={InputBook} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Notfound} />
          </Switch>
        </Main>
      </Switch>
    </Router>
  );
};

export default App;
