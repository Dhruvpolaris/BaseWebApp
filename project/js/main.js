$(document).ready(function(){
// getWeather();
})

function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

function getWeather(searchParam){

  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchParam+"&units=imperial&APPID="+apiKey;

  $(".city").text("");
  $(".temp").text("");

  $.ajax(url,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
    // console.log(data);

  }, error: function(error){
    alert("Incorrect City Name");
  }})
}

function searchWeather(){
    var searchParam = $(".search").val();
    getWeather(searchParam);
}