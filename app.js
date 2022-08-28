var alarm1 = new Audio("alarm.mp3");
function countDown() {
  var inputSeconds = seconds.value;
  if (inputSeconds >= 1) {
    inputSeconds--;
    seconds.value = inputSeconds;
  } else {
    var inputMinutes = minutes.value;
    if (inputMinutes >= 1) {
      inputMinutes--;
      minutes.value = inputMinutes;
      inputSeconds = 60;
    } else {
      var inputHours = hours.value;
      if (inputHours >= 1) {
        inputHours--;
        hours.value = inputHours;
        minutes.value = 60;
        seconds.value = 60;
      } else {
        // alert("Time up!");
        display.innerHTML = "Time out!";
        alarm1.play();
      }
    }
  }
  seconds.value = inputSeconds;

  if (inputHours != 0 || inputMinutes != 0 || inputSeconds != 0) {
    setTimeout(countDown, 1000);
  }
}
