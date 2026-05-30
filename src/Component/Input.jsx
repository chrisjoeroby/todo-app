import { useEffect, useState } from "react";
export const Input = (props) => {
    const [enteredValue,setEnteredValue]=useState("");
    const [isValid,setIsValid] = useState(true);
    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTask(enteredValue);
        setEnteredValue("");
    };

    useEffect( () => {
        if(enteredValue.trim().length > 3){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    } , [enteredValue]);

    return( 
        <form onSubmit={handleSubmit}>
            <input value={enteredValue} 
            placeholder="Enter your task" onChange={handleChange}/>
            <button disabled={!isValid} className="add-task-button">create</button>
        </form>
    );
};