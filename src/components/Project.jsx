import React, {useState} from 'react';
import Task from './Task.jsx';

const Project = (props) => {

  return (
    <div className="project">
        Project : {props.projectTitle}
        {console.log('this should be titlex: ', props.projectTitle)}
        <Task/>
        <Task/>
        <Task/>
    </div>
  );
};

export default Project;