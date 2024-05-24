let timer;
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0 || isNaN(totalSeconds)) {
    alert("Please enter a valid time.");
    return;
  }

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      return;
    }

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes.toString().padStart(2, "0");
    secondsInput.value = seconds.toString().padStart(2, "0");

    totalSeconds--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hoursInput.value = "0";
  minutesInput.value = "0";
  secondsInput.value = "0";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
