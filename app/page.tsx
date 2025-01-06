'use client'
import { useState } from 'react';

// Defining the types for state variables
type Task = string;

export default function Home() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // State to hold the new task input
  const [task, setTask] = useState<string>('');

  // Function to add a task to the list
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Reset input field
    }
  };

  // Function to remove a task
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">Simple To-Do List</h1>

      {/* Input and Button for Adding Tasks */}
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* List of Tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
       
      `}</style>
    </div>
  );
}
