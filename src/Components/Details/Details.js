import React from 'react';
import './Details.css'

const Details = () => {
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
            {/* <p>{info.length}</p> */}
            <h2>Take a Break</h2>
            <div className="add-break">

                <p className="break-time">10s</p>
                <p className="break-time">20s</p>
                <p className="break-time">30s</p>
                <p className="break-time">40s</p>
                <p className="break-time">50s</p>
            </div>
            <h2>Workout Details</h2>
            <div className='workout-time'>
                <h4>Workout Time :</h4>
                <h4>1005 seconds</h4>
            </div>
            <div className='workout-time'>
                <h4>Break Time :</h4>
                <h4>100 seconds</h4>
            </div>
        </div>
    );
};

export default Details;