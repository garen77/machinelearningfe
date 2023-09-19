import React from 'react';
import ImageRecognitionComponent from '../components/ImageRecognitionComponent';


const ImageRecognition = (props) => {



  const onImageChange = async () => {
    
  };

  return (
    <>
      <div className='container'>
        <h1>Image Recognition</h1>
        <ImageRecognitionComponent model={props.model}/>
      </div>
      
    </>

  );
};
  
export default ImageRecognition;