import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const NavBar = () => {
  const auth = useAuth();
  const name = auth?.name;

  return (
    <nav
      className="navbar navbar-expand-lg nav-fill"
      style={{
        background: "rgb(224, 23, 25)",
        borderRadius: 10,
      }}
    >
      <div
        className="container-fluid"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ display: "flex" }}>
          <h1
            className="navbar-brand"
            href="#"
            style={{
              color: "white",
            }}
          >
            Enterprise Directory
          </h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "white",
                  }}
                  to="/"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "white",
                  }}
                  to="/predictor"
                >
                  Salary Predictor
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "white",
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "white",
                  }}
                  to="/reports"
                >
                  Direct Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {name ? (
          <p className="mt-3" style={{ color: "white" }}>
            Logged in: {name}
          </p>
        ) : (
          <p className="mt-3" style={{ color: "white" }}>
            Not logged in{name}
          </p>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
