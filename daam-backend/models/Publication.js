const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subutitle: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  link: {
    type: String,
  },
  category: {
    type: String,
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true  });

module.exports = mongoose.model('Publication', publicationSchema);