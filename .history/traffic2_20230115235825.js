const red = document.querySelector("#red");
const orange = document.querySelector("#orange");
const green = document.querySelector("#green");

function changeLights() {
  setTimeout(() => {
    redLight();
  }, 0);
  setTimeout(() => {
    orangeLight();
  }, 4000);
  setTimeout(() => {
    greenLight();
  }, 7000);
}

function redLight() {
  red.classList.add("active");
  setTimeout(() => {
    red.classList.remove("active");
  }, 4000);
}

function orangeLight() {
  orange.classList.add("active");
  setTimeout(() => {
    orange.classList.remove("active");
  }, 2000);
}

function greenLight() {
  green.classList.add("active");
  setTimeout(() => {
    green.classList.remove("active");
  }, 3000);
}

setInterval(changeLights, 9000);
