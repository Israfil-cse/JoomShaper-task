import React from 'react';
import { useDrop } from 'react-dnd';
import './DragAndDrop.css';

const DragAndDrop = ({ accept, lastDroppedItem, onDrop, }) => {
    // const [{ isOver, canDrop }, drop] = useDrop({
    //     accept,
    //     drop: onDrop,
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver(),
    //         canDrop: monitor.canDrop(),
    //     }),
    // });
    // const isActive = isOver && canDrop;
    // let backgroundColor = '#222';
    // if (isActive) {
    //     backgroundColor = 'darkgreen';
    // }
    // else if (canDrop) {
    //     backgroundColor = 'darkkhaki';
    // }
    return (
        <div className="drag_section">

            {/* <div ref={drop} >
                {isActive
                    ? 'Release to drop'
                    : `This dustbin accepts: ${accept.join(', ')}`}

                {lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)}
            </div> */}

        </div>

    );
};

export default DragAndDrop;