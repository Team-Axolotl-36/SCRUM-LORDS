import React, {useState} from 'react';
import Task from './Task.jsx';

const Project = (props) => {
  const [task, setTask] = useState([]);
  const [taskId, setTaskId] = useState(0);

  function handleClick() {

    setTaskId( (state) => taskId + 1);

    const newTask = (<Task projectTitle={props.projectTitle} key={taskId} delete={deleteTask} id={taskId}/>);
    setTask([...task, newTask]);
    console.log(task.length);
  }

  function deleteTask(e, bubble) {

    setTask( (prevTasks) => {
      return prevTasks.filter((el) => {
        return el.props.id !== bubble;
      });
    });

    // we might need to send ID (to the backend) when deleting in order to identify which task needs to be deleted 

    // fetch('/delete/task', {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({hello: 'world'})
    // })
    //   .then(resp => resp.json())
    //   .then((data) => {
    //     console.log('this is data from delete :', data);
    //   })
    //   .catch((err) => {
    //     console.log('Error : ', err);
    //   });
  }
  
  return (
    <div className="project">
      <p>Project ID: {props.id} </p>
      <p>Project Title: {props.projectTitle} </p>
      <button onClick={handleClick}> Create a new task.</button>
      
      {task}
    </div>
  );
};
