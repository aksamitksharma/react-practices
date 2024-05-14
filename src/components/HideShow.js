import { useState } from "react/cjs/react.development";

 const HideShow  = () => {
     const [status, setStatus] = useState(true);
     return (
         <>
            <button onClick={()=>setStatus(!status)}> Toggle </button>

            {
                status?<h1> Toggle going to be apply here </h1>:""
            }
         </>
     );
 }

 export default HideShow;