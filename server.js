const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'C:/Users/dhars/Desktop/Uploaded folders'); // specify the directory for storing files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage: storage });

// Sample database of file metadata
let files = [];

// Middleware setup
app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('C:/Users/dhars/Desktop/Uploaded folders'));

// Routes

// Get all files
app.get('/files', (req, res) => {
  res.json(files);
});

// Get a specific file by ID
app.get('/files/:id', (req, res) => {
  const fileId = req.params.id;
  const file = files.find(file => file.id === fileId);
  if (!file) {
    return res.status(404).json({ message: 'File not found' });
  }
  res.json(file);
});

// Upload a new file
app.post('/files', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const newFile = {
    id: Date.now().toString(),
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size
  };
  files.push(newFile);
  res.status(201).json(newFile);
});

// Delete an existing file
app.delete('/files/:id', (req, res) => {
  const fileId = req.params.id;
  const fileIndex = files.findIndex(file => file.id === fileId);
  if (fileIndex === -1) {
    return res.status(404).json({ message: 'File not found' });
  }
  const filePath = `C:/Users/dhars/Desktop/Uploaded folders/${files[fileIndex].filename}`;
  try {
    fs.unlinkSync(filePath); // Remove the file from the file system
    files.splice(fileIndex, 1);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Download a file by ID
app.get('/files/download/:id', (req, res) => {
  const fileId = req.params.id;
  const file = files.find(file => file.id === fileId);
  if (!file) {
    return res.status(404).json({ message: 'File not found' });
  }
  const filePath = `C:/Users/dhars/Desktop/Uploaded folders/${file.filename}`;
  res.download(filePath, file.originalname); // Provide download option with original filename
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
