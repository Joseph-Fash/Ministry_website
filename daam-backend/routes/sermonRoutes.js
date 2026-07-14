const express = require('express');
const { getSermons, getSermonById, createSermon, updateSermon, deleteSermon} = require('../controllers/sermonController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getSermons);
router.get('/:id', getSermonById);

router.post('/', protect, createSermon);
router.put('/:id', protect, updateSermon);
router.delete('/:id', protect, deleteSermon);

module.exports = router;