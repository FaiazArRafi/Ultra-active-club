import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
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
                <h1 className="heading">
                    <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Pumped and Proud</h1>
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
                <div className='personal-info'>
                    <div>
                        <h2 >63 <small>kg</small></h2>
                        <small>Weight</small>
                    </div>
                    <div >
                        <h2>5.7<small>ft</small></h2>
                        <small>Height</small>
                    </div>
                    <div >
                        <h2 >26 <small>yrs</small></h2>
                        <small>Age</small>
                    </div>
                </div>
                <p>{info.length}</p>
                <div className="add-break">
                    <p className="break-time">10s</p>
                    <p className="break-time">20s</p>
                    <p className="break-time">30s</p>
                    <p className="break-time">40s</p>
                    <p className="break-time">50s</p>
                </div>
            </div>
        </div>
    );
};

export default Workout;