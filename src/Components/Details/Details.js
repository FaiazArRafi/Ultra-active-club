import React, { useState } from 'react';
import './Details.css'

const Details = (props) => {
    const { info } = props
    // console.log(props)
    // const [info] = props
    const [brTime, setbrTime] = useState([])
    console.log(brTime)

    let total = 0;
    for (const activity of info) {
        total = total + parseFloat(activity.time);
    }

    const handleBreakTime = () => {
        const btime =
            localStorage.setItem('Break time',)
    }

    return (
        <div>
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
            <h2>Take a Break</h2>
            <div className="add-break">
                <button onClick={handleBreakTime} value='1' className="break-time">10s</button>
                <button onClick={handleBreakTime} className="break-time">20s</button>
                <button onClick={handleBreakTime} className="break-time">30s</button>
                <button onClick={handleBreakTime} className="break-time">40s</button>
                <button onClick={handleBreakTime} className="break-time">50s</button>
            </div>

            <h2>Workout Details</h2>
            <div className='workout-time'>
                <h4>Workout Time :</h4>
                <h4>{total} seconds</h4>
            </div>
            <div className='workout-time'>
                <h4>Break Time :</h4>
                <h4>100 seconds</h4>
            </div>
        </div>
    );
};

export default Details;