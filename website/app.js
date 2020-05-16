/* Global Variables */

//Base URL and API for Open Weather Map API call
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=dfd91166f2efa827b554cd87b63c1c8d';

const zip = '98109';
targetURL = baseURL + zip + apiKey;

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

retrieveData(targetURL);

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
// Fake data to test addData function
// newData = {
//     temperature: 25,
//     date: '5/15/20',
//     userResponse: 'Feeling good'
// }

// postData('/addData', newData);

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
