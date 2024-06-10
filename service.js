const express = require('express');
const app = express();
const port = 8090;

app.use(express.json());

app.post('/test', (req, res) => {
    console.log('Received POST request with body:', req.body);
    res.status(200).json({ message: 'POST request received successfully' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
