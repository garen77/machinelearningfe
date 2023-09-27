import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from "./pages/about";
import ImageRecognition from "./pages/imgRecognition";
import './styles/appStyle.scss';

import "@tensorflow/tfjs";
import * as mobileNet from "@tensorflow-models/mobilenet";
import LoadingSpinner from "./components/Spinner";
import Menu from "./components/Menu/Menu";

const App = () => {

  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await mobileNet.load({
        version: 2,
        alpha: 1
      });
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
          
          <Menu />
            <Routes>
              <Route path="/" exact element={ <Home /> }/>
              <Route path="/imageRecognition" element={ <ImageRecognition model={model} /> } />
              <Route path="/about" element={ <About /> } />
            </Routes>
          </BrowserRouter>
      )
    }
    </>

  );
};

export default App;

