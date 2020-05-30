var tasks = {};

var currentDay = function(now) {
    now = moment().format("dddd, MMMM Do YYYY, HH:MM").toString();
   
    $("#currentDay").text(now);
    console.log(now);
   
}


var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
        t7: [],
        t8: [],
        t9: [],
        t10: [],
        t11: [],
        t12: [],
        t13: [],
        t14: [],
        t15: [],
        t16: [],
        t17: [],
        t18: []
        };
    }

    $.each(tasks, function(list, arr) {
        arr.forEach(function(task) {
            createTask(task.text, list);
        });
    });
};

var saveTasks = function() {
localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".taskText").on("click", "p", function() {
    var taskItem = $(this).text().trim();
})

loadTasks();
currentDay();