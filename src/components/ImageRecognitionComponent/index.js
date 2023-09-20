import React, { useRef, useState } from "react";
import ReactModal from 'react-modal';
import './ImageRecognitionComponent.scss';

function ImageRecognitionComponent(props) {
    const inputRef = useRef(null);
    const anchorRef = useRef();
    const canvasRef = useRef(null);
    const [fileStatus, setFileStatus] = useState({});
    const [predictions, setPredictions] = useState([]);
    const [isPopupPredOpen, setPopupPredOpen] = useState(false);

    const handleUploadClick = () =>{
        inputRef.current?.click();
    };

    const handleFileChange = (e) => {
        if(!e.target.files) {
            return;
        }
        
        var fieObj = URL.createObjectURL(e.target.files[0]);
        var fileName = e.target.files[0].name;
        setFileStatus({
            file : fieObj,
            name: fileName
        });

        var a = document.getElementById('iddownload');
        if(a) {
            a.href = fieObj;
            a.download = fileName;
            anchorRef.current?.click();
        }

       
    };

    const renderPopupPred = () => (
        <div>
            <ul>
                {
                    predictions.map(el => (
                        <li>{el.className}</li>
                    ))
                }
            </ul>
            <button onClick={() => setPopupPredOpen(false)}></button>
        </div>
    );

    const drawImageOnCanvas = (image, canvas, ctx) => {
        const naturalWidth = image.naturalWidth;
        const naturalHeight = image.naturalHeight;
        canvas.width = image.width;
        canvas.height = image.height;
    
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const isLandscape = naturalWidth > naturalHeight;
        ctx.drawImage(
          image,
          isLandscape ? (naturalWidth - naturalHeight) / 2 : 0,
          isLandscape ? 0 : (naturalHeight - naturalWidth) / 2,
          isLandscape ? naturalHeight : naturalWidth,
          isLandscape ? naturalHeight : naturalWidth,
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
      };
    
      const onImageChange = async ({ target }) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        drawImageOnCanvas(target, canvas, ctx);
    
        const predictions = await props.model.classify(canvas, 5);
        console.log(predictions)
        setPredictions(predictions);
        setPopupPredOpen(true);
      };

    const renderPreview = () => (
        <canvas className="classified-image" ref={canvasRef}>
            <img alt="preview" onLoad={onImageChange} src={fileStatus.file} />
        </canvas>
    );

    return (
        <>
            <div className="text-align-center">
                <div>Upload an image</div>
                <div style={{display: 'inline-flex'}}>
                    <button onClick={handleUploadClick}>
                        {fileStatus && fileStatus.name ? `${fileStatus.name}` : 'Click to select'}
                    </button>
                </div>

                <input 
                    type="file"
                    accept="image/png, image/jpeg"
                    ref={inputRef}
                    onChange={handleFileChange}
                    style={{display: 'none'}}
                />            
            </div>
            {fileStatus && fileStatus.file && renderPreview()}
            {predictions && predictions.length > 0 && renderPopupPred()}
        </>
    );
}

export default ImageRecognitionComponent;