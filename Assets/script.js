var apiKey = "bb097bc0ef72343cff93dc70db113b3e";
var searchResult;
var searchEl = $("#searchCity");
var searchButton = $("#searchBtn");
var cityList = $(".lists");
var cities = $("<button>");


//When clicked on search button render data
searchButton.click(function(event) {
    event.preventDefault();
    var searchResult = searchEl.val();
    console.log(searchResult);
    if (searchResult != "") {
    getWeather(searchResult);
        
        }
    //Getting all the searched cities to localstorage
    var data = JSON.parse (localStorage.getItem("cities"));
   
    data.push(searchResult);
    console.log(data);
    localStorage.setItem("cities", JSON.stringify( data));
    // $("#list").append(data);
    

});


//Setting function to get all the data and display it to html
function getWeather(searchOption){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchOption + "&appid=" + apiKey,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // console.log(response.Runtime);

        //Get the weather icon
        // var icon = (response.list[0].weather[0].icon);
        // iconURL = ($("<img>").attr ("src" + "http://openweathermap.org/img/w/" + icon + ".png" ));
        // // Display city name
        var cityName = (response.city.name);
        var date = moment().format("MM/DD/YYYY");
        console.log(date);
        
        $("#city-date").text(cityName + date  );
        // $("#city-date").append(icon);
        // console.log(icon);
        
        //Temperature
        var temperatureF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(".card-temp").text('Temperature: ' + temperatureF.toFixed(0) + '°F');
        console.log(temperatureF);

        //Humidity
        var humidityEl =(response.list[0].main.humidity);
        $(".card-hum").text("Humidity: " + humidityEl + "%");

        //Wind speed
        var windSpeed = (response.list[0].wind.speed + "MPH");
        $(".card-wind").text("Wind Speed: " + windSpeed);

        //5 Day forecast - day 1
        var tempDay1 = (response.list[1].main.temp - 273.15) * 1.80 + 32;
        var humDay1 = (response.list[1].main.humidity);
        var dateDay1 = (response.list[1].dt_txt)
        $(".card-date1").text(dateDay1);
        $(".card-temp1").text('Temperature: ' + tempDay1.toFixed(0) + '°F');
        $(".card-hum1").text('Humidity: ' + humDay1 + "%");

        console.log(tempDay1);

        //Day 2 forecast
        var tempDay2 = (response.list[2].main.temp - 273.15) * 1.80 + 32;
        var humDay2 = (response.list[2].main.humidity);
        var dateDay2 = (response.list[2].dt_txt)
        $(".card-date2").text(dateDay2);
        $(".card-temp2").text('Temperature: ' + tempDay2.toFixed(0) + '°F');
        $(".card-hum2").text('Humidity: ' + humDay2 + "%");

        //Day 3 forecast
        var tempDay3 = (response.list[3].main.temp - 273.15) * 1.80 + 32;
        var humDay3 = (response.list[3].main.humidity);
        var dateDay3 = (response.list[3].dt_txt)
        $(".card-date3").text(dateDay3);
        $(".card-temp3").text('Temperature: ' + tempDay3.toFixed(0) + '°F');
        $(".card-hum3").text('Humidity: ' + humDay3 + "%");

        //Day 4 forecast
        var tempDay4 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        var humDay4 = (response.list[4].main.humidity);
        var dateDay4 = (response.list[4].dt_txt)
        $(".card-date4").text(dateDay4);
        $(".card-temp4").text('Temperature: ' + tempDay4.toFixed(0) + '°F');
        $(".card-hum4").text('Humidity: ' + humDay4 + "%");

        //Day 5 forecast
        var tempDay5 = (response.list[5].main.temp - 273.15) * 1.80 + 32;
        var humDay5 = (response.list[5].main.humidity);
        var dateDay5 = (response.list[5].dt_txt)
        $(".card-date5").text(dateDay5);
        $(".card-temp5").text('Temperature: ' + tempDay5.toFixed(0) + '°F');
        $(".card-hum5").text('Humidity: ' + humDay5 + "%");
      
        //Getting UV index and adding styles based on the index number
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
//If local storage is empty create key cities
if(localStorage.getItem("cities") === null){
    localStorage.setItem("cities", JSON.stringify([]));
}



