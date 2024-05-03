import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Nav from "./Components/Nav";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
