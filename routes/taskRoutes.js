const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const taskValidator = require('../validators/taskValidator');
const { createTask, getTasks, getTaskById, updateTask, deleteTask, health } = require('../controllers/taskController');

router.get('/health', health);

router.use(auth);

router.post('/', async (req, res, next) => {
  try {
    await taskValidator.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.details[0].message });
  }
}, createTask);

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
