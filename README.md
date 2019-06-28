# magic-mirror

## Purpose

Question:
What is the purpose of this project?

Answer:
* To display the five prayer times of the day
* To randomly display one of Allah's name's
* To randomly display an Ayah from the Quran
* To display the weather in London
* To display TFL train status
* To display calendar and date

## Dependencies

### Endpoints

#### Islamic
* This project assumes that http://localhost:8081/allah-name/{nameByNumber} is available
* This project assumes that http://localhost:8081/daily-prayer-time/{day}/{month}/{year} is available
* This project assumes that http://localhost:8081/ayah/{ayah} is available

#### TFL
* This project assumes that https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status is available
* As part of api.tfl.gov, the following two parameters must also be provided
```
https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status?app_id=<tfl_app_id>&app_key=<tfl_app_key>
```
* The value of the TFL_APP_ID and TFL_APP_KEY must be populated in the ./properties.js file

#### 
* This project uses the open weather api to get the weather of the current day
```
http://api.openweathermap.org/data/2.5/weather?appid=${properties.WEATHER_APP_KEY}&q=london&units=metric
```
The value of the WEATHER_APP_KEY must be populated in the ./properties.js file

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
