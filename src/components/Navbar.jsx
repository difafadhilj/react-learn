import React, { useState } from "react";
import { NavLink as RRNavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const logoutHandle = () => {
  let confirm = window.confirm("Anda yakin?");
  if (confirm) window.sessionStorage.clear();
  return "/login";
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
              <NavLink to="/about" tag={RRNavLink}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logoutHandle} to={logoutHandle} tag={RRNavLink}>
                Logout
              </NavLink>
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
