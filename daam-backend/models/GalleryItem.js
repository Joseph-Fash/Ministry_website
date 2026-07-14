// models/GalleryItem.js
const mongoose = require("mongoose");

const galleryItemSchema = new mongoose.Schema(
  {
    image: {
      type: String, 
      required: true,
    },
    title: {
      type: String,
      trim: true,
    },
    caption: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "The Ministry of the Word",
        "Fellowship & Fathers",
        "Home & Covenant",
        "Healing as Calling",
        "Mercy in Motion",
        "Seeds for a Generation",
        "Honour & Heritage",
        "Shared Labour",
      ],
    },
    date: {
      type: Date,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("GalleryItem", galleryItemSchema);
