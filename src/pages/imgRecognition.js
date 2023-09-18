import React, { useState, useEffect } from 'react';
import CustomFileInput from '../components/CustomFileInput';


import "@tensorflow/tfjs";
import * as mobileNet from "@tensorflow-models/mobilenet";
import LoadingSpinner from '../components/Spinner';

const ImageRecognition = () => {

  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await mobileNet.load();
      setModel(model);
    };
    loadModel();
  },[]);

  const onImageChange = async () => {
    
  };

  return (
    <>
      <div className='container'>
        <h1>Image Recognition</h1>
        {
          !model ? (<LoadingSpinner />) : (<CustomFileInput />)
        }  
      </div>
      
    </>

  );
};
  
export default ImageRecognition;