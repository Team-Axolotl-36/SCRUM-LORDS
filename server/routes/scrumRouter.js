const express = require('express');

const scrumController = require('../controllers/scrumController');

const router = express.Router();

router.get('/',
  scrumController.getCharacters,
  (req, res) => res.status(200).json([])
);

router.get('/',
  scrumController.getSpecies,
  (req, res) => res.status(200).json({})
);

router.post('/',
  scrumController.addCharacter,
  (req, res) => res.status(200).json({})
);


router.patch('/',
  scrumController.getFilm,
  (req, res) => res.status(200).json({})
);


router.delete('/',
  scrumController.getFilm,
  (req, res) => res.status(200).json({})
);

module.exports = router;