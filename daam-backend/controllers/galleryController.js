const GalleryItem = require("../models/GalleryItem");

async function getGalleryItems(req, res) {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function getGalleryItemsByCategory(req, res) {
  try {
    const category = decodeURIComponent(req.params.category);
    const items = await GalleryItem.find({ category }).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function getGalleryItemById(req, res) {
  try {
    const item = await GalleryItem.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Gallery item not found",
      });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

async function createGalleryItem(req, res) {
  try {
    const galleryData = { ...req.body };

    if (req.file) {
      galleryData.image = req.file.path;
    }

    const item = await GalleryItem.create(galleryData);
    res.status(201).json(item);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create gallery item.", error: err.message });
  }
}


async function updateGalleryItem(req, res) {
  try {
    const galleryData = [ ...req.body ];

    if (req.file) {
      galleryData.image = req.file.path;
    }

    const item = await GalleryItem.findByIdAndUpdate(req.params.id, galleryData, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found'})
    }
    res.json(item);
  } catch (err) {
    res.status(404).json({
      message: "Could not update gallery item.", error: err.message
    });
  }
}

async function deleteGalleryItem(req, res) {
  try {
    const item = await GalleryItem.findByIdAndDelete(req.params.id);

    if(!item) {
      return res.json({
        message: "Gallery item not found.", error: err.message
      })
    }

    return res.status(200).json({
      message: "Item successfully deleted"
    })
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
}

module.exports = {
  getGalleryItems,
  getGalleryItemsByCategory,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
};
