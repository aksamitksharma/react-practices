import { useState } from "react";

const ContCompo = () =>{

    const [val,setValue] = useState("");

    return(
        <>
            <h1>Controller Component {val}</h1>
            <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}/>
        </>
    );
}

export default ContCompo;