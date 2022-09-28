import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Workout.css'

const Workout = () => {
    const [activities, setActivities] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToList = (activity) => {
        const newInfo = [...info, activity]
        setInfo(newInfo)
    }

    return (
        <div className='workout-container'>
            <div>
                <h1 className="heading">Pumped and Proud</h1>
                <div className="activity-container ">
                    {
                        activities.map(activity => <Activities
                            key={activity.id}
                            activity={activity}
                            handleAddToList={handleAddToList}
                        >
                        </Activities>)
                    }
                </div>
            </div>

            <div className="info-container">
                <h3>Faiaz Ar-Rafi</h3>
                <p>{info.length}</p>
            </div>
        </div>
    );
};

export default Workout;