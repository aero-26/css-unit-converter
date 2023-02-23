// Creating variables to pick the elements.
let body = document.querySelector("body");
let form = document.getElementsByClassName("form-control");
let px = document.getElementById("px");
let rem = document.getElementById("rem");
let percent = document.getElementById("percent");

// Restricting invalid inputs/keypresses.
body.addEventListener("keydown", (event) => {
  let key = Number(event.key);
  let keycode = event.keyCode;
  let f12 = Boolean(keycode === 123);
  let f11 = Boolean(keycode === 122);
  let backspace = Boolean(keycode === 8);
  let period = Boolean(keycode === 190);
  let zero = Boolean(keycode === 48);
  if (!key && !backspace && !period && !zero && !f12 && !f11) {
    event.preventDefault();
  }
});

// Calculation of values
form[0].addEventListener("keyup", () => {
  form[1].value = "";
  form[2].value = "";
  let pxInput = form[0].value;
  px.innerText = `${pxInput} px`;
  rem.innerText = `${pxInput / 16} rem`;
  percent.innerText = `${(pxInput / 16) * 100}%`;
});

form[1].addEventListener("keyup", () => {
  form[0].value = "";
  form[2].value = "";
  let remInput = form[1].value;
  rem.innerText = `${remInput} rem`;
  px.innerText = `${16 * remInput} px`;
  percent.innerText = `${100 * remInput}%`;
});

form[2].addEventListener("keyup", () => {
  form[0].value = "";
  form[1].value = "";
  let percentInput = form[2].value;
  percent.innerText = `${percentInput}%`;
  px.innerText = `${(percentInput / 100) * 16} px`;
  rem.innerText = `${(percentInput / 100) * 1} rem`;
  console.log(`vlaue of precent ${percent}`);
});
