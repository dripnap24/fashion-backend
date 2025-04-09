
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

console.log('Routes folder contains:', fs.readdirSync('./routes'));

// Middleware
app.use(cors());
app.use(express.json());

// Static file hosting for uploads
app.use('/uploads', express.static('uploads'));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure 'uploads/' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Upload route (for wardrobe image uploads)
app.post('/api/upload', upload.single('image'), (req, res) => {
  const { name } = req.body;
  const image = req.file;

  if (!name || !image) {
    return res.status(400).json({ success: false, error: 'Name and image are required.' });
  }

  res.status(200).json({
    success: true,
    message: 'Wardrobe item uploaded successfully',
    item: {
      name,
      imageUrl: `/uploads/${image.filename}`
    }
  });
});

// Routes
const wardrobeRoutes = require('./routes/wardrobe');
const calendarRoutes = require('./routes/calendar');
const profileRoutes = require('./routes/profile');
const aiRoutes = require('./routes/ai');

// Use routes
app.use('/api/wardrobe', wardrobeRoutes);
app.use('/api/calendar', calendarRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/ai', aiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🧠 Fashion Fit API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


