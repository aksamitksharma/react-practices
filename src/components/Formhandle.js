import { useState } from "react/cjs/react.development";

const Formhandle = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [yesno, setYesNo] = useState(false);

    const getFormData = (e) => {
        e.preventDefault();
        console.log(name, email, yesno);
    }

    return (
        <>
            <h1>Form</h1>

            <form onSubmit={getFormData}>
                Name:
                <br />
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <br />
                <br />
                Email:
                <br />
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <br />
                Yes/No:
                <br />
                <input type="checkbox" onChange={(e)=>setYesNo(e.target.checked)}/>
                <br />
                <br />
                <button type="submit"> Save </button>
            </form>
        </>
    );
}

export default Formhandle;