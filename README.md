# Weather Journal
## Overview
**Weather Journal** is an app with asynchronous JavaScript which creates a weather record for user based on their input and data from [OpenWeatherMap API](https://openweathermap.org/api).

The app is built as third project of Udacity [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.
## Features
The **Weather Journal** is one-page app with the following structure.
```sh
website/
  css/
    styles.css
  img/
    background.jpg
  js/
    app.js
  index.html
server.js
```
The app has the following features.
* Local server (*server.js*) runs on ```port 3030```.
* Data is retrieved from external [OpenWeatherMap API](https://openweathermap.org/current#zip) in ```JSON``` format.
  * API calls use ```zip code``` entered by the user. Search works only for US zips.
* The following values are updated dynamically.
  * date
  * temperature
  * user input 
## Getting Started
### Prerequisites
1. Download [Node.js](https://nodejs.org/en/download/).
2. Install the following packages using NPM.
```sh
$ npm install express
$ npm install cors
$ npm install body-parser
```
### Running Locally 
First, start the server by typing the following command in the command line.
```sh
$ node server.js
```
Then, enter ```http://localhost:3030``` in your browser.
## Dependencies
Cool tech stuff used in this project.
* Node.js
  * [Official Guides for Node](https://nodejs.org/en/docs/guides/)
* Express framework
  * [Example of an Express server](https://expressjs.com/en/starter/hello-world.html)
  * [Routing for Express](https://expressjs.com/en/guide/routing.html)
* Fetch API
  * [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* JS promises
  * [Intro to JS promises](https://web.dev/promises/)
  * [Promise chaining](https://javascript.info/promise-chaining)
## Authors
Alexandra Baturina
