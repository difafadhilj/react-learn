import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import Notfound from "./components/NotFound";
import Main from "./components/layouts/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import getOrder from "./components/GetOrderById";
// ADMIN
import OrderDetails from "./components/OrderDetails";
import Order from "./components/Order";
import User from "./components/User";
import InputBook from "./components/InputBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Admin from "./components/Admin.jsx";
import AdminBooks from "./components/adminBooks";

const App = () => {
  return (
    <Router>
      <Main>
        <Switch>
          {/* ADMIN */}
          <Route path="/admin/DeleteBook/:id" component={DeleteBook} />
          <Route path="/admin/EditBook/:id" component={EditBook} />
          <Route path="/admin/inputBook" component={InputBook} />
          <Route path="/admin/books" component={AdminBooks} />
          <Route path="/admin/user" component={User} />
          <Route path="/admin/order" component={Order} />
          <Route path="/admin/OrderDetails/:id" component={OrderDetails} />
          <Route path="/admin" component={Admin} />
          {/* USER */}
          <Route exact path="/" component={Home} />
          <Route path="/books/:id" component={Books} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/getOrder" component={getOrder} />
          <Route path="/register" component={Register} />
          {/* NOTFOUND */}
          <Route component={Notfound} />
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
