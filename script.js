$(document).ready(function(){
    // using moment.js to display the current date
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(currentDate);
    console.log(currentDate);

    
    








    //setting on click event for save button 
    $(".saveBtn").on("click", function (){
        var event = $(this).siblings(".form-control").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(event, time); 

    })












})