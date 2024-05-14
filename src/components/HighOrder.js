import { useState } from "react";

const HighOrder = () =>{
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count+1);
    }

    return(
        <>
            <h1>High Order Component Counter App</h1>
            <h2>This is a counter: {count}</h2>
            <button onClick={handleCount}>increase</button>
        </>
    );
}

export default HighOrder;