import React, {useState, useEffect} from 'react';
import Project from './Project.jsx';

const ButtonContainer = (props) => {
  const [input, setInput] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(0);

  //Using react hooks to initialize the state of each project/title
  //In each project you have a title -> input will render the visible title. 
  // projectId is an incrementing value to give each project a unique idetifier - used for patch and delete. 

  //handle submit -> 
  function handleSubmit(e) {
    e.preventDefault();
    //incrementing ID everytime a project is created
    setProjectId( (state) => state + 1);
    //storing a new project
    const newProject = ( <Project projectTitle={input} key={projectId} projectId={projectId}/> );
    //setting the state to be previous project plus the new project 
    setProjects( [...projects, newProject] );
    //reseting title everytime you create a new project -> if this bit of code was not present, everytime you wanted to create a new project, you would have to erase the previous text. 
    setInput('');
  }


  return (
    <div className='buttonContainer'>
      <div id = "titleProj">
      <button
          id='create_project'
          onClick={handleSubmit}>
            Add a Project!
        </button>
        <input value={input} placeholder='Title of the project' required onChange={((e) => {setInput(e.target.value);}) } type="text" />
      </div>

      <div id='projectbox'>
       {projects}
      </div>
    </div>
  );
};

export default ButtonContainer;