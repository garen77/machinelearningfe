import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages';
import About from "./pages/about";
import ImageRecognition from "./pages/imgRecognition";
import './styles/appStyle.scss';

import "@tensorflow/tfjs";
import * as mobileNet from "@tensorflow-models/mobilenet";
import { mod } from "@tensorflow/tfjs";
import LoadingSpinner from "./components/Spinner";

const App = () => {

  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await mobileNet.load();
      setModel(model);
    };
    loadModel();
  },[]);

  return (
  
    <>
    {
      !model ? (
          <div className='container'>
            <LoadingSpinner message={"Loading mobilenet model..."} />
          </div>
        ) 
      : (
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" exact element={ <Home /> }/>
              <Route path="/imageRecognition" element={ <ImageRecognition /> } />
              <Route path="/about" element={ <About /> } />
            </Routes>
          </BrowserRouter>
      )
    }
    </>

  );
};

export default App;

