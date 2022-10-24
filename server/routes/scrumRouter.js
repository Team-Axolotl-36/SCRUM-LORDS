const express = require('express');

const scrumController = require('../controllers/scrumController');

const router = express.Router();

router.get('/',
  scrumController.getTasks,
  (req, res) => res.status(200).json(res.locals.data)
);


router.post('/',
  scrumController.addTask,
  (req, res) => res.status(200).json({success: true})
);


router.patch('/',
  scrumController.updateTask,
  (req, res) => res.status(200).json({success:true})
);


router.delete('/',
  scrumController.deleteTask,
  (req, res) => res.status(200).json({success:true})
);

module.exports = router;