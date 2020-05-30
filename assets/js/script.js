var tasks = {};

var currentDay = function(now) {
    now = moment().format("dddd, MMMM Do YYYY, HH:MM").toString();
   
    $("#currentDay").text(now);
    console.log(now);
   
}

currentDay();