import React, {useState, useEffect} from 'react';

const Task = (props) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('high');


  function handleUpdate(){
    const refineDate = new Date();
    const updateObj = {
      project: props.projectTitle,
      projectId: props.projectId,
      task: value,
      taskId: props.taskId,
      priority: priority,
      currentDate: refineDate.toDateString()
    };

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


  function handleSave(){
    const refineDate = new Date();
    const finalObj = {
      project: props.projectTitle,
      projectId: props.projectId,
      task: value,
      taskId: props.taskId,
      priority: priority,
      currentDate: refineDate.toDateString()
    };
    console.log('finalObj', finalObj);
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


  return (
    <div className="task">
      <textarea
        placeholder={`Task with id number: ${ props.taskId }`}
        onChange = {(e) => {setValue(e.target.value);} }>
      </textarea>
          

      <button onClick={handleSave}> + </button>
      <button onClick={(e) => props.delete(e, props.taskId, props.projectId, props.projectTitle, value)}> X </button>
      <button onClick={handleUpdate}> update/save task.</button>
      
    </div>
  );
};

export default Task;