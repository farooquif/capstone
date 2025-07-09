import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/planet/:id" element={<Planet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
