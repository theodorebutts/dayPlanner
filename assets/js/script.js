const m = moment();
var topTime = document.querySelector("#currentDay");
var list = JSON.parse(localStorage.getItem('newUserInput')) || {};

// Set Top Time
topTime.textContent = m.format("dddd MMM DD, YYYY")

// User Input
$(".list-group").on('click', "ul", function () {
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

$('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var newUserInput = $(this)
        .siblings(".textarea")
        .children()
        .val();
    var activeHour = $(this)
        .siblings(".hour")
        .attr('data-hour');
    list[activeHour] = newUserInput

    localStorage.setItem('newUserInput', JSON.stringify(list));

});

// Recall from storage
function activateLocal(list) {
    for (key in list) {
        var toDoItem = $('.hour-' + key + "-color");
        toDoItem.children().text(list[key]);
        checkDates();
    }
}

