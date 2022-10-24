import React, {useState, useEffect} from 'react';


//initial state delcared
const Task = (props) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('high');

  //handleUpdate function is called (around line 70) when the user clicks to update a task.
  function handleUpdate(){
    const refineDate = new Date();
    //creating an object with the values needed in the backend to update a task in the database
    const updateObj = {
      project: props.projectTitle,
      projectId: props.projectId,
      task: value,
      taskId: props.taskId,
      priority: priority,
      currentDate: refineDate.toDateString()
    };
    //fetch request to patch to run through the middleware and update the database. Passing in the updated object, in the req.body 
    fetch('/',{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(updateObj)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log('this is data from fetch:', data);
      })
      .catch((err) => {
        console.log('Error :', err);
      });
  }
  //If a user clicks to save the task
  function handleSave(){
    const refineDate = new Date();
    //Similar to the object above, an object with the current values of the task to be saved in the database. 
    const finalObj = {
      project: props.projectTitle,
      projectId: props.projectId,
      task: value,
      taskId: props.taskId,
      priority: priority,
      currentDate: refineDate.toDateString()
    };
    console.log('finalObj', finalObj);
    //Fetch request to Post to update the current task in the database by sending over an object in the req.body that matches the database schema. 
    fetch('/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(finalObj)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log('this is data from fetch:', data);
      })
      .catch((err) => {
        console.log('Error :', err);
      });
  }

  //if a user wants to delete, we are calling props.delete which is found in projects.jsx 
  return (
    <div className="task">
      <textarea
        id='individualTask'
        placeholder={`Enter Task Here`}
        onChange = {(e) => {setValue(e.target.value);} }>
      </textarea>
          

      <button onClick={handleSave}> Save </button>
      <button onClick={(e) => props.delete(e, props.taskId, props.projectId, props.projectTitle, value)}> Delete </button>
      <button onClick={handleUpdate}> Update</button>
      
    </div>
  );
};

export default Task;