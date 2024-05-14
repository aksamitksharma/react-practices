import React, {useState} from "react";

import Counter from './Counter'

const User = () =>{

    const [name, setName] = useState("Amit");
    
    const handleClick = (e) => {
        e.preventDefault();
        setName("AKS");
        alert(name);
    }

    return (
        <>
       
        <h1>
            User Component
        </h1>
        <h2>
            {name}
        </h2>
        <button onClick={handleClick}> Click me </button>

        <Counter />
        </>
    );
}


export default User;