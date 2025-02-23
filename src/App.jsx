import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


export default function App() {
  //Controller

  return (  //view
    <div>
      <h1>Simple Todo App</h1>
      <AddTask/>
      <TaskList/>
    </div>
  );
}
