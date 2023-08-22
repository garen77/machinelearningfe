import React, { useRef, useState } from "react";

import './CustomFileInput.scss';

function CustomFileInput() {
    const inputref = useRef();
    const [file, setFile] = useState(null);

    const handleUploadClick = () =>{
        inputref.current?.click();
    };

    const handleFileChange = (e) => {
        if(!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);
    };

    return (
        <div>
            <div>Upload an image</div>
            <button onClick={handleUploadClick}>
                {file ? `${file.name}` : 'Click to select'}
            </button>
            <input 
                type="file"
                accept="image/png, image/jpeg"
                ref={inputref}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
        </div>
    );
}

export default CustomFileInput;