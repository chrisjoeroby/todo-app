import { Cards } from "./Cards";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import axios from "axios";




export const Task = () => {
    const [tasks,setTasks] = useState([]);  
    const addTaskHandler = async(newTask) => {
        try{
            const body = {
                "activity_id": Math.random(),
		        "todo_description": newTask,
            };
            await axios.post("http://localhost:8080/create",body);
            await fetchTasks();
        }
        catch (error){
            console.log(error);
        }
    };

    const deleteHandler = (completeId) => {
        setTasks((prev)=>{
            return prev.filter((task)=>task.activity_id!==completeId);
        });
    };

    const fetchTasks = async () => {
    try{
        const response = await axios.get("http://localhost:8080");
        console.log(response);
        setTasks(response.data)
    }
    catch (error) {
        console.log(error);
    }
};

    useEffect(()=>{
    fetchTasks();
},[]);

    return(
        <div className="tasks">
            <h1>Tasks</h1>

            <Input onAddTask={addTaskHandler}/>
            
            {
                tasks.map((tasks)=>{
                    return <Cards 
                    key={tasks.activity_id } 
                    text={tasks.todo_description} 
                    onTaskComplete={deleteHandler} 
                    id={tasks.activity_id}/>
                })    
            }
            
        </div>
    )
};