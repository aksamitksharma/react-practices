import React, { useEffect, useState } from "react";


const Hooks = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log("Called with Count");
    },[count]);

    useEffect(()=>{
        console.log("Called with Count2");
    },[count2]);
   
    return (
        <>
            <h1>Hooks</h1>
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <button onClick={()=>setCount2(count2+1)}>Count2</button>
        </>
    );
}

export default Hooks;
