import React from 'react';
import { useDrag } from 'react-dnd';
import './MovableIteams.css';
import IteamType from '../Iteam/Iteam'

const MovableIteams = (props) => {
    const {img, name, char_id} = props.imgData;
    const [{ opacity }, drag] = useDrag({
        item: {char_id , IteamType },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    });
    return (
        <div className="col-md-12">
            <figure ref={drag} style={{opacity}} className="text-center">
                <img src={img} alt="" className="img-fluid imgStyle" />
            </figure>
        </div>
    );
};

export default MovableIteams;