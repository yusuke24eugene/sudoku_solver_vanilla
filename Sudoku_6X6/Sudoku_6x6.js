const a1 = document.querySelector(".box-a1");
const a2 = document.querySelector(".box-a2");
const a3 = document.querySelector(".box-a3");
const a4 = document.querySelector(".box-a4");
const a5 = document.querySelector(".box-a5");
const a6 = document.querySelector(".box-a6");
const b1 = document.querySelector(".box-b1");
const b2 = document.querySelector(".box-b2");
const b3 = document.querySelector(".box-b3");
const b4 = document.querySelector(".box-b4");
const b5 = document.querySelector(".box-b5");
const b6 = document.querySelector(".box-b6");
const c1 = document.querySelector(".box-c1");
const c2 = document.querySelector(".box-c2");
const c3 = document.querySelector(".box-c3");
const c4 = document.querySelector(".box-c4");
const c5 = document.querySelector(".box-c5");
const c6 = document.querySelector(".box-c6");
const d1 = document.querySelector(".box-d1");
const d2 = document.querySelector(".box-d2");
const d3 = document.querySelector(".box-d3");
const d4 = document.querySelector(".box-d4");
const d5 = document.querySelector(".box-d5");
const d6 = document.querySelector(".box-d6");
const e1 = document.querySelector(".box-e1");
const e2 = document.querySelector(".box-e2");
const e3 = document.querySelector(".box-e3");
const e4 = document.querySelector(".box-e4");
const e5 = document.querySelector(".box-e5");
const e6 = document.querySelector(".box-e6");
const f1 = document.querySelector(".box-f1");
const f2 = document.querySelector(".box-f2");
const f3 = document.querySelector(".box-f3");
const f4 = document.querySelector(".box-f4");
const f5 = document.querySelector(".box-f5");
const f6 = document.querySelector(".box-f6");
const solve = document.querySelector(".solve");
const notif = document.querySelector(".notif");
const clear = document.querySelector(".clear");
const keyboard = document.querySelector(".keyboard");
const one_key = document.querySelector(".one-key");
const two_key = document.querySelector(".two-key");
const three_key = document.querySelector(".three-key");
const four_key = document.querySelector(".four-key");
const five_key = document.querySelector(".five-key");
const six_key = document.querySelector(".six-key");
const del_key = document.querySelector(".del-key");

a1.addEventListener("click", (e) => {
  a1_click();
});
a2.addEventListener("click", (e) => {
  a2_click();
});
a3.addEventListener("click", (e) => {
  a3_click();
});
a4.addEventListener("click", (e) => {
  a4_click();
});
a5.addEventListener("click", (e) => {
  a5_click();
});
a6.addEventListener("click", (e) => {
  a6_click();
});
b1.addEventListener("click", (e) => {
  b1_click();
});
b2.addEventListener("click", (e) => {
  b2_click();
});
b3.addEventListener("click", (e) => {
  b3_click();
});
b4.addEventListener("click", (e) => {
  b4_click();
});
b5.addEventListener("click", (e) => {
  b5_click();
});
b6.addEventListener("click", (e) => {
  b6_click();
});
c1.addEventListener("click", (e) => {
  c1_click();
});
c2.addEventListener("click", (e) => {
  c2_click();
});
c3.addEventListener("click", (e) => {
  c3_click();
});
c4.addEventListener("click", (e) => {
  c4_click();
});
c5.addEventListener("click", (e) => {
  c5_click();
});
c6.addEventListener("click", (e) => {
  c6_click();
});
d1.addEventListener("click", (e) => {
  d1_click();
});
d2.addEventListener("click", (e) => {
  d2_click();
});
d3.addEventListener("click", (e) => {
  d3_click();
});
d4.addEventListener("click", (e) => {
  d4_click();
});
d5.addEventListener("click", (e) => {
  d5_click();
});
d6.addEventListener("click", (e) => {
  d6_click();
});
e1.addEventListener("click", (e) => {
  e1_click();
});
e2.addEventListener("click", (e) => {
  e2_click();
});
e3.addEventListener("click", (e) => {
  e3_click();
});
e4.addEventListener("click", (e) => {
  e4_click();
});
e5.addEventListener("click", (e) => {
  e5_click();
});
e6.addEventListener("click", (e) => {
  e6_click();
});
f1.addEventListener("click", (e) => {
  f1_click();
});
f2.addEventListener("click", (e) => {
  f2_click();
});
f3.addEventListener("click", (e) => {
  f3_click();
});
f4.addEventListener("click", (e) => {
  f4_click();
});
f5.addEventListener("click", (e) => {
  f5_click();
});
f6.addEventListener("click", (e) => {
  f6_click();
});
solve.addEventListener("click", (e) => {
  solve_sudoku();
});
clear.addEventListener("click", (e) => {
  clear_all();
});
one_key.addEventListener("click", (e) => {
  click_one();
});
two_key.addEventListener("click", (e) => {
  click_two();
});
three_key.addEventListener("click", (e) => {
  click_three();
});
four_key.addEventListener("click", (e) => {
  click_four();
});
five_key.addEventListener("click", (e) => {
  click_five();
});
six_key.addEventListener("click", (e) => {
  click_six();
});
del_key.addEventListener("click", (e) => {
  click_del();
});

let click_a1 = false;
let click_a2 = false;
let click_a3 = false;
let click_a4 = false;
let click_a5 = false;
let click_a6 = false;
let click_b1 = false;
let click_b2 = false;
let click_b3 = false;
let click_b4 = false;
let click_b5 = false;
let click_b6 = false;
let click_c1 = false;
let click_c2 = false;
let click_c3 = false;
let click_c4 = false;
let click_c5 = false;
let click_c6 = false;
let click_d1 = false;
let click_d2 = false;
let click_d3 = false;
let click_d4 = false;
let click_d5 = false;
let click_d6 = false;
let click_e1 = false;
let click_e2 = false;
let click_e3 = false;
let click_e4 = false;
let click_e5 = false;
let click_e6 = false;
let click_f1 = false;
let click_f2 = false;
let click_f3 = false;
let click_f4 = false;
let click_f5 = false;
let click_f6 = false;
let key = null;
let random;
let count = 0;
let empty = true;
let repeat = 0;
let valid = false;
let solved = false;

let input_a1 = null;
let input_a2 = null;
let input_a3 = null;
let input_a4 = null;
let input_a5 = null;
let input_a6 = null;
let input_b1 = null;
let input_b2 = null;
let input_b3 = null;
let input_b4 = null;
let input_b5 = null;
let input_b6 = null;
let input_c1 = null;
let input_c2 = null;
let input_c3 = null;
let input_c4 = null;
let input_c5 = null;
let input_c6 = null;
let input_d1 = null;
let input_d2 = null;
let input_d3 = null;
let input_d4 = null;
let input_d5 = null;
let input_d6 = null;
let input_e1 = null;
let input_e2 = null;
let input_e3 = null;
let input_e4 = null;
let input_e5 = null;
let input_e6 = null;
let input_f1 = null;
let input_f2 = null;
let input_f3 = null;
let input_f4 = null;
let input_f5 = null;
let input_f6 = null;

let temp_a1 = false;
let temp_a2 = false;
let temp_a3 = false;
let temp_a4 = false;
let temp_a5 = false;
let temp_a6 = false;
let temp_b1 = false;
let temp_b2 = false;
let temp_b3 = false;
let temp_b4 = false;
let temp_b5 = false;
let temp_b6 = false;
let temp_c1 = false;
let temp_c2 = false;
let temp_c3 = false;
let temp_c4 = false;
let temp_c5 = false;
let temp_c6 = false;
let temp_d1 = false;
let temp_d2 = false;
let temp_d3 = false;
let temp_d4 = false;
let temp_d5 = false;
let temp_d6 = false;
let temp_e1 = false;
let temp_e2 = false;
let temp_e3 = false;
let temp_e4 = false;
let temp_e5 = false;
let temp_e6 = false;
let temp_f1 = false;
let temp_f2 = false;
let temp_f3 = false;
let temp_f4 = false;
let temp_f5 = false;
let temp_f6 = false;

let possible_a1 = 6;
let possible_a2 = 6;
let possible_a3 = 6;
let possible_a4 = 6;
let possible_a5 = 6;
let possible_a6 = 6;
let possible_b1 = 6;
let possible_b2 = 6;
let possible_b3 = 6;
let possible_b4 = 6;
let possible_b5 = 6;
let possible_b6 = 6;
let possible_c1 = 6;
let possible_c2 = 6;
let possible_c3 = 6;
let possible_c4 = 6;
let possible_c5 = 6;
let possible_c6 = 6;
let possible_d1 = 6;
let possible_d2 = 6;
let possible_d3 = 6;
let possible_d4 = 6;
let possible_d5 = 6;
let possible_d6 = 6;
let possible_e1 = 6;
let possible_e2 = 6;
let possible_e3 = 6;
let possible_e4 = 6;
let possible_e5 = 6;
let possible_e6 = 6;
let possible_f1 = 6;
let possible_f2 = 6;
let possible_f3 = 6;
let possible_f4 = 6;
let possible_f5 = 6;
let possible_f6 = 6;

function key_click() {
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "Backspace" ||
    key === "Delete"
  )
    valid = true;

  if (click_a1 === true && temp_a1 === false) {
    if (
      input_a2 !== key &&
      input_a3 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_c1 !== key &&
      input_c4 !== key &&
      input_e1 !== key &&
      input_e4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a1.innerHTML = key;
      a1.style.color = "black";
      a1.style.background = "whitesmoke";
      click_a1 = false;
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a1 !== null) {
        a1.innerHTML = "";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a1 !== null) {
        a1.innerHTML = "";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a2 === true && temp_a2 === false) {
    if (
      input_a1 !== key &&
      input_a3 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_c2 !== key &&
      input_c5 !== key &&
      input_e2 !== key &&
      input_e5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a2.innerHTML = key;
      a2.style.color = "black";
      a2.style.background = "whitesmoke";
      click_a2 = false;
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a2 !== null) {
        a2.innerHTML = "";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a2 !== null) {
        a2.innerHTML = "";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a3 === true && temp_a3 === false) {
    if (
      input_a1 !== key &&
      input_a2 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_c3 !== key &&
      input_c6 !== key &&
      input_e3 !== key &&
      input_e6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a3.innerHTML = key;
      a3.style.color = "black";
      a3.style.background = "whitesmoke";
      click_a3 = false;
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a3 !== null) {
        a3.innerHTML = "";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a3 !== null) {
        a3.innerHTML = "";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a4 === true && temp_a4 === false) {
    if (
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_c1 !== key &&
      input_c4 !== key &&
      input_e1 !== key &&
      input_e4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a4.innerHTML = key;
      a4.style.color = "black";
      a4.style.background = "whitesmoke";
      click_a4 = false;
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a4 !== null) {
        a4.innerHTML = "";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a4 !== null) {
        a4.innerHTML = "";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a5 === true && temp_a5 === false) {
    if (
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_a4 !== key &&
      input_a6 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_c2 !== key &&
      input_c5 !== key &&
      input_e2 !== key &&
      input_e5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a5.innerHTML = key;
      a5.style.color = "black";
      a5.style.background = "whitesmoke";
      click_a5 = false;
      notif.style.visibility = "hidden";
      input_a5 = a5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a5 !== null) {
        a5.innerHTML = "";
        a5.style.color = "black";
        a5.style.background = "whitesmoke";
        click_a5 = false;
        notif.style.visibility = "hidden";
        input_a5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a5 !== null) {
        a5.innerHTML = "";
        a5.style.color = "black";
        a5.style.background = "whitesmoke";
        click_a5 = false;
        notif.style.visibility = "hidden";
        input_a5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a6 === true && temp_a6 === false) {
    if (
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_c3 !== key &&
      input_c6 !== key &&
      input_e3 !== key &&
      input_e6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      a6.innerHTML = key;
      a6.style.color = "black";
      a6.style.background = "whitesmoke";
      click_a6 = false;
      notif.style.visibility = "hidden";
      input_a6 = a6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_a6 !== null) {
        a6.innerHTML = "";
        a6.style.color = "black";
        a6.style.background = "whitesmoke";
        click_a6 = false;
        notif.style.visibility = "hidden";
        input_a6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_a6 !== null) {
        a6.innerHTML = "";
        a6.style.color = "black";
        a6.style.background = "whitesmoke";
        click_a6 = false;
        notif.style.visibility = "hidden";
        input_a6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b1 === true && temp_b1 === false) {
    if (
      input_b2 !== key &&
      input_b3 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_d1 !== key &&
      input_d4 !== key &&
      input_f1 !== key &&
      input_f4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b1.innerHTML = key;
      b1.style.color = "black";
      b1.style.background = "whitesmoke";
      click_b1 = false;
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b1 !== null) {
        b1.innerHTML = "";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b1 !== null) {
        b1.innerHTML = "";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b2 === true && temp_b2 === false) {
    if (
      input_b1 !== key &&
      input_b3 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_d2 !== key &&
      input_d5 !== key &&
      input_f2 !== key &&
      input_f5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b2.innerHTML = key;
      b2.style.color = "black";
      b2.style.background = "whitesmoke";
      click_b2 = false;
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b2 !== null) {
        b2.innerHTML = "";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b2 !== null) {
        b2.innerHTML = "";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b3 === true && temp_b3 === false) {
    if (
      input_b1 !== key &&
      input_b2 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_a1 !== key &&
      input_a2 !== key &&
      input_a3 !== key &&
      input_d3 !== key &&
      input_d6 !== key &&
      input_f3 !== key &&
      input_f6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b3.innerHTML = key;
      b3.style.color = "black";
      b3.style.background = "whitesmoke";
      click_b3 = false;
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b3 !== null) {
        b3.innerHTML = "";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b3 !== null) {
        b3.innerHTML = "";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b4 === true && temp_b4 === false) {
    if (
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_b5 !== key &&
      input_b6 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_d1 !== key &&
      input_d4 !== key &&
      input_f1 !== key &&
      input_f4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b4.innerHTML = key;
      b4.style.color = "black";
      b4.style.background = "whitesmoke";
      click_b4 = false;
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b4 !== null) {
        b4.innerHTML = "";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b4 !== null) {
        b4.innerHTML = "";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b5 === true && temp_b5 === false) {
    if (
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_b4 !== key &&
      input_b6 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_d2 !== key &&
      input_d5 !== key &&
      input_f2 !== key &&
      input_f5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b5.innerHTML = key;
      b5.style.color = "black";
      b5.style.background = "whitesmoke";
      click_b5 = false;
      notif.style.visibility = "hidden";
      input_b5 = b5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b5 !== null) {
        b5.innerHTML = "";
        b5.style.color = "black";
        b5.style.background = "whitesmoke";
        click_b5 = false;
        notif.style.visibility = "hidden";
        input_b5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b5 !== null) {
        b5.innerHTML = "";
        b5.style.color = "black";
        b5.style.background = "whitesmoke";
        click_b5 = false;
        notif.style.visibility = "hidden";
        input_b5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b6 === true && temp_b6 === false) {
    if (
      input_b1 !== key &&
      input_b2 !== key &&
      input_b3 !== key &&
      input_b4 !== key &&
      input_b5 !== key &&
      input_a4 !== key &&
      input_a5 !== key &&
      input_a6 !== key &&
      input_d3 !== key &&
      input_d6 !== key &&
      input_f3 !== key &&
      input_f6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      b6.innerHTML = key;
      b6.style.color = "black";
      b6.style.background = "whitesmoke";
      click_b6 = false;
      notif.style.visibility = "hidden";
      input_b6 = b6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_b6 !== null) {
        b6.innerHTML = "";
        b6.style.color = "black";
        b6.style.background = "whitesmoke";
        click_b6 = false;
        notif.style.visibility = "hidden";
        input_b6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_b6 !== null) {
        b6.innerHTML = "";
        b6.style.color = "black";
        b6.style.background = "whitesmoke";
        click_b6 = false;
        notif.style.visibility = "hidden";
        input_b6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c1 === true && temp_c1 === false) {
    if (
      input_c2 !== key &&
      input_c3 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_a1 !== key &&
      input_a4 !== key &&
      input_e1 !== key &&
      input_e4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c1.innerHTML = key;
      c1.style.color = "black";
      c1.style.background = "whitesmoke";
      click_c1 = false;
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c1 !== null) {
        c1.innerHTML = "";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c1 !== null) {
        c1.innerHTML = "";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c2 === true && temp_c2 === false) {
    if (
      input_c1 !== key &&
      input_c3 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_a2 !== key &&
      input_a5 !== key &&
      input_e2 !== key &&
      input_e5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c2.innerHTML = key;
      c2.style.color = "black";
      c2.style.background = "whitesmoke";
      click_c2 = false;
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c2 !== null) {
        c2.innerHTML = "";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c2 !== null) {
        c2.innerHTML = "";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c3 === true && temp_c3 === false) {
    if (
      input_c1 !== key &&
      input_c2 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_a3 !== key &&
      input_a6 !== key &&
      input_e3 !== key &&
      input_e6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c3.innerHTML = key;
      c3.style.color = "black";
      c3.style.background = "whitesmoke";
      click_c3 = false;
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c3 !== null) {
        c3.innerHTML = "";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c3 !== null) {
        c3.innerHTML = "";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c4 === true && temp_c4 === false) {
    if (
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_a1 !== key &&
      input_a4 !== key &&
      input_e1 !== key &&
      input_e4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c4.innerHTML = key;
      c4.style.color = "black";
      c4.style.background = "whitesmoke";
      click_c4 = false;
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c4 !== null) {
        c4.innerHTML = "";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c4 !== null) {
        c4.innerHTML = "";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c5 === true && temp_c5 === false) {
    if (
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_c4 !== key &&
      input_c6 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_a2 !== key &&
      input_a5 !== key &&
      input_e2 !== key &&
      input_e5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c5.innerHTML = key;
      c5.style.color = "black";
      c5.style.background = "whitesmoke";
      click_c5 = false;
      notif.style.visibility = "hidden";
      input_c5 = c5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c5 !== null) {
        c5.innerHTML = "";
        c5.style.color = "black";
        c5.style.background = "whitesmoke";
        click_c5 = false;
        notif.style.visibility = "hidden";
        input_c5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c5 !== null) {
        c5.innerHTML = "";
        c5.style.color = "black";
        c5.style.background = "whitesmoke";
        click_c5 = false;
        notif.style.visibility = "hidden";
        input_c5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c6 === true && temp_c6 === false) {
    if (
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_a3 !== key &&
      input_a6 !== key &&
      input_e3 !== key &&
      input_e6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      c6.innerHTML = key;
      c6.style.color = "black";
      c6.style.background = "whitesmoke";
      click_c6 = false;
      notif.style.visibility = "hidden";
      input_c6 = c6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_c6 !== null) {
        c6.innerHTML = "";
        c6.style.color = "black";
        c6.style.background = "whitesmoke";
        click_c6 = false;
        notif.style.visibility = "hidden";
        input_c6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_c6 !== null) {
        c6.innerHTML = "";
        c6.style.color = "black";
        c6.style.background = "whitesmoke";
        click_c6 = false;
        notif.style.visibility = "hidden";
        input_c6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d1 === true && temp_d1 === false) {
    if (
      input_d2 !== key &&
      input_d3 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_b1 !== key &&
      input_b4 !== key &&
      input_f1 !== key &&
      input_f4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d1.innerHTML = key;
      d1.style.color = "black";
      d1.style.background = "whitesmoke";
      click_d1 = false;
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d1 !== null) {
        d1.innerHTML = "";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d1 !== null) {
        d1.innerHTML = "";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d2 === true && temp_d2 === false) {
    if (
      input_d1 !== key &&
      input_d3 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_b2 !== key &&
      input_b5 !== key &&
      input_f2 !== key &&
      input_f5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d2.innerHTML = key;
      d2.style.color = "black";
      d2.style.background = "whitesmoke";
      click_d2 = false;
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d2 !== null) {
        d2.innerHTML = "";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d2 !== null) {
        d2.innerHTML = "";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d3 === true && temp_d3 === false) {
    if (
      input_d1 !== key &&
      input_d2 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_c1 !== key &&
      input_c2 !== key &&
      input_c3 !== key &&
      input_b3 !== key &&
      input_b6 !== key &&
      input_f3 !== key &&
      input_f6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d3.innerHTML = key;
      d3.style.color = "black";
      d3.style.background = "whitesmoke";
      click_d3 = false;
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d3 !== null) {
        d3.innerHTML = "";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d3 !== null) {
        d3.innerHTML = "";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d4 === true && temp_d4 === false) {
    if (
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_d5 !== key &&
      input_d6 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_b1 !== key &&
      input_b4 !== key &&
      input_f1 !== key &&
      input_f4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d4.innerHTML = key;
      d4.style.color = "black";
      d4.style.background = "whitesmoke";
      click_d4 = false;
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d4 !== null) {
        d4.innerHTML = "";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d4 !== null) {
        d4.innerHTML = "";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d5 === true && temp_d5 === false) {
    if (
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_d4 !== key &&
      input_d6 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_b2 !== key &&
      input_b5 !== key &&
      input_f2 !== key &&
      input_f5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d5.innerHTML = key;
      d5.style.color = "black";
      d5.style.background = "whitesmoke";
      click_d5 = false;
      notif.style.visibility = "hidden";
      input_d5 = d5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d5 !== null) {
        d5.innerHTML = "";
        d5.style.color = "black";
        d5.style.background = "whitesmoke";
        click_d5 = false;
        notif.style.visibility = "hidden";
        input_d5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d5 !== null) {
        d5.innerHTML = "";
        d5.style.color = "black";
        d5.style.background = "whitesmoke";
        click_d5 = false;
        notif.style.visibility = "hidden";
        input_d5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d6 === true && temp_d6 === false) {
    if (
      input_d1 !== key &&
      input_d2 !== key &&
      input_d3 !== key &&
      input_d4 !== key &&
      input_d5 !== key &&
      input_c4 !== key &&
      input_c5 !== key &&
      input_c6 !== key &&
      input_b3 !== key &&
      input_b6 !== key &&
      input_f3 !== key &&
      input_f6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      d6.innerHTML = key;
      d6.style.color = "black";
      d6.style.background = "whitesmoke";
      click_d6 = false;
      notif.style.visibility = "hidden";
      input_d6 = d6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_d6 !== null) {
        d6.innerHTML = "";
        d6.style.color = "black";
        d6.style.background = "whitesmoke";
        click_d6 = false;
        notif.style.visibility = "hidden";
        input_d6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_d6 !== null) {
        d6.innerHTML = "";
        d6.style.color = "black";
        d6.style.background = "whitesmoke";
        click_d6 = false;
        notif.style.visibility = "hidden";
        input_d6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e1 === true && temp_e1 === false) {
    if (
      input_e2 !== key &&
      input_e3 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_a1 !== key &&
      input_a4 !== key &&
      input_c1 !== key &&
      input_c4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e1.innerHTML = key;
      e1.style.color = "black";
      e1.style.background = "whitesmoke";
      click_e1 = false;
      notif.style.visibility = "hidden";
      input_e1 = e1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e1 !== null) {
        e1.innerHTML = "";
        e1.style.color = "black";
        e1.style.background = "whitesmoke";
        click_e1 = false;
        notif.style.visibility = "hidden";
        input_e1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e1 !== null) {
        e1.innerHTML = "";
        e1.style.color = "black";
        e1.style.background = "whitesmoke";
        click_e1 = false;
        notif.style.visibility = "hidden";
        input_e1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e2 === true && temp_e2 === false) {
    if (
      input_e1 !== key &&
      input_e3 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_a2 !== key &&
      input_a5 !== key &&
      input_c2 !== key &&
      input_c5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e2.innerHTML = key;
      e2.style.color = "black";
      e2.style.background = "whitesmoke";
      click_e2 = false;
      notif.style.visibility = "hidden";
      input_e2 = e2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e2 !== null) {
        e2.innerHTML = "";
        e2.style.color = "black";
        e2.style.background = "whitesmoke";
        click_e2 = false;
        notif.style.visibility = "hidden";
        input_e2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e2 !== null) {
        e2.innerHTML = "";
        e2.style.color = "black";
        e2.style.background = "whitesmoke";
        click_e2 = false;
        notif.style.visibility = "hidden";
        input_e2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e3 === true && temp_e3 === false) {
    if (
      input_e1 !== key &&
      input_e2 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_a3 !== key &&
      input_a6 !== key &&
      input_c3 !== key &&
      input_c6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e3.innerHTML = key;
      e3.style.color = "black";
      e3.style.background = "whitesmoke";
      click_e3 = false;
      notif.style.visibility = "hidden";
      input_e3 = e3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e3 !== null) {
        e3.innerHTML = "";
        e3.style.color = "black";
        e3.style.background = "whitesmoke";
        click_e3 = false;
        notif.style.visibility = "hidden";
        input_e3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e3 !== null) {
        e3.innerHTML = "";
        e3.style.color = "black";
        e3.style.background = "whitesmoke";
        click_e3 = false;
        notif.style.visibility = "hidden";
        input_e3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e4 === true && temp_e4 === false) {
    if (
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_a1 !== key &&
      input_a4 !== key &&
      input_c1 !== key &&
      input_c4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e4.innerHTML = key;
      e4.style.color = "black";
      e4.style.background = "whitesmoke";
      click_e4 = false;
      notif.style.visibility = "hidden";
      input_e4 = e4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e4 !== null) {
        e4.innerHTML = "";
        e4.style.color = "black";
        e4.style.background = "whitesmoke";
        click_e4 = false;
        notif.style.visibility = "hidden";
        input_e4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e4 !== null) {
        e4.innerHTML = "";
        e4.style.color = "black";
        e4.style.background = "whitesmoke";
        click_e4 = false;
        notif.style.visibility = "hidden";
        input_e4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e5 === true && temp_e5 === false) {
    if (
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_e4 !== key &&
      input_e6 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_a2 !== key &&
      input_a5 !== key &&
      input_c2 !== key &&
      input_c5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e5.innerHTML = key;
      e5.style.color = "black";
      e5.style.background = "whitesmoke";
      click_e5 = false;
      notif.style.visibility = "hidden";
      input_e5 = e5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e5 !== null) {
        e5.innerHTML = "";
        e5.style.color = "black";
        e5.style.background = "whitesmoke";
        click_e5 = false;
        notif.style.visibility = "hidden";
        input_e5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e5 !== null) {
        e5.innerHTML = "";
        e5.style.color = "black";
        e5.style.background = "whitesmoke";
        click_e5 = false;
        notif.style.visibility = "hidden";
        input_e5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_e6 === true && temp_e6 === false) {
    if (
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_a3 !== key &&
      input_a6 !== key &&
      input_c3 !== key &&
      input_c6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      e6.innerHTML = key;
      e6.style.color = "black";
      e6.style.background = "whitesmoke";
      click_e6 = false;
      notif.style.visibility = "hidden";
      input_e6 = e6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_e6 !== null) {
        e6.innerHTML = "";
        e6.style.color = "black";
        e6.style.background = "whitesmoke";
        click_e6 = false;
        notif.style.visibility = "hidden";
        input_e6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_e6 !== null) {
        e6.innerHTML = "";
        e6.style.color = "black";
        e6.style.background = "whitesmoke";
        click_e6 = false;
        notif.style.visibility = "hidden";
        input_e6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f1 === true && temp_f1 === false) {
    if (
      input_f2 !== key &&
      input_f3 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_b1 !== key &&
      input_b4 !== key &&
      input_d1 !== key &&
      input_d4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f1.innerHTML = key;
      f1.style.color = "black";
      f1.style.background = "whitesmoke";
      click_f1 = false;
      notif.style.visibility = "hidden";
      input_f1 = f1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f1 !== null) {
        f1.innerHTML = "";
        f1.style.color = "black";
        f1.style.background = "whitesmoke";
        click_f1 = false;
        notif.style.visibility = "hidden";
        input_f1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f1 !== null) {
        f1.innerHTML = "";
        f1.style.color = "black";
        f1.style.background = "whitesmoke";
        click_f1 = false;
        notif.style.visibility = "hidden";
        input_f1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f2 === true && temp_f2 === false) {
    if (
      input_f1 !== key &&
      input_f3 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_b2 !== key &&
      input_b5 !== key &&
      input_d2 !== key &&
      input_d5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f2.innerHTML = key;
      f2.style.color = "black";
      f2.style.background = "whitesmoke";
      click_f2 = false;
      notif.style.visibility = "hidden";
      input_f2 = f2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f2 !== null) {
        f2.innerHTML = "";
        f2.style.color = "black";
        f2.style.background = "whitesmoke";
        click_f2 = false;
        notif.style.visibility = "hidden";
        input_f2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f2 !== null) {
        f2.innerHTML = "";
        f2.style.color = "black";
        f2.style.background = "whitesmoke";
        click_f2 = false;
        notif.style.visibility = "hidden";
        input_f2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f3 === true && temp_f3 === false) {
    if (
      input_f1 !== key &&
      input_f2 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_e1 !== key &&
      input_e2 !== key &&
      input_e3 !== key &&
      input_b3 !== key &&
      input_b6 !== key &&
      input_d3 !== key &&
      input_d6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f3.innerHTML = key;
      f3.style.color = "black";
      f3.style.background = "whitesmoke";
      click_f3 = false;
      notif.style.visibility = "hidden";
      input_f3 = f3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f3 !== null) {
        f3.innerHTML = "";
        f3.style.color = "black";
        f3.style.background = "whitesmoke";
        click_f3 = false;
        notif.style.visibility = "hidden";
        input_f3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f3 !== null) {
        f3.innerHTML = "";
        f3.style.color = "black";
        f3.style.background = "whitesmoke";
        click_f3 = false;
        notif.style.visibility = "hidden";
        input_f3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f4 === true && temp_f4 === false) {
    if (
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_f5 !== key &&
      input_f6 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_b1 !== key &&
      input_b4 !== key &&
      input_d1 !== key &&
      input_d4 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f4.innerHTML = key;
      f4.style.color = "black";
      f4.style.background = "whitesmoke";
      click_f4 = false;
      notif.style.visibility = "hidden";
      input_f4 = f4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f4 !== null) {
        f4.innerHTML = "";
        f4.style.color = "black";
        f4.style.background = "whitesmoke";
        click_f4 = false;
        notif.style.visibility = "hidden";
        input_f4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f4 !== null) {
        f4.innerHTML = "";
        f4.style.color = "black";
        f4.style.background = "whitesmoke";
        click_f4 = false;
        notif.style.visibility = "hidden";
        input_f4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f5 === true && temp_f5 === false) {
    if (
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_f4 !== key &&
      input_f6 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_b2 !== key &&
      input_b5 !== key &&
      input_d2 !== key &&
      input_d5 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f5.innerHTML = key;
      f5.style.color = "black";
      f5.style.background = "whitesmoke";
      click_f5 = false;
      notif.style.visibility = "hidden";
      input_f5 = f5.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f5 !== null) {
        f5.innerHTML = "";
        f5.style.color = "black";
        f5.style.background = "whitesmoke";
        click_f5 = false;
        notif.style.visibility = "hidden";
        input_f5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f5 !== null) {
        f5.innerHTML = "";
        f5.style.color = "black";
        f5.style.background = "whitesmoke";
        click_f5 = false;
        notif.style.visibility = "hidden";
        input_f5 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_f6 === true && temp_f6 === false) {
    if (
      input_f1 !== key &&
      input_f2 !== key &&
      input_f3 !== key &&
      input_f4 !== key &&
      input_f5 !== key &&
      input_e4 !== key &&
      input_e5 !== key &&
      input_e6 !== key &&
      input_b3 !== key &&
      input_b6 !== key &&
      input_d3 !== key &&
      input_d6 !== key &&
      valid === true &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      f6.innerHTML = key;
      f6.style.color = "black";
      f6.style.background = "whitesmoke";
      click_f6 = false;
      notif.style.visibility = "hidden";
      input_f6 = f6.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (valid === true && key === "Backspace") {
      if (input_f6 !== null) {
        f6.innerHTML = "";
        f6.style.color = "black";
        f6.style.background = "whitesmoke";
        click_f6 = false;
        notif.style.visibility = "hidden";
        input_f6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === true && key === "Delete") {
      if (input_f6 !== null) {
        f6.innerHTML = "";
        f6.style.color = "black";
        f6.style.background = "whitesmoke";
        click_f6 = false;
        notif.style.visibility = "hidden";
        input_f6 = null;
        keyboard.style.visibility = "hidden";
      }
    } else if (valid === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (
    click_a1 === false &&
    click_a2 === false &&
    click_a3 === false &&
    click_a4 === false &&
    click_a5 === false &&
    click_a6 === false &&
    click_b1 === false &&
    click_b2 === false &&
    click_b3 === false &&
    click_b4 === false &&
    click_b5 === false &&
    click_b6 === false &&
    click_c1 === false &&
    click_c2 === false &&
    click_c3 === false &&
    click_c4 === false &&
    click_c5 === false &&
    click_c6 === false &&
    click_d1 === false &&
    click_d2 === false &&
    click_d3 === false &&
    click_d4 === false &&
    click_d5 === false &&
    click_d6 === false &&
    click_e1 === false &&
    click_e2 === false &&
    click_e3 === false &&
    click_e4 === false &&
    click_e5 === false &&
    click_e6 === false &&
    click_f1 === false &&
    click_f2 === false &&
    click_f3 === false &&
    click_f4 === false &&
    click_f5 === false &&
    click_f6 === false
  ) {
    clear_temp();

    if (a1.style.color === "red") a1.style.color = "black";
    if (a2.style.color === "red") a2.style.color = "black";
    if (a3.style.color === "red") a3.style.color = "black";
    if (a4.style.color === "red") a4.style.color = "black";
    if (a5.style.color === "red") a5.style.color = "black";
    if (a6.style.color === "red") a6.style.color = "black";
    if (b1.style.color === "red") b1.style.color = "black";
    if (b2.style.color === "red") b2.style.color = "black";
    if (b3.style.color === "red") b3.style.color = "black";
    if (b4.style.color === "red") b4.style.color = "black";
    if (b5.style.color === "red") b5.style.color = "black";
    if (b6.style.color === "red") b6.style.color = "black";
    if (c1.style.color === "red") c1.style.color = "black";
    if (c2.style.color === "red") c2.style.color = "black";
    if (c3.style.color === "red") c3.style.color = "black";
    if (c4.style.color === "red") c4.style.color = "black";
    if (c5.style.color === "red") c5.style.color = "black";
    if (c6.style.color === "red") c6.style.color = "black";
    if (d1.style.color === "red") d1.style.color = "black";
    if (d2.style.color === "red") d2.style.color = "black";
    if (d3.style.color === "red") d3.style.color = "black";
    if (d4.style.color === "red") d4.style.color = "black";
    if (d5.style.color === "red") d5.style.color = "black";
    if (d6.style.color === "red") d6.style.color = "black";
    if (e1.style.color === "red") e1.style.color = "black";
    if (e2.style.color === "red") e2.style.color = "black";
    if (e3.style.color === "red") e3.style.color = "black";
    if (e4.style.color === "red") e4.style.color = "black";
    if (e5.style.color === "red") e5.style.color = "black";
    if (e6.style.color === "red") e6.style.color = "black";
    if (d1.style.color === "red") d1.style.color = "black";
    if (d2.style.color === "red") d2.style.color = "black";
    if (d3.style.color === "red") d3.style.color = "black";
    if (d4.style.color === "red") d4.style.color = "black";
    if (d5.style.color === "red") d5.style.color = "black";
    if (d6.style.color === "red") d6.style.color = "black";

    if (a1.style.color === "black") temp_a1 = false;
    if (a2.style.color === "black") temp_a2 = false;
    if (a3.style.color === "black") temp_a3 = false;
    if (a4.style.color === "black") temp_a4 = false;
    if (a5.style.color === "black") temp_a5 = false;
    if (a6.style.color === "black") temp_a6 = false;
    if (b1.style.color === "black") temp_b1 = false;
    if (b2.style.color === "black") temp_b2 = false;
    if (b3.style.color === "black") temp_b3 = false;
    if (b4.style.color === "black") temp_b4 = false;
    if (b5.style.color === "black") temp_b5 = false;
    if (b6.style.color === "black") temp_b6 = false;
    if (c1.style.color === "black") temp_c1 = false;
    if (c2.style.color === "black") temp_c2 = false;
    if (c3.style.color === "black") temp_c3 = false;
    if (c4.style.color === "black") temp_c4 = false;
    if (c5.style.color === "black") temp_c5 = false;
    if (c6.style.color === "black") temp_c6 = false;
    if (d1.style.color === "black") temp_d1 = false;
    if (d2.style.color === "black") temp_d2 = false;
    if (d3.style.color === "black") temp_d3 = false;
    if (d4.style.color === "black") temp_d4 = false;
    if (d5.style.color === "black") temp_d5 = false;
    if (d6.style.color === "black") temp_d6 = false;
    if (e1.style.color === "black") temp_e1 = false;
    if (e2.style.color === "black") temp_e2 = false;
    if (e3.style.color === "black") temp_e3 = false;
    if (e4.style.color === "black") temp_e4 = false;
    if (e5.style.color === "black") temp_e5 = false;
    if (e6.style.color === "black") temp_e6 = false;
    if (f1.style.color === "black") temp_f1 = false;
    if (f2.style.color === "black") temp_f2 = false;
    if (f3.style.color === "black") temp_f3 = false;
    if (f4.style.color === "black") temp_f4 = false;
    if (f5.style.color === "black") temp_f5 = false;
    if (f6.style.color === "black") temp_f6 = false;

    blue_font();

    solving();

    if (input_a1 === null) a1.style.color = "black";
    if (input_a2 === null) a2.style.color = "black";
    if (input_a3 === null) a3.style.color = "black";
    if (input_a4 === null) a4.style.color = "black";
    if (input_a5 === null) a5.style.color = "black";
    if (input_a6 === null) a6.style.color = "black";
    if (input_b1 === null) b1.style.color = "black";
    if (input_b2 === null) b2.style.color = "black";
    if (input_b3 === null) b3.style.color = "black";
    if (input_b4 === null) b4.style.color = "black";
    if (input_b5 === null) b5.style.color = "black";
    if (input_b6 === null) b6.style.color = "black";
    if (input_c1 === null) c1.style.color = "black";
    if (input_c2 === null) c2.style.color = "black";
    if (input_c3 === null) c3.style.color = "black";
    if (input_c4 === null) c4.style.color = "black";
    if (input_c5 === null) c5.style.color = "black";
    if (input_c6 === null) c6.style.color = "black";
    if (input_d1 === null) d1.style.color = "black";
    if (input_d2 === null) d2.style.color = "black";
    if (input_d3 === null) d3.style.color = "black";
    if (input_d4 === null) d4.style.color = "black";
    if (input_d5 === null) d5.style.color = "black";
    if (input_d6 === null) d6.style.color = "black";
    if (input_e1 === null) e1.style.color = "black";
    if (input_e2 === null) e2.style.color = "black";
    if (input_e3 === null) e3.style.color = "black";
    if (input_e4 === null) e4.style.color = "black";
    if (input_e5 === null) e5.style.color = "black";
    if (input_e6 === null) e6.style.color = "black";
    if (input_f1 === null) f1.style.color = "black";
    if (input_f2 === null) f2.style.color = "black";
    if (input_f3 === null) f3.style.color = "black";
    if (input_f4 === null) f4.style.color = "black";
    if (input_f5 === null) f5.style.color = "black";
    if (input_f6 === null) f6.style.color = "black";

    if (a1.style.color === "blue") temp_a1 = true;
    if (a2.style.color === "blue") temp_a2 = true;
    if (a3.style.color === "blue") temp_a3 = true;
    if (a4.style.color === "blue") temp_a4 = true;
    if (a5.style.color === "blue") temp_a5 = true;
    if (a6.style.color === "blue") temp_a6 = true;
    if (b1.style.color === "blue") temp_b1 = true;
    if (b2.style.color === "blue") temp_b2 = true;
    if (b3.style.color === "blue") temp_b3 = true;
    if (b4.style.color === "blue") temp_b4 = true;
    if (b5.style.color === "blue") temp_b5 = true;
    if (b6.style.color === "blue") temp_b6 = true;
    if (c1.style.color === "blue") temp_c1 = true;
    if (c2.style.color === "blue") temp_c2 = true;
    if (c3.style.color === "blue") temp_c3 = true;
    if (c4.style.color === "blue") temp_c4 = true;
    if (c5.style.color === "blue") temp_c5 = true;
    if (c6.style.color === "blue") temp_c6 = true;
    if (d1.style.color === "blue") temp_d1 = true;
    if (d2.style.color === "blue") temp_d2 = true;
    if (d3.style.color === "blue") temp_d3 = true;
    if (d4.style.color === "blue") temp_d4 = true;
    if (d5.style.color === "blue") temp_d5 = true;
    if (d6.style.color === "blue") temp_d6 = true;
    if (e1.style.color === "blue") temp_e1 = true;
    if (e2.style.color === "blue") temp_e2 = true;
    if (e3.style.color === "blue") temp_e3 = true;
    if (e4.style.color === "blue") temp_e4 = true;
    if (e5.style.color === "blue") temp_e5 = true;
    if (e6.style.color === "blue") temp_e6 = true;
    if (f1.style.color === "blue") temp_f1 = true;
    if (f2.style.color === "blue") temp_f2 = true;
    if (f3.style.color === "blue") temp_f3 = true;
    if (f4.style.color === "blue") temp_f4 = true;
    if (f5.style.color === "blue") temp_f5 = true;
    if (f6.style.color === "blue") temp_f6 = true;

    input_check();
    if (empty === false) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Solving Ends";
      solved = true;
      solve.innerHTML = "EDIT";
      whitesmoke();
    } else impossible();
  }
}

function click_one() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "1";
    key_click();
  }
}

function click_two() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "2";
    key_click();
  }
}

function click_three() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "3";
    key_click();
  }
}

function click_four() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "4";
    key_click();
  }
}

function click_five() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "5";
    key_click();
  }
}

function click_six() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "6";
    key_click();
  }
}

function click_reset() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_a5 = false;
  click_a6 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_b5 = false;
  click_b6 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_c5 = false;
  click_c6 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  click_d5 = false;
  click_d6 = false;
  click_e1 = false;
  click_e2 = false;
  click_e3 = false;
  click_e4 = false;
  click_e5 = false;
  click_e6 = false;
  click_f1 = false;
  click_f2 = false;
  click_f3 = false;
  click_f4 = false;
  click_f5 = false;
  click_f6 = false;
}

function click_del() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_a5 === true ||
    click_a6 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_b5 === true ||
    click_b6 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_c5 === true ||
    click_c6 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true ||
    click_d5 === true ||
    click_d6 === true ||
    click_e1 === true ||
    click_e2 === true ||
    click_e3 === true ||
    click_e4 === true ||
    click_e5 === true ||
    click_e6 === true ||
    click_f1 === true ||
    click_f2 === true ||
    click_f3 === true ||
    click_f4 === true ||
    click_f5 === true ||
    click_f6 === true
  ) {
    count = 0;
    repeat = 0;
    key = "Backspace";
    key_click();
  }
}

function whitesmoke() {
  a1.style.background = "whitesmoke";
  a2.style.background = "whitesmoke";
  a3.style.background = "whitesmoke";
  a4.style.background = "whitesmoke";
  a5.style.background = "whitesmoke";
  a6.style.background = "whitesmoke";
  b1.style.background = "whitesmoke";
  b2.style.background = "whitesmoke";
  b3.style.background = "whitesmoke";
  b4.style.background = "whitesmoke";
  b5.style.background = "whitesmoke";
  b6.style.background = "whitesmoke";
  c1.style.background = "whitesmoke";
  c2.style.background = "whitesmoke";
  c3.style.background = "whitesmoke";
  c4.style.background = "whitesmoke";
  c5.style.background = "whitesmoke";
  c6.style.background = "whitesmoke";
  d1.style.background = "whitesmoke";
  d2.style.background = "whitesmoke";
  d3.style.background = "whitesmoke";
  d4.style.background = "whitesmoke";
  d5.style.background = "whitesmoke";
  d6.style.background = "whitesmoke";
  e1.style.background = "whitesmoke";
  e2.style.background = "whitesmoke";
  e3.style.background = "whitesmoke";
  e4.style.background = "whitesmoke";
  e5.style.background = "whitesmoke";
  e6.style.background = "whitesmoke";
  f1.style.background = "whitesmoke";
  f2.style.background = "whitesmoke";
  f3.style.background = "whitesmoke";
  f4.style.background = "whitesmoke";
  f5.style.background = "whitesmoke";
  f6.style.background = "whitesmoke";
}

function blue_font() {
  if (input_a1 === null) a1.style.color = "blue";
  if (input_a2 === null) a2.style.color = "blue";
  if (input_a3 === null) a3.style.color = "blue";
  if (input_a4 === null) a4.style.color = "blue";
  if (input_a5 === null) a5.style.color = "blue";
  if (input_a6 === null) a6.style.color = "blue";
  if (input_b1 === null) b1.style.color = "blue";
  if (input_b2 === null) b2.style.color = "blue";
  if (input_b3 === null) b3.style.color = "blue";
  if (input_b4 === null) b4.style.color = "blue";
  if (input_b5 === null) b5.style.color = "blue";
  if (input_b6 === null) b6.style.color = "blue";
  if (input_c1 === null) c1.style.color = "blue";
  if (input_c2 === null) c2.style.color = "blue";
  if (input_c3 === null) c3.style.color = "blue";
  if (input_c4 === null) c4.style.color = "blue";
  if (input_c5 === null) c5.style.color = "blue";
  if (input_c6 === null) c6.style.color = "blue";
  if (input_d1 === null) d1.style.color = "blue";
  if (input_d2 === null) d2.style.color = "blue";
  if (input_d3 === null) d3.style.color = "blue";
  if (input_d4 === null) d4.style.color = "blue";
  if (input_d5 === null) d5.style.color = "blue";
  if (input_d6 === null) d6.style.color = "blue";
  if (input_e1 === null) e1.style.color = "blue";
  if (input_e2 === null) e2.style.color = "blue";
  if (input_e3 === null) e3.style.color = "blue";
  if (input_e4 === null) e4.style.color = "blue";
  if (input_e5 === null) e5.style.color = "blue";
  if (input_e6 === null) e6.style.color = "blue";
  if (input_f1 === null) f1.style.color = "blue";
  if (input_f2 === null) f2.style.color = "blue";
  if (input_f3 === null) f3.style.color = "blue";
  if (input_f4 === null) f4.style.color = "blue";
  if (input_f5 === null) f5.style.color = "blue";
  if (input_f6 === null) f6.style.color = "blue";
}

function temp_reset() {
  temp_a1 = false;
  temp_a2 = false;
  temp_a3 = false;
  temp_a4 = false;
  temp_a5 = false;
  temp_a6 = false;
  temp_b1 = false;
  temp_b2 = false;
  temp_b3 = false;
  temp_b4 = false;
  temp_b5 = false;
  temp_b6 = false;
  temp_c1 = false;
  temp_c2 = false;
  temp_c3 = false;
  temp_c4 = false;
  temp_c5 = false;
  temp_c6 = false;
  temp_d1 = false;
  temp_d2 = false;
  temp_d3 = false;
  temp_d4 = false;
  temp_d5 = false;
  temp_d6 = false;
  temp_e1 = false;
  temp_e2 = false;
  temp_e3 = false;
  temp_e4 = false;
  temp_e5 = false;
  temp_e6 = false;
  temp_f1 = false;
  temp_f2 = false;
  temp_f3 = false;
  temp_f4 = false;
  temp_f5 = false;
  temp_f6 = false;
}

function a1_click() {
  click_reset();
  click_a1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a1 !== null &&
    a1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a1 !== null &&
    a1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a1 !== null &&
    a1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a1 === true && solved === false) {
    whitesmoke();
    a1.style.background = "pink";
  }
  type_key();
}

function a2_click() {
  click_reset();
  click_a2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a2 !== null &&
    a2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a2 !== null &&
    a2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a2 !== null &&
    a2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a2 === true && solved === false) {
    whitesmoke();
    a2.style.background = "pink";
  }
  type_key();
}

function a3_click() {
  click_reset();
  click_a3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a3 !== null &&
    a3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a3 !== null &&
    a3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a3 !== null &&
    a3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a3 === true && solved === false) {
    whitesmoke();
    a3.style.background = "pink";
  }
  type_key();
}

function a4_click() {
  click_reset();
  click_a4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a4 !== null &&
    a4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a4 !== null &&
    a4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a4 !== null &&
    a4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a4 === true && solved === false) {
    whitesmoke();
    a4.style.background = "pink";
  }
  type_key();
}

function a5_click() {
  click_reset();
  click_a5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a5 !== null &&
    a5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a5 !== null &&
    a5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a5 !== null &&
    a5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a5 === true && solved === false) {
    whitesmoke();
    a5.style.background = "pink";
  }
  type_key();
}

function a6_click() {
  click_reset();
  click_a6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_a6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_a6 !== null &&
    a6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a6 !== null &&
    a6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_a6 !== null &&
    a6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_a6 === true && solved === false) {
    whitesmoke();
    a6.style.background = "pink";
  }
  type_key();
}

function b1_click() {
  click_reset();
  click_b1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b1 !== null &&
    b1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b1 !== null &&
    b1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b1 !== null &&
    b1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b1 === true && solved === false) {
    whitesmoke();
    b1.style.background = "pink";
  }
  type_key();
}

function b2_click() {
  click_reset();
  click_b2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b2 !== null &&
    b2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b2 !== null &&
    b2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b2 !== null &&
    b2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b2 === true && solved === false) {
    whitesmoke();
    b2.style.background = "pink";
  }
  type_key();
}

function b3_click() {
  click_reset();
  click_b3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b3 !== null &&
    b3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b3 !== null &&
    b3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b3 !== null &&
    b3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b3 === true && solved === false) {
    whitesmoke();
    b3.style.background = "pink";
  }
  type_key();
}

function b4_click() {
  click_reset();
  click_b4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b4 !== null &&
    b4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b4 !== null &&
    b4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b4 !== null &&
    b4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b4 === true && solved === false) {
    whitesmoke();
    b4.style.background = "pink";
  }
  type_key();
}

function b5_click() {
  click_reset();
  click_b5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b5 !== null &&
    b5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b5 !== null &&
    b5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b5 !== null &&
    b5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b5 === true && solved === false) {
    whitesmoke();
    b5.style.background = "pink";
  }
  type_key();
}

function b6_click() {
  click_reset();
  click_b6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_b6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_b6 !== null &&
    b6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b6 !== null &&
    b6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_b6 !== null &&
    b6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_b6 === true && solved === false) {
    whitesmoke();
    b6.style.background = "pink";
  }
  type_key();
}

function c1_click() {
  click_reset();
  click_c1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c1 !== null &&
    c1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c1 !== null &&
    c1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c1 !== null &&
    c1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c1 === true && solved === false) {
    whitesmoke();
    c1.style.background = "pink";
  }
  type_key();
}

function c2_click() {
  click_reset();
  click_c2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c2 !== null &&
    c2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c2 !== null &&
    c2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c2 !== null &&
    c2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c2 === true && solved === false) {
    whitesmoke();
    c2.style.background = "pink";
  }
  type_key();
}

function c3_click() {
  click_reset();
  click_c3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c3 !== null &&
    c3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c3 !== null &&
    c3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c3 !== null &&
    c3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c3 === true && solved === false) {
    whitesmoke();
    c3.style.background = "pink";
  }
  type_key();
}

function c4_click() {
  click_reset();
  click_c4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c4 !== null &&
    c4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c4 !== null &&
    c4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c4 !== null &&
    c4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c4 === true && solved === false) {
    whitesmoke();
    c4.style.background = "pink";
  }
  type_key();
}

function c5_click() {
  click_reset();
  click_c5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c5 !== null &&
    c5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c5 !== null &&
    c5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c5 !== null &&
    c5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c5 === true && solved === false) {
    whitesmoke();
    c5.style.background = "pink";
  }
  type_key();
}

function c6_click() {
  click_reset();
  click_c6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_c6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_c6 !== null &&
    c6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c6 !== null &&
    c6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_c6 !== null &&
    c6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_c6 === true && solved === false) {
    whitesmoke();
    c6.style.background = "pink";
  }
  type_key();
}

function d1_click() {
  click_reset();
  click_d1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d1 !== null &&
    d1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d1 !== null &&
    d1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d1 !== null &&
    d1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d1 === true && solved === false) {
    whitesmoke();
    d1.style.background = "pink";
  }
  type_key();
}

function d2_click() {
  click_reset();
  click_d2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d2 !== null &&
    d2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d2 !== null &&
    d2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d2 !== null &&
    d2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d2 === true && solved === false) {
    whitesmoke();
    d2.style.background = "pink";
  }
  type_key();
}

function d3_click() {
  click_reset();
  click_d3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d3 !== null &&
    d3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d3 !== null &&
    d3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d3 !== null &&
    d3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d3 === true && solved === false) {
    whitesmoke();
    d3.style.background = "pink";
  }
  type_key();
}

function d4_click() {
  click_reset();
  click_d4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d4 !== null &&
    d4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d4 !== null &&
    d4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d4 !== null &&
    d4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d4 === true && solved === false) {
    whitesmoke();
    d4.style.background = "pink";
  }
  type_key();
}

function d5_click() {
  click_reset();
  click_d5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d5 !== null &&
    d5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d5 !== null &&
    d5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d5 !== null &&
    d5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d5 === true && solved === false) {
    whitesmoke();
    d5.style.background = "pink";
  }
  type_key();
}

function d6_click() {
  click_reset();
  click_d6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_d6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_d6 !== null &&
    d6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d6 !== null &&
    d6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_d6 !== null &&
    d6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_d6 === true && solved === false) {
    whitesmoke();
    d6.style.background = "pink";
  }
  type_key();
}

function e1_click() {
  click_reset();
  click_e1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e1 !== null &&
    e1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e1 !== null &&
    e1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e1 !== null &&
    e1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e1 === true && solved === false) {
    whitesmoke();
    e1.style.background = "pink";
  }
  type_key();
}

function e2_click() {
  click_reset();
  click_e2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e2 !== null &&
    e2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e2 !== null &&
    e2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e2 !== null &&
    e2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e2 === true && solved === false) {
    whitesmoke();
    e2.style.background = "pink";
  }
  type_key();
}

function e3_click() {
  click_reset();
  click_e3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e3 !== null &&
    e3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e3 !== null &&
    e3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e3 !== null &&
    e3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e3 === true && solved === false) {
    whitesmoke();
    e3.style.background = "pink";
  }
  type_key();
}

function e4_click() {
  click_reset();
  click_e4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e4 !== null &&
    e4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e4 !== null &&
    e4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e4 !== null &&
    e4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e4 === true && solved === false) {
    whitesmoke();
    e4.style.background = "pink";
  }
  type_key();
}

function e5_click() {
  click_reset();
  click_e5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e5 !== null &&
    e5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e5 !== null &&
    e5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e5 !== null &&
    e5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e5 === true && solved === false) {
    whitesmoke();
    e5.style.background = "pink";
  }
  type_key();
}

function e6_click() {
  click_reset();
  click_e6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_e6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_e6 !== null &&
    e6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e6 !== null &&
    e6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_e6 !== null &&
    e6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_e6 === true && solved === false) {
    whitesmoke();
    e6.style.background = "pink";
  }
  type_key();
}

function f1_click() {
  click_reset();
  click_f1 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f1 !== null &&
    f1.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f1 !== null &&
    f1.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f1 !== null &&
    f1.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f1 === true && solved === false) {
    whitesmoke();
    f1.style.background = "pink";
  }
  type_key();
}

function f2_click() {
  click_reset();
  click_f2 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f2 !== null &&
    f2.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f2 !== null &&
    f2.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f2 !== null &&
    f2.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f2 === true && solved === false) {
    whitesmoke();
    f2.style.background = "pink";
  }
  type_key();
}

function f3_click() {
  click_reset();
  click_f3 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f3 !== null &&
    f3.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f3 !== null &&
    f3.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f3 !== null &&
    f3.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f3 === true && solved === false) {
    whitesmoke();
    f3.style.background = "pink";
  }
  type_key();
}

function f4_click() {
  click_reset();
  click_f4 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f4 !== null &&
    f4.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f4 !== null &&
    f4.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f4 !== null &&
    f4.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f4 === true && solved === false) {
    whitesmoke();
    f4.style.background = "pink";
  }
  type_key();
}

function f5_click() {
  click_reset();
  click_f5 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f5 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f5 !== null &&
    f5.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f5 !== null &&
    f5.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f5 !== null &&
    f5.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f5 === true && solved === false) {
    whitesmoke();
    f5.style.background = "pink";
  }
  type_key();
}

function f6_click() {
  click_reset();
  click_f6 = true;
  input_check();
  if (empty === false && solved === false) {
    notif.style.visibility = "hidden";
    clear_temp();
    temp_reset();
    solving();
  }
  if (solved === false && input_f6 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 6";
  } else if (
    solved === false &&
    input_f6 !== null &&
    f6.style.color === "black"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f6 !== null &&
    f6.style.color === "red"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Change or Delete";
  } else if (
    solved === false &&
    input_f6 !== null &&
    f6.style.color === "blue"
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Number can't be change";
  }
  if (click_f6 === true && solved === false) {
    whitesmoke();
    f6.style.background = "pink";
  }
  type_key();
}

function hide_keyboard() {
  if (click_a1 === true && temp_a1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_a2 === true && temp_a2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_a3 === true && temp_a3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_a4 === true && temp_a4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_a5 === true && temp_a5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_a6 === true && temp_a6 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b1 === true && temp_b1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b2 === true && temp_b2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b3 === true && temp_b3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b4 === true && temp_b4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b5 === true && temp_b5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b6 === true && temp_b6 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c1 === true && temp_c1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c2 === true && temp_c2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c3 === true && temp_c3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c4 === true && temp_c4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c5 === true && temp_c5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c6 === true && temp_c6 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d1 === true && temp_d1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d2 === true && temp_d2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d3 === true && temp_d3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d4 === true && temp_d4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d5 === true && temp_d5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d6 === true && temp_d6 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e1 === true && temp_e1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e2 === true && temp_e2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e3 === true && temp_e3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e4 === true && temp_e4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e5 === true && temp_e5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_e6 === true && temp_e6 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f1 === true && temp_f1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f2 === true && temp_f2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f3 === true && temp_f3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f4 === true && temp_f4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f5 === true && temp_f5 === true)
    keyboard.style.visibility = "hidden";
  else if (click_f6 === true && temp_f6 === true)
    keyboard.style.visibility = "hidden";
  else keyboard.style.visibility = "visible";
}

function type_key() {
  if (solved === true) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Solving Ends";
  } else if (solved === false) {
    if (
      click_a1 === true ||
      click_a2 === true ||
      click_a3 === true ||
      click_a4 === true ||
      click_a5 === true ||
      click_a6 === true ||
      click_b1 === true ||
      click_b2 === true ||
      click_b3 === true ||
      click_b4 === true ||
      click_b5 === true ||
      click_b6 === true ||
      click_c1 === true ||
      click_c2 === true ||
      click_c3 === true ||
      click_c4 === true ||
      click_c5 === true ||
      click_c6 === true ||
      click_d1 === true ||
      click_d2 === true ||
      click_d3 === true ||
      click_d4 === true ||
      click_d5 === true ||
      click_d6 === true ||
      click_e1 === true ||
      click_e2 === true ||
      click_e3 === true ||
      click_e4 === true ||
      click_e5 === true ||
      click_e6 === true ||
      click_f1 === true ||
      click_f2 === true ||
      click_f3 === true ||
      click_f4 === true ||
      click_f5 === true ||
      click_f6 === true
    ) {
      hide_keyboard();
      key_event();
    } else keyboard.style.visibility = "hidden";
  }
}

function key_event() {
  document.addEventListener("keydown", (e) => {
    count = 0;
    repeat = 0;
    valid = false;

    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "Backspace" ||
      e.key === "Delete"
    )
      valid = true;

    if (click_a1 === true && temp_a1 === false) {
      key = e.key;
      if (
        input_a2 !== key &&
        input_a3 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_c1 !== key &&
        input_c4 !== key &&
        input_e1 !== key &&
        input_e4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a1.innerHTML = key;
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = a1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a1 !== null) {
          a1.innerHTML = "";
          a1.style.color = "black";
          a1.style.background = "whitesmoke";
          click_a1 = false;
          notif.style.visibility = "hidden";
          input_a1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a1 !== null) {
          a1.innerHTML = "";
          a1.style.color = "black";
          a1.style.background = "whitesmoke";
          click_a1 = false;
          notif.style.visibility = "hidden";
          input_a1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a2 === true && temp_a2 === false) {
      key = e.key;
      if (
        input_a1 !== key &&
        input_a3 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_c2 !== key &&
        input_c5 !== key &&
        input_e2 !== key &&
        input_e5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a2.innerHTML = key;
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = a2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a2 !== null) {
          a2.innerHTML = "";
          a2.style.color = "black";
          a2.style.background = "whitesmoke";
          click_a2 = false;
          notif.style.visibility = "hidden";
          input_a2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a2 !== null) {
          a2.innerHTML = "";
          a2.style.color = "black";
          a2.style.background = "whitesmoke";
          click_a2 = false;
          notif.style.visibility = "hidden";
          input_a2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a3 === true && temp_a3 === false) {
      key = e.key;
      if (
        input_a1 !== key &&
        input_a2 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_c3 !== key &&
        input_c6 !== key &&
        input_e3 !== key &&
        input_e6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a3.innerHTML = key;
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = a3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a3 !== null) {
          a3.innerHTML = "";
          a3.style.color = "black";
          a3.style.background = "whitesmoke";
          click_a3 = false;
          notif.style.visibility = "hidden";
          input_a3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a3 !== null) {
          a3.innerHTML = "";
          a3.style.color = "black";
          a3.style.background = "whitesmoke";
          click_a3 = false;
          notif.style.visibility = "hidden";
          input_a3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a4 === true && temp_a4 === false) {
      key = e.key;
      if (
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_c1 !== key &&
        input_c4 !== key &&
        input_e1 !== key &&
        input_e4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a4.innerHTML = key;
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = a4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a4 !== null) {
          a4.innerHTML = "";
          a4.style.color = "black";
          a4.style.background = "whitesmoke";
          click_a4 = false;
          notif.style.visibility = "hidden";
          input_a4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a4 !== null) {
          a4.innerHTML = "";
          a4.style.color = "black";
          a4.style.background = "whitesmoke";
          click_a4 = false;
          notif.style.visibility = "hidden";
          input_a4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a5 === true && temp_a5 === false) {
      key = e.key;
      if (
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_a4 !== key &&
        input_a6 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_c2 !== key &&
        input_c5 !== key &&
        input_e2 !== key &&
        input_e5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a5.innerHTML = key;
        a5.style.color = "black";
        a5.style.background = "whitesmoke";
        click_a5 = false;
        notif.style.visibility = "hidden";
        input_a5 = a5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a5 !== null) {
          a5.innerHTML = "";
          a5.style.color = "black";
          a5.style.background = "whitesmoke";
          click_a5 = false;
          notif.style.visibility = "hidden";
          input_a5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a5 !== null) {
          a5.innerHTML = "";
          a5.style.color = "black";
          a5.style.background = "whitesmoke";
          click_a5 = false;
          notif.style.visibility = "hidden";
          input_a5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a6 === true && temp_a6 === false) {
      key = e.key;
      if (
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_c3 !== key &&
        input_c6 !== key &&
        input_e3 !== key &&
        input_e6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        a6.innerHTML = key;
        a6.style.color = "black";
        a6.style.background = "whitesmoke";
        click_a6 = false;
        notif.style.visibility = "hidden";
        input_a6 = a6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_a6 !== null) {
          a6.innerHTML = "";
          a6.style.color = "black";
          a6.style.background = "whitesmoke";
          click_a6 = false;
          notif.style.visibility = "hidden";
          input_a6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_a6 !== null) {
          a6.innerHTML = "";
          a6.style.color = "black";
          a6.style.background = "whitesmoke";
          click_a6 = false;
          notif.style.visibility = "hidden";
          input_a6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b1 === true && temp_b1 === false) {
      key = e.key;
      if (
        input_b2 !== key &&
        input_b3 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_d1 !== key &&
        input_d4 !== key &&
        input_f1 !== key &&
        input_f4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b1.innerHTML = key;
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = b1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b1 !== null) {
          b1.innerHTML = "";
          b1.style.color = "black";
          b1.style.background = "whitesmoke";
          click_b1 = false;
          notif.style.visibility = "hidden";
          input_b1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b1 !== null) {
          b1.innerHTML = "";
          b1.style.color = "black";
          b1.style.background = "whitesmoke";
          click_b1 = false;
          notif.style.visibility = "hidden";
          input_b1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b2 === true && temp_b2 === false) {
      key = e.key;
      if (
        input_b1 !== key &&
        input_b3 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_d2 !== key &&
        input_d5 !== key &&
        input_f2 !== key &&
        input_f5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b2.innerHTML = key;
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = b2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b2 !== null) {
          b2.innerHTML = "";
          b2.style.color = "black";
          b2.style.background = "whitesmoke";
          click_b2 = false;
          notif.style.visibility = "hidden";
          input_b2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b2 !== null) {
          b2.innerHTML = "";
          b2.style.color = "black";
          b2.style.background = "whitesmoke";
          click_b2 = false;
          notif.style.visibility = "hidden";
          input_b2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b3 === true && temp_b3 === false) {
      key = e.key;
      if (
        input_b1 !== key &&
        input_b2 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_a1 !== key &&
        input_a2 !== key &&
        input_a3 !== key &&
        input_d3 !== key &&
        input_d6 !== key &&
        input_f3 !== key &&
        input_f6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b3.innerHTML = key;
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = b3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b3 !== null) {
          b3.innerHTML = "";
          b3.style.color = "black";
          b3.style.background = "whitesmoke";
          click_b3 = false;
          notif.style.visibility = "hidden";
          input_b3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b3 !== null) {
          b3.innerHTML = "";
          b3.style.color = "black";
          b3.style.background = "whitesmoke";
          click_b3 = false;
          notif.style.visibility = "hidden";
          input_b3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b4 === true && temp_b4 === false) {
      key = e.key;
      if (
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_b5 !== key &&
        input_b6 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_d1 !== key &&
        input_d4 !== key &&
        input_f1 !== key &&
        input_f4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b4.innerHTML = key;
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = b4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b4 !== null) {
          b4.innerHTML = "";
          b4.style.color = "black";
          b4.style.background = "whitesmoke";
          click_b4 = false;
          notif.style.visibility = "hidden";
          input_b4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b4 !== null) {
          b4.innerHTML = "";
          b4.style.color = "black";
          b4.style.background = "whitesmoke";
          click_b4 = false;
          notif.style.visibility = "hidden";
          input_b4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b5 === true && temp_b5 === false) {
      key = e.key;
      if (
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_b4 !== key &&
        input_b6 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_d2 !== key &&
        input_d5 !== key &&
        input_f2 !== key &&
        input_f5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b5.innerHTML = key;
        b5.style.color = "black";
        b5.style.background = "whitesmoke";
        click_b5 = false;
        notif.style.visibility = "hidden";
        input_b5 = b5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b5 !== null) {
          b5.innerHTML = "";
          b5.style.color = "black";
          b5.style.background = "whitesmoke";
          click_b5 = false;
          notif.style.visibility = "hidden";
          input_b5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b5 !== null) {
          b5.innerHTML = "";
          b5.style.color = "black";
          b5.style.background = "whitesmoke";
          click_b5 = false;
          notif.style.visibility = "hidden";
          input_b5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b6 === true && temp_b6 === false) {
      key = e.key;
      if (
        input_b1 !== key &&
        input_b2 !== key &&
        input_b3 !== key &&
        input_b4 !== key &&
        input_b5 !== key &&
        input_a4 !== key &&
        input_a5 !== key &&
        input_a6 !== key &&
        input_d3 !== key &&
        input_d6 !== key &&
        input_f3 !== key &&
        input_f6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        b6.innerHTML = key;
        b6.style.color = "black";
        b6.style.background = "whitesmoke";
        click_b6 = false;
        notif.style.visibility = "hidden";
        input_b6 = b6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_b6 !== null) {
          b6.innerHTML = "";
          b6.style.color = "black";
          b6.style.background = "whitesmoke";
          click_b6 = false;
          notif.style.visibility = "hidden";
          input_b6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_b6 !== null) {
          b6.innerHTML = "";
          b6.style.color = "black";
          b6.style.background = "whitesmoke";
          click_b6 = false;
          notif.style.visibility = "hidden";
          input_b6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c1 === true && temp_c1 === false) {
      key = e.key;
      if (
        input_c2 !== key &&
        input_c3 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_a1 !== key &&
        input_a4 !== key &&
        input_e1 !== key &&
        input_e4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c1.innerHTML = key;
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = c1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c1 !== null) {
          c1.innerHTML = "";
          c1.style.color = "black";
          c1.style.background = "whitesmoke";
          click_c1 = false;
          notif.style.visibility = "hidden";
          input_c1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c1 !== null) {
          c1.innerHTML = "";
          c1.style.color = "black";
          c1.style.background = "whitesmoke";
          click_c1 = false;
          notif.style.visibility = "hidden";
          input_c1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c2 === true && temp_c2 === false) {
      key = e.key;
      if (
        input_c1 !== key &&
        input_c3 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_a2 !== key &&
        input_a5 !== key &&
        input_e2 !== key &&
        input_e5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c2.innerHTML = key;
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = c2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c2 !== null) {
          c2.innerHTML = "";
          c2.style.color = "black";
          c2.style.background = "whitesmoke";
          click_c2 = false;
          notif.style.visibility = "hidden";
          input_c2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c2 !== null) {
          c2.innerHTML = "";
          c2.style.color = "black";
          c2.style.background = "whitesmoke";
          click_c2 = false;
          notif.style.visibility = "hidden";
          input_c2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c3 === true && temp_c3 === false) {
      key = e.key;
      if (
        input_c1 !== key &&
        input_c2 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_a3 !== key &&
        input_a6 !== key &&
        input_e3 !== key &&
        input_e6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c3.innerHTML = key;
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = c3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c3 !== null) {
          c3.innerHTML = "";
          c3.style.color = "black";
          c3.style.background = "whitesmoke";
          click_c3 = false;
          notif.style.visibility = "hidden";
          input_c3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c3 !== null) {
          c3.innerHTML = "";
          c3.style.color = "black";
          c3.style.background = "whitesmoke";
          click_c3 = false;
          notif.style.visibility = "hidden";
          input_c3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c4 === true && temp_c4 === false) {
      key = e.key;
      if (
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_a1 !== key &&
        input_a4 !== key &&
        input_e1 !== key &&
        input_e4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c4.innerHTML = key;
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = c4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c4 !== null) {
          c4.innerHTML = "";
          c4.style.color = "black";
          c4.style.background = "whitesmoke";
          click_c4 = false;
          notif.style.visibility = "hidden";
          input_c4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c4 !== null) {
          c4.innerHTML = "";
          c4.style.color = "black";
          c4.style.background = "whitesmoke";
          click_c4 = false;
          notif.style.visibility = "hidden";
          input_c4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c5 === true && temp_c5 === false) {
      key = e.key;
      if (
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_c4 !== key &&
        input_c6 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_a2 !== key &&
        input_a5 !== key &&
        input_e2 !== key &&
        input_e5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c5.innerHTML = key;
        c5.style.color = "black";
        c5.style.background = "whitesmoke";
        click_c5 = false;
        notif.style.visibility = "hidden";
        input_c5 = c5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c5 !== null) {
          c5.innerHTML = "";
          c5.style.color = "black";
          c5.style.background = "whitesmoke";
          click_c5 = false;
          notif.style.visibility = "hidden";
          input_c5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c5 !== null) {
          c5.innerHTML = "";
          c5.style.color = "black";
          c5.style.background = "whitesmoke";
          click_c5 = false;
          notif.style.visibility = "hidden";
          input_c5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c6 === true && temp_c6 === false) {
      key = e.key;
      if (
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_a3 !== key &&
        input_a6 !== key &&
        input_e3 !== key &&
        input_e6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        c6.innerHTML = key;
        c6.style.color = "black";
        c6.style.background = "whitesmoke";
        click_c6 = false;
        notif.style.visibility = "hidden";
        input_c6 = c6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_c6 !== null) {
          c6.innerHTML = "";
          c6.style.color = "black";
          c6.style.background = "whitesmoke";
          click_c6 = false;
          notif.style.visibility = "hidden";
          input_c6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_c6 !== null) {
          c6.innerHTML = "";
          c6.style.color = "black";
          c6.style.background = "whitesmoke";
          click_c6 = false;
          notif.style.visibility = "hidden";
          input_c6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d1 === true && temp_d1 === false) {
      key = e.key;
      if (
        input_d2 !== key &&
        input_d3 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_b1 !== key &&
        input_b4 !== key &&
        input_f1 !== key &&
        input_f4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d1.innerHTML = key;
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = d1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d1 !== null) {
          d1.innerHTML = "";
          d1.style.color = "black";
          d1.style.background = "whitesmoke";
          click_d1 = false;
          notif.style.visibility = "hidden";
          input_d1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d1 !== null) {
          d1.innerHTML = "";
          d1.style.color = "black";
          d1.style.background = "whitesmoke";
          click_d1 = false;
          notif.style.visibility = "hidden";
          input_d1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d2 === true && temp_d2 === false) {
      key = e.key;
      if (
        input_d1 !== key &&
        input_d3 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_b2 !== key &&
        input_b5 !== key &&
        input_f2 !== key &&
        input_f5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d2.innerHTML = key;
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = d2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d2 !== null) {
          d2.innerHTML = "";
          d2.style.color = "black";
          d2.style.background = "whitesmoke";
          click_d2 = false;
          notif.style.visibility = "hidden";
          input_d2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d2 !== null) {
          d2.innerHTML = "";
          d2.style.color = "black";
          d2.style.background = "whitesmoke";
          click_d2 = false;
          notif.style.visibility = "hidden";
          input_d2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d3 === true && temp_d3 === false) {
      key = e.key;
      if (
        input_d1 !== key &&
        input_d2 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_c1 !== key &&
        input_c2 !== key &&
        input_c3 !== key &&
        input_b3 !== key &&
        input_b6 !== key &&
        input_f3 !== key &&
        input_f6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d3.innerHTML = key;
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = d3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d3 !== null) {
          d3.innerHTML = "";
          d3.style.color = "black";
          d3.style.background = "whitesmoke";
          click_d3 = false;
          notif.style.visibility = "hidden";
          input_d3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d3 !== null) {
          d3.innerHTML = "";
          d3.style.color = "black";
          d3.style.background = "whitesmoke";
          click_d3 = false;
          notif.style.visibility = "hidden";
          input_d3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d4 === true && temp_d4 === false) {
      key = e.key;
      if (
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_d5 !== key &&
        input_d6 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_b1 !== key &&
        input_b4 !== key &&
        input_f1 !== key &&
        input_f4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d4.innerHTML = key;
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = d4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d4 !== null) {
          d4.innerHTML = "";
          d4.style.color = "black";
          d4.style.background = "whitesmoke";
          click_d4 = false;
          notif.style.visibility = "hidden";
          input_d4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d4 !== null) {
          d4.innerHTML = "";
          d4.style.color = "black";
          d4.style.background = "whitesmoke";
          click_d4 = false;
          notif.style.visibility = "hidden";
          input_d4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d5 === true && temp_d5 === false) {
      key = e.key;
      if (
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_d4 !== key &&
        input_d6 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_b2 !== key &&
        input_b5 !== key &&
        input_f2 !== key &&
        input_f5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d5.innerHTML = key;
        d5.style.color = "black";
        d5.style.background = "whitesmoke";
        click_d5 = false;
        notif.style.visibility = "hidden";
        input_d5 = d5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d5 !== null) {
          d5.innerHTML = "";
          d5.style.color = "black";
          d5.style.background = "whitesmoke";
          click_d5 = false;
          notif.style.visibility = "hidden";
          input_d5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d5 !== null) {
          d5.innerHTML = "";
          d5.style.color = "black";
          d5.style.background = "whitesmoke";
          click_d5 = false;
          notif.style.visibility = "hidden";
          input_d5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d6 === true && temp_d6 === false) {
      key = e.key;
      if (
        input_d1 !== key &&
        input_d2 !== key &&
        input_d3 !== key &&
        input_d4 !== key &&
        input_d5 !== key &&
        input_c4 !== key &&
        input_c5 !== key &&
        input_c6 !== key &&
        input_b3 !== key &&
        input_b6 !== key &&
        input_f3 !== key &&
        input_f6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        d6.innerHTML = key;
        d6.style.color = "black";
        d6.style.background = "whitesmoke";
        click_d6 = false;
        notif.style.visibility = "hidden";
        input_d6 = d6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_d6 !== null) {
          d6.innerHTML = "";
          d6.style.color = "black";
          d6.style.background = "whitesmoke";
          click_d6 = false;
          notif.style.visibility = "hidden";
          input_d6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_d6 !== null) {
          d6.innerHTML = "";
          d6.style.color = "black";
          d6.style.background = "whitesmoke";
          click_d6 = false;
          notif.style.visibility = "hidden";
          input_d6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e1 === true && temp_e1 === false) {
      key = e.key;
      if (
        input_e2 !== key &&
        input_e3 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_a1 !== key &&
        input_a4 !== key &&
        input_c1 !== key &&
        input_c4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e1.innerHTML = key;
        e1.style.color = "black";
        e1.style.background = "whitesmoke";
        click_e1 = false;
        notif.style.visibility = "hidden";
        input_e1 = e1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e1 !== null) {
          e1.innerHTML = "";
          e1.style.color = "black";
          e1.style.background = "whitesmoke";
          click_e1 = false;
          notif.style.visibility = "hidden";
          input_e1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e1 !== null) {
          e1.innerHTML = "";
          e1.style.color = "black";
          e1.style.background = "whitesmoke";
          click_e1 = false;
          notif.style.visibility = "hidden";
          input_e1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e2 === true && temp_e2 === false) {
      key = e.key;
      if (
        input_e1 !== key &&
        input_e3 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_a2 !== key &&
        input_a5 !== key &&
        input_c2 !== key &&
        input_c5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e2.innerHTML = key;
        e2.style.color = "black";
        e2.style.background = "whitesmoke";
        click_e2 = false;
        notif.style.visibility = "hidden";
        input_e2 = e2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e2 !== null) {
          e2.innerHTML = "";
          e2.style.color = "black";
          e2.style.background = "whitesmoke";
          click_e2 = false;
          notif.style.visibility = "hidden";
          input_e2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e2 !== null) {
          e2.innerHTML = "";
          e2.style.color = "black";
          e2.style.background = "whitesmoke";
          click_e2 = false;
          notif.style.visibility = "hidden";
          input_e2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e3 === true && temp_e3 === false) {
      key = e.key;
      if (
        input_e1 !== key &&
        input_e2 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_a3 !== key &&
        input_a6 !== key &&
        input_c3 !== key &&
        input_c6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e3.innerHTML = key;
        e3.style.color = "black";
        e3.style.background = "whitesmoke";
        click_e3 = false;
        notif.style.visibility = "hidden";
        input_e3 = e3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e3 !== null) {
          e3.innerHTML = "";
          e3.style.color = "black";
          e3.style.background = "whitesmoke";
          click_e3 = false;
          notif.style.visibility = "hidden";
          input_e3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e3 !== null) {
          e3.innerHTML = "";
          e3.style.color = "black";
          e3.style.background = "whitesmoke";
          click_e3 = false;
          notif.style.visibility = "hidden";
          input_e3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e4 === true && temp_e4 === false) {
      key = e.key;
      if (
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_a1 !== key &&
        input_a4 !== key &&
        input_c1 !== key &&
        input_c4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e4.innerHTML = key;
        e4.style.color = "black";
        e4.style.background = "whitesmoke";
        click_e4 = false;
        notif.style.visibility = "hidden";
        input_e4 = e4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e4 !== null) {
          e4.innerHTML = "";
          e4.style.color = "black";
          e4.style.background = "whitesmoke";
          click_e4 = false;
          notif.style.visibility = "hidden";
          input_e4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e4 !== null) {
          e4.innerHTML = "";
          e4.style.color = "black";
          e4.style.background = "whitesmoke";
          click_e4 = false;
          notif.style.visibility = "hidden";
          input_e4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e5 === true && temp_e5 === false) {
      key = e.key;
      if (
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_e4 !== key &&
        input_e6 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_a2 !== key &&
        input_a5 !== key &&
        input_c2 !== key &&
        input_c5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e5.innerHTML = key;
        e5.style.color = "black";
        e5.style.background = "whitesmoke";
        click_e5 = false;
        notif.style.visibility = "hidden";
        input_e5 = e5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e5 !== null) {
          e5.innerHTML = "";
          e5.style.color = "black";
          e5.style.background = "whitesmoke";
          click_e5 = false;
          notif.style.visibility = "hidden";
          input_e5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e5 !== null) {
          e5.innerHTML = "";
          e5.style.color = "black";
          e5.style.background = "whitesmoke";
          click_e5 = false;
          notif.style.visibility = "hidden";
          input_e5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_e6 === true && temp_e6 === false) {
      key = e.key;
      if (
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_a3 !== key &&
        input_a6 !== key &&
        input_c3 !== key &&
        input_c6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        e6.innerHTML = key;
        e6.style.color = "black";
        e6.style.background = "whitesmoke";
        click_e6 = false;
        notif.style.visibility = "hidden";
        input_e6 = e6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_e6 !== null) {
          e6.innerHTML = "";
          e6.style.color = "black";
          e6.style.background = "whitesmoke";
          click_e6 = false;
          notif.style.visibility = "hidden";
          input_e6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_e6 !== null) {
          e6.innerHTML = "";
          e6.style.color = "black";
          e6.style.background = "whitesmoke";
          click_e6 = false;
          notif.style.visibility = "hidden";
          input_e6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f1 === true && temp_f1 === false) {
      key = e.key;
      if (
        input_f2 !== key &&
        input_f3 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_b1 !== key &&
        input_b4 !== key &&
        input_d1 !== key &&
        input_d4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f1.innerHTML = key;
        f1.style.color = "black";
        f1.style.background = "whitesmoke";
        click_f1 = false;
        notif.style.visibility = "hidden";
        input_f1 = f1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f1 !== null) {
          f1.innerHTML = "";
          f1.style.color = "black";
          f1.style.background = "whitesmoke";
          click_f1 = false;
          notif.style.visibility = "hidden";
          input_f1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f1 !== null) {
          f1.innerHTML = "";
          f1.style.color = "black";
          f1.style.background = "whitesmoke";
          click_f1 = false;
          notif.style.visibility = "hidden";
          input_f1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f2 === true && temp_f2 === false) {
      key = e.key;
      if (
        input_f1 !== key &&
        input_f3 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_b2 !== key &&
        input_b5 !== key &&
        input_d2 !== key &&
        input_d5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f2.innerHTML = key;
        f2.style.color = "black";
        f2.style.background = "whitesmoke";
        click_f2 = false;
        notif.style.visibility = "hidden";
        input_f2 = f2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f2 !== null) {
          f2.innerHTML = "";
          f2.style.color = "black";
          f2.style.background = "whitesmoke";
          click_f2 = false;
          notif.style.visibility = "hidden";
          input_f2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f2 !== null) {
          f2.innerHTML = "";
          f2.style.color = "black";
          f2.style.background = "whitesmoke";
          click_f2 = false;
          notif.style.visibility = "hidden";
          input_f2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f3 === true && temp_f3 === false) {
      key = e.key;
      if (
        input_f1 !== key &&
        input_f2 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_e1 !== key &&
        input_e2 !== key &&
        input_e3 !== key &&
        input_b3 !== key &&
        input_b6 !== key &&
        input_d3 !== key &&
        input_d6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f3.innerHTML = key;
        f3.style.color = "black";
        f3.style.background = "whitesmoke";
        click_f3 = false;
        notif.style.visibility = "hidden";
        input_f3 = f3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f3 !== null) {
          f3.innerHTML = "";
          f3.style.color = "black";
          f3.style.background = "whitesmoke";
          click_f3 = false;
          notif.style.visibility = "hidden";
          input_f3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f3 !== null) {
          f3.innerHTML = "";
          f3.style.color = "black";
          f3.style.background = "whitesmoke";
          click_f3 = false;
          notif.style.visibility = "hidden";
          input_f3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f4 === true && temp_f4 === false) {
      key = e.key;
      if (
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_f5 !== key &&
        input_f6 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_b1 !== key &&
        input_b4 !== key &&
        input_d1 !== key &&
        input_d4 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f4.innerHTML = key;
        f4.style.color = "black";
        f4.style.background = "whitesmoke";
        click_f4 = false;
        notif.style.visibility = "hidden";
        input_f4 = f4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f4 !== null) {
          f4.innerHTML = "";
          f4.style.color = "black";
          f4.style.background = "whitesmoke";
          click_f4 = false;
          notif.style.visibility = "hidden";
          input_f4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f4 !== null) {
          f4.innerHTML = "";
          f4.style.color = "black";
          f4.style.background = "whitesmoke";
          click_f4 = false;
          notif.style.visibility = "hidden";
          input_f4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f5 === true && temp_f5 === false) {
      key = e.key;
      if (
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_f4 !== key &&
        input_f6 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_b2 !== key &&
        input_b5 !== key &&
        input_d2 !== key &&
        input_d5 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f5.innerHTML = key;
        f5.style.color = "black";
        f5.style.background = "whitesmoke";
        click_f5 = false;
        notif.style.visibility = "hidden";
        input_f5 = f5.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f5 !== null) {
          f5.innerHTML = "";
          f5.style.color = "black";
          f5.style.background = "whitesmoke";
          click_f5 = false;
          notif.style.visibility = "hidden";
          input_f5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f5 !== null) {
          f5.innerHTML = "";
          f5.style.color = "black";
          f5.style.background = "whitesmoke";
          click_f5 = false;
          notif.style.visibility = "hidden";
          input_f5 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_f6 === true && temp_f6 === false) {
      key = e.key;
      if (
        input_f1 !== key &&
        input_f2 !== key &&
        input_f3 !== key &&
        input_f4 !== key &&
        input_f5 !== key &&
        input_e4 !== key &&
        input_e5 !== key &&
        input_e6 !== key &&
        input_b3 !== key &&
        input_b6 !== key &&
        input_d3 !== key &&
        input_d6 !== key &&
        valid === true &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        f6.innerHTML = key;
        f6.style.color = "black";
        f6.style.background = "whitesmoke";
        click_f6 = false;
        notif.style.visibility = "hidden";
        input_f6 = f6.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (valid === true && key === "Backspace") {
        if (input_f6 !== null) {
          f6.innerHTML = "";
          f6.style.color = "black";
          f6.style.background = "whitesmoke";
          click_f6 = false;
          notif.style.visibility = "hidden";
          input_f6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === true && key === "Delete") {
        if (input_f6 !== null) {
          f6.innerHTML = "";
          f6.style.color = "black";
          f6.style.background = "whitesmoke";
          click_f6 = false;
          notif.style.visibility = "hidden";
          input_f6 = null;
          keyboard.style.visibility = "hidden";
        }
      } else if (valid === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (
      click_a1 === false &&
      click_a2 === false &&
      click_a3 === false &&
      click_a4 === false &&
      click_a5 === false &&
      click_a6 === false &&
      click_b1 === false &&
      click_b2 === false &&
      click_b3 === false &&
      click_b4 === false &&
      click_b5 === false &&
      click_b6 === false &&
      click_c1 === false &&
      click_c2 === false &&
      click_c3 === false &&
      click_c4 === false &&
      click_c5 === false &&
      click_c6 === false &&
      click_d1 === false &&
      click_d2 === false &&
      click_d3 === false &&
      click_d4 === false &&
      click_d5 === false &&
      click_d6 === false &&
      click_e1 === false &&
      click_e2 === false &&
      click_e3 === false &&
      click_e4 === false &&
      click_e5 === false &&
      click_e6 === false &&
      click_f1 === false &&
      click_f2 === false &&
      click_f3 === false &&
      click_f4 === false &&
      click_f5 === false &&
      click_f6 === false
    ) {
      clear_temp();

      if (a1.style.color === "red") a1.style.color = "black";
      if (a2.style.color === "red") a2.style.color = "black";
      if (a3.style.color === "red") a3.style.color = "black";
      if (a4.style.color === "red") a4.style.color = "black";
      if (a5.style.color === "red") a5.style.color = "black";
      if (a6.style.color === "red") a6.style.color = "black";
      if (b1.style.color === "red") b1.style.color = "black";
      if (b2.style.color === "red") b2.style.color = "black";
      if (b3.style.color === "red") b3.style.color = "black";
      if (b4.style.color === "red") b4.style.color = "black";
      if (b5.style.color === "red") b5.style.color = "black";
      if (b6.style.color === "red") b6.style.color = "black";
      if (c1.style.color === "red") c1.style.color = "black";
      if (c2.style.color === "red") c2.style.color = "black";
      if (c3.style.color === "red") c3.style.color = "black";
      if (c4.style.color === "red") c4.style.color = "black";
      if (c5.style.color === "red") c5.style.color = "black";
      if (c6.style.color === "red") c6.style.color = "black";
      if (d1.style.color === "red") d1.style.color = "black";
      if (d2.style.color === "red") d2.style.color = "black";
      if (d3.style.color === "red") d3.style.color = "black";
      if (d4.style.color === "red") d4.style.color = "black";
      if (d5.style.color === "red") d5.style.color = "black";
      if (d6.style.color === "red") d6.style.color = "black";
      if (e1.style.color === "red") e1.style.color = "black";
      if (e2.style.color === "red") e2.style.color = "black";
      if (e3.style.color === "red") e3.style.color = "black";
      if (e4.style.color === "red") e4.style.color = "black";
      if (e5.style.color === "red") e5.style.color = "black";
      if (e6.style.color === "red") e6.style.color = "black";
      if (d1.style.color === "red") d1.style.color = "black";
      if (d2.style.color === "red") d2.style.color = "black";
      if (d3.style.color === "red") d3.style.color = "black";
      if (d4.style.color === "red") d4.style.color = "black";
      if (d5.style.color === "red") d5.style.color = "black";
      if (d6.style.color === "red") d6.style.color = "black";

      if (a1.style.color === "black") temp_a1 = false;
      if (a2.style.color === "black") temp_a2 = false;
      if (a3.style.color === "black") temp_a3 = false;
      if (a4.style.color === "black") temp_a4 = false;
      if (a5.style.color === "black") temp_a5 = false;
      if (a6.style.color === "black") temp_a6 = false;
      if (b1.style.color === "black") temp_b1 = false;
      if (b2.style.color === "black") temp_b2 = false;
      if (b3.style.color === "black") temp_b3 = false;
      if (b4.style.color === "black") temp_b4 = false;
      if (b5.style.color === "black") temp_b5 = false;
      if (b6.style.color === "black") temp_b6 = false;
      if (c1.style.color === "black") temp_c1 = false;
      if (c2.style.color === "black") temp_c2 = false;
      if (c3.style.color === "black") temp_c3 = false;
      if (c4.style.color === "black") temp_c4 = false;
      if (c5.style.color === "black") temp_c5 = false;
      if (c6.style.color === "black") temp_c6 = false;
      if (d1.style.color === "black") temp_d1 = false;
      if (d2.style.color === "black") temp_d2 = false;
      if (d3.style.color === "black") temp_d3 = false;
      if (d4.style.color === "black") temp_d4 = false;
      if (d5.style.color === "black") temp_d5 = false;
      if (d6.style.color === "black") temp_d6 = false;
      if (e1.style.color === "black") temp_e1 = false;
      if (e2.style.color === "black") temp_e2 = false;
      if (e3.style.color === "black") temp_e3 = false;
      if (e4.style.color === "black") temp_e4 = false;
      if (e5.style.color === "black") temp_e5 = false;
      if (e6.style.color === "black") temp_e6 = false;
      if (f1.style.color === "black") temp_f1 = false;
      if (f2.style.color === "black") temp_f2 = false;
      if (f3.style.color === "black") temp_f3 = false;
      if (f4.style.color === "black") temp_f4 = false;
      if (f5.style.color === "black") temp_f5 = false;
      if (f6.style.color === "black") temp_f6 = false;

      blue_font();

      solving();

      if (input_a1 === null) a1.style.color = "black";
      if (input_a2 === null) a2.style.color = "black";
      if (input_a3 === null) a3.style.color = "black";
      if (input_a4 === null) a4.style.color = "black";
      if (input_a5 === null) a5.style.color = "black";
      if (input_a6 === null) a6.style.color = "black";
      if (input_b1 === null) b1.style.color = "black";
      if (input_b2 === null) b2.style.color = "black";
      if (input_b3 === null) b3.style.color = "black";
      if (input_b4 === null) b4.style.color = "black";
      if (input_b5 === null) b5.style.color = "black";
      if (input_b6 === null) b6.style.color = "black";
      if (input_c1 === null) c1.style.color = "black";
      if (input_c2 === null) c2.style.color = "black";
      if (input_c3 === null) c3.style.color = "black";
      if (input_c4 === null) c4.style.color = "black";
      if (input_c5 === null) c5.style.color = "black";
      if (input_c6 === null) c6.style.color = "black";
      if (input_d1 === null) d1.style.color = "black";
      if (input_d2 === null) d2.style.color = "black";
      if (input_d3 === null) d3.style.color = "black";
      if (input_d4 === null) d4.style.color = "black";
      if (input_d5 === null) d5.style.color = "black";
      if (input_d6 === null) d6.style.color = "black";
      if (input_e1 === null) e1.style.color = "black";
      if (input_e2 === null) e2.style.color = "black";
      if (input_e3 === null) e3.style.color = "black";
      if (input_e4 === null) e4.style.color = "black";
      if (input_e5 === null) e5.style.color = "black";
      if (input_e6 === null) e6.style.color = "black";
      if (input_f1 === null) f1.style.color = "black";
      if (input_f2 === null) f2.style.color = "black";
      if (input_f3 === null) f3.style.color = "black";
      if (input_f4 === null) f4.style.color = "black";
      if (input_f5 === null) f5.style.color = "black";
      if (input_f6 === null) f6.style.color = "black";

      if (a1.style.color === "blue") temp_a1 = true;
      if (a2.style.color === "blue") temp_a2 = true;
      if (a3.style.color === "blue") temp_a3 = true;
      if (a4.style.color === "blue") temp_a4 = true;
      if (a5.style.color === "blue") temp_a5 = true;
      if (a6.style.color === "blue") temp_a6 = true;
      if (b1.style.color === "blue") temp_b1 = true;
      if (b2.style.color === "blue") temp_b2 = true;
      if (b3.style.color === "blue") temp_b3 = true;
      if (b4.style.color === "blue") temp_b4 = true;
      if (b5.style.color === "blue") temp_b5 = true;
      if (b6.style.color === "blue") temp_b6 = true;
      if (c1.style.color === "blue") temp_c1 = true;
      if (c2.style.color === "blue") temp_c2 = true;
      if (c3.style.color === "blue") temp_c3 = true;
      if (c4.style.color === "blue") temp_c4 = true;
      if (c5.style.color === "blue") temp_c5 = true;
      if (c6.style.color === "blue") temp_c6 = true;
      if (d1.style.color === "blue") temp_d1 = true;
      if (d2.style.color === "blue") temp_d2 = true;
      if (d3.style.color === "blue") temp_d3 = true;
      if (d4.style.color === "blue") temp_d4 = true;
      if (d5.style.color === "blue") temp_d5 = true;
      if (d6.style.color === "blue") temp_d6 = true;
      if (e1.style.color === "blue") temp_e1 = true;
      if (e2.style.color === "blue") temp_e2 = true;
      if (e3.style.color === "blue") temp_e3 = true;
      if (e4.style.color === "blue") temp_e4 = true;
      if (e5.style.color === "blue") temp_e5 = true;
      if (e6.style.color === "blue") temp_e6 = true;
      if (f1.style.color === "blue") temp_f1 = true;
      if (f2.style.color === "blue") temp_f2 = true;
      if (f3.style.color === "blue") temp_f3 = true;
      if (f4.style.color === "blue") temp_f4 = true;
      if (f5.style.color === "blue") temp_f5 = true;
      if (f6.style.color === "blue") temp_f6 = true;

      input_check();
      if (empty === false) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Solving Ends";
        solved = true;
        solve.innerHTML = "EDIT";
        whitesmoke();
      } else impossible();
    }
  });
}

function clear_temp() {
  if (temp_a1 === true) {
    input_a1 = null;
    a1.innerHTML = "";
  }
  if (temp_a2 === true) {
    input_a2 = null;
    a2.innerHTML = "";
  }
  if (temp_a3 === true) {
    input_a3 = null;
    a3.innerHTML = "";
  }
  if (temp_a4 === true) {
    input_a4 = null;
    a4.innerHTML = "";
  }
  if (temp_a5 === true) {
    input_a5 = null;
    a5.innerHTML = "";
  }
  if (temp_a6 === true) {
    input_a6 = null;
    a6.innerHTML = "";
  }
  if (temp_b1 === true) {
    input_b1 = null;
    b1.innerHTML = "";
  }
  if (temp_b2 === true) {
    input_b2 = null;
    b2.innerHTML = "";
  }
  if (temp_b3 === true) {
    input_b3 = null;
    b3.innerHTML = "";
  }
  if (temp_b4 === true) {
    input_b4 = null;
    b4.innerHTML = "";
  }
  if (temp_b5 === true) {
    input_b5 = null;
    b5.innerHTML = "";
  }
  if (temp_b6 === true) {
    input_b6 = null;
    b6.innerHTML = "";
  }
  if (temp_c1 === true) {
    input_c1 = null;
    c1.innerHTML = "";
  }
  if (temp_c2 === true) {
    input_c2 = null;
    c2.innerHTML = "";
  }
  if (temp_c3 === true) {
    input_c3 = null;
    c3.innerHTML = "";
  }
  if (temp_c4 === true) {
    input_c4 = null;
    c4.innerHTML = "";
  }
  if (temp_c5 === true) {
    input_c5 = null;
    c5.innerHTML = "";
  }
  if (temp_c6 === true) {
    input_c6 = null;
    c6.innerHTML = "";
  }
  if (temp_d1 === true) {
    input_d1 = null;
    d1.innerHTML = "";
  }
  if (temp_d2 === true) {
    input_d2 = null;
    d2.innerHTML = "";
  }
  if (temp_d3 === true) {
    input_d3 = null;
    d3.innerHTML = "";
  }
  if (temp_d4 === true) {
    input_d4 = null;
    d4.innerHTML = "";
  }
  if (temp_d5 === true) {
    input_d5 = null;
    d5.innerHTML = "";
  }
  if (temp_d6 === true) {
    input_d6 = null;
    d6.innerHTML = "";
  }
  if (temp_e1 === true) {
    input_e1 = null;
    e1.innerHTML = "";
  }
  if (temp_e2 === true) {
    input_e2 = null;
    e2.innerHTML = "";
  }
  if (temp_e3 === true) {
    input_e3 = null;
    e3.innerHTML = "";
  }
  if (temp_e4 === true) {
    input_e4 = null;
    e4.innerHTML = "";
  }
  if (temp_e5 === true) {
    input_e5 = null;
    e5.innerHTML = "";
  }
  if (temp_e6 === true) {
    input_e6 = null;
    e6.innerHTML = "";
  }
  if (temp_f1 === true) {
    input_f1 = null;
    f1.innerHTML = "";
  }
  if (temp_f2 === true) {
    input_f2 = null;
    f2.innerHTML = "";
  }
  if (temp_f3 === true) {
    input_f3 = null;
    f3.innerHTML = "";
  }
  if (temp_f4 === true) {
    input_f4 = null;
    f4.innerHTML = "";
  }
  if (temp_f5 === true) {
    input_f5 = null;
    f5.innerHTML = "";
  }
  if (temp_f6 === true) {
    input_f6 = null;
    f6.innerHTML = "";
  }
}

function check_temp() {
  if (input_a1 === null) temp_a1 = true;
  if (input_a2 === null) temp_a2 = true;
  if (input_a3 === null) temp_a3 = true;
  if (input_a4 === null) temp_a4 = true;
  if (input_a5 === null) temp_a5 = true;
  if (input_a6 === null) temp_a6 = true;
  if (input_b1 === null) temp_b1 = true;
  if (input_b2 === null) temp_b2 = true;
  if (input_b3 === null) temp_b3 = true;
  if (input_b4 === null) temp_b4 = true;
  if (input_b5 === null) temp_b5 = true;
  if (input_b6 === null) temp_b6 = true;
  if (input_c1 === null) temp_c1 = true;
  if (input_c2 === null) temp_c2 = true;
  if (input_c3 === null) temp_c3 = true;
  if (input_c4 === null) temp_c4 = true;
  if (input_c5 === null) temp_c5 = true;
  if (input_c6 === null) temp_c6 = true;
  if (input_d1 === null) temp_d1 = true;
  if (input_d2 === null) temp_d2 = true;
  if (input_d3 === null) temp_d3 = true;
  if (input_d4 === null) temp_d4 = true;
  if (input_d5 === null) temp_d5 = true;
  if (input_d6 === null) temp_d6 = true;
  if (input_e1 === null) temp_e1 = true;
  if (input_e2 === null) temp_e2 = true;
  if (input_e3 === null) temp_e3 = true;
  if (input_e4 === null) temp_e4 = true;
  if (input_e5 === null) temp_e5 = true;
  if (input_e6 === null) temp_e6 = true;
  if (input_f1 === null) temp_f1 = true;
  if (input_f2 === null) temp_f2 = true;
  if (input_f3 === null) temp_f3 = true;
  if (input_f4 === null) temp_f4 = true;
  if (input_f5 === null) temp_f5 = true;
  if (input_f6 === null) temp_f6 = true;
}

function solve_sudoku() {
  if (solved === false) {
    click_reset();
    whitesmoke();
    blue_font();

    if (count === 0) {
      check_temp();
    }

    solving();
    input_check();
    if (empty === true) {
      if (count <= 1) {
        count = count + 1;
        if (solved === false) solve_sudoku();
      } else if (count === 2) {
        count = count + 1;
        randomizer();
      } else {
        clear_temp();
        if (repeat > 2) {
          notif.innerHTML = "Impossible to Solve";
          notif.style.visibility = "visible";
          impossible();
        } else {
          count = 1;
          repeat += 1;
          if (solved === false) solve_sudoku();
        }
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Solving Ends";
      solved = true;
      solve.innerHTML = "EDIT";
      whitesmoke();
    }
  } else if (solved === true) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Edit Sudoku";
    solved = false;
    solve.innerHTML = "SOLVE";
  }

  keyboard.style.visibility = "hidden";
}

function solving() {
  let solved = 0;
  if (input_a1 !== null) solved += 1;
  if (input_a2 !== null) solved += 1;
  if (input_a3 !== null) solved += 1;
  if (input_a4 !== null) solved += 1;
  if (input_a5 !== null) solved += 1;
  if (input_a6 !== null) solved += 1;
  if (input_b1 !== null) solved += 1;
  if (input_b2 !== null) solved += 1;
  if (input_b3 !== null) solved += 1;
  if (input_b4 !== null) solved += 1;
  if (input_b5 !== null) solved += 1;
  if (input_b6 !== null) solved += 1;
  if (input_c1 !== null) solved += 1;
  if (input_c2 !== null) solved += 1;
  if (input_c3 !== null) solved += 1;
  if (input_c4 !== null) solved += 1;
  if (input_c5 !== null) solved += 1;
  if (input_c6 !== null) solved += 1;
  if (input_d1 !== null) solved += 1;
  if (input_d2 !== null) solved += 1;
  if (input_d3 !== null) solved += 1;
  if (input_d4 !== null) solved += 1;
  if (input_d5 !== null) solved += 1;
  if (input_d6 !== null) solved += 1;
  if (input_e1 !== null) solved += 1;
  if (input_e2 !== null) solved += 1;
  if (input_e3 !== null) solved += 1;
  if (input_e4 !== null) solved += 1;
  if (input_e5 !== null) solved += 1;
  if (input_e6 !== null) solved += 1;
  if (input_f1 !== null) solved += 1;
  if (input_f2 !== null) solved += 1;
  if (input_f3 !== null) solved += 1;
  if (input_f4 !== null) solved += 1;
  if (input_f5 !== null) solved += 1;
  if (input_f6 !== null) solved += 1;

  solver();

  let solved_last = 0;
  if (input_a1 !== null) solved_last += 1;
  if (input_a2 !== null) solved_last += 1;
  if (input_a3 !== null) solved_last += 1;
  if (input_a4 !== null) solved_last += 1;
  if (input_a5 !== null) solved_last += 1;
  if (input_a6 !== null) solved_last += 1;
  if (input_b1 !== null) solved_last += 1;
  if (input_b2 !== null) solved_last += 1;
  if (input_b3 !== null) solved_last += 1;
  if (input_b4 !== null) solved_last += 1;
  if (input_b5 !== null) solved_last += 1;
  if (input_b6 !== null) solved_last += 1;
  if (input_c1 !== null) solved_last += 1;
  if (input_c2 !== null) solved_last += 1;
  if (input_c3 !== null) solved_last += 1;
  if (input_c4 !== null) solved_last += 1;
  if (input_c5 !== null) solved_last += 1;
  if (input_c6 !== null) solved_last += 1;
  if (input_d1 !== null) solved_last += 1;
  if (input_d2 !== null) solved_last += 1;
  if (input_d3 !== null) solved_last += 1;
  if (input_d4 !== null) solved_last += 1;
  if (input_d5 !== null) solved_last += 1;
  if (input_d6 !== null) solved_last += 1;
  if (input_e1 !== null) solved_last += 1;
  if (input_e2 !== null) solved_last += 1;
  if (input_e3 !== null) solved_last += 1;
  if (input_e4 !== null) solved_last += 1;
  if (input_e5 !== null) solved_last += 1;
  if (input_e6 !== null) solved_last += 1;
  if (input_f1 !== null) solved_last += 1;
  if (input_f2 !== null) solved_last += 1;
  if (input_f3 !== null) solved_last += 1;
  if (input_f4 !== null) solved_last += 1;
  if (input_f5 !== null) solved_last += 1;
  if (input_f6 !== null) solved_last += 1;

  if (solved_last > solved) solving();
}

function impossible() {
  if (input_a1 !== null && input_a2 !== null && input_a3 !== null) {
    if (
      input_b4 !== input_a1 &&
      input_b4 !== input_a2 &&
      input_b4 !== input_a3 &&
      input_b4 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a3.style.color = "red";
      b4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b5 !== input_a1 &&
      input_b5 !== input_a2 &&
      input_b5 !== input_a3 &&
      input_b5 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a3.style.color = "red";
      b5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b6 !== input_a1 &&
      input_b6 !== input_a2 &&
      input_b6 !== input_a3 &&
      input_b6 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a3.style.color = "red";
      b6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_a4 !== null && input_a5 !== null && input_a6 !== null) {
    if (
      input_b1 !== input_a4 &&
      input_b1 !== input_a5 &&
      input_b1 !== input_a6 &&
      input_b1 !== null
    ) {
      clear_temp();
      a4.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      b1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b2 !== input_a4 &&
      input_b2 !== input_a5 &&
      input_b2 !== input_a6 &&
      input_b2 !== null
    ) {
      clear_temp();
      a4.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      b2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b3 !== input_a4 &&
      input_b3 !== input_a5 &&
      input_b3 !== input_a6 &&
      input_b3 !== null
    ) {
      clear_temp();
      a4.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      b3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b1 !== null && input_b2 !== null && input_b3 !== null) {
    if (
      input_a4 !== input_b1 &&
      input_a4 !== input_b2 &&
      input_a4 !== input_b3 &&
      input_a4 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b3.style.color = "red";
      a4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a5 !== input_b1 &&
      input_a5 !== input_b2 &&
      input_a5 !== input_b3 &&
      input_a5 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b3.style.color = "red";
      a5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a6 !== input_b1 &&
      input_a6 !== input_b2 &&
      input_a6 !== input_b3 &&
      input_a6 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b3.style.color = "red";
      a6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b4 !== null && input_b5 !== null && input_b6 !== null) {
    if (
      input_a1 !== input_b4 &&
      input_a1 !== input_b5 &&
      input_a1 !== input_b6 &&
      input_a1 !== null
    ) {
      clear_temp();
      b4.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      a1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a2 !== input_b4 &&
      input_a2 !== input_b5 &&
      input_a2 !== input_b6 &&
      input_a2 !== null
    ) {
      clear_temp();
      b4.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      a2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a3 !== input_b4 &&
      input_a3 !== input_b5 &&
      input_a3 !== input_b6 &&
      input_a3 !== null
    ) {
      clear_temp();
      b4.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      a3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c1 !== null && input_c2 !== null && input_c3 !== null) {
    if (
      input_d4 !== input_c1 &&
      input_d4 !== input_c2 &&
      input_d4 !== input_c3 &&
      input_d4 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c3.style.color = "red";
      d4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d5 !== input_c1 &&
      input_d5 !== input_c2 &&
      input_d5 !== input_c3 &&
      input_d5 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c3.style.color = "red";
      d5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d6 !== input_c1 &&
      input_d6 !== input_c2 &&
      input_d6 !== input_c3 &&
      input_d6 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c3.style.color = "red";
      d6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c4 !== null && input_c5 !== null && input_c6 !== null) {
    if (
      input_d1 !== input_c4 &&
      input_d1 !== input_c5 &&
      input_d1 !== input_c6 &&
      input_d1 !== null
    ) {
      clear_temp();
      c4.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      d1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d2 !== input_c4 &&
      input_d2 !== input_c5 &&
      input_d2 !== input_c6 &&
      input_d2 !== null
    ) {
      clear_temp();
      c4.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      d2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d3 !== input_c4 &&
      input_d3 !== input_c5 &&
      input_d3 !== input_c6 &&
      input_d3 !== null
    ) {
      clear_temp();
      c4.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      d3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d1 !== null && input_d2 !== null && input_d3 !== null) {
    if (
      input_c4 !== input_d1 &&
      input_c4 !== input_d2 &&
      input_c4 !== input_d3 &&
      input_c4 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d3.style.color = "red";
      c4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c5 !== input_d1 &&
      input_c5 !== input_d2 &&
      input_c5 !== input_d3 &&
      input_c5 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d3.style.color = "red";
      c5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c6 !== input_d1 &&
      input_c6 !== input_d2 &&
      input_c6 !== input_d3 &&
      input_c6 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d3.style.color = "red";
      c6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d4 !== null && input_d5 !== null && input_d6 !== null) {
    if (
      input_c1 !== input_d4 &&
      input_c1 !== input_d5 &&
      input_c1 !== input_d6 &&
      input_c1 !== null
    ) {
      clear_temp();
      d4.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      c1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c2 !== input_d4 &&
      input_c2 !== input_d5 &&
      input_c2 !== input_d6 &&
      input_c2 !== null
    ) {
      clear_temp();
      d4.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      c2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c3 !== input_d4 &&
      input_c3 !== input_d5 &&
      input_c3 !== input_d6 &&
      input_c3 !== null
    ) {
      clear_temp();
      d4.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      c3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_e1 !== null && input_e2 !== null && input_e3 !== null) {
    if (
      input_f4 !== input_e1 &&
      input_f4 !== input_e2 &&
      input_f4 !== input_e3 &&
      input_f4 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e3.style.color = "red";
      f4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f5 !== input_e1 &&
      input_f5 !== input_e2 &&
      input_f5 !== input_e3 &&
      input_f5 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e3.style.color = "red";
      f5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f6 !== input_e1 &&
      input_f6 !== input_e2 &&
      input_f6 !== input_e3 &&
      input_f6 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e3.style.color = "red";
      f6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_e4 !== null && input_e5 !== null && input_e6 !== null) {
    if (
      input_f1 !== input_e4 &&
      input_f1 !== input_e5 &&
      input_f1 !== input_e6 &&
      input_f1 !== null
    ) {
      clear_temp();
      e4.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      f1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f2 !== input_e4 &&
      input_f2 !== input_e5 &&
      input_f2 !== input_e6 &&
      input_f2 !== null
    ) {
      clear_temp();
      e4.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      f2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f3 !== input_e4 &&
      input_f3 !== input_e5 &&
      input_f3 !== input_e6 &&
      input_f3 !== null
    ) {
      clear_temp();
      e4.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      f3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_f1 !== null && input_f2 !== null && input_f3 !== null) {
    if (
      input_e4 !== input_f1 &&
      input_e4 !== input_f2 &&
      input_e4 !== input_f3 &&
      input_e4 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f3.style.color = "red";
      e4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e5 !== input_f1 &&
      input_e5 !== input_f2 &&
      input_e5 !== input_f3 &&
      input_e5 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f3.style.color = "red";
      e5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e6 !== input_f1 &&
      input_e6 !== input_f2 &&
      input_e6 !== input_f3 &&
      input_e6 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f3.style.color = "red";
      e6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_f4 !== null && input_f5 !== null && input_f6 !== null) {
    if (
      input_e1 !== input_f4 &&
      input_e1 !== input_f5 &&
      input_e1 !== input_f6 &&
      input_e1 !== null
    ) {
      clear_temp();
      f4.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      e1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e2 !== input_f4 &&
      input_e2 !== input_f5 &&
      input_e2 !== input_f6 &&
      input_e2 !== null
    ) {
      clear_temp();
      f4.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      e2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e3 !== input_f4 &&
      input_e3 !== input_f5 &&
      input_e3 !== input_f6 &&
      input_e3 !== null
    ) {
      clear_temp();
      f4.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      e3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_a2 !== null &&
    input_a3 !== null &&
    input_a5 !== null &&
    input_a6 !== null
  ) {
    if (
      input_c1 !== input_a2 &&
      input_c1 !== input_a3 &&
      input_c1 !== input_a5 &&
      input_c1 !== input_a6 &&
      input_c1 !== null
    ) {
      clear_temp();
      a2.style.color = "red";
      a3.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      c1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c4 !== input_a2 &&
      input_c4 !== input_a3 &&
      input_c4 !== input_a5 &&
      input_c4 !== input_a6 &&
      input_c4 !== null
    ) {
      clear_temp();
      a2.style.color = "red";
      a3.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      c4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e1 !== input_a2 &&
      input_e1 !== input_a3 &&
      input_e1 !== input_a5 &&
      input_e1 !== input_a6 &&
      input_e1 !== null
    ) {
      clear_temp();
      a2.style.color = "red";
      a3.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      e1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e4 !== input_a2 &&
      input_e4 !== input_a3 &&
      input_e4 !== input_a5 &&
      input_e4 !== input_a6 &&
      input_e4 !== null
    ) {
      clear_temp();
      a2.style.color = "red";
      a3.style.color = "red";
      a5.style.color = "red";
      a6.style.color = "red";
      e4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_a1 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_a6 !== null
  ) {
    if (
      input_c2 !== input_a1 &&
      input_c2 !== input_a3 &&
      input_c2 !== input_a4 &&
      input_c2 !== input_a6 &&
      input_c2 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      a4.style.color = "red";
      a6.style.color = "red";
      c2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c5 !== input_a1 &&
      input_c5 !== input_a3 &&
      input_c5 !== input_a4 &&
      input_c5 !== input_a6 &&
      input_c5 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      a4.style.color = "red";
      a6.style.color = "red";
      c5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e2 !== input_a1 &&
      input_e2 !== input_a3 &&
      input_e2 !== input_a4 &&
      input_e2 !== input_a6 &&
      input_e2 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      a4.style.color = "red";
      a6.style.color = "red";
      e2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e5 !== input_a1 &&
      input_e5 !== input_a3 &&
      input_e5 !== input_a4 &&
      input_e5 !== input_a6 &&
      input_e5 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      a4.style.color = "red";
      a6.style.color = "red";
      e5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a4 !== null &&
    input_a5 !== null
  ) {
    if (
      input_c3 !== input_a1 &&
      input_c3 !== input_a2 &&
      input_c3 !== input_a4 &&
      input_c3 !== input_a5 &&
      input_c3 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a4.style.color = "red";
      a5.style.color = "red";
      c3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c6 !== input_a1 &&
      input_c6 !== input_a2 &&
      input_c6 !== input_a4 &&
      input_c6 !== input_a5 &&
      input_c6 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a4.style.color = "red";
      a5.style.color = "red";
      c6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e3 !== input_a1 &&
      input_e3 !== input_a2 &&
      input_e3 !== input_a4 &&
      input_e3 !== input_a5 &&
      input_e3 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a4.style.color = "red";
      a5.style.color = "red";
      e3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e6 !== input_a1 &&
      input_e6 !== input_a2 &&
      input_e6 !== input_a4 &&
      input_e6 !== input_a5 &&
      input_e6 !== null
    ) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      a4.style.color = "red";
      a5.style.color = "red";
      e6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_b2 !== null &&
    input_b3 !== null &&
    input_b5 !== null &&
    input_b6 !== null
  ) {
    if (
      input_d1 !== input_b2 &&
      input_d1 !== input_b3 &&
      input_d1 !== input_b5 &&
      input_d1 !== input_b6 &&
      input_d1 !== null
    ) {
      clear_temp();
      b2.style.color = "red";
      b3.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      d1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d4 !== input_b2 &&
      input_d4 !== input_b3 &&
      input_d4 !== input_b5 &&
      input_d4 !== input_b6 &&
      input_d4 !== null
    ) {
      clear_temp();
      b2.style.color = "red";
      b3.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      d4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f1 !== input_b2 &&
      input_f1 !== input_b3 &&
      input_f1 !== input_b5 &&
      input_f1 !== input_b6 &&
      input_f1 !== null
    ) {
      clear_temp();
      b2.style.color = "red";
      b3.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      f1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f4 !== input_b2 &&
      input_f4 !== input_b3 &&
      input_f4 !== input_b5 &&
      input_f4 !== input_b6 &&
      input_f4 !== null
    ) {
      clear_temp();
      b2.style.color = "red";
      b3.style.color = "red";
      b5.style.color = "red";
      b6.style.color = "red";
      f4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_b1 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_b6 !== null
  ) {
    if (
      input_d2 !== input_b1 &&
      input_d2 !== input_b3 &&
      input_d2 !== input_b4 &&
      input_d2 !== input_b6 &&
      input_d2 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      b4.style.color = "red";
      b6.style.color = "red";
      d2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d5 !== input_b1 &&
      input_d5 !== input_b3 &&
      input_d5 !== input_b4 &&
      input_d5 !== input_b6 &&
      input_d5 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      b4.style.color = "red";
      b6.style.color = "red";
      d5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f2 !== input_b1 &&
      input_f2 !== input_b3 &&
      input_f2 !== input_b4 &&
      input_f2 !== input_b6 &&
      input_f2 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      b4.style.color = "red";
      b6.style.color = "red";
      f2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f5 !== input_b1 &&
      input_f5 !== input_b3 &&
      input_f5 !== input_b4 &&
      input_f5 !== input_b6 &&
      input_f5 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      b4.style.color = "red";
      b6.style.color = "red";
      f5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_b1 !== null &&
    input_b2 !== null &&
    input_b4 !== null &&
    input_b5 !== null
  ) {
    if (
      input_d3 !== input_b1 &&
      input_d3 !== input_b2 &&
      input_d3 !== input_b4 &&
      input_d3 !== input_b5 &&
      input_d3 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b4.style.color = "red";
      b5.style.color = "red";
      d3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d6 !== input_b1 &&
      input_d6 !== input_b2 &&
      input_d6 !== input_b4 &&
      input_d6 !== input_b5 &&
      input_d6 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b4.style.color = "red";
      b5.style.color = "red";
      d6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f3 !== input_b1 &&
      input_f3 !== input_b2 &&
      input_f3 !== input_b4 &&
      input_f3 !== input_b5 &&
      input_f3 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b4.style.color = "red";
      b5.style.color = "red";
      f3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f6 !== input_b1 &&
      input_f6 !== input_b2 &&
      input_f6 !== input_b4 &&
      input_f6 !== input_b5 &&
      input_f6 !== null
    ) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      b4.style.color = "red";
      b5.style.color = "red";
      f6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_c2 !== null &&
    input_c3 !== null &&
    input_c5 !== null &&
    input_c6 !== null
  ) {
    if (
      input_a1 !== input_c2 &&
      input_a1 !== input_c3 &&
      input_a1 !== input_c5 &&
      input_a1 !== input_c6 &&
      input_a1 !== null
    ) {
      clear_temp();
      c2.style.color = "red";
      c3.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      a1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a4 !== input_c2 &&
      input_a4 !== input_c3 &&
      input_a4 !== input_c5 &&
      input_a4 !== input_c6 &&
      input_a4 !== null
    ) {
      clear_temp();
      c2.style.color = "red";
      c3.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      a4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e1 !== input_c2 &&
      input_e1 !== input_c3 &&
      input_e1 !== input_c5 &&
      input_e1 !== input_c6 &&
      input_e1 !== null
    ) {
      clear_temp();
      c2.style.color = "red";
      c3.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      e1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e4 !== input_c2 &&
      input_e4 !== input_c3 &&
      input_e4 !== input_c5 &&
      input_e4 !== input_c6 &&
      input_e4 !== null
    ) {
      clear_temp();
      c2.style.color = "red";
      c3.style.color = "red";
      c5.style.color = "red";
      c6.style.color = "red";
      e4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_c1 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_c6 !== null
  ) {
    if (
      input_a2 !== input_c1 &&
      input_a2 !== input_c3 &&
      input_a2 !== input_c4 &&
      input_a2 !== input_c6 &&
      input_a2 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      c4.style.color = "red";
      c6.style.color = "red";
      a2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a5 !== input_c1 &&
      input_a5 !== input_c3 &&
      input_a5 !== input_c4 &&
      input_a5 !== input_c6 &&
      input_a5 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      c4.style.color = "red";
      c6.style.color = "red";
      a5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e2 !== input_c1 &&
      input_e2 !== input_c3 &&
      input_e2 !== input_c4 &&
      input_e2 !== input_c6 &&
      input_e2 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      c4.style.color = "red";
      c6.style.color = "red";
      e2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e5 !== input_c1 &&
      input_e5 !== input_c3 &&
      input_e5 !== input_c4 &&
      input_e5 !== input_c6 &&
      input_e5 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      c4.style.color = "red";
      c6.style.color = "red";
      e5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_c1 !== null &&
    input_c2 !== null &&
    input_c4 !== null &&
    input_c5 !== null
  ) {
    if (
      input_a3 !== input_c1 &&
      input_a3 !== input_c2 &&
      input_a3 !== input_c4 &&
      input_a3 !== input_c5 &&
      input_a3 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c4.style.color = "red";
      c5.style.color = "red";
      a3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a6 !== input_c1 &&
      input_a6 !== input_c2 &&
      input_a6 !== input_c4 &&
      input_a6 !== input_c5 &&
      input_a6 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c4.style.color = "red";
      c5.style.color = "red";
      a6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e3 !== input_c1 &&
      input_e3 !== input_c2 &&
      input_e3 !== input_c4 &&
      input_e3 !== input_c5 &&
      input_e3 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c4.style.color = "red";
      c5.style.color = "red";
      e3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_e6 !== input_c1 &&
      input_e6 !== input_c2 &&
      input_e6 !== input_c4 &&
      input_e6 !== input_c5 &&
      input_e6 !== null
    ) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      c4.style.color = "red";
      c5.style.color = "red";
      e6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_d2 !== null &&
    input_d3 !== null &&
    input_d5 !== null &&
    input_d6 !== null
  ) {
    if (
      input_b1 !== input_d2 &&
      input_b1 !== input_d3 &&
      input_b1 !== input_d5 &&
      input_b1 !== input_d6 &&
      input_b1 !== null
    ) {
      clear_temp();
      d2.style.color = "red";
      d3.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      b1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b4 !== input_d2 &&
      input_b4 !== input_d3 &&
      input_b4 !== input_d5 &&
      input_b4 !== input_d6 &&
      input_b4 !== null
    ) {
      clear_temp();
      d2.style.color = "red";
      d3.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      b4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f1 !== input_d2 &&
      input_f1 !== input_d3 &&
      input_f1 !== input_d5 &&
      input_f1 !== input_d6 &&
      input_f1 !== null
    ) {
      clear_temp();
      d2.style.color = "red";
      d3.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      f1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f4 !== input_d2 &&
      input_f4 !== input_d3 &&
      input_f4 !== input_d5 &&
      input_f4 !== input_d6 &&
      input_f4 !== null
    ) {
      clear_temp();
      d2.style.color = "red";
      d3.style.color = "red";
      d5.style.color = "red";
      d6.style.color = "red";
      f4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_d1 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    input_d6 !== null
  ) {
    if (
      input_b2 !== input_d1 &&
      input_b2 !== input_d3 &&
      input_b2 !== input_d4 &&
      input_b2 !== input_d6 &&
      input_b2 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      d4.style.color = "red";
      d6.style.color = "red";
      b2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b5 !== input_d1 &&
      input_b5 !== input_d3 &&
      input_b5 !== input_d4 &&
      input_b5 !== input_d6 &&
      input_b5 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      d4.style.color = "red";
      d6.style.color = "red";
      b5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f2 !== input_d1 &&
      input_f2 !== input_d3 &&
      input_f2 !== input_d4 &&
      input_f2 !== input_d6 &&
      input_f2 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      d4.style.color = "red";
      d6.style.color = "red";
      f2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f5 !== input_d1 &&
      input_f5 !== input_d3 &&
      input_f5 !== input_d4 &&
      input_f5 !== input_d6 &&
      input_f5 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      d4.style.color = "red";
      d6.style.color = "red";
      f5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_d1 !== null &&
    input_d2 !== null &&
    input_d4 !== null &&
    input_d5 !== null
  ) {
    if (
      input_b3 !== input_d1 &&
      input_b3 !== input_d2 &&
      input_b3 !== input_d4 &&
      input_b3 !== input_d5 &&
      input_b3 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d4.style.color = "red";
      d5.style.color = "red";
      b3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b6 !== input_d1 &&
      input_b6 !== input_d2 &&
      input_b6 !== input_d4 &&
      input_b6 !== input_d5 &&
      input_b6 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d4.style.color = "red";
      d5.style.color = "red";
      b6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f3 !== input_d1 &&
      input_f3 !== input_d2 &&
      input_f3 !== input_d4 &&
      input_f3 !== input_d5 &&
      input_f3 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d4.style.color = "red";
      d5.style.color = "red";
      f3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_f6 !== input_d1 &&
      input_f6 !== input_d2 &&
      input_f6 !== input_d4 &&
      input_f6 !== input_d5 &&
      input_f6 !== null
    ) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      d4.style.color = "red";
      d5.style.color = "red";
      f6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_e2 !== null &&
    input_e3 !== null &&
    input_e5 !== null &&
    input_e6 !== null
  ) {
    if (
      input_a1 !== input_e2 &&
      input_a1 !== input_e3 &&
      input_a1 !== input_e5 &&
      input_a1 !== input_e6 &&
      input_a1 !== null
    ) {
      clear_temp();
      e2.style.color = "red";
      e3.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      a1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a4 !== input_e2 &&
      input_a4 !== input_e3 &&
      input_a4 !== input_e5 &&
      input_a4 !== input_e6 &&
      input_a4 !== null
    ) {
      clear_temp();
      e2.style.color = "red";
      e3.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      a4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c1 !== input_e2 &&
      input_c1 !== input_e3 &&
      input_c1 !== input_e5 &&
      input_c1 !== input_e6 &&
      input_c1 !== null
    ) {
      clear_temp();
      e2.style.color = "red";
      e3.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      c1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c4 !== input_e2 &&
      input_c4 !== input_e3 &&
      input_c4 !== input_e5 &&
      input_c4 !== input_e6 &&
      input_c4 !== null
    ) {
      clear_temp();
      e2.style.color = "red";
      e3.style.color = "red";
      e5.style.color = "red";
      e6.style.color = "red";
      c4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_e1 !== null &&
    input_e3 !== null &&
    input_e4 !== null &&
    input_e6 !== null
  ) {
    if (
      input_a2 !== input_e1 &&
      input_a2 !== input_e3 &&
      input_a2 !== input_e4 &&
      input_a2 !== input_e6 &&
      input_a2 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e3.style.color = "red";
      e4.style.color = "red";
      e6.style.color = "red";
      a2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a5 !== input_e1 &&
      input_a5 !== input_e3 &&
      input_a5 !== input_e4 &&
      input_a5 !== input_e6 &&
      input_a5 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e3.style.color = "red";
      e4.style.color = "red";
      e6.style.color = "red";
      a5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c2 !== input_e1 &&
      input_c2 !== input_e3 &&
      input_c2 !== input_e4 &&
      input_c2 !== input_e6 &&
      input_c2 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e3.style.color = "red";
      e4.style.color = "red";
      e6.style.color = "red";
      c2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c5 !== input_e1 &&
      input_c5 !== input_e3 &&
      input_c5 !== input_e4 &&
      input_c5 !== input_e6 &&
      input_c5 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e3.style.color = "red";
      e4.style.color = "red";
      e6.style.color = "red";
      c5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_e1 !== null &&
    input_e2 !== null &&
    input_e4 !== null &&
    input_e5 !== null
  ) {
    if (
      input_a3 !== input_e1 &&
      input_a3 !== input_e2 &&
      input_a3 !== input_e4 &&
      input_a3 !== input_e5 &&
      input_a3 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e4.style.color = "red";
      e5.style.color = "red";
      a3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_a6 !== input_e1 &&
      input_a6 !== input_e2 &&
      input_a6 !== input_e4 &&
      input_a6 !== input_e5 &&
      input_a6 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e4.style.color = "red";
      e5.style.color = "red";
      a6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c3 !== input_e1 &&
      input_c3 !== input_e2 &&
      input_c3 !== input_e4 &&
      input_c3 !== input_e5 &&
      input_c3 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e4.style.color = "red";
      e5.style.color = "red";
      c3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_c6 !== input_e1 &&
      input_c6 !== input_e2 &&
      input_c6 !== input_e4 &&
      input_c6 !== input_e5 &&
      input_c6 !== null
    ) {
      clear_temp();
      e1.style.color = "red";
      e2.style.color = "red";
      e4.style.color = "red";
      e5.style.color = "red";
      c6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_f2 !== null &&
    input_f3 !== null &&
    input_f5 !== null &&
    input_f6 !== null
  ) {
    if (
      input_b1 !== input_f2 &&
      input_b1 !== input_f3 &&
      input_b1 !== input_f5 &&
      input_b1 !== input_f6 &&
      input_b1 !== null
    ) {
      clear_temp();
      f2.style.color = "red";
      f3.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      b1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b4 !== input_f2 &&
      input_b4 !== input_f3 &&
      input_b4 !== input_f5 &&
      input_b4 !== input_f6 &&
      input_b4 !== null
    ) {
      clear_temp();
      f2.style.color = "red";
      f3.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      b4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d1 !== input_f2 &&
      input_d1 !== input_f3 &&
      input_d1 !== input_f5 &&
      input_d1 !== input_f6 &&
      input_d1 !== null
    ) {
      clear_temp();
      f2.style.color = "red";
      f3.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      d1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d4 !== input_f2 &&
      input_d4 !== input_f3 &&
      input_d4 !== input_f5 &&
      input_d4 !== input_f6 &&
      input_d4 !== null
    ) {
      clear_temp();
      f2.style.color = "red";
      f3.style.color = "red";
      f5.style.color = "red";
      f6.style.color = "red";
      d4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_f1 !== null &&
    input_f3 !== null &&
    input_f4 !== null &&
    input_f6 !== null
  ) {
    if (
      input_b2 !== input_f1 &&
      input_b2 !== input_f3 &&
      input_b2 !== input_f4 &&
      input_b2 !== input_f6 &&
      input_b2 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f3.style.color = "red";
      f4.style.color = "red";
      f6.style.color = "red";
      b2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b5 !== input_f1 &&
      input_b5 !== input_f3 &&
      input_b5 !== input_f4 &&
      input_b5 !== input_f6 &&
      input_b5 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f3.style.color = "red";
      f4.style.color = "red";
      f6.style.color = "red";
      b5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d2 !== input_f1 &&
      input_d2 !== input_f3 &&
      input_d2 !== input_f4 &&
      input_d2 !== input_f6 &&
      input_d2 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f3.style.color = "red";
      f4.style.color = "red";
      f6.style.color = "red";
      d2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d5 !== input_f1 &&
      input_d5 !== input_f3 &&
      input_d5 !== input_f4 &&
      input_d5 !== input_f6 &&
      input_d5 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f3.style.color = "red";
      f4.style.color = "red";
      f6.style.color = "red";
      d5.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (
    input_f1 !== null &&
    input_f2 !== null &&
    input_f4 !== null &&
    input_f5 !== null
  ) {
    if (
      input_b3 !== input_f1 &&
      input_b3 !== input_f2 &&
      input_b3 !== input_f4 &&
      input_b3 !== input_f5 &&
      input_b3 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f4.style.color = "red";
      f5.style.color = "red";
      b3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_b6 !== input_f1 &&
      input_b6 !== input_f2 &&
      input_b6 !== input_f4 &&
      input_b6 !== input_f5 &&
      input_b6 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f4.style.color = "red";
      f5.style.color = "red";
      b6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d3 !== input_f1 &&
      input_d3 !== input_f2 &&
      input_d3 !== input_f4 &&
      input_d3 !== input_f5 &&
      input_d3 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f4.style.color = "red";
      f5.style.color = "red";
      d3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (
      input_d6 !== input_f1 &&
      input_d6 !== input_f2 &&
      input_d6 !== input_f4 &&
      input_d6 !== input_f5 &&
      input_d6 !== null
    ) {
      clear_temp();
      f1.style.color = "red";
      f2.style.color = "red";
      f4.style.color = "red";
      f5.style.color = "red";
      d6.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }
}

function solver() {
  if (input_a1 === null) {
    if (
      input_a2 !== null &&
      input_a3 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a1.innerHTML = temp;
          input_a1 = a1.innerHTML;
          break;
        }
      }
    } else if (
      input_a2 !== null &&
      input_a3 !== null &&
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a1.innerHTML = temp;
          input_a1 = a1.innerHTML;
          break;
        }
      }
    } else if (
      input_a4 !== null &&
      input_c1 !== null &&
      input_c4 !== null &&
      input_e1 !== null &&
      input_e4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a1.innerHTML = temp;
          input_a1 = a1.innerHTML;
          break;
        }
      }
    }

    if (input_a1 === null && input_a2 !== null && input_a3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b5 === temp) {
            a1.innerHTML = temp;
            input_a1 = a1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a1 === null && input_a4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_c2 === temp || input_c5 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              a1.innerHTML = temp;
              input_a1 = a1.innerHTML;
              break;
            }
          }
          if (input_c3 === temp || input_c6 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              a1.innerHTML = temp;
              input_a1 = a1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b6 === temp) {
            if (
              input_c2 === temp ||
              input_c5 === temp ||
              input_e2 === temp ||
              input_e5 === temp
            ) {
              if (
                input_c3 === temp ||
                input_c6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                a1.innerHTML = temp;
                input_a1 = a1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a2 === null) {
          if (
            input_c2 === value ||
            input_c5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a3 === null) {
          if (
            input_c3 === value ||
            input_c6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b4 === value || input_b5 === value || input_b6 === value) {
          filled += 3;
        } else {
          if (input_b1 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b2 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b3 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a1.innerHTML = value;
          input_a1 = a1.innerHTML;
          break;
        }
      }
    }

    if (input_a1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a4 === null) {
          if (input_b4 === value || input_b5 === value || input_b6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c2 === value ||
          input_c3 === value ||
          input_c5 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c1 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c4 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e2 === value ||
          input_e3 === value ||
          input_e5 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e1 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e4 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a1.innerHTML = value;
          input_a1 = a1.innerHTML;
          break;
        }
      }
    }

    if (input_a1 === null && input_a4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          let filled = 0;
          if (
            input_c2 === temp ||
            input_c5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_a2 !== null && input_a5 !== null) filled += 2;
          if (
            input_c3 === temp ||
            input_c6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_a3 !== null && input_a6 !== null) filled += 2;
          if (filled === 4) {
            a1.innerHTML = temp;
            input_a1 = a1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_a2 === null) {
    if (
      input_a1 !== null &&
      input_a3 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a2.innerHTML = temp;
          input_a2 = a2.innerHTML;
          break;
        }
      }
    } else if (
      input_a1 !== null &&
      input_a3 !== null &&
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a2.innerHTML = temp;
          input_a2 = a2.innerHTML;
          break;
        }
      }
    } else if (
      input_a5 !== null &&
      input_c2 !== null &&
      input_c5 !== null &&
      input_e2 !== null &&
      input_e5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a2.innerHTML = temp;
          input_a2 = a2.innerHTML;
          break;
        }
      }
    }

    if (input_a2 === null && input_a1 !== null && input_a3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b6 === temp) {
            a2.innerHTML = temp;
            input_a2 = a2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a2 === null && input_a5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_c1 === temp || input_c4 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              a2.innerHTML = temp;
              input_a2 = a2.innerHTML;
              break;
            }
          }
          if (input_c3 === temp || input_c6 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              a2.innerHTML = temp;
              input_a2 = a2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b6 === temp) {
            if (
              input_c1 === temp ||
              input_c4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_c3 === temp ||
                input_c6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                a2.innerHTML = temp;
                input_a2 = a2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a1 === null) {
          if (
            input_c1 === value ||
            input_c4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a3 === null) {
          if (
            input_c3 === value ||
            input_c6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b4 === value || input_b5 === value || input_b6 === value) {
          filled += 3;
        } else {
          if (input_b1 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b2 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b3 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a2.innerHTML = value;
          input_a2 = a2.innerHTML;
          break;
        }
      }
    }

    if (input_a2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a5 === null) {
          if (input_b4 === value || input_b5 === value || input_b6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c1 === value ||
          input_c3 === value ||
          input_c4 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c2 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e3 === value ||
          input_e4 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e2 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a2.innerHTML = value;
          input_a2 = a2.innerHTML;
          break;
        }
      }
    }

    if (input_a2 === null && input_a5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          let filled = 0;
          if (
            input_c1 === temp ||
            input_c4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_a1 !== null && input_a4 !== null) filled += 2;
          if (
            input_c3 === temp ||
            input_c6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_a3 !== null && input_a6 !== null) filled += 2;
          if (filled === 4) {
            a2.innerHTML = temp;
            input_a2 = a2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_a3 === null) {
    if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a3.innerHTML = temp;
          input_a3 = a3.innerHTML;
          break;
        }
      }
    } else if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a3.innerHTML = temp;
          input_a3 = a3.innerHTML;
          break;
        }
      }
    } else if (
      input_a6 !== null &&
      input_c3 !== null &&
      input_c6 !== null &&
      input_e3 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a3.innerHTML = temp;
          input_a3 = a3.innerHTML;
          break;
        }
      }
    }

    if (input_a3 === null && input_a1 !== null && input_a2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b6 === temp) {
            a3.innerHTML = temp;
            input_a3 = a3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a3 === null && input_a6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_c1 === temp || input_c4 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              a3.innerHTML = temp;
              input_a3 = a3.innerHTML;
              break;
            }
          }
          if (input_c2 === temp || input_c5 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              a3.innerHTML = temp;
              input_a3 = a3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_b4 === temp || input_b5 === temp || input_b6 === temp) {
            if (
              input_c1 === temp ||
              input_c4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_c2 === temp ||
                input_c5 === temp ||
                input_e2 === temp ||
                input_e5 === temp
              ) {
                a3.innerHTML = temp;
                input_a3 = a3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a1 === null) {
          if (
            input_c1 === value ||
            input_c4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a2 === null) {
          if (
            input_c2 === value ||
            input_c5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b4 === value || input_b5 === value || input_b6 === value) {
          filled += 3;
        } else {
          if (input_b1 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b2 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b3 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a3.innerHTML = value;
          input_a3 = a3.innerHTML;
          break;
        }
      }
    }

    if (input_a3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a6 === null) {
          if (input_b4 === value || input_b5 === value || input_b6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c1 === value ||
          input_c2 === value ||
          input_c4 === value ||
          input_c5 === value
        ) {
          filled += 2;
        } else {
          if (input_c3 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e2 === value ||
          input_e4 === value ||
          input_e5 === value
        ) {
          filled += 2;
        } else {
          if (input_e3 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a3.innerHTML = value;
          input_a3 = a3.innerHTML;
          break;
        }
      }
    }

    if (input_a3 === null && input_a6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          let filled = 0;
          if (
            input_c1 === temp ||
            input_c4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_a1 !== null && input_a4 !== null) filled += 2;
          if (
            input_c2 === temp ||
            input_c5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_a2 !== null && input_a5 !== null) filled += 2;
          if (filled === 4) {
            a3.innerHTML = temp;
            input_a3 = a3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_a4 === null) {
    if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a4.innerHTML = temp;
          input_a4 = a4.innerHTML;
          break;
        }
      }
    } else if (
      input_a5 !== null &&
      input_a6 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a4.innerHTML = temp;
          input_a4 = a4.innerHTML;
          break;
        }
      }
    } else if (
      input_a1 !== null &&
      input_c1 !== null &&
      input_c4 !== null &&
      input_e1 !== null &&
      input_e4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          a4.innerHTML = temp;
          input_a4 = a4.innerHTML;
          break;
        }
      }
    }

    if (input_a4 === null && input_a5 !== null && input_a6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            a4.innerHTML = temp;
            input_a4 = a4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a4 === null && input_a1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_c2 === temp || input_c5 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              a4.innerHTML = temp;
              input_a4 = a4.innerHTML;
              break;
            }
          }
          if (input_c3 === temp || input_c6 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              a4.innerHTML = temp;
              input_a4 = a4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            if (
              input_c2 === temp ||
              input_c5 === temp ||
              input_e2 === temp ||
              input_e5 === temp
            ) {
              if (
                input_c3 === temp ||
                input_c6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                a4.innerHTML = temp;
                input_a4 = a4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a5 === null) {
          if (
            input_c2 === value ||
            input_c5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a6 === null) {
          if (
            input_c3 === value ||
            input_c6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b1 === value || input_b2 === value || input_b3 === value) {
          filled += 3;
        } else {
          if (input_b4 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a4.innerHTML = value;
          input_a4 = a4.innerHTML;
          break;
        }
      }
    }

    if (input_a4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a1 === null) {
          if (input_b1 === value || input_b2 === value || input_b3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c2 === value ||
          input_c3 === value ||
          input_c5 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c1 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c4 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e2 === value ||
          input_e3 === value ||
          input_e5 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e1 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e4 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a4.innerHTML = value;
          input_a4 = a4.innerHTML;
          break;
        }
      }
    }

    if (input_a4 === null && input_a1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          let filled = 0;
          if (
            input_c2 === temp ||
            input_c5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_a2 !== null && input_a5 !== null) filled += 2;
          if (
            input_c3 === temp ||
            input_c6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_a3 !== null && input_a6 !== null) filled += 2;
          if (filled === 4) {
            a4.innerHTML = temp;
            input_a4 = a4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_a5 === null) {
    if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null &&
      input_a4 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a5.innerHTML = temp;
          input_a5 = a5.innerHTML;
          break;
        }
      }
    } else if (
      input_a4 !== null &&
      input_a6 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a5.innerHTML = temp;
          input_a5 = a5.innerHTML;
          break;
        }
      }
    } else if (
      input_a2 !== null &&
      input_c2 !== null &&
      input_c5 !== null &&
      input_e2 !== null &&
      input_e5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          a5.innerHTML = temp;
          input_a5 = a5.innerHTML;
          break;
        }
      }
    }

    if (input_a5 === null && input_a4 !== null && input_a6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            a5.innerHTML = temp;
            input_a5 = a5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a5 === null && input_a2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_c1 === temp || input_c4 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              a5.innerHTML = temp;
              input_a5 = a5.innerHTML;
              break;
            }
          }
          if (input_c3 === temp || input_c6 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              a5.innerHTML = temp;
              input_a5 = a5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            if (
              input_c1 === temp ||
              input_c4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_c3 === temp ||
                input_c6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                a5.innerHTML = temp;
                input_a5 = a5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a4 === null) {
          if (
            input_c1 === value ||
            input_c4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a6 === null) {
          if (
            input_c3 === value ||
            input_c6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b1 === value || input_b2 === value || input_b3 === value) {
          filled += 3;
        } else {
          if (input_b4 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a5.innerHTML = value;
          input_a5 = a5.innerHTML;
          break;
        }
      }
    }

    if (input_a5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a2 === null) {
          if (input_b1 === value || input_b2 === value || input_b3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c1 === value ||
          input_c3 === value ||
          input_c4 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c2 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e3 === value ||
          input_e4 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e2 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a5.innerHTML = value;
          input_a5 = a5.innerHTML;
          break;
        }
      }
    }

    if (input_a5 === null && input_a2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a6 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          let filled = 0;
          if (
            input_c1 === temp ||
            input_c4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_a1 !== null && input_a4 !== null) filled += 2;
          if (
            input_c3 === temp ||
            input_c6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_a3 !== null && input_a6 !== null) filled += 2;
          if (filled === 4) {
            a5.innerHTML = temp;
            input_a5 = a5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_a6 === null) {
    if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null &&
      input_a4 !== null &&
      input_a5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a6.innerHTML = temp;
          input_a6 = a6.innerHTML;
          break;
        }
      }
    } else if (
      input_a4 !== null &&
      input_a5 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a6.innerHTML = temp;
          input_a6 = a6.innerHTML;
          break;
        }
      }
    } else if (
      input_a3 !== null &&
      input_c3 !== null &&
      input_c6 !== null &&
      input_e3 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          a6.innerHTML = temp;
          input_a6 = a6.innerHTML;
          break;
        }
      }
    }

    if (input_a6 === null && input_a4 !== null && input_a5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            a6.innerHTML = temp;
            input_a6 = a6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_a6 === null && input_a3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_c1 === temp || input_c4 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              a6.innerHTML = temp;
              input_a6 = a6.innerHTML;
              break;
            }
          }
          if (input_c2 === temp || input_c5 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              a6.innerHTML = temp;
              input_a6 = a6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_a6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_b1 === temp || input_b2 === temp || input_b3 === temp) {
            if (
              input_c1 === temp ||
              input_c4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_c2 === temp ||
                input_c5 === temp ||
                input_e2 === temp ||
                input_e5 === temp
              ) {
                a6.innerHTML = temp;
                input_a6 = a6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_a6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a4 === null) {
          if (
            input_c1 === value ||
            input_c4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a5 === null) {
          if (
            input_c2 === value ||
            input_c5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b1 === value || input_b2 === value || input_b3 === value) {
          filled += 3;
        } else {
          if (input_b4 === null) {
            if (
              input_d1 === value ||
              input_d4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_d2 === value ||
              input_d5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_d3 === value ||
              input_d6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a6.innerHTML = value;
          input_a6 = a6.innerHTML;
          break;
        }
      }
    }

    if (input_a6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_a3 === null) {
          if (input_b1 === value || input_b2 === value || input_b3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_c1 === value ||
          input_c2 === value ||
          input_c4 === value ||
          input_c5 === value
        ) {
          filled += 2;
        } else {
          if (input_c3 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e2 === value ||
          input_e4 === value ||
          input_e5 === value
        ) {
          filled += 2;
        } else {
          if (input_e3 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          a6.innerHTML = value;
          input_a6 = a6.innerHTML;
          break;
        }
      }
    }

    if (input_a6 === null && input_a3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          let filled = 0;
          if (
            input_c1 === temp ||
            input_c4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_a1 !== null && input_a4 !== null) filled += 2;
          if (
            input_c2 === temp ||
            input_c5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_a2 !== null && input_a5 !== null) filled += 2;
          if (filled === 4) {
            a6.innerHTML = temp;
            input_a6 = a6.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b1 === null) {
    if (
      input_b2 !== null &&
      input_b3 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b1.innerHTML = temp;
          input_b1 = b1.innerHTML;
          break;
        }
      }
    } else if (
      input_b2 !== null &&
      input_b3 !== null &&
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b1.innerHTML = temp;
          input_b1 = b1.innerHTML;
          break;
        }
      }
    } else if (
      input_b4 !== null &&
      input_d1 !== null &&
      input_d4 !== null &&
      input_f1 !== null &&
      input_f4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b1.innerHTML = temp;
          input_b1 = b1.innerHTML;
          break;
        }
      }
    }

    if (input_b1 === null && input_b2 !== null && input_b3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            b1.innerHTML = temp;
            input_b1 = b1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b1 === null && input_b4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_d2 === temp || input_d5 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              b1.innerHTML = temp;
              input_b1 = b1.innerHTML;
              break;
            }
          }
          if (input_d3 === temp || input_d6 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              b1.innerHTML = temp;
              input_b1 = b1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            if (
              input_d2 === temp ||
              input_d5 === temp ||
              input_f2 === temp ||
              input_f5 === temp
            ) {
              if (
                input_d3 === temp ||
                input_d6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                b1.innerHTML = temp;
                input_b1 = b1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b2 === null) {
          if (
            input_d2 === value ||
            input_d5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b3 === null) {
          if (
            input_d3 === value ||
            input_d6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a4 === value || input_a5 === value || input_a6 === value) {
          filled += 3;
        } else {
          if (input_a1 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a2 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a3 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b1.innerHTML = value;
          input_b1 = b1.innerHTML;
          break;
        }
      }
    }

    if (input_b1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b4 === null) {
          if (input_a4 === value || input_a5 === value || input_a6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d2 === value ||
          input_d3 === value ||
          input_d5 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d1 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d4 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f2 === value ||
          input_f3 === value ||
          input_f5 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f1 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f4 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b1.innerHTML = value;
          input_b1 = b1.innerHTML;
          break;
        }
      }
    }

    if (input_b1 === null && input_b4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          let filled = 0;
          if (
            input_d2 === temp ||
            input_d5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_b2 !== null && input_b5 !== null) filled += 2;
          if (
            input_d3 === temp ||
            input_d6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_b3 !== null && input_b6 !== null) filled += 2;
          if (filled === 4) {
            b1.innerHTML = temp;
            input_b1 = b1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b2 === null) {
    if (
      input_b1 !== null &&
      input_b3 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b2.innerHTML = temp;
          input_b2 = b2.innerHTML;
          break;
        }
      }
    } else if (
      input_b1 !== null &&
      input_b3 !== null &&
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b2.innerHTML = temp;
          input_b2 = b2.innerHTML;
          break;
        }
      }
    } else if (
      input_b5 !== null &&
      input_d2 !== null &&
      input_d5 !== null &&
      input_f2 !== null &&
      input_f5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b2.innerHTML = temp;
          input_b2 = b2.innerHTML;
          break;
        }
      }
    }

    if (input_b2 === null && input_b1 !== null && input_b3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            b2.innerHTML = temp;
            input_b2 = b2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b2 === null && input_b5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_d1 === temp || input_d4 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              b2.innerHTML = temp;
              input_b2 = b2.innerHTML;
              break;
            }
          }
          if (input_d3 === temp || input_d6 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              b2.innerHTML = temp;
              input_b2 = b2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            if (
              input_d1 === temp ||
              input_d4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_d3 === temp ||
                input_d6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                b2.innerHTML = temp;
                input_b2 = b2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b1 === null) {
          if (
            input_d1 === value ||
            input_d4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b3 === null) {
          if (
            input_d3 === value ||
            input_d6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a4 === value || input_a5 === value || input_a6 === value) {
          filled += 3;
        } else {
          if (input_a1 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a2 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a3 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b2.innerHTML = value;
          input_b2 = b2.innerHTML;
          break;
        }
      }
    }

    if (input_b2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b5 === null) {
          if (input_a4 === value || input_a5 === value || input_a6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d1 === value ||
          input_d3 === value ||
          input_d4 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d2 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f3 === value ||
          input_f4 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f2 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b2.innerHTML = value;
          input_b2 = b2.innerHTML;
          break;
        }
      }
    }

    if (input_b2 === null && input_b5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          let filled = 0;
          if (
            input_d1 === temp ||
            input_d4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_b1 !== null && input_b4 !== null) filled += 2;
          if (
            input_d3 === temp ||
            input_d6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_b3 !== null && input_b6 !== null) filled += 2;
          if (filled === 4) {
            b2.innerHTML = temp;
            input_b2 = b2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b3 === null) {
    if (
      input_b1 !== null &&
      input_b2 !== null &&
      input_b4 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b3.innerHTML = temp;
          input_b3 = b3.innerHTML;
          break;
        }
      }
    } else if (
      input_b1 !== null &&
      input_b2 !== null &&
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b3.innerHTML = temp;
          input_b3 = b3.innerHTML;
          break;
        }
      }
    } else if (
      input_b6 !== null &&
      input_d3 !== null &&
      input_d6 !== null &&
      input_f3 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b3.innerHTML = temp;
          input_b3 = b3.innerHTML;
          break;
        }
      }
    }

    if (input_b3 === null && input_b1 !== null && input_b2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            b3.innerHTML = temp;
            input_b3 = b3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b3 === null && input_b6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_d1 === temp || input_d4 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              b3.innerHTML = temp;
              input_b3 = b3.innerHTML;
              break;
            }
          }
          if (input_d2 === temp || input_d5 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              b3.innerHTML = temp;
              input_b3 = b3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_a4 === temp || input_a5 === temp || input_a6 === temp) {
            if (
              input_d1 === temp ||
              input_d4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_d2 === temp ||
                input_d5 === temp ||
                input_f2 === temp ||
                input_f5 === temp
              ) {
                b3.innerHTML = temp;
                input_b3 = b3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b1 === null) {
          if (
            input_d1 === value ||
            input_d4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b2 === null) {
          if (
            input_d2 === value ||
            input_d5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a4 === value || input_a5 === value || input_a6 === value) {
          filled += 3;
        } else {
          if (input_a1 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a2 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a3 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b3.innerHTML = value;
          input_b3 = b3.innerHTML;
          break;
        }
      }
    }

    if (input_b3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b6 === null) {
          if (input_a4 === value || input_a5 === value || input_a6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d1 === value ||
          input_d2 === value ||
          input_d4 === value ||
          input_d5 === value
        ) {
          filled += 2;
        } else {
          if (input_d3 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f2 === value ||
          input_f4 === value ||
          input_f5 === value
        ) {
          filled += 2;
        } else {
          if (input_f3 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b3.innerHTML = value;
          input_b3 = b3.innerHTML;
          break;
        }
      }
    }

    if (input_b3 === null && input_b6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a1 !== temp &&
          input_a2 !== temp &&
          input_a3 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          let filled = 0;
          if (
            input_d1 === temp ||
            input_d4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_b1 !== null && input_b4 !== null) filled += 2;
          if (
            input_d2 === temp ||
            input_d5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_b2 !== null && input_b5 !== null) filled += 2;
          if (filled === 4) {
            b3.innerHTML = temp;
            input_b3 = b3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b4 === null) {
    if (
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null &&
      input_b5 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b4.innerHTML = temp;
          input_b4 = b4.innerHTML;
          break;
        }
      }
    } else if (
      input_b5 !== null &&
      input_b6 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b4.innerHTML = temp;
          input_b4 = b4.innerHTML;
          break;
        }
      }
    } else if (
      input_b1 !== null &&
      input_d1 !== null &&
      input_d4 !== null &&
      input_f1 !== null &&
      input_f4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          b4.innerHTML = temp;
          input_b4 = b4.innerHTML;
          break;
        }
      }
    }

    if (input_b4 === null && input_b5 !== null && input_b6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            b4.innerHTML = temp;
            input_b4 = b4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b4 === null && input_b1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_d2 === temp || input_d5 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              b4.innerHTML = temp;
              input_b4 = b4.innerHTML;
              break;
            }
          }
          if (input_d3 === temp || input_d6 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              b4.innerHTML = temp;
              input_b4 = b4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            if (
              input_d2 === temp ||
              input_d5 === temp ||
              input_f2 === temp ||
              input_f5 === temp
            ) {
              if (
                input_d3 === temp ||
                input_d6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                b4.innerHTML = temp;
                input_b4 = b4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b5 === null) {
          if (
            input_d2 === value ||
            input_d5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b6 === null) {
          if (
            input_d3 === value ||
            input_d6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a1 === value || input_a2 === value || input_a3 === value) {
          filled += 3;
        } else {
          if (input_a4 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b4.innerHTML = value;
          input_b4 = b4.innerHTML;
          break;
        }
      }
    }

    if (input_b4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b1 === null) {
          if (input_a1 === value || input_a2 === value || input_a3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d2 === value ||
          input_d3 === value ||
          input_d5 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d1 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d4 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f2 === value ||
          input_f3 === value ||
          input_f5 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f1 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f4 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b4.innerHTML = value;
          input_b4 = b4.innerHTML;
          break;
        }
      }
    }

    if (input_b4 === null && input_b1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b5 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          let filled = 0;
          if (
            input_d2 === temp ||
            input_d5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_b2 !== null && input_b5 !== null) filled += 2;
          if (
            input_d3 === temp ||
            input_d6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_b3 !== null && input_b6 !== null) filled += 2;
          if (filled === 4) {
            b4.innerHTML = temp;
            input_b4 = b4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b5 === null) {
    if (
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null &&
      input_b4 !== null &&
      input_b6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b5.innerHTML = temp;
          input_b5 = b5.innerHTML;
          break;
        }
      }
    } else if (
      input_b4 !== null &&
      input_b6 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b5.innerHTML = temp;
          input_b5 = b5.innerHTML;
          break;
        }
      }
    } else if (
      input_b2 !== null &&
      input_d2 !== null &&
      input_d5 !== null &&
      input_f2 !== null &&
      input_f5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          b5.innerHTML = temp;
          input_b5 = b5.innerHTML;
          break;
        }
      }
    }

    if (input_b5 === null && input_b4 !== null && input_b6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            b5.innerHTML = temp;
            input_b5 = b5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b5 === null && input_b2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_d1 === temp || input_d4 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              b5.innerHTML = temp;
              input_b5 = b5.innerHTML;
              break;
            }
          }
          if (input_d3 === temp || input_d6 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              b5.innerHTML = temp;
              input_b5 = b5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            if (
              input_d1 === temp ||
              input_d4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_d3 === temp ||
                input_d6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                b5.innerHTML = temp;
                input_b5 = b5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b4 === null) {
          if (
            input_d1 === value ||
            input_d4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b6 === null) {
          if (
            input_d3 === value ||
            input_d6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a1 === value || input_a2 === value || input_a3 === value) {
          filled += 3;
        } else {
          if (input_a4 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b5.innerHTML = value;
          input_b5 = b5.innerHTML;
          break;
        }
      }
    }

    if (input_b5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b2 === null) {
          if (input_a1 === value || input_a2 === value || input_a3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d1 === value ||
          input_d3 === value ||
          input_d4 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d2 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f3 === value ||
          input_f4 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f2 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b5.innerHTML = value;
          input_b5 = b5.innerHTML;
          break;
        }
      }
    }

    if (input_b5 === null && input_b2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b6 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          let filled = 0;
          if (
            input_d1 === temp ||
            input_d4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_b1 !== null && input_b4 !== null) filled += 2;
          if (
            input_d3 === temp ||
            input_d6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_b3 !== null && input_b6 !== null) filled += 2;
          if (filled === 4) {
            b5.innerHTML = temp;
            input_b5 = b5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_b6 === null) {
    if (
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null &&
      input_b4 !== null &&
      input_b5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b6.innerHTML = temp;
          input_b6 = b6.innerHTML;
          break;
        }
      }
    } else if (
      input_b4 !== null &&
      input_b5 !== null &&
      input_a4 !== null &&
      input_a5 !== null &&
      input_a6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b6.innerHTML = temp;
          input_b6 = b6.innerHTML;
          break;
        }
      }
    } else if (
      input_b3 !== null &&
      input_d3 !== null &&
      input_d6 !== null &&
      input_f3 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          b6.innerHTML = temp;
          input_b6 = b6.innerHTML;
          break;
        }
      }
    }

    if (input_b6 === null && input_b4 !== null && input_b5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            b6.innerHTML = temp;
            input_b6 = b6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_b6 === null && input_b3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_d1 === temp || input_d4 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              b6.innerHTML = temp;
              input_b6 = b6.innerHTML;
              break;
            }
          }
          if (input_d2 === temp || input_d5 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              b6.innerHTML = temp;
              input_b6 = b6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_b6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_a1 === temp || input_a2 === temp || input_a3 === temp) {
            if (
              input_d1 === temp ||
              input_d4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_d2 === temp ||
                input_d5 === temp ||
                input_f2 === temp ||
                input_f5 === temp
              ) {
                b6.innerHTML = temp;
                input_b6 = b6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_b6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b4 === null) {
          if (
            input_d1 === value ||
            input_d4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_b5 === null) {
          if (
            input_d2 === value ||
            input_d5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_a1 === value || input_a2 === value || input_a3 === value) {
          filled += 3;
        } else {
          if (input_a4 === null) {
            if (
              input_c1 === value ||
              input_c4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_c2 === value ||
              input_c5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_c3 === value ||
              input_c6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b6.innerHTML = value;
          input_b6 = b6.innerHTML;
          break;
        }
      }
    }

    if (input_b6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_b3 === null) {
          if (input_a1 === value || input_a2 === value || input_a3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_d1 === value ||
          input_d2 === value ||
          input_d4 === value ||
          input_d5 === value
        ) {
          filled += 2;
        } else {
          if (input_d3 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f2 === value ||
          input_f4 === value ||
          input_f5 === value
        ) {
          filled += 2;
        } else {
          if (input_f3 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          b6.innerHTML = value;
          input_b6 = b6.innerHTML;
          break;
        }
      }
    }

    if (input_b6 === null && input_b3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_b1 !== temp &&
          input_b2 !== temp &&
          input_b3 !== temp &&
          input_b4 !== temp &&
          input_b5 !== temp &&
          input_a4 !== temp &&
          input_a5 !== temp &&
          input_a6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          let filled = 0;
          if (
            input_d1 === temp ||
            input_d4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_b1 !== null && input_b4 !== null) filled += 2;
          if (
            input_d2 === temp ||
            input_d5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_b2 !== null && input_b5 !== null) filled += 2;
          if (filled === 4) {
            b6.innerHTML = temp;
            input_b6 = b6.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c1 === null) {
    if (
      input_c2 !== null &&
      input_c3 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c1.innerHTML = temp;
          input_c1 = c1.innerHTML;
          break;
        }
      }
    } else if (
      input_c2 !== null &&
      input_c3 !== null &&
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c1.innerHTML = temp;
          input_c1 = c1.innerHTML;
          break;
        }
      }
    } else if (
      input_c4 !== null &&
      input_a1 !== null &&
      input_a4 !== null &&
      input_e1 !== null &&
      input_e4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c1.innerHTML = temp;
          input_c1 = c1.innerHTML;
          break;
        }
      }
    }

    if (input_c1 === null && input_c2 !== null && input_c3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            c1.innerHTML = temp;
            input_c1 = c1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c1 === null && input_c4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_a2 === temp || input_a5 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              c1.innerHTML = temp;
              input_c1 = c1.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              c1.innerHTML = temp;
              input_c1 = c1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            if (
              input_a2 === temp ||
              input_a5 === temp ||
              input_e2 === temp ||
              input_e5 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                c1.innerHTML = temp;
                input_c1 = c1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c2 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c3 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d4 === value || input_d5 === value || input_d6 === value) {
          filled += 3;
        } else {
          if (input_d1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c1.innerHTML = value;
          input_c1 = c1.innerHTML;
          break;
        }
      }
    }

    if (input_c1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c4 === null) {
          if (input_d4 === value || input_d5 === value || input_d6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a2 === value ||
          input_a3 === value ||
          input_a5 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a1 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a4 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e2 === value ||
          input_e3 === value ||
          input_e5 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e1 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e4 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c1.innerHTML = value;
          input_c1 = c1.innerHTML;
          break;
        }
      }
    }

    if (input_c1 === null && input_c4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          let filled = 0;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_c2 !== null && input_c5 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_c3 !== null && input_c6 !== null) filled += 2;
          if (filled === 4) {
            c1.innerHTML = temp;
            input_c1 = c1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c2 === null) {
    if (
      input_c1 !== null &&
      input_c3 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c2.innerHTML = temp;
          input_c2 = c2.innerHTML;
          break;
        }
      }
    } else if (
      input_c1 !== null &&
      input_c3 !== null &&
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c2.innerHTML = temp;
          input_c2 = c2.innerHTML;
          break;
        }
      }
    } else if (
      input_c5 !== null &&
      input_a2 !== null &&
      input_a5 !== null &&
      input_e2 !== null &&
      input_e5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c2.innerHTML = temp;
          input_c2 = c2.innerHTML;
          break;
        }
      }
    }

    if (input_c2 === null && input_c1 !== null && input_c3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            c2.innerHTML = temp;
            input_c2 = c2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c2 === null && input_c5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              c2.innerHTML = temp;
              input_c2 = c2.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              c2.innerHTML = temp;
              input_c2 = c2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                c2.innerHTML = temp;
                input_c2 = c2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c1 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c3 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d4 === value || input_d5 === value || input_d6 === value) {
          filled += 3;
        } else {
          if (input_d1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c2.innerHTML = value;
          input_c2 = c2.innerHTML;
          break;
        }
      }
    }

    if (input_c2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c5 === null) {
          if (input_d4 === value || input_d5 === value || input_d6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a3 === value ||
          input_a4 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a2 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e3 === value ||
          input_e4 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e2 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c2.innerHTML = value;
          input_c2 = c2.innerHTML;
          break;
        }
      }
    }

    if (input_c2 === null && input_c5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_c1 !== null && input_c4 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_c3 !== null && input_c6 !== null) filled += 2;
          if (filled === 4) {
            c2.innerHTML = temp;
            input_c2 = c2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c3 === null) {
    if (
      input_c1 !== null &&
      input_c2 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c3.innerHTML = temp;
          input_c3 = c3.innerHTML;
          break;
        }
      }
    } else if (
      input_c1 !== null &&
      input_c2 !== null &&
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c3.innerHTML = temp;
          input_c3 = c3.innerHTML;
          break;
        }
      }
    } else if (
      input_c6 !== null &&
      input_a3 !== null &&
      input_a6 !== null &&
      input_e3 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c3.innerHTML = temp;
          input_c3 = c3.innerHTML;
          break;
        }
      }
    }

    if (input_c3 === null && input_c1 !== null && input_c2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            c3.innerHTML = temp;
            input_c3 = c3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c3 === null && input_c6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              c3.innerHTML = temp;
              input_c3 = c3.innerHTML;
              break;
            }
          }
          if (input_a2 === temp || input_a5 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              c3.innerHTML = temp;
              input_c3 = c3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_d4 === temp || input_d5 === temp || input_d6 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_a2 === temp ||
                input_a5 === temp ||
                input_e2 === temp ||
                input_e5 === temp
              ) {
                c3.innerHTML = temp;
                input_c3 = c3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c1 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c2 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d4 === value || input_d5 === value || input_d6 === value) {
          filled += 3;
        } else {
          if (input_d1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c3.innerHTML = value;
          input_c3 = c3.innerHTML;
          break;
        }
      }
    }

    if (input_c3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c6 === null) {
          if (input_d4 === value || input_d5 === value || input_d6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a2 === value ||
          input_a4 === value ||
          input_a5 === value
        ) {
          filled += 2;
        } else {
          if (input_a3 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e2 === value ||
          input_e4 === value ||
          input_e5 === value
        ) {
          filled += 2;
        } else {
          if (input_e3 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c3.innerHTML = value;
          input_c3 = c3.innerHTML;
          break;
        }
      }
    }

    if (input_c3 === null && input_c6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_c1 !== null && input_c4 !== null) filled += 2;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_c2 !== null && input_c5 !== null) filled += 2;
          if (filled === 4) {
            c3.innerHTML = temp;
            input_c3 = c3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c4 === null) {
    if (
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c4.innerHTML = temp;
          input_c4 = c4.innerHTML;
          break;
        }
      }
    } else if (
      input_c5 !== null &&
      input_c6 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c4.innerHTML = temp;
          input_c4 = c4.innerHTML;
          break;
        }
      }
    } else if (
      input_c1 !== null &&
      input_a1 !== null &&
      input_a4 !== null &&
      input_e1 !== null &&
      input_e4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          c4.innerHTML = temp;
          input_c4 = c4.innerHTML;
          break;
        }
      }
    }

    if (input_c4 === null && input_c5 !== null && input_c6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            c4.innerHTML = temp;
            input_c4 = c4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c4 === null && input_c1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_a2 === temp || input_a5 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              c4.innerHTML = temp;
              input_c4 = c4.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              c4.innerHTML = temp;
              input_c4 = c4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            if (
              input_a2 === temp ||
              input_a5 === temp ||
              input_e2 === temp ||
              input_e5 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                c4.innerHTML = temp;
                input_c4 = c4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c5 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c6 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d1 === value || input_d2 === value || input_d3 === value) {
          filled += 3;
        } else {
          if (input_d4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c4.innerHTML = value;
          input_c4 = c4.innerHTML;
          break;
        }
      }
    }

    if (input_c4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c1 === null) {
          if (input_d1 === value || input_d2 === value || input_d3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a2 === value ||
          input_a3 === value ||
          input_a5 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a1 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a4 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e2 === value ||
          input_e3 === value ||
          input_e5 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e1 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e4 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c4.innerHTML = value;
          input_c4 = c4.innerHTML;
          break;
        }
      }
    }

    if (input_c4 === null && input_c1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_e1 !== temp &&
          input_e4 !== temp
        ) {
          let filled = 0;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_c2 !== null && input_c5 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_c3 !== null && input_c6 !== null) filled += 2;
          if (filled === 4) {
            c4.innerHTML = temp;
            input_c4 = c4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c5 === null) {
    if (
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null &&
      input_c4 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c5.innerHTML = temp;
          input_c5 = c5.innerHTML;
          break;
        }
      }
    } else if (
      input_c4 !== null &&
      input_c6 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c5.innerHTML = temp;
          input_c5 = c5.innerHTML;
          break;
        }
      }
    } else if (
      input_c2 !== null &&
      input_a2 !== null &&
      input_a5 !== null &&
      input_e2 !== null &&
      input_e5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          c5.innerHTML = temp;
          input_c5 = c5.innerHTML;
          break;
        }
      }
    }

    if (input_c5 === null && input_c4 !== null && input_c6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            c5.innerHTML = temp;
            input_c5 = c5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c5 === null && input_c2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_e3 === temp || input_e6 === temp) {
              c5.innerHTML = temp;
              input_c5 = c5.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              c5.innerHTML = temp;
              input_c5 = c5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_e3 === temp ||
                input_e6 === temp
              ) {
                c5.innerHTML = temp;
                input_c5 = c5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c4 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c6 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_e3 === value ||
            input_e6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d1 === value || input_d2 === value || input_d3 === value) {
          filled += 3;
        } else {
          if (input_d4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c5.innerHTML = value;
          input_c5 = c5.innerHTML;
          break;
        }
      }
    }

    if (input_c5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c2 === null) {
          if (input_d1 === value || input_d2 === value || input_d3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a3 === value ||
          input_a4 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a2 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e3 === value ||
          input_e4 === value ||
          input_e6 === value
        ) {
          filled += 2;
        } else {
          if (input_e2 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c5.innerHTML = value;
          input_c5 = c5.innerHTML;
          break;
        }
      }
    }

    if (input_c5 === null && input_c2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c6 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_e2 !== temp &&
          input_e5 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_c1 !== null && input_c4 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_e3 === temp ||
            input_e6 === temp
          )
            filled += 2;
          else if (input_c3 !== null && input_c6 !== null) filled += 2;
          if (filled === 4) {
            c5.innerHTML = temp;
            input_c5 = c5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_c6 === null) {
    if (
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null &&
      input_c4 !== null &&
      input_c5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c6.innerHTML = temp;
          input_c6 = c6.innerHTML;
          break;
        }
      }
    } else if (
      input_c4 !== null &&
      input_c5 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c6.innerHTML = temp;
          input_c6 = c6.innerHTML;
          break;
        }
      }
    } else if (
      input_c3 !== null &&
      input_a3 !== null &&
      input_a6 !== null &&
      input_e3 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          c6.innerHTML = temp;
          input_c6 = c6.innerHTML;
          break;
        }
      }
    }

    if (input_c6 === null && input_c4 !== null && input_c5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            c6.innerHTML = temp;
            input_c6 = c6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_c6 === null && input_c3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_e2 === temp || input_e5 === temp) {
              c6.innerHTML = temp;
              input_c6 = c6.innerHTML;
              break;
            }
          }
          if (input_a2 === temp || input_a5 === temp) {
            if (input_e1 === temp || input_e4 === temp) {
              c6.innerHTML = temp;
              input_c6 = c6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_c6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          if (input_d1 === temp || input_d2 === temp || input_d3 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_e1 === temp ||
              input_e4 === temp
            ) {
              if (
                input_a2 === temp ||
                input_a5 === temp ||
                input_e2 === temp ||
                input_e5 === temp
              ) {
                c6.innerHTML = temp;
                input_c6 = c6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_c6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c4 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_e1 === value ||
            input_e4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c5 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_e2 === value ||
            input_e5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d1 === value || input_d2 === value || input_d3 === value) {
          filled += 3;
        } else {
          if (input_d4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_f1 === value ||
              input_f4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_f2 === value ||
              input_f5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_f3 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c6.innerHTML = value;
          input_c6 = c6.innerHTML;
          break;
        }
      }
    }

    if (input_c6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_c3 === null) {
          if (input_d1 === value || input_d2 === value || input_d3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a2 === value ||
          input_a4 === value ||
          input_a5 === value
        ) {
          filled += 2;
        } else {
          if (input_a3 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_e1 === value ||
          input_e2 === value ||
          input_e4 === value ||
          input_e5 === value
        ) {
          filled += 2;
        } else {
          if (input_e3 === null) {
            if (
              input_f1 === value ||
              input_f2 === value ||
              input_f3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_f4 === value ||
              input_f5 === value ||
              input_f6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          c6.innerHTML = value;
          input_c6 = c6.innerHTML;
          break;
        }
      }
    }

    if (input_c6 === null && input_c3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_e3 !== temp &&
          input_e6 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_e1 === temp ||
            input_e4 === temp
          )
            filled += 2;
          else if (input_c1 !== null && input_c4 !== null) filled += 2;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_e2 === temp ||
            input_e5 === temp
          )
            filled += 2;
          else if (input_c2 !== null && input_c5 !== null) filled += 2;
          if (filled === 4) {
            c6.innerHTML = temp;
            input_c6 = c6.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d1 === null) {
    if (
      input_d2 !== null &&
      input_d3 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d1.innerHTML = temp;
          input_d1 = d1.innerHTML;
          break;
        }
      }
    } else if (
      input_d2 !== null &&
      input_d3 !== null &&
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d1.innerHTML = temp;
          input_d1 = d1.innerHTML;
          break;
        }
      }
    } else if (
      input_d4 !== null &&
      input_b1 !== null &&
      input_b4 !== null &&
      input_f1 !== null &&
      input_f4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d1.innerHTML = temp;
          input_d1 = d1.innerHTML;
          break;
        }
      }
    }

    if (input_d1 === null && input_d2 !== null && input_d3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            d1.innerHTML = temp;
            input_d1 = d1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d1 === null && input_d4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_b2 === temp || input_b5 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              d1.innerHTML = temp;
              input_d1 = d1.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              d1.innerHTML = temp;
              input_d1 = d1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            if (
              input_b2 === temp ||
              input_b5 === temp ||
              input_f2 === temp ||
              input_f5 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                d1.innerHTML = temp;
                input_d1 = d1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d2 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d3 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c4 === value || input_c5 === value || input_c6 === value) {
          filled += 3;
        } else {
          if (input_c1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d1.innerHTML = value;
          input_d1 = d1.innerHTML;
          break;
        }
      }
    }

    if (input_d1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d4 === null) {
          if (input_c4 === value || input_c5 === value || input_c6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b2 === value ||
          input_b3 === value ||
          input_b5 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b1 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b4 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f2 === value ||
          input_f3 === value ||
          input_f5 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f1 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f4 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d1.innerHTML = value;
          input_d1 = d1.innerHTML;
          break;
        }
      }
    }

    if (input_d1 === null && input_d4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          let filled = 0;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_d2 !== null && input_d5 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_d3 !== null && input_d6 !== null) filled += 2;
          if (filled === 4) {
            d1.innerHTML = temp;
            input_d1 = d1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d2 === null) {
    if (
      input_d1 !== null &&
      input_d3 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d2.innerHTML = temp;
          input_d2 = d2.innerHTML;
          break;
        }
      }
    } else if (
      input_d1 !== null &&
      input_d3 !== null &&
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d2.innerHTML = temp;
          input_d2 = d2.innerHTML;
          break;
        }
      }
    } else if (
      input_d5 !== null &&
      input_b2 !== null &&
      input_b5 !== null &&
      input_f2 !== null &&
      input_f5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d2.innerHTML = temp;
          input_d2 = d2.innerHTML;
          break;
        }
      }
    }

    if (input_d2 === null && input_d1 !== null && input_d3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            d2.innerHTML = temp;
            input_d2 = d2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d2 === null && input_d5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              d2.innerHTML = temp;
              input_d2 = d2.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              d2.innerHTML = temp;
              input_d2 = d2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                d2.innerHTML = temp;
                input_d2 = d2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d1 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d3 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c4 === value || input_c5 === value || input_c6 === value) {
          filled += 3;
        } else {
          if (input_c1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d2.innerHTML = value;
          input_d2 = d2.innerHTML;
          break;
        }
      }
    }

    if (input_d2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d5 === null) {
          if (input_c4 === value || input_c5 === value || input_c6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b3 === value ||
          input_b4 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b2 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f3 === value ||
          input_f4 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f2 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d2.innerHTML = value;
          input_d2 = d2.innerHTML;
          break;
        }
      }
    }

    if (input_d2 === null && input_d5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_d1 !== null && input_d4 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_d3 !== null && input_d6 !== null) filled += 2;
          if (filled === 4) {
            d2.innerHTML = temp;
            input_d2 = d2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d3 === null) {
    if (
      input_d1 !== null &&
      input_d2 !== null &&
      input_d4 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d3.innerHTML = temp;
          input_d3 = d3.innerHTML;
          break;
        }
      }
    } else if (
      input_d1 !== null &&
      input_d2 !== null &&
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d3.innerHTML = temp;
          input_d3 = d3.innerHTML;
          break;
        }
      }
    } else if (
      input_d6 !== null &&
      input_b3 !== null &&
      input_b6 !== null &&
      input_f3 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d3.innerHTML = temp;
          input_d3 = d3.innerHTML;
          break;
        }
      }
    }

    if (input_d3 === null && input_d1 !== null && input_d2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            d3.innerHTML = temp;
            input_d3 = d3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d3 === null && input_d6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              d3.innerHTML = temp;
              input_d3 = d3.innerHTML;
              break;
            }
          }
          if (input_b2 === temp || input_b5 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              d3.innerHTML = temp;
              input_d3 = d3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_c4 === temp || input_c5 === temp || input_c6 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_b2 === temp ||
                input_b5 === temp ||
                input_f2 === temp ||
                input_f5 === temp
              ) {
                d3.innerHTML = temp;
                input_d3 = d3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d1 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d2 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c4 === value || input_c5 === value || input_c6 === value) {
          filled += 3;
        } else {
          if (input_c1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d3.innerHTML = value;
          input_d3 = d3.innerHTML;
          break;
        }
      }
    }

    if (input_d3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d6 === null) {
          if (input_c4 === value || input_c5 === value || input_c6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b2 === value ||
          input_b4 === value ||
          input_b5 === value
        ) {
          filled += 2;
        } else {
          if (input_b3 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f2 === value ||
          input_f4 === value ||
          input_f5 === value
        ) {
          filled += 2;
        } else {
          if (input_f3 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d3.innerHTML = value;
          input_d3 = d3.innerHTML;
          break;
        }
      }
    }

    if (input_d3 === null && input_d6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c1 !== temp &&
          input_c2 !== temp &&
          input_c3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_d1 !== null && input_d4 !== null) filled += 2;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_d2 !== null && input_d5 !== null) filled += 2;
          if (filled === 4) {
            d3.innerHTML = temp;
            input_d3 = d3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d4 === null) {
    if (
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null &&
      input_d5 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d4.innerHTML = temp;
          input_d4 = d4.innerHTML;
          break;
        }
      }
    } else if (
      input_d5 !== null &&
      input_d6 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d4.innerHTML = temp;
          input_d4 = d4.innerHTML;
          break;
        }
      }
    } else if (
      input_d1 !== null &&
      input_b1 !== null &&
      input_b4 !== null &&
      input_f1 !== null &&
      input_f4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          d4.innerHTML = temp;
          input_d4 = d4.innerHTML;
          break;
        }
      }
    }

    if (input_d4 === null && input_d5 !== null && input_d6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            d4.innerHTML = temp;
            input_d4 = d4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d4 === null && input_d1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_b2 === temp || input_b5 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              d4.innerHTML = temp;
              input_d4 = d4.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              d4.innerHTML = temp;
              input_d4 = d4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            if (
              input_b2 === temp ||
              input_b5 === temp ||
              input_f2 === temp ||
              input_f5 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                d4.innerHTML = temp;
                input_d4 = d4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d5 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d6 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c1 === value || input_c2 === value || input_c3 === value) {
          filled += 3;
        } else {
          if (input_c4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d4.innerHTML = value;
          input_d4 = d4.innerHTML;
          break;
        }
      }
    }

    if (input_d4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d1 === null) {
          if (input_c1 === value || input_c2 === value || input_c3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b2 === value ||
          input_b3 === value ||
          input_b5 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b1 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b4 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f2 === value ||
          input_f3 === value ||
          input_f5 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f1 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f4 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d4.innerHTML = value;
          input_d4 = d4.innerHTML;
          break;
        }
      }
    }

    if (input_d4 === null && input_d1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d5 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_f1 !== temp &&
          input_f4 !== temp
        ) {
          let filled = 0;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_d2 !== null && input_d5 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_d3 !== null && input_d6 !== null) filled += 2;
          if (filled === 4) {
            d4.innerHTML = temp;
            input_d4 = d4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d5 === null) {
    if (
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null &&
      input_d4 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d5.innerHTML = temp;
          input_d5 = d5.innerHTML;
          break;
        }
      }
    } else if (
      input_d4 !== null &&
      input_d6 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d5.innerHTML = temp;
          input_d5 = d5.innerHTML;
          break;
        }
      }
    } else if (
      input_d2 !== null &&
      input_b2 !== null &&
      input_b5 !== null &&
      input_f2 !== null &&
      input_f5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          d5.innerHTML = temp;
          input_d5 = d5.innerHTML;
          break;
        }
      }
    }

    if (input_d5 === null && input_d4 !== null && input_d6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            d5.innerHTML = temp;
            input_d5 = d5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d5 === null && input_d2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_f3 === temp || input_f6 === temp) {
              d5.innerHTML = temp;
              input_d5 = d5.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              d5.innerHTML = temp;
              input_d5 = d5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_f3 === temp ||
                input_f6 === temp
              ) {
                d5.innerHTML = temp;
                input_d5 = d5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d4 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d6 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_f3 === value ||
            input_f6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c1 === value || input_c2 === value || input_c3 === value) {
          filled += 3;
        } else {
          if (input_c4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d5.innerHTML = value;
          input_d5 = d5.innerHTML;
          break;
        }
      }
    }

    if (input_d5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d2 === null) {
          if (input_c1 === value || input_c2 === value || input_c3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b3 === value ||
          input_b4 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b2 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f3 === value ||
          input_f4 === value ||
          input_f6 === value
        ) {
          filled += 2;
        } else {
          if (input_f2 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d5.innerHTML = value;
          input_d5 = d5.innerHTML;
          break;
        }
      }
    }

    if (input_d5 === null && input_d2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d6 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_f2 !== temp &&
          input_f5 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_d1 !== null && input_d4 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_f3 === temp ||
            input_f6 === temp
          )
            filled += 2;
          else if (input_d3 !== null && input_d6 !== null) filled += 2;
          if (filled === 4) {
            d5.innerHTML = temp;
            input_d5 = d5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_d6 === null) {
    if (
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null &&
      input_d4 !== null &&
      input_d5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d6.innerHTML = temp;
          input_d6 = d6.innerHTML;
          break;
        }
      }
    } else if (
      input_d4 !== null &&
      input_d5 !== null &&
      input_c4 !== null &&
      input_c5 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d6.innerHTML = temp;
          input_d6 = d6.innerHTML;
          break;
        }
      }
    } else if (
      input_d3 !== null &&
      input_b3 !== null &&
      input_b6 !== null &&
      input_f3 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          d6.innerHTML = temp;
          input_d6 = d6.innerHTML;
          break;
        }
      }
    }

    if (input_d6 === null && input_d4 !== null && input_d5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            d6.innerHTML = temp;
            input_d6 = d6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_d6 === null && input_d3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_f2 === temp || input_f5 === temp) {
              d6.innerHTML = temp;
              input_d6 = d6.innerHTML;
              break;
            }
          }
          if (input_b2 === temp || input_b5 === temp) {
            if (input_f1 === temp || input_f4 === temp) {
              d6.innerHTML = temp;
              input_d6 = d6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_d6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          if (input_c1 === temp || input_c2 === temp || input_c3 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_f1 === temp ||
              input_f4 === temp
            ) {
              if (
                input_b2 === temp ||
                input_b5 === temp ||
                input_f2 === temp ||
                input_f5 === temp
              ) {
                d6.innerHTML = temp;
                input_d6 = d6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_d6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d4 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_f1 === value ||
            input_f4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_d5 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_f2 === value ||
            input_f5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_c1 === value || input_c2 === value || input_c3 === value) {
          filled += 3;
        } else {
          if (input_c4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_e1 === value ||
              input_e4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_e2 === value ||
              input_e5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_e3 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d6.innerHTML = value;
          input_d6 = d6.innerHTML;
          break;
        }
      }
    }

    if (input_d6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_d3 === null) {
          if (input_c1 === value || input_c2 === value || input_c3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b2 === value ||
          input_b4 === value ||
          input_b5 === value
        ) {
          filled += 2;
        } else {
          if (input_b3 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_f1 === value ||
          input_f2 === value ||
          input_f4 === value ||
          input_f5 === value
        ) {
          filled += 2;
        } else {
          if (input_f3 === null) {
            if (
              input_e1 === value ||
              input_e2 === value ||
              input_e3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_e4 === value ||
              input_e5 === value ||
              input_e6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          d6.innerHTML = value;
          input_d6 = d6.innerHTML;
          break;
        }
      }
    }

    if (input_d6 === null && input_d3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_d1 !== temp &&
          input_d2 !== temp &&
          input_d3 !== temp &&
          input_d4 !== temp &&
          input_d5 !== temp &&
          input_c4 !== temp &&
          input_c5 !== temp &&
          input_c6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_f3 !== temp &&
          input_f6 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_f1 === temp ||
            input_f4 === temp
          )
            filled += 2;
          else if (input_d1 !== null && input_d4 !== null) filled += 2;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_f2 === temp ||
            input_f5 === temp
          )
            filled += 2;
          else if (input_d2 !== null && input_d5 !== null) filled += 2;
          if (filled === 4) {
            d6.innerHTML = temp;
            input_d6 = d6.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e1 === null) {
    if (
      input_e2 !== null &&
      input_e3 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e1.innerHTML = temp;
          input_e1 = e1.innerHTML;
          break;
        }
      }
    } else if (
      input_e2 !== null &&
      input_e3 !== null &&
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e1.innerHTML = temp;
          input_e1 = e1.innerHTML;
          break;
        }
      }
    } else if (
      input_e4 !== null &&
      input_a1 !== null &&
      input_a4 !== null &&
      input_c1 !== null &&
      input_c4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e1.innerHTML = temp;
          input_e1 = e1.innerHTML;
          break;
        }
      }
    }

    if (input_e1 === null && input_e2 !== null && input_e3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            e1.innerHTML = temp;
            input_e1 = e1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e1 === null && input_e4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_a2 === temp || input_a5 === temp) {
            if (input_c3 === temp || input_c6 === temp) {
              e1.innerHTML = temp;
              input_e1 = e1.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_c2 === temp || input_c5 === temp) {
              e1.innerHTML = temp;
              input_e1 = e1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            if (
              input_a2 === temp ||
              input_a5 === temp ||
              input_c2 === temp ||
              input_c5 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_c3 === temp ||
                input_c6 === temp
              ) {
                e1.innerHTML = temp;
                input_e1 = e1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e2 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_c2 === value ||
            input_c5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e3 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_c3 === value ||
            input_c6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f4 === value || input_f5 === value || input_f6 === value) {
          filled += 3;
        } else {
          if (input_f1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e1.innerHTML = value;
          input_e1 = e1.innerHTML;
          break;
        }
      }
    }

    if (input_e1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e4 === null) {
          if (input_f4 === value || input_f5 === value || input_f6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a2 === value ||
          input_a3 === value ||
          input_a5 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a1 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a4 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c2 === value ||
          input_c3 === value ||
          input_c5 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c1 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c4 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e1.innerHTML = value;
          input_e1 = e1.innerHTML;
          break;
        }
      }
    }

    if (input_e1 === null && input_e4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          let filled = 0;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_c2 === temp ||
            input_c5 === temp
          )
            filled += 2;
          else if (input_e2 !== null && input_e5 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_c3 === temp ||
            input_c6 === temp
          )
            filled += 2;
          else if (input_e3 !== null && input_e6 !== null) filled += 2;
          if (filled === 4) {
            e1.innerHTML = temp;
            input_e1 = e1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e2 === null) {
    if (
      input_e1 !== null &&
      input_e3 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e2.innerHTML = temp;
          input_e2 = e2.innerHTML;
          break;
        }
      }
    } else if (
      input_e1 !== null &&
      input_e3 !== null &&
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e2.innerHTML = temp;
          input_e2 = e2.innerHTML;
          break;
        }
      }
    } else if (
      input_e5 !== null &&
      input_a2 !== null &&
      input_a5 !== null &&
      input_c2 !== null &&
      input_c5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e2.innerHTML = temp;
          input_e2 = e2.innerHTML;
          break;
        }
      }
    }

    if (input_e2 === null && input_e1 !== null && input_e3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            e2.innerHTML = temp;
            input_e2 = e2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e2 === null && input_e5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_c3 === temp || input_c6 === temp) {
              e2.innerHTML = temp;
              input_e2 = e2.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_c1 === temp || input_c4 === temp) {
              e2.innerHTML = temp;
              input_e2 = e2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_c1 === temp ||
              input_c4 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_c3 === temp ||
                input_c6 === temp
              ) {
                e2.innerHTML = temp;
                input_e2 = e2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e1 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_c1 === value ||
            input_c4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e3 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_c3 === value ||
            input_c6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f4 === value || input_f5 === value || input_f6 === value) {
          filled += 3;
        } else {
          if (input_f1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e2.innerHTML = value;
          input_e2 = e2.innerHTML;
          break;
        }
      }
    }

    if (input_e2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e5 === null) {
          if (input_f4 === value || input_f5 === value || input_f6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a3 === value ||
          input_a4 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a2 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c1 === value ||
          input_c3 === value ||
          input_c4 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c2 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e2.innerHTML = value;
          input_e2 = e2.innerHTML;
          break;
        }
      }
    }

    if (input_e2 === null && input_e5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_c1 === temp ||
            input_c4 === temp
          )
            filled += 2;
          else if (input_e1 !== null && input_e4 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_c3 === temp ||
            input_c6 === temp
          )
            filled += 2;
          else if (input_e3 !== null && input_e6 !== null) filled += 2;
          if (filled === 4) {
            e2.innerHTML = temp;
            input_e2 = e2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e3 === null) {
    if (
      input_e1 !== null &&
      input_e2 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e3.innerHTML = temp;
          input_e3 = e3.innerHTML;
          break;
        }
      }
    } else if (
      input_e1 !== null &&
      input_e2 !== null &&
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e3.innerHTML = temp;
          input_e3 = e3.innerHTML;
          break;
        }
      }
    } else if (
      input_e6 !== null &&
      input_a3 !== null &&
      input_a6 !== null &&
      input_c3 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e3.innerHTML = temp;
          input_e3 = e3.innerHTML;
          break;
        }
      }
    }

    if (input_e3 === null && input_e1 !== null && input_e2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            e3.innerHTML = temp;
            input_e3 = e3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e3 === null && input_e6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_c2 === temp || input_c5 === temp) {
              e3.innerHTML = temp;
              input_e3 = e3.innerHTML;
              break;
            }
          }
          if (input_a2 === temp || input_a5 === temp) {
            if (input_c1 === temp || input_c4 === temp) {
              e3.innerHTML = temp;
              input_e3 = e3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_f4 === temp || input_f5 === temp || input_f6 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_c1 === temp ||
              input_c4 === temp
            ) {
              if (
                input_a2 === temp ||
                input_a5 === temp ||
                input_c2 === temp ||
                input_c5 === temp
              ) {
                e3.innerHTML = temp;
                input_e3 = e3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e1 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_c1 === value ||
            input_c4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e2 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_c2 === value ||
            input_c5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f4 === value || input_f5 === value || input_f6 === value) {
          filled += 3;
        } else {
          if (input_f1 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f2 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f3 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e3.innerHTML = value;
          input_e3 = e3.innerHTML;
          break;
        }
      }
    }

    if (input_e3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e6 === null) {
          if (input_f4 === value || input_f5 === value || input_f6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a2 === value ||
          input_a4 === value ||
          input_a5 === value
        ) {
          filled += 2;
        } else {
          if (input_a3 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c1 === value ||
          input_c2 === value ||
          input_c4 === value ||
          input_c5 === value
        ) {
          filled += 2;
        } else {
          if (input_c3 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e3.innerHTML = value;
          input_e3 = e3.innerHTML;
          break;
        }
      }
    }

    if (input_e3 === null && input_e6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_c1 === temp ||
            input_c4 === temp
          )
            filled += 2;
          else if (input_e1 !== null && input_e4 !== null) filled += 2;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_c2 === temp ||
            input_c5 === temp
          )
            filled += 2;
          else if (input_e2 !== null && input_e5 !== null) filled += 2;
          if (filled === 4) {
            e3.innerHTML = temp;
            input_e3 = e3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e4 === null) {
    if (
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e4.innerHTML = temp;
          input_e4 = e4.innerHTML;
          break;
        }
      }
    } else if (
      input_e5 !== null &&
      input_e6 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e4.innerHTML = temp;
          input_e4 = e4.innerHTML;
          break;
        }
      }
    } else if (
      input_e1 !== null &&
      input_a1 !== null &&
      input_a4 !== null &&
      input_c1 !== null &&
      input_c4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          e4.innerHTML = temp;
          input_e4 = e4.innerHTML;
          break;
        }
      }
    }

    if (input_e4 === null && input_e5 !== null && input_e6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            e4.innerHTML = temp;
            input_e4 = e4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e4 === null && input_e1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_a2 === temp || input_a5 === temp) {
            if (input_c3 === temp || input_c6 === temp) {
              e4.innerHTML = temp;
              input_e4 = e4.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_c2 === temp || input_c5 === temp) {
              e4.innerHTML = temp;
              input_e4 = e4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            if (
              input_a2 === temp ||
              input_a5 === temp ||
              input_c2 === temp ||
              input_c5 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_c3 === temp ||
                input_c6 === temp
              ) {
                e4.innerHTML = temp;
                input_e4 = e4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e5 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_c2 === value ||
            input_c5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e6 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_c3 === value ||
            input_c6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f1 === value || input_f2 === value || input_f3 === value) {
          filled += 3;
        } else {
          if (input_f4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e4.innerHTML = value;
          input_e4 = e4.innerHTML;
          break;
        }
      }
    }

    if (input_e4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e1 === null) {
          if (input_f1 === value || input_f2 === value || input_f3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a2 === value ||
          input_a3 === value ||
          input_a5 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a1 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a4 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c2 === value ||
          input_c3 === value ||
          input_c5 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c1 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c4 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e4.innerHTML = value;
          input_e4 = e4.innerHTML;
          break;
        }
      }
    }

    if (input_e4 === null && input_e1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a1 !== temp &&
          input_a4 !== temp &&
          input_c1 !== temp &&
          input_c4 !== temp
        ) {
          let filled = 0;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_c2 === temp ||
            input_c5 === temp
          )
            filled += 2;
          else if (input_e2 !== null && input_e5 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_c3 === temp ||
            input_c6 === temp
          )
            filled += 2;
          else if (input_e3 !== null && input_e6 !== null) filled += 2;
          if (filled === 4) {
            e4.innerHTML = temp;
            input_e4 = e4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e5 === null) {
    if (
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null &&
      input_e4 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e5.innerHTML = temp;
          input_e5 = e5.innerHTML;
          break;
        }
      }
    } else if (
      input_e4 !== null &&
      input_e6 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e5.innerHTML = temp;
          input_e5 = e5.innerHTML;
          break;
        }
      }
    } else if (
      input_e2 !== null &&
      input_a2 !== null &&
      input_a5 !== null &&
      input_c2 !== null &&
      input_c5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          e5.innerHTML = temp;
          input_e5 = e5.innerHTML;
          break;
        }
      }
    }

    if (input_e5 === null && input_e4 !== null && input_e6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            e5.innerHTML = temp;
            input_e5 = e5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e5 === null && input_e2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_c3 === temp || input_c6 === temp) {
              e5.innerHTML = temp;
              input_e5 = e5.innerHTML;
              break;
            }
          }
          if (input_a3 === temp || input_a6 === temp) {
            if (input_c1 === temp || input_c4 === temp) {
              e5.innerHTML = temp;
              input_e5 = e5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_c1 === temp ||
              input_c4 === temp
            ) {
              if (
                input_a3 === temp ||
                input_a6 === temp ||
                input_c3 === temp ||
                input_c6 === temp
              ) {
                e5.innerHTML = temp;
                input_e5 = e5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e4 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_c1 === value ||
            input_c4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e6 === null) {
          if (
            input_a3 === value ||
            input_a6 === value ||
            input_c3 === value ||
            input_c6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f1 === value || input_f2 === value || input_f3 === value) {
          filled += 3;
        } else {
          if (input_f4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e5.innerHTML = value;
          input_e5 = e5.innerHTML;
          break;
        }
      }
    }

    if (input_e5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e2 === null) {
          if (input_f1 === value || input_f2 === value || input_f3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a3 === value ||
          input_a4 === value ||
          input_a6 === value
        ) {
          filled += 2;
        } else {
          if (input_a2 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a5 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c1 === value ||
          input_c3 === value ||
          input_c4 === value ||
          input_c6 === value
        ) {
          filled += 2;
        } else {
          if (input_c2 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c5 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e5.innerHTML = value;
          input_e5 = e5.innerHTML;
          break;
        }
      }
    }

    if (input_e5 === null && input_e2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e6 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a2 !== temp &&
          input_a5 !== temp &&
          input_c2 !== temp &&
          input_c5 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_c1 === temp ||
            input_c4 === temp
          )
            filled += 2;
          else if (input_e1 !== null && input_e4 !== null) filled += 2;
          if (
            input_a3 === temp ||
            input_a6 === temp ||
            input_c3 === temp ||
            input_c6 === temp
          )
            filled += 2;
          else if (input_e3 !== null && input_e6 !== null) filled += 2;
          if (filled === 4) {
            e5.innerHTML = temp;
            input_e5 = e5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_e6 === null) {
    if (
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null &&
      input_e4 !== null &&
      input_e5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e6.innerHTML = temp;
          input_e6 = e6.innerHTML;
          break;
        }
      }
    } else if (
      input_e4 !== null &&
      input_e5 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e6.innerHTML = temp;
          input_e6 = e6.innerHTML;
          break;
        }
      }
    } else if (
      input_e3 !== null &&
      input_a3 !== null &&
      input_a6 !== null &&
      input_c3 !== null &&
      input_c6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          e6.innerHTML = temp;
          input_e6 = e6.innerHTML;
          break;
        }
      }
    }

    if (input_e6 === null && input_e4 !== null && input_e5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            e6.innerHTML = temp;
            input_e6 = e6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_e6 === null && input_e3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_a1 === temp || input_a4 === temp) {
            if (input_c2 === temp || input_c5 === temp) {
              e6.innerHTML = temp;
              input_e6 = e6.innerHTML;
              break;
            }
          }
          if (input_a2 === temp || input_a5 === temp) {
            if (input_c1 === temp || input_c4 === temp) {
              e6.innerHTML = temp;
              input_e6 = e6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_e6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          if (input_f1 === temp || input_f2 === temp || input_f3 === temp) {
            if (
              input_a1 === temp ||
              input_a4 === temp ||
              input_c1 === temp ||
              input_c4 === temp
            ) {
              if (
                input_a2 === temp ||
                input_a5 === temp ||
                input_c2 === temp ||
                input_c5 === temp
              ) {
                e6.innerHTML = temp;
                input_e6 = e6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_e6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e4 === null) {
          if (
            input_a1 === value ||
            input_a4 === value ||
            input_c1 === value ||
            input_c4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e5 === null) {
          if (
            input_a2 === value ||
            input_a5 === value ||
            input_c2 === value ||
            input_c5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f1 === value || input_f2 === value || input_f3 === value) {
          filled += 3;
        } else {
          if (input_f4 === null) {
            if (
              input_b1 === value ||
              input_b4 === value ||
              input_d1 === value ||
              input_d4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f5 === null) {
            if (
              input_b2 === value ||
              input_b5 === value ||
              input_d2 === value ||
              input_d5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_f6 === null) {
            if (
              input_b3 === value ||
              input_b6 === value ||
              input_d3 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e6.innerHTML = value;
          input_e6 = e6.innerHTML;
          break;
        }
      }
    }

    if (input_e6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_e3 === null) {
          if (input_f1 === value || input_f2 === value || input_f3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_a1 === value ||
          input_a2 === value ||
          input_a4 === value ||
          input_a5 === value
        ) {
          filled += 2;
        } else {
          if (input_a3 === null) {
            if (
              input_b1 === value ||
              input_b2 === value ||
              input_b3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_a6 === null) {
            if (
              input_b4 === value ||
              input_b5 === value ||
              input_b6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_c1 === value ||
          input_c2 === value ||
          input_c4 === value ||
          input_c5 === value
        ) {
          filled += 2;
        } else {
          if (input_c3 === null) {
            if (
              input_d1 === value ||
              input_d2 === value ||
              input_d3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_c6 === null) {
            if (
              input_d4 === value ||
              input_d5 === value ||
              input_d6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          e6.innerHTML = value;
          input_e6 = e6.innerHTML;
          break;
        }
      }
    }

    if (input_e6 === null && input_e3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_a3 !== temp &&
          input_a6 !== temp &&
          input_c3 !== temp &&
          input_c6 !== temp
        ) {
          let filled = 0;
          if (
            input_a1 === temp ||
            input_a4 === temp ||
            input_c1 === temp ||
            input_c4 === temp
          )
            filled += 2;
          else if (input_e1 !== null && input_e4 !== null) filled += 2;
          if (
            input_a2 === temp ||
            input_a5 === temp ||
            input_c2 === temp ||
            input_c5 === temp
          )
            filled += 2;
          else if (input_e2 !== null && input_e5 !== null) filled += 2;
          if (filled === 4) {
            e6.innerHTML = temp;
            input_e6 = e6.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f1 === null) {
    if (
      input_f2 !== null &&
      input_f3 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f1.innerHTML = temp;
          input_f1 = f1.innerHTML;
          break;
        }
      }
    } else if (
      input_f2 !== null &&
      input_f3 !== null &&
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f1.innerHTML = temp;
          input_f1 = f1.innerHTML;
          break;
        }
      }
    } else if (
      input_f4 !== null &&
      input_b1 !== null &&
      input_b4 !== null &&
      input_d1 !== null &&
      input_d4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f1.innerHTML = temp;
          input_f1 = f1.innerHTML;
          break;
        }
      }
    }

    if (input_f1 === null && input_f2 !== null && input_f3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            f1.innerHTML = temp;
            input_f1 = f1.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f1 === null && input_f4 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_b2 === temp || input_b5 === temp) {
            if (input_d3 === temp || input_d6 === temp) {
              f1.innerHTML = temp;
              input_f1 = f1.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_d2 === temp || input_d5 === temp) {
              f1.innerHTML = temp;
              input_f1 = f1.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f1 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            if (
              input_b2 === temp ||
              input_b5 === temp ||
              input_d2 === temp ||
              input_d5 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_d3 === temp ||
                input_d6 === temp
              ) {
                f1.innerHTML = temp;
                input_f1 = f1.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f2 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_d2 === value ||
            input_d5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f3 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_d3 === value ||
            input_d6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e4 === value || input_e5 === value || input_e6 === value) {
          filled += 3;
        } else {
          if (input_e1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f1.innerHTML = value;
          input_f1 = f1.innerHTML;
          break;
        }
      }
    }

    if (input_f1 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f4 === null) {
          if (input_e4 === value || input_e5 === value || input_e6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b2 === value ||
          input_b3 === value ||
          input_b5 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b1 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b4 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d2 === value ||
          input_d3 === value ||
          input_d5 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d1 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d4 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f1.innerHTML = value;
          input_f1 = f1.innerHTML;
          break;
        }
      }
    }

    if (input_f1 === null && input_f4 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          let filled = 0;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_d2 === temp ||
            input_d5 === temp
          )
            filled += 2;
          else if (input_f2 !== null && input_f5 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_d3 === temp ||
            input_d6 === temp
          )
            filled += 2;
          else if (input_f3 !== null && input_f6 !== null) filled += 2;
          if (filled === 4) {
            f1.innerHTML = temp;
            input_f1 = f1.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f2 === null) {
    if (
      input_f1 !== null &&
      input_f3 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f2.innerHTML = temp;
          input_f2 = f2.innerHTML;
          break;
        }
      }
    } else if (
      input_f1 !== null &&
      input_f3 !== null &&
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f2.innerHTML = temp;
          input_f2 = f2.innerHTML;
          break;
        }
      }
    } else if (
      input_f5 !== null &&
      input_b2 !== null &&
      input_b5 !== null &&
      input_d2 !== null &&
      input_d5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f2.innerHTML = temp;
          input_f2 = f2.innerHTML;
          break;
        }
      }
    }

    if (input_f2 === null && input_f1 !== null && input_f3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            f2.innerHTML = temp;
            input_f2 = f2.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f2 === null && input_f5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_d3 === temp || input_d6 === temp) {
              f2.innerHTML = temp;
              input_f2 = f2.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_d1 === temp || input_d4 === temp) {
              f2.innerHTML = temp;
              input_f2 = f2.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f2 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_d1 === temp ||
              input_d4 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_d3 === temp ||
                input_d6 === temp
              ) {
                f2.innerHTML = temp;
                input_f2 = f2.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f1 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_d1 === value ||
            input_d4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f3 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_d3 === value ||
            input_d6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e4 === value || input_e5 === value || input_e6 === value) {
          filled += 3;
        } else {
          if (input_e1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f2.innerHTML = value;
          input_f2 = f2.innerHTML;
          break;
        }
      }
    }

    if (input_f2 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f5 === null) {
          if (input_e4 === value || input_e5 === value || input_e6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b3 === value ||
          input_b4 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b2 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d1 === value ||
          input_d3 === value ||
          input_d4 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d2 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f2.innerHTML = value;
          input_f2 = f2.innerHTML;
          break;
        }
      }
    }

    if (input_f2 === null && input_f5 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_d1 === temp ||
            input_d4 === temp
          )
            filled += 2;
          else if (input_f1 !== null && input_f4 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_d3 === temp ||
            input_d6 === temp
          )
            filled += 2;
          else if (input_f3 !== null && input_f6 !== null) filled += 2;
          if (filled === 4) {
            f2.innerHTML = temp;
            input_f2 = f2.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f3 === null) {
    if (
      input_f1 !== null &&
      input_f2 !== null &&
      input_f4 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f3.innerHTML = temp;
          input_f3 = f3.innerHTML;
          break;
        }
      }
    } else if (
      input_f1 !== null &&
      input_f2 !== null &&
      input_e1 !== null &&
      input_e2 !== null &&
      input_e3 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f3.innerHTML = temp;
          input_f3 = f3.innerHTML;
          break;
        }
      }
    } else if (
      input_f6 !== null &&
      input_b3 !== null &&
      input_b6 !== null &&
      input_d3 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f3.innerHTML = temp;
          input_f3 = f3.innerHTML;
          break;
        }
      }
    }

    if (input_f3 === null && input_f1 !== null && input_f2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            f3.innerHTML = temp;
            input_f3 = f3.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f3 === null && input_f6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_d2 === temp || input_d5 === temp) {
              f3.innerHTML = temp;
              input_f3 = f3.innerHTML;
              break;
            }
          }
          if (input_b2 === temp || input_b5 === temp) {
            if (input_d1 === temp || input_d4 === temp) {
              f3.innerHTML = temp;
              input_f3 = f3.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f3 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_e4 === temp || input_e5 === temp || input_e6 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_d1 === temp ||
              input_d4 === temp
            ) {
              if (
                input_b2 === temp ||
                input_b5 === temp ||
                input_d2 === temp ||
                input_d5 === temp
              ) {
                f3.innerHTML = temp;
                input_f3 = f3.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f1 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_d1 === value ||
            input_d4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f2 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_d2 === value ||
            input_d5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e4 === value || input_e5 === value || input_e6 === value) {
          filled += 3;
        } else {
          if (input_e1 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e2 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e3 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f3.innerHTML = value;
          input_f3 = f3.innerHTML;
          break;
        }
      }
    }

    if (input_f3 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f6 === null) {
          if (input_e4 === value || input_e5 === value || input_e6 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b2 === value ||
          input_b4 === value ||
          input_b5 === value
        ) {
          filled += 2;
        } else {
          if (input_b3 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d1 === value ||
          input_d2 === value ||
          input_d4 === value ||
          input_d5 === value
        ) {
          filled += 2;
        } else {
          if (input_d3 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f3.innerHTML = value;
          input_f3 = f3.innerHTML;
          break;
        }
      }
    }

    if (input_f3 === null && input_f6 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e1 !== temp &&
          input_e2 !== temp &&
          input_e3 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_d1 === temp ||
            input_d4 === temp
          )
            filled += 2;
          else if (input_f1 !== null && input_f4 !== null) filled += 2;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_d2 === temp ||
            input_d5 === temp
          )
            filled += 2;
          else if (input_f2 !== null && input_f5 !== null) filled += 2;
          if (filled === 4) {
            f3.innerHTML = temp;
            input_f3 = f3.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f4 === null) {
    if (
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null &&
      input_f5 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f4.innerHTML = temp;
          input_f4 = f4.innerHTML;
          break;
        }
      }
    } else if (
      input_f5 !== null &&
      input_f6 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f4.innerHTML = temp;
          input_f4 = f4.innerHTML;
          break;
        }
      }
    } else if (
      input_f1 !== null &&
      input_b1 !== null &&
      input_b4 !== null &&
      input_d1 !== null &&
      input_d4 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          f4.innerHTML = temp;
          input_f4 = f4.innerHTML;
          break;
        }
      }
    }

    if (input_f4 === null && input_f5 !== null && input_f6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            f4.innerHTML = temp;
            input_f4 = f4.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f4 === null && input_f1 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_b2 === temp || input_b5 === temp) {
            if (input_d3 === temp || input_d6 === temp) {
              f4.innerHTML = temp;
              input_f4 = f4.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_d2 === temp || input_d5 === temp) {
              f4.innerHTML = temp;
              input_f4 = f4.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f4 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            if (
              input_b2 === temp ||
              input_b5 === temp ||
              input_d2 === temp ||
              input_d5 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_d3 === temp ||
                input_d6 === temp
              ) {
                f4.innerHTML = temp;
                input_f4 = f4.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f5 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_d2 === value ||
            input_d5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f6 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_d3 === value ||
            input_d6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e1 === value || input_e2 === value || input_e3 === value) {
          filled += 3;
        } else {
          if (input_e4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f4.innerHTML = value;
          input_f4 = f4.innerHTML;
          break;
        }
      }
    }

    if (input_f4 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f1 === null) {
          if (input_e1 === value || input_e2 === value || input_e3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b2 === value ||
          input_b3 === value ||
          input_b5 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b1 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b4 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d2 === value ||
          input_d3 === value ||
          input_d5 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d1 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d4 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f4.innerHTML = value;
          input_f4 = f4.innerHTML;
          break;
        }
      }
    }

    if (input_f4 === null && input_f1 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f5 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b1 !== temp &&
          input_b4 !== temp &&
          input_d1 !== temp &&
          input_d4 !== temp
        ) {
          let filled = 0;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_d2 === temp ||
            input_d5 === temp
          )
            filled += 2;
          else if (input_f2 !== null && input_f5 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_d3 === temp ||
            input_d6 === temp
          )
            filled += 2;
          else if (input_f3 !== null && input_f6 !== null) filled += 2;
          if (filled === 4) {
            f4.innerHTML = temp;
            input_f4 = f4.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f5 === null) {
    if (
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null &&
      input_f4 !== null &&
      input_f6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f5.innerHTML = temp;
          input_f5 = f5.innerHTML;
          break;
        }
      }
    } else if (
      input_f4 !== null &&
      input_f6 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f5.innerHTML = temp;
          input_f5 = f5.innerHTML;
          break;
        }
      }
    } else if (
      input_f2 !== null &&
      input_b2 !== null &&
      input_b5 !== null &&
      input_d2 !== null &&
      input_d5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          f5.innerHTML = temp;
          input_f5 = f5.innerHTML;
          break;
        }
      }
    }

    if (input_f5 === null && input_f4 !== null && input_f6 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            f5.innerHTML = temp;
            input_f5 = f5.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f5 === null && input_f2 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_d3 === temp || input_d6 === temp) {
              f5.innerHTML = temp;
              input_f5 = f5.innerHTML;
              break;
            }
          }
          if (input_b3 === temp || input_b6 === temp) {
            if (input_d1 === temp || input_d4 === temp) {
              f5.innerHTML = temp;
              input_f5 = f5.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f5 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_d1 === temp ||
              input_d4 === temp
            ) {
              if (
                input_b3 === temp ||
                input_b6 === temp ||
                input_d3 === temp ||
                input_d6 === temp
              ) {
                f5.innerHTML = temp;
                input_f5 = f5.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f4 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_d1 === value ||
            input_d4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f6 === null) {
          if (
            input_b3 === value ||
            input_b6 === value ||
            input_d3 === value ||
            input_d6 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e1 === value || input_e2 === value || input_e3 === value) {
          filled += 3;
        } else {
          if (input_e4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f5.innerHTML = value;
          input_f5 = f5.innerHTML;
          break;
        }
      }
    }

    if (input_f5 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f2 === null) {
          if (input_e1 === value || input_e2 === value || input_e3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b3 === value ||
          input_b4 === value ||
          input_b6 === value
        ) {
          filled += 2;
        } else {
          if (input_b2 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b5 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d1 === value ||
          input_d3 === value ||
          input_d4 === value ||
          input_d6 === value
        ) {
          filled += 2;
        } else {
          if (input_d2 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d5 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f5.innerHTML = value;
          input_f5 = f5.innerHTML;
          break;
        }
      }
    }

    if (input_f5 === null && input_f2 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f6 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b2 !== temp &&
          input_b5 !== temp &&
          input_d2 !== temp &&
          input_d5 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_d1 === temp ||
            input_d4 === temp
          )
            filled += 2;
          else if (input_f1 !== null && input_f4 !== null) filled += 2;
          if (
            input_b3 === temp ||
            input_b6 === temp ||
            input_d3 === temp ||
            input_d6 === temp
          )
            filled += 2;
          else if (input_f3 !== null && input_f6 !== null) filled += 2;
          if (filled === 4) {
            f5.innerHTML = temp;
            input_f5 = f5.innerHTML;
            break;
          }
        }
      }
    }
  }

  if (input_f6 === null) {
    if (
      input_f1 !== null &&
      input_f2 !== null &&
      input_f3 !== null &&
      input_f4 !== null &&
      input_f5 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f6.innerHTML = temp;
          input_f6 = f6.innerHTML;
          break;
        }
      }
    } else if (
      input_f4 !== null &&
      input_f5 !== null &&
      input_e4 !== null &&
      input_e5 !== null &&
      input_e6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f6.innerHTML = temp;
          input_f6 = f6.innerHTML;
          break;
        }
      }
    } else if (
      input_f3 !== null &&
      input_b3 !== null &&
      input_b6 !== null &&
      input_d3 !== null &&
      input_d6 !== null
    ) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          f6.innerHTML = temp;
          input_f6 = f6.innerHTML;
          break;
        }
      }
    }

    if (input_f6 === null && input_f4 !== null && input_f5 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            f6.innerHTML = temp;
            input_f6 = f6.innerHTML;
            break;
          }
        }
      }
    }

    if (input_f6 === null && input_f3 !== null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_b1 === temp || input_b4 === temp) {
            if (input_d2 === temp || input_d5 === temp) {
              f6.innerHTML = temp;
              input_f6 = f6.innerHTML;
              break;
            }
          }
          if (input_b2 === temp || input_b5 === temp) {
            if (input_d1 === temp || input_d4 === temp) {
              f6.innerHTML = temp;
              input_f6 = f6.innerHTML;
              break;
            }
          }
        }
      }
    }

    if (input_f6 === null) {
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          if (input_e1 === temp || input_e2 === temp || input_e3 === temp) {
            if (
              input_b1 === temp ||
              input_b4 === temp ||
              input_d1 === temp ||
              input_d4 === temp
            ) {
              if (
                input_b2 === temp ||
                input_b5 === temp ||
                input_d2 === temp ||
                input_d5 === temp
              ) {
                f6.innerHTML = temp;
                input_f6 = f6.innerHTML;
                break;
              }
            }
          }
        }
      }
    }

    if (input_f6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f4 === null) {
          if (
            input_b1 === value ||
            input_b4 === value ||
            input_d1 === value ||
            input_d4 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_f5 === null) {
          if (
            input_b2 === value ||
            input_b5 === value ||
            input_d2 === value ||
            input_d5 === value
          ) {
            filled += 1;
          }
        } else filled += 1;
        if (input_e1 === value || input_e2 === value || input_e3 === value) {
          filled += 3;
        } else {
          if (input_e4 === null) {
            if (
              input_a1 === value ||
              input_a4 === value ||
              input_c1 === value ||
              input_c4 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e5 === null) {
            if (
              input_a2 === value ||
              input_a5 === value ||
              input_c2 === value ||
              input_c5 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_e6 === null) {
            if (
              input_a3 === value ||
              input_a6 === value ||
              input_c3 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f6.innerHTML = value;
          input_f6 = f6.innerHTML;
          break;
        }
      }
    }

    if (input_f6 === null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          temp_array.push(temp);
        }
      }
      let length = temp_array.length;
      for (let i = 0; i <= length; i++) {
        let value = temp_array[i];
        if (value === undefined) break;
        let filled = 0;
        if (input_f3 === null) {
          if (input_e1 === value || input_e2 === value || input_e3 === value) {
            filled += 1;
          }
        } else filled += 1;
        if (
          input_b1 === value ||
          input_b2 === value ||
          input_b4 === value ||
          input_b5 === value
        ) {
          filled += 2;
        } else {
          if (input_b3 === null) {
            if (
              input_a1 === value ||
              input_a2 === value ||
              input_a3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_b6 === null) {
            if (
              input_a4 === value ||
              input_a5 === value ||
              input_a6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (
          input_d1 === value ||
          input_d2 === value ||
          input_d4 === value ||
          input_d5 === value
        ) {
          filled += 2;
        } else {
          if (input_d3 === null) {
            if (
              input_c1 === value ||
              input_c2 === value ||
              input_c3 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
          if (input_d6 === null) {
            if (
              input_c4 === value ||
              input_c5 === value ||
              input_c6 === value
            ) {
              filled += 1;
            }
          } else filled += 1;
        }
        if (filled === 5) {
          f6.innerHTML = value;
          input_f6 = f6.innerHTML;
          break;
        }
      }
    }

    if (input_f6 === null && input_f3 !== null) {
      let temp_array = [];
      for (let i = 1; i <= 6; i++) {
        let temp = i.toString();
        if (
          input_f1 !== temp &&
          input_f2 !== temp &&
          input_f3 !== temp &&
          input_f4 !== temp &&
          input_f5 !== temp &&
          input_e4 !== temp &&
          input_e5 !== temp &&
          input_e6 !== temp &&
          input_b3 !== temp &&
          input_b6 !== temp &&
          input_d3 !== temp &&
          input_d6 !== temp
        ) {
          let filled = 0;
          if (
            input_b1 === temp ||
            input_b4 === temp ||
            input_d1 === temp ||
            input_d4 === temp
          )
            filled += 2;
          else if (input_f1 !== null && input_f4 !== null) filled += 2;
          if (
            input_b2 === temp ||
            input_b5 === temp ||
            input_d2 === temp ||
            input_d5 === temp
          )
            filled += 2;
          else if (input_f2 !== null && input_f5 !== null) filled += 2;
          if (filled === 4) {
            f6.innerHTML = temp;
            input_f6 = f6.innerHTML;
            break;
          }
        }
      }
    }
  }
}

function input_check() {
  array_input = [
    input_a1,
    input_a2,
    input_a3,
    input_a4,
    input_a5,
    input_a6,
    input_b1,
    input_b2,
    input_b3,
    input_b4,
    input_b5,
    input_b6,
    input_c1,
    input_c2,
    input_c3,
    input_c4,
    input_c5,
    input_c6,
    input_d1,
    input_d2,
    input_d3,
    input_d4,
    input_d5,
    input_d6,
    input_e1,
    input_e2,
    input_e3,
    input_e4,
    input_e5,
    input_e6,
    input_f1,
    input_f2,
    input_f3,
    input_f4,
    input_f5,
    input_f6,
  ];
  for (let i = 0; i <= 80; i++) {
    if (array_input[i] === null) {
      empty = true;
      break;
    } else empty = false;
  }
}

function randomizer() {
  let array = [];
  let least;
  possible_check();
  for (let i = 1; i <= 6; i++) {
    if (input_a1 === null && possible_a1 === i) {
      least = i;
      break;
    }
    if (input_a2 === null && possible_a2 === i) {
      least = i;
      break;
    }
    if (input_a3 === null && possible_a3 === i) {
      least = i;
      break;
    }
    if (input_a4 === null && possible_a4 === i) {
      least = i;
      break;
    }
    if (input_a5 === null && possible_a5 === i) {
      least = i;
      break;
    }
    if (input_a6 === null && possible_a6 === i) {
      least = i;
      break;
    }
    if (input_b1 === null && possible_b1 === i) {
      least = i;
      break;
    }
    if (input_b2 === null && possible_b2 === i) {
      least = i;
      break;
    }
    if (input_b3 === null && possible_b3 === i) {
      least = i;
      break;
    }
    if (input_b4 === null && possible_b4 === i) {
      least = i;
      break;
    }
    if (input_b5 === null && possible_b5 === i) {
      least = i;
      break;
    }
    if (input_b6 === null && possible_b6 === i) {
      least = i;
      break;
    }
    if (input_c1 === null && possible_c1 === i) {
      least = i;
      break;
    }
    if (input_c2 === null && possible_c2 === i) {
      least = i;
      break;
    }
    if (input_c3 === null && possible_c3 === i) {
      least = i;
      break;
    }
    if (input_c4 === null && possible_c4 === i) {
      least = i;
      break;
    }
    if (input_c5 === null && possible_c5 === i) {
      least = i;
      break;
    }
    if (input_c6 === null && possible_c6 === i) {
      least = i;
      break;
    }
    if (input_d1 === null && possible_d1 === i) {
      least = i;
      break;
    }
    if (input_d2 === null && possible_d2 === i) {
      least = i;
      break;
    }
    if (input_d3 === null && possible_d3 === i) {
      least = i;
      break;
    }
    if (input_d4 === null && possible_d4 === i) {
      least = i;
      break;
    }
    if (input_d5 === null && possible_d5 === i) {
      least = i;
      break;
    }
    if (input_d6 === null && possible_d6 === i) {
      least = i;
      break;
    }
    if (input_e1 === null && possible_e1 === i) {
      least = i;
      break;
    }
    if (input_e2 === null && possible_e2 === i) {
      least = i;
      break;
    }
    if (input_e3 === null && possible_e3 === i) {
      least = i;
      break;
    }
    if (input_e4 === null && possible_e4 === i) {
      least = i;
      break;
    }
    if (input_e5 === null && possible_e5 === i) {
      least = i;
      break;
    }
    if (input_e6 === null && possible_e6 === i) {
      least = i;
      break;
    }
    if (input_f1 === null && possible_f1 === i) {
      least = i;
      break;
    }
    if (input_f2 === null && possible_f2 === i) {
      least = i;
      break;
    }
    if (input_f3 === null && possible_f3 === i) {
      least = i;
      break;
    }
    if (input_f4 === null && possible_f4 === i) {
      least = i;
      break;
    }
    if (input_f5 === null && possible_f5 === i) {
      least = i;
      break;
    }
    if (input_f6 === null && possible_f6 === i) {
      least = i;
      break;
    }
  }
  if (input_a1 === null && possible_a1 === least) array.push(1);
  if (input_a2 === null && possible_a2 === least) array.push(2);
  if (input_a3 === null && possible_a3 === least) array.push(3);
  if (input_a4 === null && possible_a4 === least) array.push(4);
  if (input_a5 === null && possible_a5 === least) array.push(5);
  if (input_a6 === null && possible_a6 === least) array.push(6);
  if (input_b1 === null && possible_b1 === least) array.push(7);
  if (input_b2 === null && possible_b2 === least) array.push(8);
  if (input_b3 === null && possible_b3 === least) array.push(9);
  if (input_b4 === null && possible_b4 === least) array.push(10);
  if (input_b5 === null && possible_b5 === least) array.push(11);
  if (input_b6 === null && possible_b6 === least) array.push(12);
  if (input_c1 === null && possible_c1 === least) array.push(13);
  if (input_c2 === null && possible_c2 === least) array.push(14);
  if (input_c3 === null && possible_c3 === least) array.push(15);
  if (input_c4 === null && possible_c4 === least) array.push(16);
  if (input_c5 === null && possible_c5 === least) array.push(17);
  if (input_c6 === null && possible_c6 === least) array.push(18);
  if (input_d1 === null && possible_d1 === least) array.push(19);
  if (input_d2 === null && possible_d2 === least) array.push(20);
  if (input_d3 === null && possible_d3 === least) array.push(21);
  if (input_d4 === null && possible_d4 === least) array.push(22);
  if (input_d5 === null && possible_d5 === least) array.push(23);
  if (input_d6 === null && possible_d6 === least) array.push(24);
  if (input_e1 === null && possible_e1 === least) array.push(25);
  if (input_e2 === null && possible_e2 === least) array.push(26);
  if (input_e3 === null && possible_e3 === least) array.push(27);
  if (input_e4 === null && possible_e4 === least) array.push(28);
  if (input_e5 === null && possible_e5 === least) array.push(29);
  if (input_e6 === null && possible_e6 === least) array.push(30);
  if (input_f1 === null && possible_f1 === least) array.push(31);
  if (input_f2 === null && possible_f2 === least) array.push(32);
  if (input_f3 === null && possible_f3 === least) array.push(33);
  if (input_f4 === null && possible_f4 === least) array.push(34);
  if (input_f5 === null && possible_f5 === least) array.push(35);
  if (input_f6 === null && possible_f6 === least) array.push(36);
  let j = array.length;
  random = array[Math.floor(Math.random() * j)];
  if (random === 1) a1_random();
  else if (random === 2) a2_random();
  else if (random === 3) a3_random();
  else if (random === 4) a4_random();
  else if (random === 5) a5_random();
  else if (random === 6) a6_random();
  else if (random === 7) b1_random();
  else if (random === 8) b2_random();
  else if (random === 9) b3_random();
  else if (random === 10) b4_random();
  else if (random === 11) b5_random();
  else if (random === 12) b6_random();
  else if (random === 13) c1_random();
  else if (random === 14) c2_random();
  else if (random === 15) c3_random();
  else if (random === 16) c4_random();
  else if (random === 17) c5_random();
  else if (random === 18) c6_random();
  else if (random === 19) d1_random();
  else if (random === 20) d2_random();
  else if (random === 21) d3_random();
  else if (random === 22) d4_random();
  else if (random === 23) d5_random();
  else if (random === 24) d6_random();
  else if (random === 25) e1_random();
  else if (random === 26) e2_random();
  else if (random === 27) e3_random();
  else if (random === 28) e4_random();
  else if (random === 29) e5_random();
  else if (random === 30) e6_random();
  else if (random === 31) f1_random();
  else if (random === 32) f2_random();
  else if (random === 33) f3_random();
  else if (random === 34) f4_random();
  else if (random === 35) f5_random();
  else if (random === 36) f6_random();
  if (solved === false) solve_sudoku();
}

function possible_check() {
  possible_a1 = 6;
  possible_a2 = 6;
  possible_a3 = 6;
  possible_a4 = 6;
  possible_a5 = 6;
  possible_a6 = 6;
  possible_b1 = 6;
  possible_b2 = 6;
  possible_b3 = 6;
  possible_b4 = 6;
  possible_b5 = 6;
  possible_b6 = 6;
  possible_c1 = 6;
  possible_c2 = 6;
  possible_c3 = 6;
  possible_c4 = 6;
  possible_c5 = 6;
  possible_c6 = 6;
  possible_d1 = 6;
  possible_d2 = 6;
  possible_d3 = 6;
  possible_d4 = 6;
  possible_d5 = 6;
  possible_d6 = 6;
  possible_e1 = 6;
  possible_e2 = 6;
  possible_e3 = 6;
  possible_e4 = 6;
  possible_e5 = 6;
  possible_e6 = 6;
  possible_f1 = 6;
  possible_f2 = 6;
  possible_f3 = 6;
  possible_f4 = 6;
  possible_f5 = 6;
  possible_f6 = 6;

  for (let i = 1; i <= 6; i++) {
    let temp = i.toString();
    if (
      input_a2 === temp ||
      input_a3 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_c1 === temp ||
      input_c4 === temp ||
      input_e1 === temp ||
      input_e4 === temp
    )
      possible_a1 -= 1;
    if (
      input_a1 === temp ||
      input_a3 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_c2 === temp ||
      input_c5 === temp ||
      input_e2 === temp ||
      input_e5 === temp
    )
      possible_a2 -= 1;
    if (
      input_a1 === temp ||
      input_a2 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_c3 === temp ||
      input_c6 === temp ||
      input_e3 === temp ||
      input_e6 === temp
    )
      possible_a3 -= 1;
    if (
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_c1 === temp ||
      input_c4 === temp ||
      input_e1 === temp ||
      input_e4 === temp
    )
      possible_a4 -= 1;
    if (
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_a4 === temp ||
      input_a6 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_c2 === temp ||
      input_c5 === temp ||
      input_e2 === temp ||
      input_e5 === temp
    )
      possible_a5 -= 1;
    if (
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_c3 === temp ||
      input_c6 === temp ||
      input_e3 === temp ||
      input_e6 === temp
    )
      possible_a6 -= 1;
    if (
      input_b2 === temp ||
      input_b3 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_d1 === temp ||
      input_d4 === temp ||
      input_f1 === temp ||
      input_f4 === temp
    )
      possible_b1 -= 1;
    if (
      input_b1 === temp ||
      input_b3 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_d2 === temp ||
      input_d5 === temp ||
      input_f2 === temp ||
      input_f5 === temp
    )
      possible_b2 -= 1;
    if (
      input_b1 === temp ||
      input_b2 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_a1 === temp ||
      input_a2 === temp ||
      input_a3 === temp ||
      input_d3 === temp ||
      input_d6 === temp ||
      input_f3 === temp ||
      input_f6 === temp
    )
      possible_b3 -= 1;
    if (
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_b5 === temp ||
      input_b6 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_d1 === temp ||
      input_d4 === temp ||
      input_f1 === temp ||
      input_f4 === temp
    )
      possible_b4 -= 1;
    if (
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_b4 === temp ||
      input_b6 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_d2 === temp ||
      input_d5 === temp ||
      input_f2 === temp ||
      input_f5 === temp
    )
      possible_b5 -= 1;
    if (
      input_b1 === temp ||
      input_b2 === temp ||
      input_b3 === temp ||
      input_b4 === temp ||
      input_b5 === temp ||
      input_a4 === temp ||
      input_a5 === temp ||
      input_a6 === temp ||
      input_d3 === temp ||
      input_d6 === temp ||
      input_f3 === temp ||
      input_f6 === temp
    )
      possible_b6 -= 1;
    if (
      input_c2 === temp ||
      input_c3 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_a1 === temp ||
      input_a4 === temp ||
      input_e1 === temp ||
      input_e4 === temp
    )
      possible_c1 -= 1;
    if (
      input_c1 === temp ||
      input_c3 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_a2 === temp ||
      input_a5 === temp ||
      input_e2 === temp ||
      input_e5 === temp
    )
      possible_c2 -= 1;
    if (
      input_c1 === temp ||
      input_c2 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_a3 === temp ||
      input_a6 === temp ||
      input_e3 === temp ||
      input_e6 === temp
    )
      possible_c3 -= 1;
    if (
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_a1 === temp ||
      input_a4 === temp ||
      input_e1 === temp ||
      input_e4 === temp
    )
      possible_c4 -= 1;
    if (
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_c4 === temp ||
      input_c6 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_a2 === temp ||
      input_a5 === temp ||
      input_e2 === temp ||
      input_e5 === temp
    )
      possible_c5 -= 1;
    if (
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_a3 === temp ||
      input_a6 === temp ||
      input_e3 === temp ||
      input_e6 === temp
    )
      possible_c6 -= 1;
    if (
      input_d2 === temp ||
      input_d3 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_b1 === temp ||
      input_b4 === temp ||
      input_f1 === temp ||
      input_f4 === temp
    )
      possible_d1 -= 1;
    if (
      input_d1 === temp ||
      input_d3 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_b2 === temp ||
      input_b5 === temp ||
      input_f2 === temp ||
      input_f5 === temp
    )
      possible_d2 -= 1;
    if (
      input_d1 === temp ||
      input_d2 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_c1 === temp ||
      input_c2 === temp ||
      input_c3 === temp ||
      input_b3 === temp ||
      input_b6 === temp ||
      input_f3 === temp ||
      input_f6 === temp
    )
      possible_d3 -= 1;
    if (
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_d5 === temp ||
      input_d6 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_b1 === temp ||
      input_b4 === temp ||
      input_f1 === temp ||
      input_f4 === temp
    )
      possible_d4 -= 1;
    if (
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_d4 === temp ||
      input_d6 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_b2 === temp ||
      input_b5 === temp ||
      input_f2 === temp ||
      input_f5 === temp
    )
      possible_d5 -= 1;
    if (
      input_d1 === temp ||
      input_d2 === temp ||
      input_d3 === temp ||
      input_d4 === temp ||
      input_d5 === temp ||
      input_c4 === temp ||
      input_c5 === temp ||
      input_c6 === temp ||
      input_b3 === temp ||
      input_b6 === temp ||
      input_f3 === temp ||
      input_f6 === temp
    )
      possible_d6 -= 1;
    if (
      input_e2 === temp ||
      input_e3 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_a1 === temp ||
      input_a4 === temp ||
      input_c1 === temp ||
      input_c4 === temp
    )
      possible_e1 -= 1;
    if (
      input_e1 === temp ||
      input_e3 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_a2 === temp ||
      input_a5 === temp ||
      input_c2 === temp ||
      input_c5 === temp
    )
      possible_e2 -= 1;
    if (
      input_e1 === temp ||
      input_e2 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_a3 === temp ||
      input_a6 === temp ||
      input_c3 === temp ||
      input_c6 === temp
    )
      possible_e3 -= 1;
    if (
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_a1 === temp ||
      input_a4 === temp ||
      input_c1 === temp ||
      input_c4 === temp
    )
      possible_e4 -= 1;
    if (
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_e4 === temp ||
      input_e6 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_a2 === temp ||
      input_a5 === temp ||
      input_c2 === temp ||
      input_c5 === temp
    )
      possible_e5 -= 1;
    if (
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_a3 === temp ||
      input_a6 === temp ||
      input_c3 === temp ||
      input_c6 === temp
    )
      possible_e6 -= 1;
    if (
      input_f2 === temp ||
      input_f3 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_b1 === temp ||
      input_b4 === temp ||
      input_d1 === temp ||
      input_d4 === temp
    )
      possible_f1 -= 1;
    if (
      input_f1 === temp ||
      input_f3 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_b2 === temp ||
      input_b5 === temp ||
      input_d2 === temp ||
      input_d5 === temp
    )
      possible_f2 -= 1;
    if (
      input_f1 === temp ||
      input_f2 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_e1 === temp ||
      input_e2 === temp ||
      input_e3 === temp ||
      input_b3 === temp ||
      input_b6 === temp ||
      input_d3 === temp ||
      input_d6 === temp
    )
      possible_f3 -= 1;
    if (
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_f5 === temp ||
      input_f6 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_b1 === temp ||
      input_b4 === temp ||
      input_d1 === temp ||
      input_d4 === temp
    )
      possible_f4 -= 1;
    if (
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_f4 === temp ||
      input_f6 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_b2 === temp ||
      input_b5 === temp ||
      input_d2 === temp ||
      input_d5 === temp
    )
      possible_f5 -= 1;
    if (
      input_f1 === temp ||
      input_f2 === temp ||
      input_f3 === temp ||
      input_f4 === temp ||
      input_f5 === temp ||
      input_e4 === temp ||
      input_e5 === temp ||
      input_e6 === temp ||
      input_b3 === temp ||
      input_b6 === temp ||
      input_d3 === temp ||
      input_d6 === temp
    )
      possible_f6 -= 1;
  }
}

function a1_random() {
  if (input_a1 === null && random === 1) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a2 === temp ||
        input_a3 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_c1 === temp ||
        input_c4 === temp ||
        input_e1 === temp ||
        input_e4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a1.innerHTML = key;
    a1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a1 = a1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function a2_random() {
  if (input_a2 === null && random === 2) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a1 === temp ||
        input_a3 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_c2 === temp ||
        input_c5 === temp ||
        input_e2 === temp ||
        input_e5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a2.innerHTML = key;
    a2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a2 = a2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function a3_random() {
  if (input_a3 === null && random === 3) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a1 === temp ||
        input_a2 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_c3 === temp ||
        input_c6 === temp ||
        input_e3 === temp ||
        input_e6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a3.innerHTML = key;
    a3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a3 = a3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function a4_random() {
  if (input_a4 === null && random === 4) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_c1 === temp ||
        input_c4 === temp ||
        input_e1 === temp ||
        input_e4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a4.innerHTML = key;
    a4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a4 = a4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function a5_random() {
  if (input_a5 === null && random === 5) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_a4 === temp ||
        input_a6 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_c2 === temp ||
        input_c5 === temp ||
        input_e2 === temp ||
        input_e5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a5.innerHTML = key;
    a5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a5 = a5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function a6_random() {
  if (input_a6 === null && random === 6) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_c3 === temp ||
        input_c6 === temp ||
        input_e3 === temp ||
        input_e6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    a6.innerHTML = key;
    a6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_a6 = a6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b1_random() {
  if (input_b1 === null && random === 7) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b2 === temp ||
        input_b3 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_d1 === temp ||
        input_d4 === temp ||
        input_f1 === temp ||
        input_f4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b1.innerHTML = key;
    b1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b1 = b1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b2_random() {
  if (input_b2 === null && random === 8) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b1 === temp ||
        input_b3 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_d2 === temp ||
        input_d5 === temp ||
        input_f2 === temp ||
        input_f5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b2.innerHTML = key;
    b2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b2 = b2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b3_random() {
  if (input_b3 === null && random === 9) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b1 === temp ||
        input_b2 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_a1 === temp ||
        input_a2 === temp ||
        input_a3 === temp ||
        input_d3 === temp ||
        input_d6 === temp ||
        input_f3 === temp ||
        input_f6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b3.innerHTML = key;
    b3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b3 = b3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b4_random() {
  if (input_b4 === null && random === 10) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_b5 === temp ||
        input_b6 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_d1 === temp ||
        input_d4 === temp ||
        input_f1 === temp ||
        input_f4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b4.innerHTML = key;
    b4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b4 = b4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b5_random() {
  if (input_b5 === null && random === 11) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_b4 === temp ||
        input_b6 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_d2 === temp ||
        input_d5 === temp ||
        input_f2 === temp ||
        input_f5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b5.innerHTML = key;
    b5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b5 = b5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function b6_random() {
  if (input_b6 === null && random === 12) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_b1 === temp ||
        input_b2 === temp ||
        input_b3 === temp ||
        input_b4 === temp ||
        input_b5 === temp ||
        input_a4 === temp ||
        input_a5 === temp ||
        input_a6 === temp ||
        input_d3 === temp ||
        input_d6 === temp ||
        input_f3 === temp ||
        input_f6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    b6.innerHTML = key;
    b6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_b6 = b6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c1_random() {
  if (input_c1 === null && random === 13) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c2 === temp ||
        input_c3 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_a1 === temp ||
        input_a4 === temp ||
        input_e1 === temp ||
        input_e4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c1.innerHTML = key;
    c1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c1 = c1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c2_random() {
  if (input_c2 === null && random === 14) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c1 === temp ||
        input_c3 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_a2 === temp ||
        input_a5 === temp ||
        input_e2 === temp ||
        input_e5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c2.innerHTML = key;
    c2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c2 = c2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c3_random() {
  if (input_c3 === null && random === 15) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c1 === temp ||
        input_c2 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_a3 === temp ||
        input_a6 === temp ||
        input_e3 === temp ||
        input_e6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c3.innerHTML = key;
    c3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c3 = c3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c4_random() {
  if (input_c4 === null && random === 16) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_a1 === temp ||
        input_a4 === temp ||
        input_e1 === temp ||
        input_e4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c4.innerHTML = key;
    c4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c4 = c4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c5_random() {
  if (input_c5 === null && random === 17) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_c4 === temp ||
        input_c6 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_a2 === temp ||
        input_a5 === temp ||
        input_e2 === temp ||
        input_e5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c5.innerHTML = key;
    c5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c5 = c5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function c6_random() {
  if (input_c6 === null && random === 18) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_a3 === temp ||
        input_a6 === temp ||
        input_e3 === temp ||
        input_e6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    c6.innerHTML = key;
    c6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_c6 = c6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d1_random() {
  if (input_d1 === null && random === 19) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d2 === temp ||
        input_d3 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_b1 === temp ||
        input_b4 === temp ||
        input_f1 === temp ||
        input_f4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d1.innerHTML = key;
    d1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d1 = d1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d2_random() {
  if (input_d2 === null && random === 20) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d1 === temp ||
        input_d3 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_b2 === temp ||
        input_b5 === temp ||
        input_f2 === temp ||
        input_f5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d2.innerHTML = key;
    d2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d2 = d2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d3_random() {
  if (input_d3 === null && random === 21) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d1 === temp ||
        input_d2 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_c1 === temp ||
        input_c2 === temp ||
        input_c3 === temp ||
        input_b3 === temp ||
        input_b6 === temp ||
        input_f3 === temp ||
        input_f6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d3.innerHTML = key;
    d3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d3 = d3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d4_random() {
  if (input_d4 === null && random === 22) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_d5 === temp ||
        input_d6 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_b1 === temp ||
        input_b4 === temp ||
        input_f1 === temp ||
        input_f4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d4.innerHTML = key;
    d4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d4 = d4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d5_random() {
  if (input_d5 === null && random === 23) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_d4 === temp ||
        input_d6 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_b2 === temp ||
        input_b5 === temp ||
        input_f2 === temp ||
        input_f5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d5.innerHTML = key;
    d5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d5 = d5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function d6_random() {
  if (input_d6 === null && random === 24) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_d1 === temp ||
        input_d2 === temp ||
        input_d3 === temp ||
        input_d4 === temp ||
        input_d5 === temp ||
        input_c4 === temp ||
        input_c5 === temp ||
        input_c6 === temp ||
        input_b3 === temp ||
        input_b6 === temp ||
        input_f3 === temp ||
        input_f6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    d6.innerHTML = key;
    d6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_d6 = d6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e1_random() {
  if (input_e1 === null && random === 25) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e2 === temp ||
        input_e3 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_a1 === temp ||
        input_a4 === temp ||
        input_c1 === temp ||
        input_c4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e1.innerHTML = key;
    e1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e1 = e1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e2_random() {
  if (input_e2 === null && random === 26) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e1 === temp ||
        input_e3 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_a2 === temp ||
        input_a5 === temp ||
        input_c2 === temp ||
        input_c5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e2.innerHTML = key;
    e2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e2 = e2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e3_random() {
  if (input_e3 === null && random === 27) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e1 === temp ||
        input_e2 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_a3 === temp ||
        input_a6 === temp ||
        input_c3 === temp ||
        input_c6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e3.innerHTML = key;
    e3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e3 = e3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e4_random() {
  if (input_e4 === null && random === 28) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_a1 === temp ||
        input_a4 === temp ||
        input_c1 === temp ||
        input_c4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e4.innerHTML = key;
    e4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e4 = e4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e5_random() {
  if (input_e5 === null && random === 29) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_e4 === temp ||
        input_e6 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_a2 === temp ||
        input_a5 === temp ||
        input_c2 === temp ||
        input_c5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e5.innerHTML = key;
    e5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e5 = e5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function e6_random() {
  if (input_e6 === null && random === 30) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_a3 === temp ||
        input_a6 === temp ||
        input_c3 === temp ||
        input_c6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    e6.innerHTML = key;
    e6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_e6 = e6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f1_random() {
  if (input_f1 === null && random === 31) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f2 === temp ||
        input_f3 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_b1 === temp ||
        input_b4 === temp ||
        input_d1 === temp ||
        input_d4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f1.innerHTML = key;
    f1.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f1 = f1.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f2_random() {
  if (input_f2 === null && random === 32) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f1 === temp ||
        input_f3 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_b2 === temp ||
        input_b5 === temp ||
        input_d2 === temp ||
        input_d5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f2.innerHTML = key;
    f2.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f2 = f2.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f3_random() {
  if (input_f3 === null && random === 33) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f1 === temp ||
        input_f2 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_e1 === temp ||
        input_e2 === temp ||
        input_e3 === temp ||
        input_b3 === temp ||
        input_b6 === temp ||
        input_d3 === temp ||
        input_d6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f3.innerHTML = key;
    f3.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f3 = f3.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f4_random() {
  if (input_f4 === null && random === 34) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_f5 === temp ||
        input_f6 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_b1 === temp ||
        input_b4 === temp ||
        input_d1 === temp ||
        input_d4 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f4.innerHTML = key;
    f4.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f4 = f4.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f5_random() {
  if (input_f5 === null && random === 35) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_f4 === temp ||
        input_f6 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_b2 === temp ||
        input_b5 === temp ||
        input_d2 === temp ||
        input_d5 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f5.innerHTML = key;
    f5.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f5 = f5.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function f6_random() {
  if (input_f6 === null && random === 36) {
    let array = [];
    let passed;
    for (let i = 1; i <= 6; i++) {
      let temp = i.toString();
      if (
        input_f1 === temp ||
        input_f2 === temp ||
        input_f3 === temp ||
        input_f4 === temp ||
        input_f5 === temp ||
        input_e4 === temp ||
        input_e5 === temp ||
        input_e6 === temp ||
        input_b3 === temp ||
        input_b6 === temp ||
        input_d3 === temp ||
        input_d6 === temp
      ) {
        passed = false;
      } else passed = true;
      if (passed === true) array.push(temp);
    }
    let length = array.length;
    key = array[Math.floor(Math.random() * length)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    f6.innerHTML = key;
    f6.style.background = "whitesmoke";
    notif.style.visibility = "hidden";
    input_f6 = f6.innerHTML;
    count = 1;
    solving();
    if (solved === false) solve_sudoku();
  }
}

function clear_all() {
  notif.innerHTML = "";
  notif.style.visibility = "hidden";
  whitesmoke();
  click_reset();

  random = 0;
  key = null;
  count = 0;
  empty = true;
  repeat = 0;
  solved = false;
  keyboard.style.visibility = "hidden";

  solve.innerHTML = "SOLVE";

  input_a1 = null;
  input_a2 = null;
  input_a3 = null;
  input_a4 = null;
  input_a5 = null;
  input_a6 = null;
  input_b1 = null;
  input_b2 = null;
  input_b3 = null;
  input_b4 = null;
  input_b5 = null;
  input_b6 = null;
  input_c1 = null;
  input_c2 = null;
  input_c3 = null;
  input_c4 = null;
  input_c5 = null;
  input_c6 = null;
  input_d1 = null;
  input_d2 = null;
  input_d3 = null;
  input_d4 = null;
  input_d5 = null;
  input_d6 = null;
  input_e1 = null;
  input_e2 = null;
  input_e3 = null;
  input_e4 = null;
  input_e5 = null;
  input_e6 = null;
  input_f1 = null;
  input_f2 = null;
  input_f3 = null;
  input_f4 = null;
  input_f5 = null;
  input_f6 = null;

  a1.style.color = "black";
  a2.style.color = "black";
  a3.style.color = "black";
  a4.style.color = "black";
  a5.style.color = "black";
  a6.style.color = "black";
  b1.style.color = "black";
  b2.style.color = "black";
  b3.style.color = "black";
  b4.style.color = "black";
  b5.style.color = "black";
  b6.style.color = "black";
  c1.style.color = "black";
  c2.style.color = "black";
  c3.style.color = "black";
  c4.style.color = "black";
  c5.style.color = "black";
  c6.style.color = "black";
  d1.style.color = "black";
  d2.style.color = "black";
  d3.style.color = "black";
  d4.style.color = "black";
  d5.style.color = "black";
  d6.style.color = "black";
  e1.style.color = "black";
  e2.style.color = "black";
  e3.style.color = "black";
  e4.style.color = "black";
  e5.style.color = "black";
  e6.style.color = "black";
  f1.style.color = "black";
  f2.style.color = "black";
  f3.style.color = "black";
  f4.style.color = "black";
  f5.style.color = "black";
  f6.style.color = "black";

  a1.innerHTML = "";
  a2.innerHTML = "";
  a3.innerHTML = "";
  a4.innerHTML = "";
  a5.innerHTML = "";
  a6.innerHTML = "";
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  b5.innerHTML = "";
  b6.innerHTML = "";
  c1.innerHTML = "";
  c2.innerHTML = "";
  c3.innerHTML = "";
  c4.innerHTML = "";
  c5.innerHTML = "";
  c6.innerHTML = "";
  d1.innerHTML = "";
  d2.innerHTML = "";
  d3.innerHTML = "";
  d4.innerHTML = "";
  d5.innerHTML = "";
  d6.innerHTML = "";
  e1.innerHTML = "";
  e2.innerHTML = "";
  e3.innerHTML = "";
  e4.innerHTML = "";
  e5.innerHTML = "";
  e6.innerHTML = "";
  f1.innerHTML = "";
  f2.innerHTML = "";
  f3.innerHTML = "";
  f4.innerHTML = "";
  f5.innerHTML = "";
  f6.innerHTML = "";

  temp_a1 = false;
  temp_a2 = false;
  temp_a3 = false;
  temp_a4 = false;
  temp_a5 = false;
  temp_a6 = false;
  temp_b1 = false;
  temp_b2 = false;
  temp_b3 = false;
  temp_b4 = false;
  temp_b5 = false;
  temp_b6 = false;
  temp_c1 = false;
  temp_c2 = false;
  temp_c3 = false;
  temp_c4 = false;
  temp_c5 = false;
  temp_c6 = false;
  temp_d1 = false;
  temp_d2 = false;
  temp_d3 = false;
  temp_d4 = false;
  temp_d5 = false;
  temp_d6 = false;
  temp_e1 = false;
  temp_e2 = false;
  temp_e3 = false;
  temp_e4 = false;
  temp_e5 = false;
  temp_e6 = false;
  temp_f1 = false;
  temp_f2 = false;
  temp_f3 = false;
  temp_f4 = false;
  temp_f5 = false;
  temp_f6 = false;
}
