const mongoose = require('mongoose');

const sermonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  preacher: {
    type: String,
    default: 'Dr. Abraham Achimugu',
  },
  date: {
    type: Date,
    required: true,
  },
  series: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  audioUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
},
{timestamps: true});

module.exports = mongoose.model('Sermon', sermonSchema);