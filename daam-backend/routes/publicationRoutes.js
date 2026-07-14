const express = require("express");
const {
  getPublications,
  getPublicationById,
  createPublication,
  updatePublication,
  deletePublication,
} = require("../controllers/publicationController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getPublications);
router.get("/:id", getPublicationById);

router.post("/", protect, createPublication);
router.put("/:id", protect, updatePublication);
router.delete("/:id", protect, deletePublication);

module.exports = router;
