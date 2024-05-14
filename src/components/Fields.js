import { useState } from "react/cjs/react.development";


const Fields = () => {
    const [query, setQuery] = useState("Amit");

    const getInput = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={getInput}/>
            <h1>{query}</h1>
        </>
    );
}

export default Fields;