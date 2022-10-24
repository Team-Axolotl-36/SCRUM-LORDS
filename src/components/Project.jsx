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
    // console.log('event: ', id);
    // console.log('tasks :', task);
    
    setTask((prevTasks) => {
      return prevTasks.filter((el) => {
        console.log('el :', el);
        return el.props.id !== id;
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
        Project : {props.projectTitle}
      <button onClick={handleClick}> Create a new task.</button>
      
      {task}
    </div>
  );
};

export default Project;