import React, { Fragment, useContext } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Login/LoginForm";
import MainNavigation from "./components/Nav/MainNavigation";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import "./App.css";
import Landing from "./components/Landing/Landing";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import Nav from "./components/Nav/Nav";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
      <div className="page-container">
        <div className="content-wrap">
          {/* <MainNavigation/> */}
          <Nav />
          <Switch>
            {!authCtx.isLoggedIn && (
              <Route path="/" element={<Landing />} exact />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/homepage" element={<HomePage />} />
            )}
            {!authCtx.isLoggedIn && (
              <Route path="/login" element={<LoginForm />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/profile" element={<Profile />} />
            )}
            {authCtx.isLoggedIn && (
              <Route path="/logout" element={<Logout />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
