// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3030;
const server = app.listen(port, listening);

function listening() {
    console.log(`server running on http://localhost:${port}`);
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
    response.send(projectData);
}