import React, { useState } from "react";
import { NavLink as RRNavLink, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();

  const logout = () => {
    let confirm = window.confirm("Anda yakin?");
    if (confirm) {
      window.sessionStorage.clear();
      history.push("/login");
    }
  };

  if (
    window.sessionStorage.getItem("token") &&
    window.sessionStorage.getItem("role") === "USER"
  )
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/"}>BookReact</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getOrder" tag={RRNavLink}>
                My Order
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  else if (
    window.sessionStorage.getItem("token") &&
    window.sessionStorage.getItem("role") === "ADMIN"
  )
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href={"/admin"}>BookReact</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/admin" tag={RRNavLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/books" tag={RRNavLink}>
                Buku
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/user" tag={RRNavLink}>
                User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/admin/order" tag={RRNavLink}>
                Order
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href={"/about"}>BookReact</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/login" tag={RRNavLink}>
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/register" tag={RRNavLink}>
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" tag={RRNavLink}>
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
