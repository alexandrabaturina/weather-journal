/* Global Variables */

// Base URL and API for Open Weather Map API call
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=dfd91166f2efa827b554cd87b63c1c8d';


// Add event listener to Generate button
document.getElementById('generate').addEventListener('click', returnDataFromAPI);

// Return data from the exernal API
function returnDataFromAPI(event) {
    const zipCode = document.getElementById('zip').value;
    const targetURL = baseURL + zipCode + apiKey;
    retrieveData(targetURL);
}


const retrieveData = async (url) => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
        console.log(allData);
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

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
