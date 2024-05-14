import { useMemo, useState } from "react";

const UseMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(10);

    const multiCount = useMemo(()=>{
        console.log("Multi Count Function");
    },[count2]);


    return(
        <>
            <h1>Test useMemo Hook</h1>
            <h1>Count 1: {count1}</h1>
            <h1>Count 2: {count2}</h1>
            <h1>Multi Count : {multiCount}</h1>
            <button onClick={()=>setCount1(count1+1)}>Click 1</button>
            <button onClick={()=>setCount2(count2+1)}>Click 2</button>
        </>
    );
}

export default UseMemo;