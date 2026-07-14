const express = require ("express");
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const sermonRoutes = require('./routes/sermonRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const eventRoutes = require('./routes/eventRoutes');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'DAAM backend is running'});
});

app.use('/api/auth', authRoutes);

app.use('/api/sermons', sermonRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/events', eventRoutes);

app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}`});
});

function errorHandler(err, req, res, next) {
  console.error(err.stack); 
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: `Upload error: ${err.message}`});
  }

  res.status(400).json({ message: err.message || 'Something went wrong'});
}

app.use(errorHandler);

module.exports = app; 