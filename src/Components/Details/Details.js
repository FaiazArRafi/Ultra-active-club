import React from 'react';
import './Details.css'

const Details = (props) => {
    const { info } = props

    let total = 0;
    for (const activity of info) {
        total = total + parseFloat(activity.time);
    }


    const handleBreakTimeTen = () => {
        localStorage.setItem('break-time', JSON.stringify('10'));
        return 10
    }
    const handleBreakTimeTwen = () => {
        localStorage.setItem('break-time', JSON.stringify('20'));
    }
    const handleBreakTimeThir = () => {
        localStorage.setItem('break-time', JSON.stringify('30'));
    }
    const handleBreakTimeFour = () => {
        localStorage.setItem('break-time', JSON.stringify('40'));
    }
    const handleBreakTimeFifty = () => {
        localStorage.setItem('break-time', JSON.stringify('50'));
    }

    let breakTime;
    const storedData = localStorage.getItem('break-time');
    if (storedData) {
        breakTime = JSON.parse(storedData);
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

            <h2>Take a Break</h2>
            <div className="add-break">
                <button onClick={handleBreakTimeTen} className="break-time">10s</button>
                <button onClick={handleBreakTimeTwen} className="break-time">20s</button>
                <button onClick={handleBreakTimeThir} className="break-time">30s</button>
                <button onClick={handleBreakTimeFour} className="break-time">40s</button>
                <button onClick={handleBreakTimeFifty} className="break-time">50s</button>
            </div>

            <h2>Workout Details</h2>
            <div className='workout-time'>
                <h4>Workout Time :</h4>
                <h4>{total} seconds</h4>
            </div>
            <div className='workout-time'>
                <h4>Break Time :</h4>
                <h4>{breakTime}  seconds</h4>
            </div>
            <button className='btn-completed'><b>Workout finished !!!</b></button>

        </div>
    );
};

export default Details;