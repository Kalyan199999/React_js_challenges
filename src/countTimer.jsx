import './countTimer.css'
import { useEffect, useState } from "react";

function CounterTimer() {
    
    const [hours , setHours] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [seconds , setSeconds] = useState(0);
    let [timerId , setTimerId] = useState(0);

    const [isStarted , setStarted] = useState(false);

    useEffect(()=>{

        if(isStarted)
        {
            timerId = setTimeout(() => {

                setSeconds(s=>s-1);
    
                if(seconds === 0)
                {
                    setMinutes(m=>m-1);
                    setSeconds(59);
                }
    
                if(minutes === 59)
                {
                    if(hours >=1)
                    {
                        setHours(h=>h-1);
                    }
                        
                    setMinutes(59);
                    
                    setSeconds(59);
    
                }
    
                if(hours === 0 && minutes === 0 && seconds === 0)
                {
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                }
                
            }, 1000);
    
            return ()=>clearTimeout(timerId);
        }

    },[hours , minutes , seconds,timerId ,isStarted])

    function started() {
     setStarted(true);   
    }

    function reStart() {
        setStarted(false);  
        clearTimeout(timerId);
    }

    function Pause() {
        setStarted(false);  
    }

    return(
        <div className="parent">

            {
                !isStarted && 
                <div className="child">
                    <input type="text"  value={hours} onChange={(e)=>{setHours(e.target.value)}}/>
    
                    <input type="text"   value={minutes} onChange={(e)=>{setMinutes(e.target.value)}}/>

                    <input type="text" value={seconds} onChange={(e)=>{setSeconds(e.target.value)}}/>

                    <button className="start" onClick={started}>start</button>
                </div>
            }

           {
               isStarted  &&   

               <div className="show-timer">
                    <div className="timer">
                        <h3>{hours <10 ? "0"+hours : hours}:</h3>
                        <h3>{minutes <10 ? "0"+minutes : minutes}:</h3>
                        <h3>{seconds <10 ? "0"+seconds : seconds}</h3>
                    </div>
     
                    <div className="buttons"> 
                    <button className="pause" onClick={Pause}>Pause</button>
                    <button className="re-start" onClick={reStart}>Re-start</button>
                    </div>

                </div>

           }


        </div>
    )
}

export default CounterTimer;