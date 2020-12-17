import React, { useEffect, useState } from 'react';
import './ImageDataLoad.css';
import ImageShow from '../ImageShow/ImageShow';
const ImageDataLoad = () => {

    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters?limit=20')
            .then(res => res.json())
            .then(data => setImageData(data))
    }, []);

    console.log(imageData);
    return (
        <div className="">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="ml-5 mt-5 text-secondary">Media Panel</h3>
                    <div>
                        {
                            imageData.map(imgData => <ImageShow imgData={imgData}></ImageShow>)
                        }
                    </div>
                </div>
                <div className="col-md-9 bg_color">
                    <div className="drag_section mt-5">
                        {/* <div className="drop_section">
                                Drop Img
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageDataLoad;