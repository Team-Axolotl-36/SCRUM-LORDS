import React, {useState, useEffect} from 'react';
import Project from './Project.jsx';

const ButtonContainer = (props) => {
  const [input, setInput] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    
    setProjectId( (state) => state + 1);

    const newProject = ( <Project projectTitle={input} key={input} id={projectId}/> );
    
    setProjects( [...projects, newProject] );
  }

  // fetch('/',{
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json'},
  //   body: JSON.stringify({hello: 'world'})
  // })
  //   .then(resp => resp.json())
  //   .then((data) => {
  //     console.log('this is data from fetch:', data);
  //   })
  //   .catch((err) => {
  //     console.log('Error :', err);
  //   });


  return (
    <div id='buttonContainer'>
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