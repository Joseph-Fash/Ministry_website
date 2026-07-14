const express = require("express");
const {
  getGalleryItems,
  getGalleryItemsByCategory,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} = require("../controllers/galleryController");

const { protect } = require("../middleware/authMiddleware");
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', getGalleryItems);

router.get("/category/:category", getGalleryItemsByCategory);

router.get("/:id", getGalleryItemById);

router.post("/", protect, upload.single('image'), createGalleryItem);
router.put("/:id", protect, upload.single('image'), updateGalleryItem);
router.delete("/:id", protect, deleteGalleryItem);

module.exports = router;



