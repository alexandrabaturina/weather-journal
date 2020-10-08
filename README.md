# FEND Project #3: Weather Journal
## Overview

**Weather Journal** is the third project of Udacity [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program.. It requires to build a single-page JavaScript app which creates a weather record for user based on their input and data from [OpenWeatherMap API](https://openweathermap.org/api).

The goals of the project is to practice with:
* setting up ***Node*** environment with ***Express*** and project dependencies
* setting up a server with ```GET``` and ```POST``` routes
* using ```fetch API``` with [OpenWeatherMap API](https://openweathermap.org/api) credentials 
* accessing a ```GET``` route on the server side from a function called on the client side
* promise chaining
* dynamically updating properties of *HTML* elements

## Features
* Local server (*server.js*) is running on ```port 3030```.
* Data is retrieved from external [OpenWeatherMap API](https://openweathermap.org/current#zip) in ```JSON``` format.
  * API calls use ```zip code``` entered by the user. Search works only for US zips.
* The following values are updated dynamically:
  * date
  * temperature
  * user input 
## Dependencies
Cool tech stuff used in this project:
* Node.js
  * [Official Guides for Node](https://nodejs.org/en/docs/guides/)
* Express framework
  * [Example of an Express server](https://expressjs.com/en/starter/hello-world.html)
  * [Routing for Express](https://expressjs.com/en/guide/routing.html)
* Node.js packages:
  * [cors](https://www.npmjs.com/package/cors)
  * [body-parser](https://www.npmjs.com/package/body-parser)

## Getting Started
### Prerequisites
1. Download [Node.js](https://nodejs.org/en/download/).
2. Install the following packages using ```npm```.
```sh
$ npm install express
$ npm install cors
$ npm install body-parser
```
### Running Locally 
To run **Weather Journal** locally:
1. Clone this repository.
2. ```cd``` into project directory.
3. Start the local server from command line.
```sh
$ node server.js
```
4. Open ```http://localhost:3030``` in your browser.
### Using Another API Key
To use your own OpenWeatherMap API key,
1. Create an account on [https://openweathermap.org/api](https://openweathermap.org/api).
2. In *app.js*, save your key in ```apiKey``` constant.
## Authors
Alexandra Baturina
