import React from "react";
import logoIcon from "../assets/Images/logo-icon.png";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ color }) => {

  return (
    <div>
      <header
        className="header_sec"
        style={{ backgroundColor: color }}
        id="navbar_top"
      >
        <div className="container">
          <nav className="navbar navbar-expand-md p-0">
            <Link className="navbar-brand" to="">
              <img src={logoIcon} alt="logoIcon" className="mr-2" />
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon">
                <strong>x</strong>
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav d-sm-none">
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{color}}>
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{color}}>
                    Settings
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="#" className="nav-link" style={{color}}>
                    Statistics <span>PRO</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" style={{color}}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav d-none d-sm-flex">
                <li className="nav-item active">
                  <Link className="nav-link" to="#">
                    Statistics <span>PRO</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
