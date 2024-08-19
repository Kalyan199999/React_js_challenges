// import { useMemo } from "react";
import { useEffect, useState  } from "react"


function Sample() {

    const [count , setCount] = useState(0);

    const [ren , setRen] = useState(0);

    useEffect(()=>{setRen(ren=>ren+1)} , [count]);

    // useMemo(()=>{setRen(ren=>ren+1)} , [count]);

    // const [name,updateName] = useState("pavan");

    // let perulu = ["kalyan","pavan","uma","kiran"];

    // function handleClick() {

    //     setCount(count=> count+1);
    //     setCount(count=> count+1);
    //     setCount(count=> count+1);
        
    //     console.log(count);

    // }

    // function changeName() {
    //     let idx = Math.floor(Math.random()*perulu.length);

    //     updateName(perulu[idx].toLocaleUpperCase())
    //     console.log(idx);
        
    // }
    
    return(
        <>
          {/* <h1>{count}</h1>
          <h1>Hello {name}!</h1>
          <button onClick={handleClick}>update</button>
          <button onClick={changeName}>changeName</button> */}

          <button onClick={()=>{setCount(count=> count-1);}}>-1</button>
          <h3>Count:{count}</h3>
          <button onClick={()=>{setCount(count=> count+1);}}>+1</button>
          <h1>Renders:{ren}</h1>
        
        </>
    )
}

export default Sample;