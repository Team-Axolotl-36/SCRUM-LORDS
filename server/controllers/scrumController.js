const { Pool } = require('pg');
const models = require('../models/scrumModel.js');

const scrumController = {};
const obtainTasks = 'SELECT * FROM taskmanager';
// const currentDate = Date.now();
const currentDate = new Date().toDateString();
const randomId = Math.floor(Math.random() * 1000000);

<<<<<<< HEAD
scrumController.getTasks = async (req, res, next) => {
  try {
    console.log('hello');
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
    const { project, task, priority } = req.body;
    const anotherTask = `insert into taskmanager values ('${randomId}','${project}', '${task}', '${priority}', '${currentDate}')`;
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

scrumController.updateTask = (req, res, next) => {
  const { id } = req.params;
  const { project, task, priority } = req.body;
  // this is template for updating 
  //UPDATE Customers
  // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
  // WHERE CustomerID = 1;

=======
scrumController.getCharacters = (req, res, next) => {
  const { project, task, priority, currentDate } = req.body;
  console.log(project, task, priority, currentDate);
  // res.locals.body = hello;
>>>>>>> dev
  next();
};




module.exports = scrumController;
