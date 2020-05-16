/* Global Variables */

// Base URL and API for Open Weather Map API call
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=dfd91166f2efa827b554cd87b63c1c8d';

// Create a new date instance dynamically with JS
let d = new Date();
let currentDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Add event listener to Generate button
document.getElementById('generate').addEventListener('click', generateData);


function generateData(event) {
    const zipCode = document.getElementById('zip').value;
    const targetURL = baseURL + zipCode + apiKey;
    const content = document.getElementById('feelings').value;
    retrieveData(targetURL)
        .then(function (jsonData) {
            // console.log(`{ date: ${currentDate}, temp: ${jsonData.main.temp}, content: ${content} }`)
            postData('/addData', { date: currentDate, temp: jsonData.main.temp, content: content });
        })
}

// Return JSON data from the exernal API
const retrieveData = async (url) => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const jsonData = await request.json()
        console.log('Data from json');
        console.log(jsonData);
        return jsonData;
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}


const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}


// postData('/addData', newData);


