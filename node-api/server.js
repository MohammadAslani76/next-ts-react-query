const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4444;

app.use(bodyParser.json());
app.use(cors())

// Path to the data.json file
const dataFilePath = path.join(__dirname, 'data.json');

// GET endpoint to read data
app.get('/api/data', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading data file' });
        }
        const jsonData = JSON.parse(data)
        if ("companies" in jsonData){
            return res.json(jsonData["companies"])
        } else {
            return res.status(404).json({error: 'Companies not found'})
        }
    });
});

// POST endpoint to write data
app.post('/api/data', (req, res) => {
    const newData = req.body;

    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading data file' });
        }
        const jsonData = JSON.parse(data);
        if ("companies" in jsonData){
            jsonData["companies"].push(newData);

            fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Error writing to data file' });
                }
                res.status(201).json(newData);
            });
        } else {
            return res.status(404).json({error: 'Company not found'})
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});