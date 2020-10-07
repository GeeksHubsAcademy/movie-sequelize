const router = require('express').Router();
const OrderController = require('../controllers/OrderController');

router.get('/', OrderController.getAll);
router.post('/', OrderController.create);

module.exports = router;