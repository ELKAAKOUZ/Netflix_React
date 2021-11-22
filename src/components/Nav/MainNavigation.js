import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import * as Bootstrap from "react-bootstrap";
import logo from "./logo.png";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  //logout

  return (
    <Bootstrap.Navbar bg="dark" variant="dark" expand="xl">
      <Bootstrap.Container fluid>
        <Bootstrap.Navbar.Toggle aria-controls="navbarScroll" />
        <Bootstrap.Navbar.Collapse id="navbarScroll">
          <Bootstrap.Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {authCtx.isLoggedIn && (
              <Bootstrap.Nav.Link>
                <NavLink to="" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </Bootstrap.Nav.Link>
            )}
            {authCtx.isLoggedIn && (
              <Bootstrap.Nav.Link>
                <NavLink to="/profile">Profile</NavLink>
              </Bootstrap.Nav.Link>
            )}
            {authCtx.isLoggedIn ? (
              ""
            ) : (
              <Bootstrap.Nav.Link>
                <NavLink className={classes.loginNav} to="/login">
                  Login
                </NavLink>
              </Bootstrap.Nav.Link>
            )}
          </Bootstrap.Nav>
        </Bootstrap.Navbar.Collapse>
        <img className={classes.logo} src={logo} />
        {/* <Bootstrap.Navbar.Brand href="#">Navbar scroll</Bootstrap.Navbar.Brand> */}
      </Bootstrap.Container>
    </Bootstrap.Navbar>
    // <Navbar bg='dark' variant="dark">
    //     <Navbar.Brand>
    //         <img className={classes.logo} src={logo} />
    //         {/* <p className={classes.logoparg}>logo</p> */}
    //     </Navbar.Brand>
    // </Navbar>
  );
};
export default MainNavigation;
