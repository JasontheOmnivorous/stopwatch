const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];
const millisecondsTag = document.getElementsByClassName("milliSeconds")[0];

let seconds = 0,
  minutes = 0,
  hours = 0,
  milliSeconds = 0; //same with variables declared separately with let

const startTime = () => {
  milliSeconds += 1;
  if (milliSeconds === 250) {
    milliSeconds = 0;
    seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;

    if (minutes === 60) {
        minutes = 0; 
        hours += 1;
        }
    }
  }

  //ternary operator 
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds; 
  const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hoursText = hours < 10 ? "0" + hours.toString() : hours;
  const milliSecondsText = milliSeconds < 10 ? "0" + milliSeconds.toString() : milliSeconds;
 
  stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText + ":" + milliSecondsText // 00:00:00:00
  
};

//1000 milliseconds in 1 second
//first argument of setInterval method is a function and second is milliseconds, means this method calls the function every one second //

let intervalId  //to solve function scope problem, assign the value produced from setInterval method to this
startButton.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1000);
})

pauseButton.addEventListener("click", () => {
    clearInterval(intervalId);  //pause the setInterval method permanently
})

/*continueButton clears the previous interval(the value remains same because we didn't change the values in these functions)
 and replace it with a new interval */
continueButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1000); 
    
})

restartButton.addEventListener("click", () => {
    clearInterval(intervalId);  
    seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTime, 1000); 
})

let intervalIdMilliseconds 
startButton.addEventListener("click", () => {
  intervalIdMilliseconds = setInterval(startTime, 1);
})

pauseButton.addEventListener("click", () => {
  clearInterval(intervalIdMilliseconds);
})

continueButton.addEventListener("click", () => {
 clearInterval(startTime);
 intervalIdMilliseconds = setInterval(startTime, 1);
})

restartButton.addEventListener("click", () => {
  clearInterval(intervalIdMilliseconds);  
    milliSeconds = 0;
    intervalIdMilliseconds = setInterval(startTime, 1); 
})