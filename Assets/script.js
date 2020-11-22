// var now = moment();
// var date = ("#city-date").text(moment().format("YYYY-MM-DD"));
var apiKey = "bb097bc0ef72343cff93dc70db113b3e";
var searchResult;
var searchEl = $("#searchCity");
var searchButton = $("#searchBtn");

var listOfCities = [];
var cityList = $(".lists");
var cities = $("<button>");

searchButton.click(function(event) {
    event.preventDefault();
    var searchResult = searchEl.val();
    console.log(searchResult);
    if (searchResult != "") {
    getWeather(searchResult);
        
        }else{
            $("#error").html("You have to put in the city to search");
            
        }
    
});

function getWeather(searchOption){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchOption + "&appid=" + apiKey,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // console.log(response.Runtime);

        var citiesDiv = $("<div class='cities'>");
        var city = response.city.name;
        var citiesEl = $("<button>").text(city);
        citiesDiv.append(citiesEl);
        console.log(citiesDiv);

        // Display city name
        var cityName = (response.city.name);
        var date = (response.list[0].dt_txt);
        var icon = (response.list[0].weather[0].icon);
        $("#city-date").text(cityName, date, icon);
        
        //Temperature
        var temperatureF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(".card-temp").text('Temperature: ' + temperatureF.toFixed(0) + '°F');
        console.log(temperatureF);

        //Humidity
        var humidityEl =(response.list[0].main.humidity);
        $(".card-hum").text("Humidity: " + humidityEl + "%");

        //Wind speed
        var windSpeed = (response.list[0].wind.speed);
        $(".card-wind").text("Wind Speed: " + windSpeed);

        //5 Day forecast - day 1
        var tempDay1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
        $("#day1").text('Temperature: ' + tempDay1.toFixed(0) + '°F');

        console.log(tempDay1);

        var humDay1 = (response.list[1].main.humidity);
        // tempDay1.text('Humidity: ' + humDay1 + "%");

        var tempDay2 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
        $("#day2").text('Temperature: ' + tempDay2.toFixed(0) + '°F');

        var tempDay3 = (response.list[2].main.temp - 273.15) * 1.80 + 32;
        $("#day3").text('Temperature: ' + tempDay3.toFixed(0) + '°F');

        var tempDay4 = (response.list[3].main.temp - 273.15) * 1.80 + 32;
        $("#day4").text('Temperature: ' + tempDay4.toFixed(0) + '°F');

        var tempDay5 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        $("#day5").text('Temperature: ' + tempDay5.toFixed(0) + '°F');
      
        
        // $.ajax({
        //     url: "api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + '&lon=' + response.coord.lon + '&appid=' + apiKey,
        //     method: "GET"
        // }).then(function(response) {

        //     // var uvIndex = (respon)
        // })
        

      });
    
}




// Search to input the city 

// WHEN the user clicks the search btn

// funciton handleSearch(){
// THEN get the user input value that was entered in the search input
// }
// function makeWeaherRequest(search) {}

//Reuse the function to get all the data 

// NEXT we need to build the URL for the first API request, chain of API requests 

//Get te current weather data information data2.5 weather 
//Example Build hte userinput into the url

// /nex MAKE THE REQ TO THE URL iwth Jquery ajax

// $.ajax(queryURL).then(function(response){
    //sTART RENDERING DATA TO THE html 
    // then get the lat and lng out of the response object
    //Call next makeOneCallRequest (lat, lng)function and pass in the lat and lng

// });



// How do we chain .then do the next step

// functioN makeOneCallRequest (lat, lng) one call API N=MAKE ONE CALL REQ ACCEPT LATTITUDE AND LNG
// $.ajax(queryURL).then(function(response){

    // finish rendering data in the HTML 
// }