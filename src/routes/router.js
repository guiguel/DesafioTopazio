const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());

const taskController = require('../controllers/reservaController.js');

router.post('/tasks',taskController.getAll);

module.exports = router;