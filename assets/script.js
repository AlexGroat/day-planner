var appointText = "";
var appointTime = "";
var todaysDate;
var currentTime;
var currentContainer;
var tempArray = [];
var bookedSessions;
var returnedSessions;



$(window).on("load", function () {
    todaysDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#currentDay").append(todaysDate);
    currentTime = moment().format("H");

    function renderSessions() {
        bookedAppointment = JSON.parse(localStorage.getItem("appointments"));
        if (bookedSessions !== null) {
            for (i = 0; i < bookedSessions.length; i++) {
                returnedSessions = bookedSessions[i];
                details = returnedSessions.details;
                timeIndex = returnedSessions.time;
                timeIndex = timeIndex.replace(":00", "");
                if (details !== null) {
                    $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
                }
            }
        }
    }

renderSessions();
})
