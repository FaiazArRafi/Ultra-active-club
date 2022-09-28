import React, { useEffect, useState } from 'react';
import './Workout.css'

const Workout = () => {
    const [activity, setActivity] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='workout-container'>
            <div className="activity-container ">
                <div className="heading"><h1>Pumped and Proud</h1>
                </div>
                <h2>Activity</h2>
            </div>

            <div className="info-container">
                <h3>Faiaz Ar-Rafi</h3>
            </div>
        </div>
    );
};

export default Workout;