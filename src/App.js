import { Fragment } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Store from "./Components/Store";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
