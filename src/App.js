import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages';
import About from "./pages/about";
import ImageRecognition from "./pages/imgRecognition";
import './styles/appStyle.scss';

const App = () => {
  return (
  
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" exact element={ <Home /> }/>
        <Route path="/imageRecognition" element={ <ImageRecognition /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

