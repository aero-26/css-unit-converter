alert("Changes Applied");
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

// Conversion of values
form[0].addEventListener("keyup", () => {
  //   Setting the values of other field to none.
  form[1].value = "";
  form[2].value = "";

  //   Creating variables for calculation.
  let pxInput = form[0].value;
  let verify = Number(form[0].value);

  //   Calculation of Values.
  if (verify) {
    px.innerText = `${pxInput} px`;
    rem.innerText = `${pxInput / 16} rem`;
    percent.innerText = `${(pxInput / 16) * 100}%`;
  } else {
    pxInput = 0;
    px.innerText = `${pxInput} px`;
    rem.innerText = `${pxInput} rem`;
    percent.innerHTML = `${pxInput}%`;
  }
});

form[1].addEventListener("keyup", () => {
  //   Setting the values of other field to none.
  form[0].value = "";
  form[2].value = "";

  //   Creating variables for calculation.
  let remInput = form[1].value;
  let verify = Number(form[1].value);

  //   Calculation of Values.
  if (verify) {
    rem.innerText = `${remInput} rem`;
    px.innerText = `${16 * remInput} px`;
    percent.innerText = `${100 * remInput}%`;
  } else {
    remInput = 0;
    px.innerText = `${remInput} px`;
    rem.innerText = `${remInput} px`;
    percent.innerText = `${remInput} px`;
  }
});

form[2].addEventListener("keyup", () => {
  //   Setting the values of other field to none.
  form[0].value = "";
  form[1].value = "";

  //   Creating variables for calculation.
  let percentInput = form[2].value;
  let verify = Number(form[2].value);

  //   Calculation of Values.
  if (verify) {
    percent.innerText = `${percentInput}%`;
    px.innerText = `${(percentInput / 100) * 16} px`;
    rem.innerText = `${(percentInput / 100) * 1} rem`;
  } else {
    percentInput = 0;
    percent.innerText = `${percentInput}%`;
    px.innerText = `${percentInput} px`;
    rem.innerText = `${percentInput} rem`;
  }
});
