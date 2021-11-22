import React, { useEffect, useState, useContext } from "react";
import classes from "./Nav.module.css";
import logo from "./logo.png";

import { Link } from "react-router-dom";
import * as bootstrap from "react-bootstrap";
import AuthContext from "../../store/auth-context";
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const authCtx = useContext(AuthContext);

  const pathname = window.location.pathname;
  console.log(pathname);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <div className={scrolled ? classes.navScrolled : classes.nav}>
      <img className={classes.netflixlogo} src={logo} alt="netflix logo" />
      <div>
        <bootstrap.Dropdown as={bootstrap.ButtonGroup}>
          <bootstrap.Button variant="">
            <img src="https://bit.ly/3qMQ551" alt="user logo" />
          </bootstrap.Button>

          <bootstrap.Dropdown.Toggle
            variant="dark"
            split
            id="dropdown-split-basic"
            class=" btn btn-dark"
          />

          <bootstrap.Dropdown.Menu variant="dark">
            {!authCtx.isLoggedIn && (
              <bootstrap.Dropdown.Item>
                {pathname !== "/" && (
                  <Link className={classes.links} to="/">
                    Landing Page
                  </Link>
                )}
              </bootstrap.Dropdown.Item>
            )}
            {authCtx.isLoggedIn && (
              <bootstrap.Dropdown.Item>
                {pathname !== "/homepage" && (
                  <Link className={classes.links} to="/homepage">
                    Homepage
                  </Link>
                )}
              </bootstrap.Dropdown.Item>
            )}
            {authCtx.isLoggedIn && (
              <bootstrap.Dropdown.Item>
                {pathname !== "/profile" && (
                  <Link className={classes.links} to="/profile">
                    Profile
                  </Link>
                )}
              </bootstrap.Dropdown.Item>
            )}
            <hr />
            {authCtx.isLoggedIn && (
              <bootstrap.Dropdown.Item>
                <Link
                  className={classes.links}
                  onClick={authCtx.logout}
                  to="/login"
                >
                  Logout
                </Link>
              </bootstrap.Dropdown.Item>
            )}
            {!authCtx.isLoggedIn && (
              <bootstrap.Dropdown.Item>
                {pathname !== "/login" && (
                  <Link className={classes.links} to="/login">
                    Login
                  </Link>
                )}
              </bootstrap.Dropdown.Item>
            )}
          </bootstrap.Dropdown.Menu>
        </bootstrap.Dropdown>
      </div>
    </div>
  );
};

export default Nav;
