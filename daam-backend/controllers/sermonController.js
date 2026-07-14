const Sermon = require('../models/Sermon');

async function getSermons(req, res) {
  try {
    const sermons = await Sermon.find().sort({ date: -1 });
    res.json(sermons);
  } catch(err){
    res.status(500).json({ message: 'Server error', error: err.message});
  }
}


async function getSermonById(req, res){
  try {
    const sermon = await Sermon.findById(req.params.id);

    if(!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    } 

    res.json(sermon);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message});
  }
}

async function createSermon(req, res) {
  try {
    const sermon = await Sermon.create(req.body);
    res.status(201).json(sermon);
  } catch(err) {
    res.status(400).json({ message: 'Could not create sermon', error: err.message});
  }
}

async function updateSermon(req, res) {
  try {
    const sermon = await Sermon.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true,
    });
    if(!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }

    res.status(200).json(sermon);
  } catch(err) {
    res.status(400).json({ message: 'Could not update sermon', error: err.message });
  }
}


async function deleteSermon(req, res) {
  try {
    const sermon = await Sermon.findByIdAndDelete(req.params.id);

    if (!sermon) {
      return res.status(404).json({ message: 'Sermon not found' });
    }

    res.json({ message: 'Sermon deleted successfully' });
  } catch(err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

module.exports = {
  getSermons, getSermonById, createSermon, updateSermon, deleteSermon,
};