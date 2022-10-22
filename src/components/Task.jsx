import React, {useState, useEffect} from 'react';



const Task = (props) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('high');


  function handleSave(){
    const refineDate = new Date();
    const finalObj = {
      project: props.projectTitle,
      task: value,
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
        placeholder='Enter new task here'
        onChange = {(e) => {setPriority(e.target.value);} }>
      </textarea>
          

      <button onClick={handleSave}> + </button>
      <button onClick={(e) => props.delete(e, props.id)}> X </button>
      
    </div>
  );
};

export default Task;