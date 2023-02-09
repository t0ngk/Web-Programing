// ข้อ 2.1

function display(msg) {
  let div = document.getElementById("ex01-div");
  div.innerHTML = msg;
}

function showConfirm(callback) {
  // You code here
  if (confirm("Confirm?")) {
    callback("ยืนยันจ้า");
  } else {
    callback("ไม่ดีกว่า");
  }
}

let startElement = document.getElementById("start");
let processElement = document.getElementById("process");
let endElement = document.getElementById("end");

// ข้อ 2.2
function start() {
  // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
  startElement.textContent = "Program started";
  setTimeout(() => {
    processElement.textContent = "Hello World";
    setTimeout(() => {
      endElement.textContent = "Program ended";
    }, 3000);
  }, 2000);
}

let setMinuteElement = document.getElementById("setMinute");
let setSecondElement = document.getElementById("setSecond");
let timeElement = document.getElementById("Time");

setTimerDisplay(0);

function setTimerDisplay(second) {
  let minute = Math.floor(second / 60);
  second = second % 60;
  setMinuteElement.textContent = minute < 10 ? "0" + minute : minute;
  setSecondElement.textContent = second < 10 ? "0" + second : second;
}

// ข้อ 2.3
function stopTime() {
  let second = timeElement.value;
  setTimerDisplay(second);
  let timer = setInterval(() => {
    second--;
    setTimerDisplay(second);
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, timeElement.value * 1000);
}
