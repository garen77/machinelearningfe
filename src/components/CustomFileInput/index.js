import React, { useRef, useState } from "react";

import './CustomFileInput.scss';

function CustomFileInput() {
    const inputRef = useRef(null);
    const anchorRef = useRef();
    const [fileStatus, setFileStatus] = useState({});

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

    return (
        <div className="text-align-center">
            <div>Upload an image</div>
            <div style={{display: 'inline-flex'}}>
                <button onClick={handleUploadClick}>
                    {fileStatus && fileStatus.name ? `${fileStatus.name}` : 'Click to select'}
                </button>
                <img src={fileStatus.file}></img>
            </div>

            <input 
                type="file"
                accept="image/png, image/jpeg"
                ref={inputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
            <a id="iddownload" href="#" ref={anchorRef} />
        </div>
    );
}

export default CustomFileInput;