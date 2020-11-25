var apiKey = "bb097bc0ef72343cff93dc70db113b3e";
var searchResult;
var searchEl = $("#searchCity");
var searchButton = $("#searchBtn");
var cityList = $(".lists");
var cities = $("#listCity");


//When clicked on search button render data
searchButton.click(function(event) {
    event.preventDefault();
    var searchResult = searchEl.val().toUpperCase();
    cities.append(`<button type="button" class="btn btn btn-outline-secondary btn-lg btn-block">`+searchResult+`</button>` );
    
    if (!(cities).includes(searchResult)){
        // !$("#listCity").append(searchResult);
        
    };
   
    if (searchResult != "") {
    getWeather(searchResult);
        
        }
    //Getting all the searched cities to localstorage
    var data = JSON.parse (localStorage.getItem("cities"));
    console.log(data);
    if (!(data.includes(searchResult))) {
        data.push(searchResult);
    }
    
    localStorage.setItem("cities", JSON.stringify( data));
    

});


//Setting function to get all the data and display it to html
function getWeather(searchOption){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchOption + "&appid=" + apiKey,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // console.log(response.Runtime);

        // Get the weather icon
        var iconResponse = response.list[0].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon").attr("src", iconURL).css("display","block");
        
        
        // // Display city name
        var cityName = (response.city.name);
        var now = moment();
        var date = moment().format("MM/DD/YYYY");
        var day1 = moment().add(1, "days").format("MM/DD/YYYY");
        var day2 =  moment().add(2, "days").format("MM/DD/YYYY");
        var day3 =  moment().add(3, "days").format("MM/DD/YYYY");
        var day4 =  moment().add(4, "days").format("MM/DD/YYYY");
        var day5 =  moment().add(5, "days").format("MM/DD/YYYY");
        console.log(day1);

        console.log(date);
        console.log(now);
        
        $("#city-date").text(cityName + date );
        
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
        $(".card-date1").text(day1);
        var iconResponse = response.list[1].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon1").attr("src", iconURL).css("display","block");
        $(".card-temp1").text('Temperature: ' + tempDay1.toFixed(0) + '°F');
        $(".card-hum1").text('Humidity: ' + humDay1 + "%");

        console.log(tempDay1);

        //Day 2 forecast
        var tempDay2 = (response.list[2].main.temp - 273.15) * 1.80 + 32;
        var humDay2 = (response.list[2].main.humidity);
        $(".card-date2").text(day2);
        var iconResponse = response.list[2].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon2").attr("src", iconURL).css("display","block");
        $(".card-temp2").text('Temperature: ' + tempDay2.toFixed(0) + '°F');
        $(".card-hum2").text('Humidity: ' + humDay2 + "%");

        //Day 3 forecast
        var tempDay3 = (response.list[3].main.temp - 273.15) * 1.80 + 32;
        var humDay3 = (response.list[3].main.humidity);
        $(".card-date3").text(day3);
        var iconResponse = response.list[3].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon3").attr("src", iconURL).css("display","block");
        $(".card-temp3").text('Temperature: ' + tempDay3.toFixed(0) + '°F');
        $(".card-hum3").text('Humidity: ' + humDay3 + "%");

        //Day 4 forecast
        var tempDay4 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
        var humDay4 = (response.list[4].main.humidity);
        $(".card-date4").text(day4);
        var iconResponse = response.list[4].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon4").attr("src", iconURL).css("display","block");
        $(".card-temp4").text('Temperature: ' + tempDay4.toFixed(0) + '°F');
        $(".card-hum4").text('Humidity: ' + humDay4 + "%");

        //Day 5 forecast
        var tempDay5 = (response.list[5].main.temp - 273.15) * 1.80 + 32;
        var humDay5 = (response.list[5].main.humidity);
        $(".card-date5").text(day5);
        var iconResponse = response.list[5].weather[0].icon;
        iconURL = "http://openweathermap.org/img/w/" + iconResponse + ".png" ;
        $("#icon5").attr("src", iconURL).css("display","block");
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



