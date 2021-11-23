import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Go to the market',
            day: 'Nov 23rd at 3:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Go to see mum',
            day: 'Nov 25th at 3:30pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Go to Ikoyi',
            day: 'Nov 29th at 10:30am',
            reminder: false,
        },
        {
            id: 4,
            text: 'Email Kola',
            day: 'Dec 3rd at 12:30pm',
            reminder: true,
        },
    ]
)
// Delete Task Function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  // console.log('delete', id)
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  console.log(id)
}

  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show')}
    </div>
  );
}

export default App;
