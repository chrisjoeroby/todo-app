import { useState } from "react";
export const Counter = () => {
    const [c,setC] =useState(0);
    const handleIncrement = () => setC(c+1);
    const handleDncrement = () => setC(c-1);
    return(
        <div>
            <h2>Count : {c}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDncrement}>Decrement</button>
        </div>
    );
};