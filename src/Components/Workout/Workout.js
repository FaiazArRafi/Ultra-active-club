import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Activities from '../Activities/Activities';
import './Workout.css'
import Details from '../Details/Details';


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
                <div className='personal-data'>
                    <img src="https://i.pinimg.com/736x/07/ba/a9/07baa97b715c57f5706974ab026f9d59.jpg" alt="" />
                    <p><b>Faiaz Ar-Rafi</b></p>
                </div>
                <p><small>Chattagram, Bangladesh</small></p>
                <Details info={info}></Details>

            </div>
        </div>
    );
};

export default Workout;