# WEATHER-FORECAST

Weather dashboard was created by retrieving data from Openweathermap.org and rendering it dynamically into HTML and running it in the browser. 

## Deployed link
 https://dilberovicka31.github.io/WEATHER-FORECAST/

 ## Final product view

 ![Weather Dashboard](./assets/Weather-Dashboard.png)

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

Weather forecast displays current weather data and 5 day forecast. Search made simple, input the city name and click search.

 For the current date you get the following information:

* City name and date
* Current temperature
* Humidity
* Wind Speed
* UV index- with appropriate color that indicates whether the conditions are favorable, moderate or severe

For 5 day forecast you get the following:
* Date
* Temperature
* Humidity

All data is saved to the localStorage, and the last searched city is displayed in the search history. If the user clicks on the previously searched city, then he is presented with the current and future condition for that city. 
