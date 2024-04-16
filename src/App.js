import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/PageComponent/Home";
import About from "./components/PageComponent/About";
import Contact from "./components/PageComponent/Contact";
import TaskPage from "./components/PageComponent/TaskPage";

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/taskpage" element={<TaskPage/>} />
    </Routes>
    </div>
  );
}

export default App;
