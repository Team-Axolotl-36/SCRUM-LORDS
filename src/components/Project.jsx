import React, {useState} from 'react';
import Task from './Task.jsx';

const Project = (props) => {
  const [task, setTask] = useState([]);

  function handleClick() {

    const newTask = (<Task projectTitle={props.projectTitle} key={new Date()} delete={deleteTask} id={Math.floor(Math.random() * 10000)} />);
    setTask([...task, newTask]);
    console.log(task.length);
  }

  function deleteTask(key, id) {
    console.log('event: ', id);
    console.log('tasks :', task);

    const test = task.filter((element) => {
      console.log(element.props.id);
      
      return element.props.id !== id;
    });

    console.log('this is test: ', test);
    console.log('this is time :', new Date());
    setTask(test);
  }
  
  return (
    <div className="project">
        Project : {props.projectTitle}
      <button onClick={handleClick}> Create a new task.</button>
      
      {task}
    </div>
  );
};

export default Project;