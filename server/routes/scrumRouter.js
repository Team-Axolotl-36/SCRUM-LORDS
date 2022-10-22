const express = require('express');

const scrumController = require('../controllers/scrumController');

const router = express.Router();

<<<<<<< HEAD
router.get('/',
  scrumController.getTasks,
  (req, res) => res.status(200).json(res.locals.data)
=======
router.post('/',
  scrumController.getCharacters,
  (req, res) => res.status(200).json(res.locals.body)
>>>>>>> dev
);


router.post('/',
  scrumController.addTask,
  (req, res) => res.status(200).json({})
);


router.patch('/:id',
  scrumController.updateTask,
  (req, res) => res.status(200).json({})
);


// router.delete('/',
//   scrumController.getFilm,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;