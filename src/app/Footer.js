import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ color }) => {
  
  return (
    <div className="footer_sec" style={{ backgroundColor: color }}>
      <div className="row align-items-center footer-row">
        <div className="col-md-7 p-0">
          <h6>© 2021 Pomodoro Focus. All rights reserved</h6>
        </div>
        <div className="col-md-5 p-0">
          <ul className="d-flex justify-content-end">
            <li className="nav-item">
              <Link to="" className="nav-link mr-3">
                Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
