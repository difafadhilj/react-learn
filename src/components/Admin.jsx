import React, { Component } from "react";

class Admin extends Component {
  state = {};
  render() {
    if (window.sessionStorage.getItem("role") !== "ADMIN")
      return <h1>Required admin previlleges</h1>;
    return <h1>Welcome to admin Page</h1>;
  }
}

export default Admin;
