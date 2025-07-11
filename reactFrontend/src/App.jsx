import "./styles/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import sock_data from "./assets/sock.json";

import About from "./components/About";
import Search from "./components/Search";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Predictor from "./components/Predictor";
import Reports from "./components/Reports";
import NavBar from "./components/NavBar"

// Auth Components
import { AuthProvider } from "./hooks/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <NavBar />
          <main role="main" className="ml-sm-auto px-md-4 mt-2">
            <div className="container-fluid">
              <div className="row">
                <p>
                  Discover and Search for Fellow Employees using the Enterprise
                  Directory App!
                </p>

                <hr />

                <Routes>
                  <Route
                    path="/"
                    element={
                      <RequireAuth>
                        <Search />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/reports"
                    element={
                      <RequireAuth>
                        <Reports />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/profile/:id"
                    element={
                      <RequireAuth>
                        <Profile />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/predictor"
                    element={
                      <RequireAuth>
                        <Predictor />
                      </RequireAuth>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<LoginForm />} />
                </Routes>
              </div>
            </div>
          </main>
        </AuthProvider>
      </Router>
    </>
  );
}
export default App;
