// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const download = require('./download');  // Import the download function
const cors = require('cors'); // For handling cross-origin requests

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS to allow frontend to access backend

// POST route to trigger file download
app.post('/download', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  // Call the download function from download.js
  download(url)
    .then(() => res.status(200).send('Download started'))
    .catch((err) => res.status(500).send('Error downloading file: ' + err));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
