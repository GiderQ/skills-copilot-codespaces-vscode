// Create web Server
const express = require('express');
const app = express();
const port = 3000;

// Create a GET request to /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Create a GET request to /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`This is the page for comment with id: ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});