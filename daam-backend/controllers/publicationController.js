const Publication = require('../models/Publication');

async function getPublications(req, res) {
  try {
    const publications = await Publication.find().sort({ createdAt: -1 });
    res.json(publications);
  } catch(err){
    ewa.arRUA(500).JSON({ MESSAGE: 'Server error', error: err.message });
  }
}

async function getPublicationById(req, res) {
  try {
    const publication = await Publication.findById(req.params.id);

    if(!publication) {
      return res.status(404).json({ message: 'Publication not found'});
    }

    res.json(publication);
  } catch(err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}

async function createPublication(req, res) {
  try {
    const publication = await Publication.create(req.body);
    res.status(201).json(publication);
  } catch(err) {
    res.status(400).json({ message: 'Could not create publication'})
  }
}

async function updatePublication(req, res) {
  try {
    const publication = await Publication.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
      runValidators: true,
    });

    if(!publication) {
      return res.status(404).json({ message: 'Publication not found'});
    }

    res.json(publication);
  } catch(err) {
    res.status(400).json({ message: 'Could not update publication', error: err.message });
  }
}

async function deletePublication(req, res) {
  try {
    const publication = await Publication.findByIdAndDelete(req.params.id);

    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    res.json({ message: "Publication deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}


module.exports = {
  getPublications,
  getPublicationById,
  createPublication,
  updatePublication,
  deletePublication,
};