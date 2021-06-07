// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);


// we first set a function that will execute as soon as the document is "ready" or loaded with .ready. Here we first are setting the save btn, and as we will have text on different rows, it will save the content in the corresponding row (to the button)
$(document).ready(function () { 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    });
   //Functiom of timestamping. We get the task time corresponding to the time block where the user is working, this done after looping through all the time blocks.
    function timeStamp() {
        var currentTime = moment().hour();
        //looping throught each block to get the Id of the one where the user is working
        $(".time-block").each(function () {
            var taskTime = parseInt($(this).attr("id"));

            // compairing the Hour with the current task hour to assign the correct class for formating (present, past, future)
            if (taskTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (taskTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // fetching the stored tasks and displaying them
    $("#8 .task").val(localStorage.getItem("8"));
    $("#9 .task").val(localStorage.getItem("9"));
    $("#10 .task").val(localStorage.getItem("10"));
    $("#11 .task").val(localStorage.getItem("11"));
    $("#12 .task").val(localStorage.getItem("12"));
    $("#13 .task").val(localStorage.getItem("13"));
    $("#14 .task").val(localStorage.getItem("14"));
    $("#15 .task").val(localStorage.getItem("15"));
    $("#16 .task").val(localStorage.getItem("16"));
    $("#17 .task").val(localStorage.getItem("17"));

    timeStamp();
})