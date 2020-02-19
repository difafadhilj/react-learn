// import React from "react";
// import ReactDOM from "react-dom";
// import UserProfile from "./component/userProfile";

// class Index extends React.Component {

//     render () {
//         return (
//             <UserProfile/>
//         );
//     }

// }

// ReactDOM.render(<Index />, document.getElementById("reactElement"));
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";
import NotFound from "./component/NotFound";
import MyForm from "./component/MyForm";

const routing = (
  <Router>
    <div>
      <nav class="navbar navbar-expand-sm bg-success navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/form">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/form" component={MyForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("reactElement"));
