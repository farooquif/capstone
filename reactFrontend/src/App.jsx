import React, { useState, useEffect } from "react";
import "./styles/App.css"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import sock_data from "./assets/sock.json";

import About from "./components/About";
import Search from "./components/Search";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Predictor from "./components/Predictor";
import Reports from "./components/Reports";

// Auth Components
import { AuthProvider } from "./hooks/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h1 className="navbar-brand" href="#">
              Enterprise Directory
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bstoggle="collapse"
              data-bs-target="#navbarSupportedContent"
              ariacontrols="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/predictor">
                    Salary Predictor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reports">
                    Direct Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="container-fluid">
            <div className="row">
              <p>
                Discover and Search for Fellow Employees using the Enterprise
                Directory App!
              </p>

              <hr />

              <AuthProvider>
                <Routes>
                  <Route path="/" element={<RequireAuth><Search /></RequireAuth>} />
                  <Route path="/reports" element={<RequireAuth><Reports /></RequireAuth>} />
                  <Route path="/profile/:id" element={<RequireAuth><Profile /></RequireAuth>} />
                  <Route path="/predictor" element={<RequireAuth><Predictor /></RequireAuth>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<LoginForm />} />
                </Routes>
              </AuthProvider>

            </div>
          </div>
        </main>
      </Router>
    </>
  );
}
export default App;
