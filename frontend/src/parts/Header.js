import React from "react";
import Button from "elements/Button";
import BrandIcon from "./IconText";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { Fade } from "react-awesome-reveal";

export default function Header(props) {
  const location = useLocation();

  const { logout } = useContext(AuthContext);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-ligth">
              <Button className="brand-text-icon mx-auto" href="/" type="link">
                Cozy<span className="text-gray-900">Havens</span>
              </Button>
            </div>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon className="brand" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#notYetImplemented" // offcanvas not yet activated, change this same as collapse id later when offcanvas activated
              aria-controls="notYetImplemented"// offcanvas not yet activated, change this same as collapse id later when offcanvas activated
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Agents
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <button className="nav-link" type="link" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
