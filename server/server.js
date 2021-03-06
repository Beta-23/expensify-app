const path = require('path');
const express = require('express');
// Create express app
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Use public directory for public assets
app.use(express.static(publicPath));

// Res with index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});