$(document).ready(function() {
    
    $(".saveBtn").on("click", function() {
     
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
    function checkTime() {
      
      var timeNow = moment().hours();

      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < timeNow) {
          $(this).addClass("past");
        } 
        else if (blockHour === timeNow) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    checkTime();
    
  let timeEl = $('<p>');
  let dayEl = $('<p>');

    function tick() {

        dayEl.text(moment().format('LL'));
        timeEl.text(moment().format('hh:mm:ssA'));
        $('.jumbotron').append(dayEl);
        $('.jumbotron').append(timeEl);
  
    }

    tick();
    setInterval(tick, 1000);
    setInterval(checkTime, 600000);
  clearBtn.on('click', clear);

    var interval = setInterval(checkTime, 15000);

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  