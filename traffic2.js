const red = document.querySelector("#red");
console.log(red);
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

function changeLights() {
  setTimeout(() => {
    redLight();
  }, 0);
  setTimeout(() => {
    yellowLight();
  }, 4000);
  setTimeout(() => {
    greenLight();
  }, 7000);
}

function redLight() {
  red.classList.add("active");
  setTimeout(() => {
    red.classList.remove("active");
  }, 1000);
}

function yellowLight() {
  yellow.classList.add("active");
  setTimeout(() => {
    yellow.classList.remove("active");
  }, 2000);
}

function greenLight() {
  green.classList.add("active");
  setTimeout(() => {
    green.classList.remove("active");
  }, 3000);
}

setInterval(changeLights, 9000);
