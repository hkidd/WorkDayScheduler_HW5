// var currentDayHTML = document.querySelector('#currentDay');

var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);