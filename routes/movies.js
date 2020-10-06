const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.getAll);

module.exports = router;