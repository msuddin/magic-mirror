# magic-mirror

## Purpose

Question:
What is the purpose of this project?

Answer:
* To display the five prayer times of the day
* To randomly display one of Allah's name's

## Dependencies

### Endpoints
* This project assumes that http://localhost:8081/allah-name/{nameByNumber} is available
* This project assumes that http://localhost:8081/daily-prayer-time/{day}/{month}/{year} is available
* TFL, init blah blah

### Java Jar
* This project assumes that the java jar found at https://github.com/msuddin/islam-api is running locally

### External NPM modules
* This project uses a calendar react app from https://www.npmjs.com/package/react-calendar

## Instructions
From the root directory of the project, run the following command to firstly install all dependencies:
```
npm install
```
Now run the application by running the following:
```
npm start
```
That should start the development server
This should allow your App.js to start talking to the server
