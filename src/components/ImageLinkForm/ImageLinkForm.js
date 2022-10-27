import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className="f3">
            <p>
                {`This magic brain will detect faces in your pictures. Give it a try!`}
            </p>
            <div className="center pa4 br3 shadow-5 form">
                <div className="center">
                    <input className="f4 pa2 w-70 center" type="text" name="url" id="url" onChange={onInputChange} />
                    <button className="w-30 grow link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;