import React, { useEffect, useState } from 'react'
import { TimerProps } from './timer.types'
import moment from 'moment';
import './timer.css'

const Timer = ({initialSeconds} : TimerProps) => {
    const [seconds, setSeconds] = useState(initialSeconds < 0 ? 0 : initialSeconds);
    const [isTimeOver, setIsTimeOver] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
            if (prevSeconds > 0) {
                return prevSeconds - 1;
            } else {
                clearInterval(interval);
                setIsTimeOver(true)
                return 0;
            }
            });
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);
  
    const formatTime = (totalSeconds: number) => {
        const duration = moment.utc(totalSeconds*1000)
        return duration.format("HH:mm:ss");
    };
  
    return (
        <div className={`timer__container timer__container__${isTimeOver ? 'over' : 'progress'}`}>
            <div className='timer__text'>
                {formatTime(seconds)}
            </div>
        </div>
    );
}

export default Timer