import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    console.log("Sending API request to: ", "http://localhost:5000/api/tasks");
    axios
      .get("/api/tasks")
      .then((response) => {
        console.log("Received tasks:", response.data);
        setTasks(response.data);
      })
      .catch((error) => console.error("Error during API call:", error));
  }, []);

  return (
    <>
      <div>
        <h1>Tasks</h1>
        {tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task._id}>{task.text} | {task.completed ? '✅' : '❌'}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
