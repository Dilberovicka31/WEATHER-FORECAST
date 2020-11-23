// var now = moment();
// var date = ("#city-date").text(moment().format("YYYY-MM-DD"));
var apiKey = "bb097bc0ef72343cff93dc70db113b3e";
var searchResult;
var searchEl = $("#searchCity");
var searchButton = $("#searchBtn");


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
    
    var data = JSON.parse (localStorage.getItem("cities"));
   
    data.push(searchResult);
    console.log(data);
    localStorage.setItem("cities", JSON.stringify( data));

    

});

function getWeather(searchOption){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchOption + "&appid=" + apiKey,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // console.log(response.Runtime);

        //Get the weather icon
        var icon = (response.list[0].weather[0].icon);
        iconURL = ($("<img>").attr ("src" + "http://openweathermap.org/img/w/" + icon + ".png" ));
        // Display city name
        var cityName = (response.city.name);
        var date = moment().format("MM/DD/YYYY");
        console.log(date);
        
        $("#city-date").text(cityName + date  );
        $("#city-date").append(icon);
        
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
        var humDay1 = (response.list[1].main.humidity);
        $(".card-temp1").text('Temperature: ' + tempDay1.toFixed(0) + '°F');
        $(".card-hum1").text('Humidity: ' + humDay1 + "%");

        console.log(tempDay1);

        var tempDay2 = (response.list[2].main.temp - 273.15) * 1.80 + 32;
        var humDay2 = (response.list[2].main.humidity);
        $(".card-temp2").text('Temperature: ' + tempDay2.toFixed(0) + '°F');
        $(".card-hum2").text('Humidity: ' + humDay2 + "%");

        var tempDay3 = (response.list[3].main.temp - 273.15) * 1.80 + 32;
        var humDay3 = (response.list[3].main.humidity);
        $(".card-temp3").text('Temperature: ' + tempDay3.toFixed(0) + '°F');
        $(".card-hum3").text('Humidity: ' + humDay3 + "%");

        var tempDay4 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        var humDay4 = (response.list[4].main.humidity);
        $(".card-temp4").text('Temperature: ' + tempDay4.toFixed(0) + '°F');
        $(".card-hum4").text('Humidity: ' + humDay4 + "%");

        var tempDay5 = (response.list[5].main.temp - 273.15) * 1.80 + 32;
        var humDay5 = (response.list[5].main.humidity);
        $(".card-temp5").text('Temperature: ' + tempDay5.toFixed(0) + '°F');
        $(".card-hum5").text('Humidity: ' + humDay5 + "%");
      
        
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.city.coord.lat + '&lon=' + response.city.coord.lon + '&appid=' + apiKey,
            method: "GET"
        }).then(function(uvIndexResponse) {
            console.log(uvIndexResponse.value);
           $("#uv-index").text( uvIndexResponse.value);
           if(uvIndexResponse.value > 8){
            $("#uv-index").css("background-color", "red");
           }else if(uvIndexResponse.value > 6){
            $("#uv-index").css("background-color", "orange");
           }else if(uvIndexResponse.value > 3){
            $("#uv-index").css("background-color", "yellow");
           }else  {
            $("#uv-index").css("background-color", "green");
           }
        })
        

      });
    
}

if(localStorage.getItem("cities") === null){
    localStorage.setItem("cities", JSON.stringify([]));
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