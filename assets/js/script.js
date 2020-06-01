const m = moment();
var topTime = document.querySelector("#currentDay");
var list = JSON.parse(localStorage.getItem("newUserInput")) || {};

$(document).ready(function() {
// Set Top Time
topTime.textContent = m.format("dddd MMM DD, YYYY");

// User Input
$(".list-group").on("click", "ul", function () {
    // get current text
    var currentInput = $(this).text().trim();
    
    // create new input element
    var UserInput = $("<input>")
        .addClass("inputarea")
        .attr("type", "text")
        .val(currentInput);
        $(this).replaceWith(UserInput);
});

// Save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
   
    var newUserInput = $(this)
        .trigger("focus")
        .siblings(".textarea")
        .children()
        .val();
    
        var activeHour = $(this)
        .siblings(".hour")
        .attr("data-hour");
    
        list[activeHour] = newUserInput
    
    localStorage.setItem("newUserInput", JSON.stringify(list));
});

// Recall from storage
function loadTasks(list) {
    for (key in list) {
        var toDoItem = $(".hour-" + key + "-color");
        toDoItem.children().text(list[key]);
        checkDates();
    };
};

// Time Color Change
function checkDates() {
    for (var i = 9; i < 18; i++) {
        var currentTime = $(".hour-" + i).data("hour");

        var momentInt = parseInt(m.format("HH"));

        $(".hour-" + i + "-color").removeClass("past present future");

        if (currentTime < momentInt) {
            $(".hour-" + i + "-color").addClass("past");
        } else if (currentTime > momentInt) {
            $(".hour-" + i + "-color").addClass("future");
        } else if (currentTime === momentInt) {
            $(".hour-" + i + "-color").addClass("present");
        };
    };
};

checkDates();
loadTasks(list);


});