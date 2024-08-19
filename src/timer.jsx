import { useEffect, useState } from 'react';
import './timer.css';

function Timer() {
    
    const [seconds , setSeconds] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [hours , setHours] = useState(0);
    
    let timerid ;

    useEffect(()=>{
        timerid = setInterval(() => {
            setSeconds(s=>s+1);

            if(seconds === 59)
            {
                setMinutes(m=>m+1);
                setSeconds(0);
            }

            if(minutes === 60)
            {
                setHours(h=>h+1);
                setMinutes(0);
                setSeconds(0);
            }

        }, 1000);

        return ()=>clearInterval(timerid);
    } , [seconds , minutes,hours]);
    
    function reStart()
    {
        setSeconds(0);
        setMinutes(0);
    }

    function stop()
    {
        clearInterval(timerid)
    }

    return(
        <>
            <div className='timer'>

                <div className='card'>
                    <div className='time'>
                        <p>{hours < 10 ? "0"+hours : hours}:</p>
                        <p>{minutes < 10 ? "0"+minutes : minutes}:</p>
                        <p>{seconds < 10 ? "0"+seconds : seconds}</p>
                    </div>
                    <div className='btn'>
                        
                        <button type="button" className='re-start' onClick={(e)=>reStart()}>start</button>
                        
                        <button type="button" className='stop' onClick={(e)=>stop()}>stop</button>
                    
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Timer;