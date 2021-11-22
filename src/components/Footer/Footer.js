import { Fragment } from "react";
// import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import { Link } from "react-router-dom";
import stylingclasses from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={stylingclasses.footer}>
      <div className="container">
        <h5>
          <Link to="">Questions? Contact us.</Link>
        </h5>
        <div className="row">
          <div className="block col-md-3 col-sm-6 col-xs-12">
            <Link to="">FAQ</Link>
            <br />
            <Link to="">Investor Relations</Link>
            <br />
            <Link to="">Privacy</Link>
            <br />
            <Link to="">Speed Test</Link>
            <br />
            <br />
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Arabic
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="#">
                  Deutsch
                </Link>
              </div>
            </div>
          </div>
          <div className="block col-md-3 col-sm-6 col-xs-12">
            <Link to="">Help Center</Link>
            <br />
            <Link to="">Jobs</Link>
            <br />
            <Link to="">Cookie Preferences</Link>
            <br />
            <Link to="">Legal Notices</Link>
            <br />
          </div>
          <div className="block col-md-3 col-sm-6 col-xs-12">
            <Link to="">Account</Link>
            <br />
            <Link to="">Ways to Watch</Link>
            <br />
            <Link to="">Corporate Information</Link>
            <br />
            <Link to="">Netflix Originals</Link>
            <br />
          </div>
          <div className="block col-md-3 col-sm-6 col-xs-12">
            <Link to="">Media Center</Link>
            <br />
            <Link to="">Terms of Use</Link>
            <br />
            <Link to="">Contact Us</Link>
            <br />
          </div>
          <div className="row" style={{ textAlign: "center" }}>
            <div
              className="container"
              className={stylingclasses.footercopywrites}
            >
              <h6 className={stylingclasses.designer}>
                this website designed by @ <b>el kaakouz</b>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
