const models = require('../models/scrumModel');

const scrumController = {};

scrumController.getCharacters = (req, res, next) => {
  const { project, task, priority, currentDate } = req.body;
  console.log(project, task, priority, currentDate);
  // res.locals.body = hello;
  next();
};

scrumController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

scrumController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

scrumController.getFilm = (req, res, next) => {
  // write code here

  next();
};

scrumController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = scrumController;
