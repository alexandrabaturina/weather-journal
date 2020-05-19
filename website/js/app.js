/* Global Variables */

// Base URL and API for Open Weather Map API call
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'dfd91166f2efa827b554cd87b63c1c8d';

// Create a new date instance dynamically with JS
let d = new Date();
let currentDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Add event listener to Generate button
document.getElementById('generate').addEventListener('click', generateData);


function generateData(event) {
    const zipCode = document.getElementById('zip').value;
    const targetURL = baseURL + zipCode + '&appid=' + apiKey + '&units=imperial';
    const content = document.getElementById('feelings').value;
    retrieveData(targetURL)
        .then(function (jsonData) {
            postData('/addData', { date: currentDate, temp: jsonData.main.temp, content: content });
            return { date: currentDate, temp: jsonData.main.temp, content: content };
        })
        .then(function () {
            updateUI()
        }
        )
}

// Return JSON data from the exernal API
const retrieveData = async (url) => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const jsonData = await request.json()
        return jsonData;
    }
    catch (error) {
        console.log("error", error);
    }
}

// Add data to the project endpoint using POST
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// Update UI dynamically
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;

    } catch (error) {
        console.log("error", error);
    }
}