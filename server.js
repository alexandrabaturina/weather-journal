// Setup empty JS object to act as endpoint for all routes
projectData = {};

const express = require('express');
const app = express();


/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 3030;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on http://localhost:${port}`);
}

// Create GET route for url /all
app.get('/all', function (request, response) {
    response.send(projectData);
})

// Create POST route
const data = []
app.post('/addData', addData);

function addData(request, response) {
    let data = request.body;
    projectData['date'] = data.date;
    projectData['temp'] = data.temp;
    projectData['content'] = data.content;
    projectData['city'] = data.city;
    response.send(projectData);
}