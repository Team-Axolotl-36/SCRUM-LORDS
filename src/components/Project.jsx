import React, {useState} from 'react';
import Task from './Task.jsx';

const Project = (props) => {
  const [task, setTask] = useState([]);
  const [taskId, setTaskId] = useState(0);

  function handleClick() {

    setTaskId( (state) => taskId + 1);

    const newTask = (<Task projectTitle={props.projectTitle} key={taskId} delete={deleteTask} taskId={taskId} projectId={props.projectId}/>);
    setTask([...task, newTask]);
    console.log(task.length);
  }

  // This is being passed from task.jsx (e, props.taskId, props.projectId, props.projectTitle, value)
  function deleteTask(e, arg_taskId, arg_projectId, arg_projecttitle, arg_value) {

    setTask( (prevTasks) => {
      return prevTasks.filter((el) => {
        return el.props.taskId !== arg_taskId;
      });
    });

    const deleteObj = {
      project: arg_projecttitle,
      projectId: arg_projectId,
      task: arg_value,
      taskId: arg_taskId
    };
    
    // This fetch request will send a DELETE to the backend with specific projectID and taskID to remove from database.
    fetch('/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteObj)
    })
      .then(resp => resp.json())
      .then((data) => {
        alert('Your delete request was received.');
      })
      .catch((err) => {
        console.log('Error : ', err);
      });

  }
  
  return (
    <div className="project">
      <p>Project ID: {props.projectId} </p>
      <p>Project Title: {props.projectTitle} </p>
      <button onClick={handleClick}> Create a new task.</button>
      
      {task}
    </div>
  );
};
export default Project;