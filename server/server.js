const path = require('path');
const express = require('express');
// Create express app
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// Use public directory for public assets
app.use(express.static(publicPath));

// Res with index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is up!');
});