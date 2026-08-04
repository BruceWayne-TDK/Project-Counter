import { useState } from "react";
import './counter.css';


function Counter() { 

    let [num, setNum] = useState(0);

    const IncNum = () => { 

        setNum(num + 1);
    }

    const DecNum = () => { 

        setNum(num - 1);
    }

    const ResetNum = () => { 

        setNum(0);
    }


return( <> 
        <div> 
        <h1> {num} </h1>
        </div>
            <button className="up" onClick={IncNum}> + </button> 
            <button className="reset" onClick={ResetNum}> Reset </button>
             <button className="down" onClick={DecNum}> - </button>
         </>)

}

export default Counter