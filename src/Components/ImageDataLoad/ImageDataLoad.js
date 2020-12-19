import React, { useEffect, useState } from 'react';
import './ImageDataLoad.css';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import MovableIteams from '../MovableIteams/MovableIteams';

const ImageDataLoad = () => {

    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters?limit=20')
            .then(res => res.json())
            .then(data => setImageData(data));
    }, []);

    // dnd section 

    // const handleDrop = useCallback((index, item) => {
    //     const { name } = item;
    //     setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
    //     setDustbins(update(dustbins, {
    //         [index]: {
    //             lastDroppedItem: {
    //                 $set: item,
    //             },
    //         },
    //     }));
    // }, [droppedBoxNames, dustbins]);
    

    return (
        <div className="row">
            <div className="col-md-3" >
                <h3 className="ml-5 mt-5 text-secondary">Media Panel</h3>
                <div className="mt-5">
                    {
                        imageData.map(imgData => <MovableIteams imgData={imgData}></MovableIteams>)
                    }
                </div>
            </div>
            <div className="col-md-9 bg_color">
                <div className="mt-5">
                    <DragAndDrop></DragAndDrop>
                </div>
            </div>
        </div>
    );
};

export default ImageDataLoad;