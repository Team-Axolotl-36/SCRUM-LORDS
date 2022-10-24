const { Pool } = require('pg');
const models = require('../models/scrumModel.js');

const scrumController = {};
const obtainTasks = 'SELECT * FROM finalTable';
// const currentDate = Date.now();
//const currentDate = new Date().toDateString();
//const randomId = Math.floor(Math.random() * 1000000);

scrumController.getTasks = async (req, res, next) => {
  try {
    //console.log('hello');
    const data = await models.query(obtainTasks);
    const dataRows = data.rows;
    res.locals.data = dataRows;
    next();
  } catch (err) {
    return next({
      error: err,
      message: 'you have an error in you get tasks middleware'
    });
  }

};


scrumController.addTask = async (req, res, next) => {
  try {
    console.log(req.body,'req.body');
    const { project, projectId, task, taskId, currentDate } = req.body;
    const anotherTask = `insert into finalTable values ('${project}','${projectId}', '${task}', '${taskId}', '${currentDate}')`;
    console.log(project);
    const newTask = await models.query(anotherTask);
    next();
  } catch (err) {
    return next({
      error: err,
      message: 'you have an error in your addTask middleware'
    });
  }
};

scrumController.updateTask = async (req, res, next) => {
//   //req.body =
// {
//   project: 'String',
//   projectId: Number,
//   task: 'String',
//   taskID: Number,
//   currentdate: date()
//   }
  try {
    //const { id } = req.params;
    const { project, projectId, task, taskId, currentDate } = req.body;
    // this is template for updating 
    const changeTask = `UPDATE finaltable SET task = '${task}' WHERE project_id = ${projectId} AND task_id = ${taskId}`;
    //"UPDATE finaltable, SET task = `'${task}'`WHERE projectId = 1"}  
    const taskUpdated = await models.query(changeTask); 
    next();
  } catch (err) {
    return next({
      error: err,
      message: 'you have an error in your updateTask middleware'
    });
  }

};

scrumController.deleteTask = async (req,res,next) => {
  try {
    const { projectId, taskId } = req.body;
    const taskDelete = `DELETE FROM finaltable WHERE project_id = ${projectId} AND task_id = ${taskId}`;

    const deletedTask = await models.query(taskDelete);
    
    return next ();
  } catch (err) {
    return next({
      error: err,
      message: 'you have an error in your deleteTask middleware'
    });
  }
};



module.exports = scrumController;
