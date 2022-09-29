import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const { activity, handleAddToList } = props
    const { img, name, time } = activity
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-info">
                <h2>{name}</h2>
                <p>Time required: {time}</p>
            </div>
            <button onClick={() => handleAddToList(activity)} className='btn-list'>
                <p><b>Add To List</b></p></button>
        </div>
    );
};

export default Activities;