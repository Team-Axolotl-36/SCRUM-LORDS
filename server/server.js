const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const scrumRouter = require('./routes/scrumRouter');

//const testing = require('../routes/test');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/', express.static(path.resolve(__dirname, '../build')));


app.use('/', scrumRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  return res.status(defaultErr.status).send();
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  
module.exports = app;