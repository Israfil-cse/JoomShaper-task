import React from 'react';
import './ImageShow.css';

const ImageShow = ({ imgData }) => {
    console.log(imgData);
    return (
        <div className="col-md-12">
                <figure className="text-center">
                    <img src={imgData.img} alt="" className="img-fluid imgStyle" />
                </figure>
        </div>
    );
};

export default ImageShow;