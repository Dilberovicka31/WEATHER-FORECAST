var apiKey = "bb097bc0ef72343cff93dc70db113b3e";
var search = $("#searchCity");
var searchButton = $("#searchBtn");

var listOfCities = [];
searchButton.click(function(event) {
    event.preventDefault();
    search.val();
    if (search != "") {
        
        }else{
            $("#error").html("You have to put in the city to search");
        }
    
});

function getWeather(){
    
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