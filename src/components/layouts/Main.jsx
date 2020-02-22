import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Main(props) {
  return (
    <div id="wrapper">
      <Navbar />
      <div className="container mt-5 mb-5">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Main;
