import React, {useState} from 'react';
import Task from './Task.jsx';

const Project = (props) => {
  const [task, setTask] = useState([]);
  const [taskId, setTaskId] = useState(0);
  //initial state for each task (created within the project cards) 
  function handleClick() {
    //incrementing the ID everytime a task is created (clicked. Each task is going to be inside a project. 
    setTaskId( (state) => taskId + 1);
    //Updating state with the previous task and the new task
    //Drilling down project title, delete task and projectId
    const newTask = (<Task projectTitle={props.projectTitle} key={taskId} delete={deleteTask} taskId={taskId} projectId={props.projectId}/>);
    setTask([...task, newTask]);
  }

  // This is being passed from task.jsx (e, props.taskId, props.projectId, props.projectTitle, value)
  //This function will not be called, until is clicked within the task box
  function deleteTask(e, arg_taskId, arg_projectId, arg_projecttitle, arg_value) {
    //We are modifying state with set task -> passing in previous task. 
    //We are returing the filtered Array without the task that was deleted
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
    // delete fetch needs the task that is being deleted (via taskid and projectid -> unique)
    fetch('/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteObj)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log('Your delete request was received.');
      })
      .catch((err) => {
        console.log('Error : ', err);
      });

  }
  
  //on the props for button coantainer, we are passing the project tile and project ID
  //handle click is reference above, along with {task} to be rendered. 
  return (
    <div className="project">
      <p> {props.projectTitle} </p>
      <button id='create_task' onClick={handleClick}> Create a new task</button>
      
      {task}
    </div>
  );
};
export default Project;