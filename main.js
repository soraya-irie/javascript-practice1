$(document).ready(function () {
  const time = document.getElementById("time");
  const start = document.getElementById("start-button");
  const stop = document.getElementById("stop-button");
  const reset = document.getElementById("reset-button");

  let startTime;
  let stopTime = 0;
  let timeoutID;

  function displayTime() {
    const elapsedTime = new Date(Date.now() - startTime + stopTime);
    const hour = elapsedTime.getHours() - 9;
    const minute = elapsedTime.getMinutes();
    const second = elapsedTime.getSeconds();
    const millisecond = Math.floor(elapsedTime.getMilliseconds() / 100);

    time.textContent = `${hour}:${minute}:${second}:${millisecond}`;
    timeoutID = setTimeout(displayTime, 1);
  }

  $("#start-button").click(function () {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    startTime = Date.now();
    displayTime();
  }

  );

  $("#stop-button").click(function () {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    clearTimeout(timeoutID);
    stopTime += Date.now() - startTime;
  }

  );

  $("#reset-button").click(function () {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    time.textContent = "0:0:0:0";
    stopTime = 0;
  }

  );
});

