import React, { Fragment } from 'react'
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Student from "./Components/Student";
export default function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

