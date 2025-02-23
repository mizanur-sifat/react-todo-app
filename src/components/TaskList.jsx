import Task from "./Task"
import { initalTasks } from "../data/initialTasks"
import { useState } from "react"

export default function TaskList() {

    const [tasks, setTasks] = useState(initalTasks);

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task />
                </li>
            ))}
        </ul>
    );
}