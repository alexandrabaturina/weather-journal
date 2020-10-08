const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '9f15e45060210ec849a698b3298f0bed';

let today = new Date().toDateString();

document.getElementById('generate').addEventListener('click', generateData);

const zipError = document.querySelector('.zip-error');


function generateData(event) {
    zipError.style.display === 'none';
    zipError.innerText = '';
    const zipCode = document.getElementById('zip').value;
    if (!zipCode) {
        zipError.style.display === 'none';
        zipError.innerText = "Please enter zip.";
    }
    const targetURL = baseURL + zipCode + '&appid=' + apiKey + '&units=imperial';
    const content = document.getElementById('feelings').value;
    retrieveData(targetURL)
        .then(function (jsonData) {
            postData('/addData', { date: today, temp: jsonData.main.temp, content: content, city: jsonData.name });
            return { date: today, temp: jsonData.main.temp, content: content, city: jsonData.name };
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
        const jsonData = await request.json();
        if (jsonData.cod === "404") {
            zipError.style.display = 'block';
            zipError.innerText = "No data on server for this zip. Please enter another zip.";
            return;
        }
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
        document.getElementById('entry-header').style.display = 'none';
        document.getElementById('date').innerText = allData.date;
        document.getElementById('temp').innerHTML = `${allData.temp} &deg;F in ${allData.city}`;
        document.getElementById('content').innerText = allData.content;
        document.getElementById('zip').value = '';
        document.getElementById('feelings').value = '';
    } catch (error) {
        console.log("error", error);
    }
}