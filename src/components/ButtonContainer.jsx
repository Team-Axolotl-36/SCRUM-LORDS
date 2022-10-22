import React, {useState, useEffect} from 'react';
import Project from './Project.jsx';

const ButtonContainer = (props) => {
  const [input, setInput] = useState('');
  const [projects, setProjects] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('this is input:', e.target.value);

    const newProject = ( <Project projectTitle={input} key={input}/> );
    
    setProjects( [...projects, newProject] );
  
  }


  return (
    <div>
      <button 
        onClick={handleSubmit}>
        Button to add task.
      </button>
      <input placeholder='Title of the project' required onChange={((e) => {setInput(e.target.value);}) } type="text" />
      {projects}

    </div>
  );
};

export default ButtonContainer;