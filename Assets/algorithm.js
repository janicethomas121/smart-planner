// declare variables for data storage
let myTasks;
let storageArray = [];
let schedule1 = [];
let schedule2 = [];

console.log('hi');

// upload JavaScript library 'MomentJS' for easier displaying of time and date
var moment = require('moment');

// using moment to get current time
var time = parseInt(moment().format('HH'));
console.log(time);

// using moment to get current date
function getToday() {
    let currentDate = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(currentDate);
    console.log(currentDate);
}

getToday();

// prompting user to type in their activities for the day
/*
var act1 = prompt("Enter first activity here: ");
var act2 = prompt("Enter first activity here: ");
var act3 = prompt("Enter first activity here: ");
var act4 = prompt("Enter first activity here: ");
var act5 = prompt("Enter first activity here: ");
var act6 = prompt("Enter first activity here: ");

*/

/*
// prompting user to select the specific time each activity will take using the dropdown
var time1 = prompt("How much time will this activity take?");

// asks the user if there are more activities to input (scalable)
var keepGoing = prompt("Are there any more actvities to input? (Type yes or no)")

// for loop to determine if more activities need to be inputted
for (let i = 0; i < 1; i++){
    if ((keepGoing === "yes") || (keepGoing == "Yes") || (keepGoing == "YES")){
        i--;
        keepGoing = prompt("Are there any more actvities to input? (Type yes or no)")
    } else {
        i = 1;
    }
}
*/

// obtaining data from user input
function getSchedule(){
    schedule1 = document.getElementById("times");
    //document.getElementById("demo").value = schedule1.options[schedule1.selectedIndex].text;
}

//getting tasks from local storage when we load the page
function getTasks(){
    myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null){
        myTasks = schedule1;   
    } else {
         renderTasks();
    } 
}

//rendering tasks to each input when we load the page
/*function renderTasks(){
    $("li").each(function(index) {
         $(this).find("input").val(myTasks[index].task);
    });
}
*/
//storing user tasks to local storage
function setTasks(){
    localStorage.setItem("Tasks", JSON.stringify(schedule1));
}

//button click event stores user input in an array and generates a potential schedule
/*$(document).ready(function() {
    $(".btn").on("click", function(event){
    event.preventDefault();
    $("li").each(function(index) {
        storageArray[index] = $(this).find("input").val();
   });
   console.log("storageArray: ",storageArray) 
    for (i=0; i < schedule1.length; i++){
        schedule1[i].task = storageArray[i];
    }
    setTasks();
})
})
*/
//organize schedule using user's preexisting schedule and to do list with times
function organizeSchedule(){
    if (schedule1 == "null"){
        schedule2.splice(0, 0, storageArray[0]);
} //else if () {} access dropdown elements using jQUery
}





//<button onclick ="document.getElementById('demo').innerHTML = Date()">The time is?</button>
//document.getElementById("demo").innerHTML = fruits.toString();





