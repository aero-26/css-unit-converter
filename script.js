let body = document.querySelector("body");

body.addEventListener("keydown", (event)=>{
    let key = Number(event.key);
    let keycode = event.keyCode;
    console.log(keycode);
    let f12 = Boolean(keycode === 123);
    let f11 = Boolean(keycode === 122);
    let backspace = Boolean(keycode === 8); 
    let period = Boolean(keycode === 190);
    let zero = Boolean(keycode === 48);
   if (!key && !backspace && !period && !zero && !f12 && !f11) {
       event.preventDefault();
   }; 
})


