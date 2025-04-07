const a1 = document.querySelector(".box-a1");
const a2 = document.querySelector(".box-a2");
const a3 = document.querySelector(".box-a3");
const a4 = document.querySelector(".box-a4");
const b1 = document.querySelector(".box-b1");
const b2 = document.querySelector(".box-b2");
const b3 = document.querySelector(".box-b3");
const b4 = document.querySelector(".box-b4");
const c1 = document.querySelector(".box-c1");
const c2 = document.querySelector(".box-c2");
const c3 = document.querySelector(".box-c3");
const c4 = document.querySelector(".box-c4");
const d1 = document.querySelector(".box-d1");
const d2 = document.querySelector(".box-d2");
const d3 = document.querySelector(".box-d3");
const d4 = document.querySelector(".box-d4");
const solve = document.querySelector(".solve");
const notif = document.querySelector(".notif");
const clear = document.querySelector(".clear");
const keyboard = document.querySelector(".keyboard");
const one_key = document.querySelector(".one-key");
const two_key = document.querySelector(".two-key");
const three_key = document.querySelector(".three-key");
const four_key = document.querySelector(".four-key");
const del_key = document.querySelector(".del-key");

let random = 0;
let repeated = false;

let click_a1 = false;
let click_a2 = false;
let click_a3 = false;
let click_a4 = false;
let click_b1 = false;
let click_b2 = false;
let click_b3 = false;
let click_b4 = false;
let click_c1 = false;
let click_c2 = false;
let click_c3 = false;
let click_c4 = false;
let click_d1 = false;
let click_d2 = false;
let click_d3 = false;
let click_d4 = false;
let key = null;
let input_a1 = null;
let input_a2 = null;
let input_a3 = null;
let input_a4 = null;
let input_b1 = null;
let input_b2 = null;
let input_b3 = null;
let input_b4 = null;
let input_c1 = null;
let input_c2 = null;
let input_c3 = null;
let input_c4 = null;
let input_d1 = null;
let input_d2 = null;
let input_d3 = null;
let input_d4 = null;
let count = 0;

let temp_a1 = false;
let temp_a2 = false;
let temp_a3 = false;
let temp_a4 = false;
let temp_b1 = false;
let temp_b2 = false;
let temp_b3 = false;
let temp_b4 = false;
let temp_c1 = false;
let temp_c2 = false;
let temp_c3 = false;
let temp_c4 = false;
let temp_d1 = false;
let temp_d2 = false;
let temp_d3 = false;
let temp_d4 = false;

let solved = false;

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
del_key.addEventListener("click", (e) => {
  click_del();
});

function key_click() {
  if (click_a1 === true && temp_a1 === false) {
    if (
      key === "1" &&
      input_a2 !== "1" &&
      input_a3 !== "1" &&
      input_a4 != "1" &&
      input_b1 !== "1" &&
      input_b2 != "1" &&
      input_c1 !== "1" &&
      input_c3 != "1"
    ) {
      a1.innerHTML = "1";
      a1.style.color = "black";
      a1.style.background = "whitesmoke";
      click_a1 = false;
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_a2 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_b1 !== "2" &&
      input_b2 !== "2" &&
      input_c1 !== "2" &&
      input_c3 !== "2"
    ) {
      a1.innerHTML = "2";
      a1.style.color = "black";
      a1.style.background = "whitesmoke";
      click_a1 = false;
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_a2 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_b1 !== "3" &&
      input_b2 !== "3" &&
      input_c1 !== "3" &&
      input_c3 !== "3"
    ) {
      a1.innerHTML = "3";
      a1.style.color = "black";
      a1.style.background = "whitesmoke";
      click_a1 = false;
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_a2 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_b1 !== "4" &&
      input_b2 !== "4" &&
      input_c1 !== "4" &&
      input_c3 !== "4"
    ) {
      a1.innerHTML = "4";
      a1.style.color = "black";
      a1.style.background = "whitesmoke";
      click_a1 = false;
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_a1 !== null) {
        a1.innerHTML = "";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a2 === true && temp_a2 === false) {
    if (
      key === "1" &&
      input_a1 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_b1 !== "1" &&
      input_b2 !== "1" &&
      input_c2 !== "1" &&
      input_c4 !== "1"
    ) {
      a2.innerHTML = "1";
      a2.style.color = "black";
      a2.style.background = "whitesmoke";
      click_a2 = false;
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_a1 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_b1 !== "2" &&
      input_b2 !== "2" &&
      input_c2 !== "2" &&
      input_c4 !== "2"
    ) {
      a2.innerHTML = "2";
      a2.style.color = "black";
      a2.style.background = "whitesmoke";
      click_a2 = false;
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_a1 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_b1 !== "3" &&
      input_b2 !== "3" &&
      input_c2 !== "3" &&
      input_c4 !== "3"
    ) {
      a2.innerHTML = "3";
      a2.style.color = "black";
      a2.style.background = "whitesmoke";
      click_a2 = false;
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_a1 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_b1 !== "4" &&
      input_b2 !== "4" &&
      input_c2 !== "4" &&
      input_c4 !== "4"
    ) {
      a2.innerHTML = "4";
      a2.style.color = "black";
      a2.style.background = "whitesmoke";
      click_a2 = false;
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_a2 !== null) {
        a2.innerHTML = "";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a3 === true && temp_a3 === false) {
    if (
      key === "1" &&
      input_a2 !== "1" &&
      input_a1 !== "1" &&
      input_a4 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_c1 !== "1" &&
      input_c3 !== "1"
    ) {
      a3.innerHTML = "1";
      a3.style.color = "black";
      a3.style.background = "whitesmoke";
      click_a3 = false;
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_a2 !== "2" &&
      input_a1 !== "2" &&
      input_a4 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_c1 !== "2" &&
      input_c3 !== "2"
    ) {
      a3.innerHTML = "2";
      a3.style.color = "black";
      a3.style.background = "whitesmoke";
      click_a3 = false;
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_a2 !== "3" &&
      input_a1 !== "3" &&
      input_a4 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_c1 !== "3" &&
      input_c3 !== "3"
    ) {
      a3.innerHTML = "3";
      a3.style.color = "black";
      a3.style.background = "whitesmoke";
      click_a3 = false;
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_a2 !== "4" &&
      input_a1 !== "4" &&
      input_a4 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_c1 !== "4" &&
      input_c3 !== "4"
    ) {
      a3.innerHTML = "4";
      a3.style.color = "black";
      a3.style.background = "whitesmoke";
      click_a3 = false;
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_a3 !== null) {
        a3.innerHTML = "";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_a4 === true && temp_a4 === false) {
    if (
      key === "1" &&
      input_a2 !== "1" &&
      input_a3 !== "1" &&
      input_a1 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_c2 !== "1" &&
      input_c4 !== "1"
    ) {
      a4.innerHTML = "1";
      a4.style.color = "black";
      a4.style.background = "whitesmoke";
      click_a4 = false;
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_a2 !== "2" &&
      input_a3 !== "2" &&
      input_a1 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_c2 !== "2" &&
      input_c4 !== "2"
    ) {
      a4.innerHTML = "2";
      a4.style.color = "black";
      a4.style.background = "whitesmoke";
      click_a4 = false;
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_a2 !== "3" &&
      input_a3 !== "3" &&
      input_a1 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_c2 !== "3" &&
      input_c4 !== "3"
    ) {
      a4.innerHTML = "3";
      a4.style.color = "black";
      a4.style.background = "whitesmoke";
      click_a4 = false;
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_a2 !== "4" &&
      input_a3 !== "4" &&
      input_a1 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_c2 !== "4" &&
      input_c4 !== "4"
    ) {
      a4.innerHTML = "4";
      a4.style.color = "black";
      a4.style.background = "whitesmoke";
      click_a4 = false;
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_a4 !== null) {
        a4.innerHTML = "";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b1 === true && temp_b1 === false) {
    if (
      key === "1" &&
      input_b2 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_a1 !== "1" &&
      input_a2 !== "1" &&
      input_d1 !== "1" &&
      input_d3 !== "1"
    ) {
      b1.innerHTML = "1";
      b1.style.color = "black";
      b1.style.background = "whitesmoke";
      click_b1 = false;
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_b2 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_a1 !== "2" &&
      input_a2 !== "2" &&
      input_d1 !== "2" &&
      input_d3 !== "2"
    ) {
      b1.innerHTML = "2";
      b1.style.color = "black";
      b1.style.background = "whitesmoke";
      click_b1 = false;
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_b2 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_a1 !== "3" &&
      input_a2 !== "3" &&
      input_d1 !== "3" &&
      input_d3 !== "3"
    ) {
      b1.innerHTML = "3";
      b1.style.color = "black";
      b1.style.background = "whitesmoke";
      click_b1 = false;
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_b2 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_a1 !== "4" &&
      input_a2 !== "4" &&
      input_d1 !== "4" &&
      input_d3 !== "4"
    ) {
      b1.innerHTML = "4";
      b1.style.color = "black";
      b1.style.background = "whitesmoke";
      click_b1 = false;
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_b1 !== null) {
        b1.innerHTML = "";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b2 === true && temp_b2 === false) {
    if (
      key === "1" &&
      input_b1 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_a1 !== "1" &&
      input_a2 !== "1" &&
      input_d2 !== "1" &&
      input_d4 !== "1"
    ) {
      b2.innerHTML = "1";
      b2.style.color = "black";
      b2.style.background = "whitesmoke";
      click_b2 = false;
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_b1 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_a1 !== "2" &&
      input_a2 !== "2" &&
      input_d2 !== "2" &&
      input_d4 !== "2"
    ) {
      b2.innerHTML = "2";
      b2.style.color = "black";
      b2.style.background = "whitesmoke";
      click_b2 = false;
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_b1 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_a1 !== "3" &&
      input_a2 !== "3" &&
      input_d2 !== "3" &&
      input_d4 !== "3"
    ) {
      b2.innerHTML = "3";
      b2.style.color = "black";
      b2.style.background = "whitesmoke";
      click_b2 = false;
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_b1 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_a1 !== "4" &&
      input_a2 !== "4" &&
      input_d2 !== "4" &&
      input_d4 !== "4"
    ) {
      b2.innerHTML = "4";
      b2.style.color = "black";
      b2.style.background = "whitesmoke";
      click_b2 = false;
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_b2 !== null) {
        b2.innerHTML = "";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b3 === true && temp_b3 === false) {
    if (
      key === "1" &&
      input_b2 !== "1" &&
      input_b1 !== "1" &&
      input_b4 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_d1 !== "1" &&
      input_d3 !== "1"
    ) {
      b3.innerHTML = "1";
      b3.style.color = "black";
      b3.style.background = "whitesmoke";
      click_b3 = false;
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_b2 !== "2" &&
      input_b1 !== "2" &&
      input_b4 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_d1 !== "2" &&
      input_d3 !== "2"
    ) {
      b3.innerHTML = "2";
      b3.style.color = "black";
      b3.style.background = "whitesmoke";
      click_b3 = false;
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key == "3" &&
      input_b2 != "3" &&
      input_b1 != "3" &&
      input_b4 != "3" &&
      input_a3 != "3" &&
      input_a4 != "3" &&
      input_d1 != "3" &&
      input_d3 != "3"
    ) {
      b3.innerHTML = "3";
      b3.style.color = "black";
      b3.style.background = "whitesmoke";
      click_b3 = false;
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_b2 !== "4" &&
      input_b1 !== "4" &&
      input_b4 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_d1 !== "4" &&
      input_d3 !== "4"
    ) {
      b3.innerHTML = "4";
      b3.style.color = "black";
      b3.style.background = "whitesmoke";
      click_b3 = false;
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_b3 !== null) {
        b3.innerHTML = "";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_b4 === true && temp_b4 === false) {
    if (
      key === "1" &&
      input_b2 !== "1" &&
      input_b3 !== "1" &&
      input_b1 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_d2 !== "1" &&
      input_d4 !== "1"
    ) {
      b4.innerHTML = "1";
      b4.style.color = "black";
      b4.style.background = "whitesmoke";
      click_b4 = false;
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_b2 !== "2" &&
      input_b3 !== "2" &&
      input_b1 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_d2 !== "2" &&
      input_d4 !== "2"
    ) {
      b4.innerHTML = "2";
      b4.style.color = "black";
      b4.style.background = "whitesmoke";
      click_b4 = false;
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_b2 !== "3" &&
      input_b3 !== "3" &&
      input_b1 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_d2 !== "3" &&
      input_d4 !== "3"
    ) {
      b4.innerHTML = "3";
      b4.style.color = "black";
      b4.style.background = "whitesmoke";
      click_b4 = false;
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_b2 !== "4" &&
      input_b3 !== "4" &&
      input_b1 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_d2 !== "4" &&
      input_d4 !== "4"
    ) {
      b4.innerHTML = "4";
      b4.style.color = "black";
      b4.style.background = "whitesmoke";
      click_b4 = false;
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_b4 !== null) {
        b4.innerHTML = "";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c1 === true && temp_c1 === false) {
    if (
      key === "1" &&
      input_c2 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_a3 !== "1" &&
      input_a1 !== "1" &&
      input_d2 !== "1" &&
      input_d1 !== "1"
    ) {
      c1.innerHTML = "1";
      c1.style.color = "black";
      c1.style.background = "whitesmoke";
      click_c1 = false;
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_c2 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_a3 !== "2" &&
      input_a1 !== "2" &&
      input_d2 !== "2" &&
      input_d1 !== "2"
    ) {
      c1.innerHTML = "2";
      c1.style.color = "black";
      c1.style.background = "whitesmoke";
      click_c1 = false;
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_c2 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_a3 !== "3" &&
      input_a1 !== "3" &&
      input_d2 !== "3" &&
      input_d1 !== "3"
    ) {
      c1.innerHTML = "3";
      c1.style.color = "black";
      c1.style.background = "whitesmoke";
      click_c1 = false;
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_c2 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_a3 !== "4" &&
      input_a1 !== "4" &&
      input_d2 !== "4" &&
      input_d1 !== "4"
    ) {
      c1.innerHTML = "4";
      c1.style.color = "black";
      c1.style.background = "whitesmoke";
      click_c1 = false;
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_c1 !== null) {
        c1.innerHTML = "";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c2 === true && temp_c2 === false) {
    if (
      key === "1" &&
      input_c1 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_a2 !== "1" &&
      input_a4 !== "1" &&
      input_d2 !== "1" &&
      input_d1 !== "1"
    ) {
      c2.innerHTML = "1";
      c2.style.color = "black";
      c2.style.background = "whitesmoke";
      click_c2 = false;
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_c1 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_a2 !== "2" &&
      input_a4 !== "2" &&
      input_d2 !== "2" &&
      input_d1 !== "2"
    ) {
      c2.innerHTML = "2";
      c2.style.color = "black";
      c2.style.background = "whitesmoke";
      click_c2 = false;
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_c1 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_a2 !== "3" &&
      input_a4 !== "3" &&
      input_d2 !== "3" &&
      input_d1 !== "3"
    ) {
      c2.innerHTML = "3";
      c2.style.color = "black";
      c2.style.background = "whitesmoke";
      click_c2 = false;
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_c1 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_a2 !== "4" &&
      input_a4 !== "4" &&
      input_d2 !== "4" &&
      input_d1 !== "4"
    ) {
      c2.innerHTML = "4";
      c2.style.color = "black";
      c2.style.background = "whitesmoke";
      click_c2 = false;
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_c2 !== null) {
        c2.innerHTML = "";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c3 === true && temp_c3 === false) {
    if (
      key === "1" &&
      input_c2 !== "1" &&
      input_c1 !== "1" &&
      input_c4 !== "1" &&
      input_a3 !== "1" &&
      input_a1 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1"
    ) {
      c3.innerHTML = "1";
      c3.style.color = "black";
      c3.style.background = "whitesmoke";
      click_c3 = false;
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_c2 !== "2" &&
      input_c1 !== "2" &&
      input_c4 !== "2" &&
      input_a3 !== "2" &&
      input_a1 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2"
    ) {
      c3.innerHTML = "2";
      c3.style.color = "black";
      c3.style.background = "whitesmoke";
      click_c3 = false;
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_c2 !== "3" &&
      input_c1 !== "3" &&
      input_c4 !== "3" &&
      input_a3 !== "3" &&
      input_a1 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3"
    ) {
      c3.innerHTML = "3";
      c3.style.color = "black";
      c3.style.background = "whitesmoke";
      click_c3 = false;
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_c2 !== "4" &&
      input_c1 !== "4" &&
      input_c4 !== "4" &&
      input_a3 !== "4" &&
      input_a1 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4"
    ) {
      c3.innerHTML = "4";
      c3.style.color = "black";
      c3.style.background = "whitesmoke";
      click_c3 = false;
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_c3 !== null) {
        c3.innerHTML = "";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_c4 === true && temp_c4 === false) {
    if (
      key === "1" &&
      input_c2 !== "1" &&
      input_c3 !== "1" &&
      input_c1 !== "1" &&
      input_a2 !== "1" &&
      input_a4 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1"
    ) {
      c4.innerHTML = "1";
      c4.style.color = "black";
      c4.style.background = "whitesmoke";
      click_c4 = false;
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_c2 !== "2" &&
      input_c3 !== "2" &&
      input_c1 !== "2" &&
      input_a2 !== "2" &&
      input_a4 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2"
    ) {
      c4.innerHTML = "2";
      c4.style.color = "black";
      c4.style.background = "whitesmoke";
      click_c4 = false;
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_c2 !== "3" &&
      input_c3 !== "3" &&
      input_c1 !== "3" &&
      input_a2 !== "3" &&
      input_a4 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3"
    ) {
      c4.innerHTML = "3";
      c4.style.color = "black";
      c4.style.background = "whitesmoke";
      click_c4 = false;
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_c2 !== "4" &&
      input_c3 !== "4" &&
      input_c1 !== "4" &&
      input_a2 !== "4" &&
      input_a4 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4"
    ) {
      c4.innerHTML = "4";
      c4.style.color = "black";
      c4.style.background = "whitesmoke";
      click_c4 = false;
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_c4 !== null) {
        c4.innerHTML = "";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d1 === true && temp_d1 === false) {
    if (
      key === "1" &&
      input_d2 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_b1 !== "1" &&
      input_b3 !== "1" &&
      input_c1 !== "1" &&
      input_c2 !== "1"
    ) {
      d1.innerHTML = "1";
      d1.style.color = "black";
      d1.style.background = "whitesmoke";
      click_d1 = false;
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_d2 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_b1 !== "2" &&
      input_b3 !== "2" &&
      input_c1 !== "2" &&
      input_c2 !== "2"
    ) {
      d1.innerHTML = "2";
      d1.style.color = "black";
      d1.style.background = "whitesmoke";
      click_d1 = false;
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_d2 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_b1 !== "3" &&
      input_b3 !== "3" &&
      input_c1 !== "3" &&
      input_c2 !== "3"
    ) {
      d1.innerHTML = "3";
      d1.style.color = "black";
      d1.style.background = "whitesmoke";
      click_d1 = false;
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_d2 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_b1 !== "4" &&
      input_b3 !== "4" &&
      input_c1 !== "4" &&
      input_c2 !== "4"
    ) {
      d1.innerHTML = "4";
      d1.style.color = "black";
      d1.style.background = "whitesmoke";
      click_d1 = false;
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_d1 !== null) {
        d1.innerHTML = "";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d2 === true && temp_d2 === false) {
    if (
      key === "1" &&
      input_d1 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_b2 !== "1" &&
      input_b4 !== "1" &&
      input_c1 !== "1" &&
      input_c2 !== "1"
    ) {
      d2.innerHTML = "1";
      d2.style.color = "black";
      d2.style.background = "whitesmoke";
      click_d2 = false;
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_d1 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_b2 !== "2" &&
      input_b4 !== "2" &&
      input_c1 !== "2" &&
      input_c2 !== "2"
    ) {
      d2.innerHTML = "2";
      d2.style.color = "black";
      d2.style.background = "whitesmoke";
      click_d2 = false;
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_d1 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_b2 !== "3" &&
      input_b4 !== "3" &&
      input_c1 !== "3" &&
      input_c2 !== "3"
    ) {
      d2.innerHTML = "3";
      d2.style.color = "black";
      d2.style.background = "whitesmoke";
      click_d2 = false;
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_d1 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_b2 !== "4" &&
      input_b4 !== "4" &&
      input_c1 !== "4" &&
      input_c2 !== "4"
    ) {
      d2.innerHTML = "4";
      d2.style.color = "black";
      d2.style.background = "whitesmoke";
      click_d2 = false;
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_d2 !== null) {
        d2.innerHTML = "";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d3 === true && temp_d3 === false) {
    if (
      key === "1" &&
      input_d2 !== "1" &&
      input_d1 !== "1" &&
      input_d4 !== "1" &&
      input_b1 !== "1" &&
      input_b3 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1"
    ) {
      d3.innerHTML = "1";
      d3.style.color = "black";
      d3.style.background = "whitesmoke";
      click_d3 = false;
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_d2 !== "2" &&
      input_d1 !== "2" &&
      input_d4 !== "2" &&
      input_b1 !== "2" &&
      input_b3 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2"
    ) {
      d3.innerHTML = "2";
      d3.style.color = "black";
      d3.style.background = "whitesmoke";
      click_d3 = false;
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_d2 !== "3" &&
      input_d1 !== "3" &&
      input_d4 !== "3" &&
      input_b1 !== "3" &&
      input_b3 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3"
    ) {
      d3.innerHTML = "3";
      d3.style.color = "black";
      d3.style.background = "whitesmoke";
      click_d3 = false;
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_d2 !== "4" &&
      input_d1 !== "4" &&
      input_d4 !== "4" &&
      input_b1 !== "4" &&
      input_b3 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4"
    ) {
      d3.innerHTML = "4";
      d3.style.color = "black";
      d3.style.background = "whitesmoke";
      click_d3 = false;
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_d3 !== null) {
        d3.innerHTML = "";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  if (click_d4 === true && temp_d4 === false) {
    if (
      key === "1" &&
      input_d2 !== "1" &&
      input_d3 !== "1" &&
      input_d1 !== "1" &&
      input_b2 !== "1" &&
      input_b4 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1"
    ) {
      d4.innerHTML = "1";
      d4.style.color = "black";
      d4.style.background = "whitesmoke";
      click_d4 = false;
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "2" &&
      input_d2 !== "2" &&
      input_d3 !== "2" &&
      input_d1 !== "2" &&
      input_b2 !== "2" &&
      input_b4 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2"
    ) {
      d4.innerHTML = "2";
      d4.style.color = "black";
      d4.style.background = "whitesmoke";
      click_d4 = false;
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "3" &&
      input_d2 !== "3" &&
      input_d3 !== "3" &&
      input_d1 !== "3" &&
      input_b2 !== "3" &&
      input_b4 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3"
    ) {
      d4.innerHTML = "3";
      d4.style.color = "black";
      d4.style.background = "whitesmoke";
      click_d4 = false;
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key === "4" &&
      input_d2 !== "4" &&
      input_d3 !== "4" &&
      input_d1 !== "4" &&
      input_b2 !== "4" &&
      input_b4 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4"
    ) {
      d4.innerHTML = "4";
      d4.style.color = "black";
      d4.style.background = "whitesmoke";
      click_d4 = false;
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      keyboard.style.visibility = "hidden";
    } else if (
      key !== "1" &&
      key !== "2" &&
      key !== "3" &&
      key !== "4" &&
      key !== "Backspace" &&
      key !== "Delete"
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Invalid input";
    } else if (key === "Backspace" || key === "Delete") {
      if (input_d4 !== null) {
        d4.innerHTML = "";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = null;
        keyboard.style.visibility = "hidden";
      }
    } else {
      notif.style.visibility = "visible";
      notif.innerHTML = "Number taken";
    }
  }

  clear_temp();

  if (a1.style.color === "red") a1.style.color = "black";
  if (a2.style.color === "red") a2.style.color = "black";
  if (a3.style.color === "red") a3.style.color = "black";
  if (a4.style.color === "red") a4.style.color = "black";
  if (b1.style.color === "red") b1.style.color = "black";
  if (b2.style.color === "red") b2.style.color = "black";
  if (b3.style.color === "red") b3.style.color = "black";
  if (b4.style.color === "red") b4.style.color = "black";
  if (c1.style.color === "red") c1.style.color = "black";
  if (c2.style.color === "red") c2.style.color = "black";
  if (c3.style.color === "red") c3.style.color = "black";
  if (c4.style.color === "red") c4.style.color = "black";
  if (d1.style.color === "red") d1.style.color = "black";
  if (d2.style.color === "red") d2.style.color = "black";
  if (d3.style.color === "red") d3.style.color = "black";
  if (d4.style.color === "red") d4.style.color = "black";

  if (a1.style.color === "black") temp_a1 = false;
  if (a2.style.color === "black") temp_a2 = false;
  if (a3.style.color === "black") temp_a3 = false;
  if (a4.style.color === "black") temp_a4 = false;
  if (b1.style.color === "black") temp_b1 = false;
  if (b2.style.color === "black") temp_b2 = false;
  if (b3.style.color === "black") temp_b3 = false;
  if (b4.style.color === "black") temp_b4 = false;
  if (c1.style.color === "black") temp_c1 = false;
  if (c2.style.color === "black") temp_c2 = false;
  if (c3.style.color === "black") temp_c3 = false;
  if (c4.style.color === "black") temp_c4 = false;
  if (d1.style.color === "black") temp_d1 = false;
  if (d2.style.color === "black") temp_d2 = false;
  if (d3.style.color === "black") temp_d3 = false;
  if (d4.style.color === "black") temp_d4 = false;

  if (input_a1 === null) a1.style.color = "blue";
  if (input_a2 === null) a2.style.color = "blue";
  if (input_a3 === null) a3.style.color = "blue";
  if (input_a4 === null) a4.style.color = "blue";
  if (input_b1 === null) b1.style.color = "blue";
  if (input_b2 === null) b2.style.color = "blue";
  if (input_b3 === null) b3.style.color = "blue";
  if (input_b4 === null) b4.style.color = "blue";
  if (input_c1 === null) c1.style.color = "blue";
  if (input_c2 === null) c2.style.color = "blue";
  if (input_c3 === null) c3.style.color = "blue";
  if (input_c4 === null) c4.style.color = "blue";
  if (input_d1 === null) d1.style.color = "blue";
  if (input_d2 === null) d2.style.color = "blue";
  if (input_d3 === null) d3.style.color = "blue";
  if (input_d4 === null) d4.style.color = "blue";

  solving();

  if (input_a1 === null) a1.style.color = "black";
  if (input_a2 === null) a2.style.color = "black";
  if (input_a3 === null) a3.style.color = "black";
  if (input_a4 === null) a4.style.color = "black";
  if (input_b1 === null) b1.style.color = "black";
  if (input_b2 === null) b2.style.color = "black";
  if (input_b3 === null) b3.style.color = "black";
  if (input_b4 === null) b4.style.color = "black";
  if (input_c1 === null) c1.style.color = "black";
  if (input_c2 === null) c2.style.color = "black";
  if (input_c3 === null) c3.style.color = "black";
  if (input_c4 === null) c4.style.color = "black";
  if (input_d1 === null) d1.style.color = "black";
  if (input_d2 === null) d2.style.color = "black";
  if (input_d3 === null) d3.style.color = "black";
  if (input_d4 === null) d4.style.color = "black";

  if (a1.style.color === "blue") temp_a1 = true;
  if (a2.style.color === "blue") temp_a2 = true;
  if (a3.style.color === "blue") temp_a3 = true;
  if (a4.style.color === "blue") temp_a4 = true;
  if (b1.style.color === "blue") temp_b1 = true;
  if (b2.style.color === "blue") temp_b2 = true;
  if (b3.style.color === "blue") temp_b3 = true;
  if (b4.style.color === "blue") temp_b4 = true;
  if (c1.style.color === "blue") temp_c1 = true;
  if (c2.style.color === "blue") temp_c2 = true;
  if (c3.style.color === "blue") temp_c3 = true;
  if (c4.style.color === "blue") temp_c4 = true;
  if (d1.style.color === "blue") temp_d1 = true;
  if (d2.style.color === "blue") temp_d2 = true;
  if (d3.style.color === "blue") temp_d3 = true;
  if (d4.style.color === "blue") temp_d4 = true;

  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null
  ) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Solving Ends";
    solved = true;
    solve.innerHTML = "EDIT";
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
    keyboard.style.visibility = "hidden";
  } else impossible();
}

function click_one() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true
  ) {
    count = 0;
    repeated = false;
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
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true
  ) {
    count = 0;
    repeated = false;
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
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true
  ) {
    count = 0;
    repeated = false;
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
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true
  ) {
    count = 0;
    repeated = false;
    key = "4";
    key_click();
  }
}

function click_del() {
  if (
    click_a1 === true ||
    click_a2 === true ||
    click_a3 === true ||
    click_a4 === true ||
    click_b1 === true ||
    click_b2 === true ||
    click_b3 === true ||
    click_b4 === true ||
    click_c1 === true ||
    click_c2 === true ||
    click_c3 === true ||
    click_c4 === true ||
    click_d1 === true ||
    click_d2 === true ||
    click_d3 === true ||
    click_d4 === true
  ) {
    count = 0;
    repeated = false;
    key = "Backspace";
    key_click();
  }
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
  else if (click_b1 === true && temp_b1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b2 === true && temp_b2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b3 === true && temp_b3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_b4 === true && temp_b4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c1 === true && temp_c1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c2 === true && temp_c2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c3 === true && temp_c3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_c4 === true && temp_c4 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d1 === true && temp_d1 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d2 === true && temp_d2 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d3 === true && temp_d3 === true)
    keyboard.style.visibility = "hidden";
  else if (click_d4 === true && temp_d4 === true)
    keyboard.style.visibility = "hidden";
  else keyboard.style.visibility = "visible";
}

function temp_false() {
  if (input_a1 === null) temp_a1 = false;
  if (input_a2 === null) temp_a2 = false;
  if (input_a3 === null) temp_a3 = false;
  if (input_a4 === null) temp_a4 = false;
  if (input_b1 === null) temp_b1 = false;
  if (input_b2 === null) temp_b2 = false;
  if (input_b3 === null) temp_b3 = false;
  if (input_b4 === null) temp_b4 = false;
  if (input_c1 === null) temp_c1 = false;
  if (input_c2 === null) temp_c2 = false;
  if (input_c3 === null) temp_c3 = false;
  if (input_c4 === null) temp_c4 = false;
  if (input_d1 === null) temp_d1 = false;
  if (input_d2 === null) temp_d2 = false;
  if (input_d3 === null) temp_d3 = false;
  if (input_d4 === null) temp_d4 = false;
}

function a1_click() {
  click_a1 = true;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_a1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "pink";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function a2_click() {
  click_a1 = false;
  click_a2 = true;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_a2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "pink";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function a3_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = true;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_a3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "pink";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function a4_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = true;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_a4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "pink";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function b1_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = true;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_b1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "pink";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function b2_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = true;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_b2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "pink";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function b3_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = true;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_b3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "pink";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function b4_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = true;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_b4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "pink";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function c1_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = true;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_c1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "pink";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function c2_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = true;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_c2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "pink";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function c3_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = true;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_c3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "pink";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function c4_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = true;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_c4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "pink";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function d1_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = true;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_d1 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "pink";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function d2_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = true;
  click_d3 = false;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_d2 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "pink";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function d3_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = true;
  click_d4 = false;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_d3 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "pink";
    d4.style.background = "whitesmoke";
  }
  type_key();
}

function d4_click() {
  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = true;
  if (
    input_a1 !== null &&
    input_a2 !== null &&
    input_a3 !== null &&
    input_a4 !== null &&
    input_b1 !== null &&
    input_b2 !== null &&
    input_b3 !== null &&
    input_b4 !== null &&
    input_c1 !== null &&
    input_c2 !== null &&
    input_c3 !== null &&
    input_c4 !== null &&
    input_d1 !== null &&
    input_d2 !== null &&
    input_d3 !== null &&
    input_d4 !== null &&
    solved === false
  ) {
    notif.style.visibility = "hidden";
    clear_temp();
    solving();
    temp_false();
  }
  if (solved === false && input_d4 === null) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Press a number from 1 to 4";
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
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "pink";
  }
  type_key();
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
      click_b1 === true ||
      click_b2 === true ||
      click_b3 === true ||
      click_b4 === true ||
      click_c1 === true ||
      click_c2 === true ||
      click_c3 === true ||
      click_c4 === true ||
      click_d1 === true ||
      click_d2 === true ||
      click_d3 === true ||
      click_d4 === true
    ) {
      hide_keyboard();
      key_event();
    } else keyboard.style.visibility = "hidden";
  }
}

function key_event() {
  document.addEventListener("keydown", (e) => {
    count = 0;
    repeated = false;

    if (click_a1 === true && temp_a1 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_a2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 != "1" &&
        input_b1 !== "1" &&
        input_b2 != "1" &&
        input_c1 !== "1" &&
        input_c3 != "1"
      ) {
        a1.innerHTML = "1";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = a1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_a2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        a1.innerHTML = "2";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = a1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_a2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        a1.innerHTML = "3";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = a1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_a2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        a1.innerHTML = "4";
        a1.style.color = "black";
        a1.style.background = "whitesmoke";
        click_a1 = false;
        notif.style.visibility = "hidden";
        input_a1 = a1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_a1 !== null) {
          a1.innerHTML = "";
          a1.style.color = "black";
          a1.style.background = "whitesmoke";
          click_a1 = false;
          notif.style.visibility = "hidden";
          input_a1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a2 === true && temp_a2 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        a2.innerHTML = "1";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = a2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        a2.innerHTML = "2";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = a2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        a2.innerHTML = "3";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = a2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        a2.innerHTML = "4";
        a2.style.color = "black";
        a2.style.background = "whitesmoke";
        click_a2 = false;
        notif.style.visibility = "hidden";
        input_a2 = a2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_a2 !== null) {
          a2.innerHTML = "";
          a2.style.color = "black";
          a2.style.background = "whitesmoke";
          click_a2 = false;
          notif.style.visibility = "hidden";
          input_a2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a3 === true && temp_a3 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_a2 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        a3.innerHTML = "1";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = a3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_a2 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        a3.innerHTML = "2";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = a3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_a2 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        a3.innerHTML = "3";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = a3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_a2 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        a3.innerHTML = "4";
        a3.style.color = "black";
        a3.style.background = "whitesmoke";
        click_a3 = false;
        notif.style.visibility = "hidden";
        input_a3 = a3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_a3 !== null) {
          a3.innerHTML = "";
          a3.style.color = "black";
          a3.style.background = "whitesmoke";
          click_a3 = false;
          notif.style.visibility = "hidden";
          input_a3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_a4 === true && temp_a4 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_a2 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        a4.innerHTML = "1";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = a4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_a2 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        a4.innerHTML = "2";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = a4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_a2 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        a4.innerHTML = "3";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = a4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_a2 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        a4.innerHTML = "4";
        a4.style.color = "black";
        a4.style.background = "whitesmoke";
        click_a4 = false;
        notif.style.visibility = "hidden";
        input_a4 = a4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_a4 !== null) {
          a4.innerHTML = "";
          a4.style.color = "black";
          a4.style.background = "whitesmoke";
          click_a4 = false;
          notif.style.visibility = "hidden";
          input_a4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b1 === true && temp_b1 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b1.innerHTML = "1";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = b1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b1.innerHTML = "2";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = b1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        b1.innerHTML = "3";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = b1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b1.innerHTML = "4";
        b1.style.color = "black";
        b1.style.background = "whitesmoke";
        click_b1 = false;
        notif.style.visibility = "hidden";
        input_b1 = b1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_b1 !== null) {
          b1.innerHTML = "";
          b1.style.color = "black";
          b1.style.background = "whitesmoke";
          click_b1 = false;
          notif.style.visibility = "hidden";
          input_b1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b2 === true && temp_b2 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        b2.innerHTML = "1";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = b2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        b2.innerHTML = "2";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = b2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        b2.innerHTML = "3";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = b2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        b2.innerHTML = "4";
        b2.style.color = "black";
        b2.style.background = "whitesmoke";
        click_b2 = false;
        notif.style.visibility = "hidden";
        input_b2 = b2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_b2 !== null) {
          b2.innerHTML = "";
          b2.style.color = "black";
          b2.style.background = "whitesmoke";
          click_b2 = false;
          notif.style.visibility = "hidden";
          input_b2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b3 === true && temp_b3 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_b2 !== "1" &&
        input_b1 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b3.innerHTML = "1";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = b3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_b2 !== "2" &&
        input_b1 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b3.innerHTML = "2";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = b3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key == "3" &&
        input_b2 != "3" &&
        input_b1 != "3" &&
        input_b4 != "3" &&
        input_a3 != "3" &&
        input_a4 != "3" &&
        input_d1 != "3" &&
        input_d3 != "3"
      ) {
        b3.innerHTML = "3";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = b3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_b2 !== "4" &&
        input_b1 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b3.innerHTML = "4";
        b3.style.color = "black";
        b3.style.background = "whitesmoke";
        click_b3 = false;
        notif.style.visibility = "hidden";
        input_b3 = b3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_b3 !== null) {
          b3.innerHTML = "";
          b3.style.color = "black";
          b3.style.background = "whitesmoke";
          click_b3 = false;
          notif.style.visibility = "hidden";
          input_b3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_b4 === true && temp_b4 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b1 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        b4.innerHTML = "1";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = b4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b1 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        b4.innerHTML = "2";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = b4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b1 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        b4.innerHTML = "3";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = b4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b1 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        b4.innerHTML = "4";
        b4.style.color = "black";
        b4.style.background = "whitesmoke";
        click_b4 = false;
        notif.style.visibility = "hidden";
        input_b4 = b4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_b4 !== null) {
          b4.innerHTML = "";
          b4.style.color = "black";
          b4.style.background = "whitesmoke";
          click_b4 = false;
          notif.style.visibility = "hidden";
          input_b4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c1 === true && temp_c1 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d2 !== "1" &&
        input_d1 !== "1"
      ) {
        c1.innerHTML = "1";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = c1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d2 !== "2" &&
        input_d1 !== "2"
      ) {
        c1.innerHTML = "2";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = c1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d2 !== "3" &&
        input_d1 !== "3"
      ) {
        c1.innerHTML = "3";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = c1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d2 !== "4" &&
        input_d1 !== "4"
      ) {
        c1.innerHTML = "4";
        c1.style.color = "black";
        c1.style.background = "whitesmoke";
        click_c1 = false;
        notif.style.visibility = "hidden";
        input_c1 = c1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_c1 !== null) {
          c1.innerHTML = "";
          c1.style.color = "black";
          c1.style.background = "whitesmoke";
          click_c1 = false;
          notif.style.visibility = "hidden";
          input_c1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c2 === true && temp_c2 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d1 !== "1"
      ) {
        c2.innerHTML = "1";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = c2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d1 !== "2"
      ) {
        c2.innerHTML = "2";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = c2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d1 !== "3"
      ) {
        c2.innerHTML = "3";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = c2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d1 !== "4"
      ) {
        c2.innerHTML = "4";
        c2.style.color = "black";
        c2.style.background = "whitesmoke";
        click_c2 = false;
        notif.style.visibility = "hidden";
        input_c2 = c2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_c2 !== null) {
          c2.innerHTML = "";
          c2.style.color = "black";
          c2.style.background = "whitesmoke";
          click_c2 = false;
          notif.style.visibility = "hidden";
          input_c2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c3 === true && temp_c3 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_c2 !== "1" &&
        input_c1 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        c3.innerHTML = "1";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = c3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_c2 !== "2" &&
        input_c1 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        c3.innerHTML = "2";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = c3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_c2 !== "3" &&
        input_c1 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        c3.innerHTML = "3";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = c3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_c2 !== "4" &&
        input_c1 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        c3.innerHTML = "4";
        c3.style.color = "black";
        c3.style.background = "whitesmoke";
        click_c3 = false;
        notif.style.visibility = "hidden";
        input_c3 = c3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_c3 !== null) {
          c3.innerHTML = "";
          c3.style.color = "black";
          c3.style.background = "whitesmoke";
          click_c3 = false;
          notif.style.visibility = "hidden";
          input_c3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_c4 === true && temp_c4 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        c4.innerHTML = "1";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = c4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        c4.innerHTML = "2";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = c4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        c4.innerHTML = "3";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = c4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        c4.innerHTML = "4";
        c4.style.color = "black";
        c4.style.background = "whitesmoke";
        click_c4 = false;
        notif.style.visibility = "hidden";
        input_c4 = c4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_c4 !== null) {
          c4.innerHTML = "";
          c4.style.color = "black";
          c4.style.background = "whitesmoke";
          click_c4 = false;
          notif.style.visibility = "hidden";
          input_c4 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d1 === true && temp_d1 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        d1.innerHTML = "1";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = d1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        d1.innerHTML = "2";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = d1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        d1.innerHTML = "3";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = d1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        d1.innerHTML = "4";
        d1.style.color = "black";
        d1.style.background = "whitesmoke";
        click_d1 = false;
        notif.style.visibility = "hidden";
        input_d1 = d1.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_d1 !== null) {
          d1.innerHTML = "";
          d1.style.color = "black";
          d1.style.background = "whitesmoke";
          click_d1 = false;
          notif.style.visibility = "hidden";
          input_d1 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d2 === true && temp_d2 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        d2.innerHTML = "1";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = d2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        d2.innerHTML = "2";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = d2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        d2.innerHTML = "3";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = d2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        d2.innerHTML = "4";
        d2.style.color = "black";
        d2.style.background = "whitesmoke";
        click_d2 = false;
        notif.style.visibility = "hidden";
        input_d2 = d2.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_d2 !== null) {
          d2.innerHTML = "";
          d2.style.color = "black";
          d2.style.background = "whitesmoke";
          click_d2 = false;
          notif.style.visibility = "hidden";
          input_d2 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d3 === true && temp_d3 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        d3.innerHTML = "1";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = d3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        d3.innerHTML = "2";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = d3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        d3.innerHTML = "3";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = d3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        d3.innerHTML = "4";
        d3.style.color = "black";
        d3.style.background = "whitesmoke";
        click_d3 = false;
        notif.style.visibility = "hidden";
        input_d3 = d3.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_d3 !== null) {
          d3.innerHTML = "";
          d3.style.color = "black";
          d3.style.background = "whitesmoke";
          click_d3 = false;
          notif.style.visibility = "hidden";
          input_d3 = null;
          keyboard.style.visibility = "hidden";
        }
      } else {
        notif.style.visibility = "visible";
        notif.innerHTML = "Number taken";
      }
    }

    if (click_d4 === true && temp_d4 === false) {
      key = e.key;
      if (
        key === "1" &&
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        d4.innerHTML = "1";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = d4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "2" &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        d4.innerHTML = "2";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = d4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "3" &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        d4.innerHTML = "3";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = d4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key === "4" &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        d4.innerHTML = "4";
        d4.style.color = "black";
        d4.style.background = "whitesmoke";
        click_d4 = false;
        notif.style.visibility = "hidden";
        input_d4 = d4.innerHTML;
        keyboard.style.visibility = "hidden";
      } else if (
        key !== "1" &&
        key !== "2" &&
        key !== "3" &&
        key !== "4" &&
        key !== "Backspace" &&
        key !== "Delete"
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Invalid input";
      } else if (key === "Backspace" || key === "Delete") {
        if (input_d4 !== null) {
          d4.innerHTML = "";
          d4.style.color = "black";
          d4.style.background = "whitesmoke";
          click_d4 = false;
          notif.style.visibility = "hidden";
          input_d4 = null;
          keyboard.style.visibility = "hidden";
        }
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
      click_b1 === false &&
      click_b2 === false &&
      click_b3 === false &&
      click_b4 === false &&
      click_c1 === false &&
      click_c2 === false &&
      click_c3 === false &&
      click_c4 === false &&
      click_d1 === false &&
      click_d2 === false &&
      click_d3 === false &&
      click_d4 === false
    ) {
      clear_temp();

      if (a1.style.color === "red") a1.style.color = "black";
      if (a2.style.color === "red") a2.style.color = "black";
      if (a3.style.color === "red") a3.style.color = "black";
      if (a4.style.color === "red") a4.style.color = "black";
      if (b1.style.color === "red") b1.style.color = "black";
      if (b2.style.color === "red") b2.style.color = "black";
      if (b3.style.color === "red") b3.style.color = "black";
      if (b4.style.color === "red") b4.style.color = "black";
      if (c1.style.color === "red") c1.style.color = "black";
      if (c2.style.color === "red") c2.style.color = "black";
      if (c3.style.color === "red") c3.style.color = "black";
      if (c4.style.color === "red") c4.style.color = "black";
      if (d1.style.color === "red") d1.style.color = "black";
      if (d2.style.color === "red") d2.style.color = "black";
      if (d3.style.color === "red") d3.style.color = "black";
      if (d4.style.color === "red") d4.style.color = "black";

      if (a1.style.color === "black") temp_a1 = false;
      if (a2.style.color === "black") temp_a2 = false;
      if (a3.style.color === "black") temp_a3 = false;
      if (a4.style.color === "black") temp_a4 = false;
      if (b1.style.color === "black") temp_b1 = false;
      if (b2.style.color === "black") temp_b2 = false;
      if (b3.style.color === "black") temp_b3 = false;
      if (b4.style.color === "black") temp_b4 = false;
      if (c1.style.color === "black") temp_c1 = false;
      if (c2.style.color === "black") temp_c2 = false;
      if (c3.style.color === "black") temp_c3 = false;
      if (c4.style.color === "black") temp_c4 = false;
      if (d1.style.color === "black") temp_d1 = false;
      if (d2.style.color === "black") temp_d2 = false;
      if (d3.style.color === "black") temp_d3 = false;
      if (d4.style.color === "black") temp_d4 = false;

      if (input_a1 === null) a1.style.color = "blue";
      if (input_a2 === null) a2.style.color = "blue";
      if (input_a3 === null) a3.style.color = "blue";
      if (input_a4 === null) a4.style.color = "blue";
      if (input_b1 === null) b1.style.color = "blue";
      if (input_b2 === null) b2.style.color = "blue";
      if (input_b3 === null) b3.style.color = "blue";
      if (input_b4 === null) b4.style.color = "blue";
      if (input_c1 === null) c1.style.color = "blue";
      if (input_c2 === null) c2.style.color = "blue";
      if (input_c3 === null) c3.style.color = "blue";
      if (input_c4 === null) c4.style.color = "blue";
      if (input_d1 === null) d1.style.color = "blue";
      if (input_d2 === null) d2.style.color = "blue";
      if (input_d3 === null) d3.style.color = "blue";
      if (input_d4 === null) d4.style.color = "blue";

      solving();

      if (input_a1 === null) a1.style.color = "black";
      if (input_a2 === null) a2.style.color = "black";
      if (input_a3 === null) a3.style.color = "black";
      if (input_a4 === null) a4.style.color = "black";
      if (input_b1 === null) b1.style.color = "black";
      if (input_b2 === null) b2.style.color = "black";
      if (input_b3 === null) b3.style.color = "black";
      if (input_b4 === null) b4.style.color = "black";
      if (input_c1 === null) c1.style.color = "black";
      if (input_c2 === null) c2.style.color = "black";
      if (input_c3 === null) c3.style.color = "black";
      if (input_c4 === null) c4.style.color = "black";
      if (input_d1 === null) d1.style.color = "black";
      if (input_d2 === null) d2.style.color = "black";
      if (input_d3 === null) d3.style.color = "black";
      if (input_d4 === null) d4.style.color = "black";

      if (a1.style.color === "blue") temp_a1 = true;
      if (a2.style.color === "blue") temp_a2 = true;
      if (a3.style.color === "blue") temp_a3 = true;
      if (a4.style.color === "blue") temp_a4 = true;
      if (b1.style.color === "blue") temp_b1 = true;
      if (b2.style.color === "blue") temp_b2 = true;
      if (b3.style.color === "blue") temp_b3 = true;
      if (b4.style.color === "blue") temp_b4 = true;
      if (c1.style.color === "blue") temp_c1 = true;
      if (c2.style.color === "blue") temp_c2 = true;
      if (c3.style.color === "blue") temp_c3 = true;
      if (c4.style.color === "blue") temp_c4 = true;
      if (d1.style.color === "blue") temp_d1 = true;
      if (d2.style.color === "blue") temp_d2 = true;
      if (d3.style.color === "blue") temp_d3 = true;
      if (d4.style.color === "blue") temp_d4 = true;

      if (
        input_a1 !== null &&
        input_a2 !== null &&
        input_a3 !== null &&
        input_a4 !== null &&
        input_b1 !== null &&
        input_b2 !== null &&
        input_b3 !== null &&
        input_b4 !== null &&
        input_c1 !== null &&
        input_c2 !== null &&
        input_c3 !== null &&
        input_c4 !== null &&
        input_d1 !== null &&
        input_d2 !== null &&
        input_d3 !== null &&
        input_d4 !== null
      ) {
        notif.style.visibility = "visible";
        notif.innerHTML = "Solving Ends";
        solved = true;
        solve.innerHTML = "EDIT";
        a1.style.background = "whitesmoke";
        a2.style.background = "whitesmoke";
        a3.style.background = "whitesmoke";
        a4.style.background = "whitesmoke";
        b1.style.background = "whitesmoke";
        b2.style.background = "whitesmoke";
        b3.style.background = "whitesmoke";
        b4.style.background = "whitesmoke";
        c1.style.background = "whitesmoke";
        c2.style.background = "whitesmoke";
        c3.style.background = "whitesmoke";
        c4.style.background = "whitesmoke";
        d1.style.background = "whitesmoke";
        d2.style.background = "whitesmoke";
        d3.style.background = "whitesmoke";
        d4.style.background = "whitesmoke";
        keyboard.style.visibility = "hidden";
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
}

function impossible() {
  if (input_a1 !== null && input_a2 !== null) {
    if (input_b3 !== input_a1 && input_b3 !== input_a2 && input_b3 !== null) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      b3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_b4 !== input_a1 && input_b4 !== input_a2 && input_b4 !== null) {
      clear_temp();
      a1.style.color = "red";
      a2.style.color = "red";
      b4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_a3 !== null && input_a4 !== null) {
    if (input_b1 !== input_a3 && input_b1 !== input_a4 && input_b1 !== null) {
      clear_temp();
      a3.style.color = "red";
      a4.style.color = "red";
      b1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_b2 !== input_a3 && input_b2 !== input_a4 && input_b2 !== null) {
      clear_temp();
      a3.style.color = "red";
      a4.style.color = "red";
      b2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b1 !== null && input_b2 !== null) {
    if (input_a3 !== input_b1 && input_a3 !== input_b2 && input_a3 !== null) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      a3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_a4 !== input_b1 && input_a4 !== input_b2 && input_a4 !== null) {
      clear_temp();
      b1.style.color = "red";
      b2.style.color = "red";
      a4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b3 !== null && input_b4 !== null) {
    if (input_a1 !== input_b3 && input_a1 !== input_b4 && input_a1 !== null) {
      clear_temp();
      b3.style.color = "red";
      b4.style.color = "red";
      a1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_a2 !== input_b3 && input_a2 !== input_b4 && input_a2 !== null) {
      clear_temp();
      b3.style.color = "red";
      b4.style.color = "red";
      a2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c1 !== null && input_c2 !== null) {
    if (input_d3 !== input_c1 && input_d3 !== input_c2 && input_d3 !== null) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      d3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_d4 !== input_c1 && input_d4 !== input_c2 && input_d4 !== null) {
      clear_temp();
      c1.style.color = "red";
      c2.style.color = "red";
      d4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c3 !== null && input_c4 !== null) {
    if (input_d1 !== input_c3 && input_d1 !== input_c4 && input_d1 !== null) {
      clear_temp();
      c3.style.color = "red";
      c4.style.color = "red";
      d1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_d2 !== input_c3 && input_d2 !== input_c4 && input_d2 !== null) {
      clear_temp();
      c3.style.color = "red";
      c4.style.color = "red";
      d2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d1 !== null && input_d2 !== null) {
    if (input_c3 !== input_d1 && input_c3 !== input_d2 && input_c3 !== null) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      c3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_c4 !== input_d1 && input_c4 !== input_d2 && input_c4 !== null) {
      clear_temp();
      d1.style.color = "red";
      d2.style.color = "red";
      c4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d3 !== null && input_d4 !== null) {
    if (input_c1 !== input_d3 && input_c1 !== input_d4 && input_c1 !== null) {
      clear_temp();
      d3.style.color = "red";
      d4.style.color = "red";
      c1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_c2 !== input_d3 && input_c2 !== input_d4 && input_c2 !== null) {
      clear_temp();
      d3.style.color = "red";
      d4.style.color = "red";
      c2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_a1 !== null && input_a3 !== null) {
    if (input_c2 !== input_a1 && input_c2 !== input_a3 && input_c2 !== null) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      c2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_c4 !== input_a1 && input_c4 !== input_a3 && input_c4 !== null) {
      clear_temp();
      a1.style.color = "red";
      a3.style.color = "red";
      c4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_a2 !== null && input_a4 !== null) {
    if (input_c1 !== input_a2 && input_c1 !== input_a4 && input_c1 !== null) {
      clear_temp();
      a2.style.color = "red";
      a4.style.color = "red";
      c1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_c3 !== input_a2 && input_c3 !== input_a4 && input_c3 !== null) {
      clear_temp();
      a2.style.color = "red";
      a4.style.color = "red";
      c3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b1 !== null && input_b3 !== null) {
    if (input_d2 !== input_b1 && input_d2 !== input_b3 && input_d2 !== null) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      d2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_d4 !== input_b1 && input_d4 !== input_b3 && input_d4 !== null) {
      clear_temp();
      b1.style.color = "red";
      b3.style.color = "red";
      d4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_b2 !== null && input_b4 !== null) {
    if (input_d1 !== input_b2 && input_d1 !== input_b4 && input_d1 !== null) {
      clear_temp();
      b2.style.color = "red";
      b4.style.color = "red";
      d1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_d3 !== input_b2 && input_d3 !== input_b4 && input_d3 !== null) {
      clear_temp();
      b2.style.color = "red";
      b4.style.color = "red";
      d3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c1 !== null && input_c3 !== null) {
    if (input_a2 !== input_c1 && input_a2 !== input_c3 && input_a2 !== null) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      a2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_a4 !== input_c1 && input_a4 !== input_c3 && input_a4 !== null) {
      clear_temp();
      c1.style.color = "red";
      c3.style.color = "red";
      a4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_c2 !== null && input_c4 !== null) {
    if (input_a1 !== input_c2 && input_a1 !== input_c4 && input_a1 !== null) {
      clear_temp();
      c2.style.color = "red";
      c4.style.color = "red";
      a1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_a3 !== input_c2 && input_a3 !== input_c4 && input_a3 !== null) {
      clear_temp();
      c2.style.color = "red";
      c4.style.color = "red";
      a3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d1 !== null && input_d3 !== null) {
    if (input_b2 !== input_d1 && input_b2 !== input_d3 && input_b2 !== null) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      b2.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_b4 !== input_d1 && input_b4 !== input_d3 && input_b4 !== null) {
      clear_temp();
      d1.style.color = "red";
      d3.style.color = "red";
      b4.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }

  if (input_d2 !== null && input_d4 !== null) {
    if (input_b1 !== input_d2 && input_b1 !== input_d4 && input_b1 !== null) {
      clear_temp();
      d2.style.color = "red";
      d4.style.color = "red";
      b1.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
    if (input_b3 !== input_d2 && input_b3 !== input_d4 && input_b3 !== null) {
      clear_temp();
      d2.style.color = "red";
      d4.style.color = "red";
      b3.style.color = "red";
      notif.innerHTML = "Impossible to Solve";
      notif.style.visibility = "visible";
    }
  }
}

function solver() {
  if (input_a1 === null) {
    if (input_a2 !== null && input_a3 !== null && input_a4 !== null) {
      if (
        input_a2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        a1.innerHTML = "1";
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        a1.innerHTML = "2";
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        a1.innerHTML = "3";
        ("");
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        a1.innerHTML = "4";
        input_a1 = a1.innerHTML;
      }
    } else if (input_a2 !== null && input_b1 !== null && input_b2 !== null) {
      if (
        input_a2 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        a1.innerHTML = "1";
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        a1.innerHTML = "2";
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        a1.innerHTML = "3";
        input_a1 = a1.innerHTML;
      } else if (
        input_a2 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        a1.innerHTML = "4";
        input_a1 = a1.innerHTML;
      }
    } else if (input_a3 !== null && input_c1 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1"
      ) {
        a1.innerHTML = "1";
        input_a1 = a1.innerHTML;
      } else if (
        input_a3 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2"
      ) {
        a1.innerHTML = "2";
        input_a1 = a1.innerHTML;
      } else if (
        input_a3 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3"
      ) {
        a1.innerHTML = "3";
        input_a1 = a1.innerHTML;
      } else if (
        input_a3 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4"
      ) {
        a1.innerHTML = "4";
        input_a1 = a1.innerHTML;
      }
    }
    if (input_a1 === null && input_a2 !== null) {
      if (
        input_a2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b3 === "1" || input_b4 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b3 === "2" || input_b4 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b3 === "3" || input_b4 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b3 === "4" || input_b4 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_a3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_c2 === "1" || input_c4 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_c2 === "2" || input_c4 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_c2 === "3" || input_c4 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_c2 === "4" || input_c4 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_b3 !== null && input_c2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b3 === "1" && input_c2 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b3 === "2" && input_c2 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b3 === "3" && input_c2 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b3 === "4" && input_c2 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_b3 !== null && input_c4 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b3 === "1" && input_c4 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b3 === "2" && input_c4 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b3 === "3" && input_c4 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b3 === "4" && input_c4 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_b4 !== null && input_c2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b4 === "1" && input_c2 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b4 === "2" && input_c2 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b4 === "3" && input_c2 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b4 === "4" && input_c2 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_b4 !== null && input_c4 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b4 === "1" && input_c4 === "1") {
          a1.innerHTML = "1";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b4 === "2" && input_c4 === "2") {
          a1.innerHTML = "2";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b4 === "3" && input_c4 === "3") {
          a1.innerHTML = "3";
          input_a1 = a1.innerHTML;
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b4 === "4" && input_c4 === "4") {
          a1.innerHTML = "4";
          input_a1 = a1.innerHTML;
        }
      }
    }
    if (input_a1 === null && input_a2 !== null && input_b1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a2 !== "1" && input_b1 !== "1") {
          if (input_d2 === "1" || input_d4 === "1") {
            a1.innerHTML = "1";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a2 !== "2" && input_b1 !== "2") {
          if (input_d2 === "2" || input_d4 === "2") {
            a1.innerHTML = "2";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a2 !== "3" && input_b1 !== "3") {
          if (input_d2 === "3" || input_d4 === "3") {
            a1.innerHTML = "3";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a2 !== "4" && input_b1 !== "4") {
          if (input_d2 === "4" || input_d4 === "4") {
            a1.innerHTML = "4";
            input_a1 = a1.innerHTML;
          }
        }
      }
    }
    if (input_a1 === null && input_a2 !== null && input_b2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a2 !== "1" && input_b2 !== "1") {
          if (input_d1 === "1" || input_d3 === "1") {
            a1.innerHTML = "1";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a2 !== "2" && input_b2 !== "2") {
          if (input_d1 === "2" || input_d3 === "2") {
            a1.innerHTML = "2";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a2 !== "3" && input_b2 !== "3") {
          if (input_d1 === "3" || input_d3 === "3") {
            a1.innerHTML = "3";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a2 !== "4" && input_b2 !== "4") {
          if (input_d1 === "4" || input_d3 === "4") {
            a1.innerHTML = "4";
            input_a1 = a1.innerHTML;
          }
        }
      }
    }
    if (input_a1 === null && input_a3 !== null && input_c1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a3 !== "1" && input_c1 !== "1") {
          if (input_d3 === "1" || input_d4 === "1") {
            a1.innerHTML = "1";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a3 !== "2" && input_c1 !== "2") {
          if (input_d3 === "2" || input_d4 === "2") {
            a1.innerHTML = "2";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a3 !== "3" && input_c1 !== "3") {
          if (input_d3 === "3" || input_d4 === "3") {
            a1.innerHTML = "3";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a3 !== "4" && input_c1 !== "4") {
          if (input_d3 === "4" || input_d4 === "4") {
            a1.innerHTML = "4";
            input_a1 = a1.innerHTML;
          }
        }
      }
    }
    if (input_a1 === null && input_a3 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a3 !== "1" && input_c3 !== "1") {
          if (input_d1 === "1" || input_d2 === "1") {
            a1.innerHTML = "1";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a3 !== "2" && input_c3 !== "2") {
          if (input_d1 === "2" || input_d2 === "2") {
            a1.innerHTML = "2";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a3 !== "3" && input_c3 !== "3") {
          if (input_d1 === "3" || input_d2 === "3") {
            a1.innerHTML = "3";
            input_a1 = a1.innerHTML;
          }
        }
      }
      if (
        input_a1 === null &&
        input_a3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a3 !== "4" && input_c3 !== "4") {
          if (input_d1 === "4" || input_d2 === "4") {
            a1.innerHTML = "4";
            input_a1 = a1.innerHTML;
          }
        }
      }
    }
  }

  if (input_a2 === null) {
    if (input_a1 !== null && input_a3 !== null && input_a4 !== null) {
      if (
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        a2.innerHTML = "1";
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        a2.innerHTML = "2";
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        a2.innerHTML = "3";
        ("");
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        a2.innerHTML = "4";
        input_a2 = a2.innerHTML;
      }
    } else if (input_a1 !== null && input_b1 !== null && input_b2 !== null) {
      if (
        input_a1 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        a2.innerHTML = "1";
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        a2.innerHTML = "2";
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        a2.innerHTML = "3";
        input_a2 = a2.innerHTML;
      } else if (
        input_a1 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        a2.innerHTML = "4";
        input_a2 = a2.innerHTML;
      }
    } else if (input_a4 !== null && input_c2 !== null && input_c4 !== null) {
      if (
        input_a4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1"
      ) {
        a2.innerHTML = "1";
        input_a2 = a2.innerHTML;
      } else if (
        input_a4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2"
      ) {
        a2.innerHTML = "2";
        input_a2 = a2.innerHTML;
      } else if (
        input_a4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3"
      ) {
        a2.innerHTML = "3";
        input_a2 = a2.innerHTML;
      } else if (
        input_a4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4"
      ) {
        a2.innerHTML = "4";
        input_a2 = a2.innerHTML;
      }
    }
    if (input_a2 === null && input_a1 !== null) {
      if (
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b3 === "1" || input_b4 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b3 === "2" || input_b4 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b3 === "3" || input_b4 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b4 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b3 === "4" || input_b4 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_a4 !== null) {
      if (
        input_a4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_c1 === "1" || input_c3 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_c1 === "2" || input_c3 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_c1 === "3" || input_c3 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_c1 === "4" || input_c3 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_b3 !== null && input_c1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b3 === "1" && input_c1 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b3 === "2" && input_c1 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b3 === "3" && input_c1 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b3 === "4" && input_c1 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_b3 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b3 === "1" && input_c3 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b3 === "2" && input_c3 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b3 === "3" && input_c3 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b3 === "4" && input_c3 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_b4 !== null && input_c1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b4 === "1" && input_c1 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b4 === "2" && input_c1 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b4 === "3" && input_c1 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b4 === "4" && input_c1 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_b4 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b4 === "1" && input_c3 === "1") {
          a2.innerHTML = "1";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b4 === "2" && input_c3 === "2") {
          a2.innerHTML = "2";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b4 === "3" && input_c3 === "3") {
          a2.innerHTML = "3";
          input_a2 = a2.innerHTML;
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b4 === "4" && input_c3 === "4") {
          a2.innerHTML = "4";
          input_a2 = a2.innerHTML;
        }
      }
    }
    if (input_a2 === null && input_a1 !== null && input_b1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a1 !== "1" && input_b1 !== "1") {
          if (input_d2 === "1" || input_d4 === "1") {
            a2.innerHTML = "1";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a1 !== "2" && input_b1 !== "2") {
          if (input_d2 === "2" || input_d4 === "2") {
            a2.innerHTML = "2";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a1 !== "3" && input_b1 !== "3") {
          if (input_d2 === "3" || input_d4 === "3") {
            a2.innerHTML = "3";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a1 !== "4" && input_b1 !== "4") {
          if (input_d2 === "4" || input_d4 === "4") {
            a2.innerHTML = "4";
            input_a2 = a2.innerHTML;
          }
        }
      }
    }
    if (input_a2 === null && input_a1 !== null && input_b2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a1 !== "1" && input_b2 !== "1") {
          if (input_d1 === "1" || input_d3 === "1") {
            a2.innerHTML = "1";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a1 !== "2" && input_b2 !== "2") {
          if (input_d1 === "2" || input_d3 === "2") {
            a2.innerHTML = "2";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a1 !== "3" && input_b2 !== "3") {
          if (input_d1 === "3" || input_d3 === "3") {
            a2.innerHTML = "3";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a1 !== "4" && input_b2 !== "4") {
          if (input_d1 === "4" || input_d3 === "4") {
            a2.innerHTML = "4";
            input_a2 = a2.innerHTML;
          }
        }
      }
    }
    if (input_a2 === null && input_a4 !== null && input_c2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a4 !== "1" && input_c2 !== "1") {
          if (input_d3 === "1" || input_d4 === "1") {
            a2.innerHTML = "1";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a4 !== "2" && input_c2 !== "2") {
          if (input_d3 === "2" || input_d4 === "2") {
            a2.innerHTML = "2";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a4 !== "3" && input_c2 !== "3") {
          if (input_d3 === "3" || input_d4 === "3") {
            a2.innerHTML = "3";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a4 !== "4" && input_c2 !== "4") {
          if (input_d3 === "4" || input_d4 === "4") {
            a2.innerHTML = "4";
            input_a2 = a2.innerHTML;
          }
        }
      }
    }
    if (input_a2 === null && input_a4 !== null && input_c4 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a4 !== "1" && input_c4 !== "1") {
          if (input_d1 === "1" || input_d2 === "1") {
            a2.innerHTML = "1";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a4 !== "2" && input_c4 !== "2") {
          if (input_d1 === "2" || input_d2 === "2") {
            a2.innerHTML = "2";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a4 !== "3" && input_c4 !== "3") {
          if (input_d1 === "3" || input_d2 === "3") {
            a2.innerHTML = "3";
            input_a2 = a2.innerHTML;
          }
        }
      }
      if (
        input_a2 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a4 !== "4" && input_c4 !== "4") {
          if (input_d1 === "4" || input_d2 === "4") {
            a2.innerHTML = "4";
            input_a2 = a2.innerHTML;
          }
        }
      }
    }
  }

  if (input_a3 === null) {
    if (input_a1 !== null && input_a2 !== null && input_a4 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1"
      ) {
        a3.innerHTML = "1";
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2"
      ) {
        a3.innerHTML = "2";
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3"
      ) {
        a3.innerHTML = "3";
        ("");
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4"
      ) {
        a3.innerHTML = "4";
        input_a3 = a3.innerHTML;
      }
    } else if (input_a4 !== null && input_b3 !== null && input_b4 !== null) {
      if (
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1"
      ) {
        a3.innerHTML = "1";
        input_a3 = a3.innerHTML;
      } else if (
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2"
      ) {
        a3.innerHTML = "2";
        input_a3 = a3.innerHTML;
      } else if (
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3"
      ) {
        a3.innerHTML = "3";
        input_a3 = a3.innerHTML;
      } else if (
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4"
      ) {
        a3.innerHTML = "4";
        input_a3 = a3.innerHTML;
      }
    } else if (input_a1 !== null && input_c1 !== null && input_c3 !== null) {
      if (
        input_a1 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1"
      ) {
        a3.innerHTML = "1";
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2"
      ) {
        a3.innerHTML = "2";
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3"
      ) {
        a3.innerHTML = "3";
        input_a3 = a3.innerHTML;
      } else if (
        input_a1 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4"
      ) {
        a3.innerHTML = "4";
        input_a3 = a3.innerHTML;
      }
    }
    if (input_a3 === null && input_a1 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_c2 === "1" || input_c4 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_c2 === "2" || input_c4 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_c2 === "3" || input_c4 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_c2 === "4" || input_c4 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_a4 !== null) {
      if (
        input_a4 !== "1" &&
        input_a2 !== "1" &&
        input_a1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b1 === "1" || input_b2 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a4 !== "2" &&
        input_a2 !== "2" &&
        input_a1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b1 === "2" || input_b2 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a4 !== "3" &&
        input_a2 !== "3" &&
        input_a1 !== "3" &&
        input_b3 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b1 === "3" || input_b2 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a4 !== "4" &&
        input_a2 !== "4" &&
        input_a1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b1 === "4" || input_b2 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_b1 !== null && input_c2 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b1 === "1" && input_c2 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b1 === "2" && input_c2 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b1 === "3" && input_c2 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b1 === "4" && input_c2 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_b1 !== null && input_c4 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b1 === "1" && input_c4 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b1 === "2" && input_c4 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b1 === "3" && input_c4 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b1 === "4" && input_c4 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_b2 !== null && input_c2 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b2 === "1" && input_c2 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b2 === "2" && input_c2 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b2 === "3" && input_c2 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b2 === "4" && input_c2 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_b2 !== null && input_c4 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_b2 === "1" && input_c4 === "1") {
          a3.innerHTML = "1";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_b2 === "2" && input_c4 === "2") {
          a3.innerHTML = "2";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_b2 === "3" && input_c4 === "3") {
          a3.innerHTML = "3";
          input_a3 = a3.innerHTML;
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_b2 === "4" && input_c4 === "4") {
          a3.innerHTML = "4";
          input_a3 = a3.innerHTML;
        }
      }
    }
    if (input_a3 === null && input_a4 !== null && input_b3 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a4 !== "1" && input_b3 !== "1") {
          if (input_d2 === "1" || input_d4 === "1") {
            a3.innerHTML = "1";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a4 !== "2" && input_b3 !== "2") {
          if (input_d2 === "2" || input_d4 === "2") {
            a3.innerHTML = "2";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a4 !== "3" && input_b3 !== "3") {
          if (input_d2 === "3" || input_d4 === "3") {
            a3.innerHTML = "3";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a4 !== "4" && input_b3 !== "4") {
          if (input_d2 === "4" || input_d4 === "4") {
            a3.innerHTML = "4";
            input_a3 = a3.innerHTML;
          }
        }
      }
    }
    if (input_a3 === null && input_a4 !== null && input_b4 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a4 !== "1" && input_b4 !== "1") {
          if (input_d1 === "1" || input_d3 === "1") {
            a3.innerHTML = "1";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a4 !== "2" && input_b4 !== "2") {
          if (input_d1 === "2" || input_d3 === "2") {
            a3.innerHTML = "2";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a4 !== "3" && input_b4 !== "3") {
          if (input_d1 === "3" || input_d3 === "3") {
            a3.innerHTML = "3";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a4 !== "4" && input_b4 !== "4") {
          if (input_d1 === "4" || input_d3 === "4") {
            a3.innerHTML = "4";
            input_a3 = a3.innerHTML;
          }
        }
      }
    }
    if (input_a3 === null && input_a1 !== null && input_c1 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a1 !== "1" && input_c1 !== "1") {
          if (input_d3 === "1" || input_d4 === "1") {
            a3.innerHTML = "1";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a1 !== "2" && input_c1 !== "2") {
          if (input_d3 === "2" || input_d4 === "2") {
            a3.innerHTML = "2";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a1 !== "3" && input_c1 !== "3") {
          if (input_d3 === "3" || input_d4 === "3") {
            a3.innerHTML = "3";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a1 !== "4" && input_c1 !== "4") {
          if (input_d3 === "4" || input_d4 === "4") {
            a3.innerHTML = "4";
            input_a3 = a3.innerHTML;
          }
        }
      }
    }
    if (input_a3 === null && input_a1 !== null && input_c3 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        if (input_a1 !== "1" && input_c3 !== "1") {
          if (input_d1 === "1" || input_d2 === "1") {
            a3.innerHTML = "1";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        if (input_a1 !== "2" && input_c3 !== "2") {
          if (input_d1 === "2" || input_d2 === "2") {
            a3.innerHTML = "2";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        if (input_a1 !== "3" && input_c3 !== "3") {
          if (input_d1 === "3" || input_d2 === "3") {
            a3.innerHTML = "3";
            input_a3 = a3.innerHTML;
          }
        }
      }
      if (
        input_a3 === null &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        if (input_a1 !== "4" && input_c3 !== "4") {
          if (input_d1 === "4" || input_d2 === "4") {
            a3.innerHTML = "4";
            input_a3 = a3.innerHTML;
          }
        }
      }
    }
  }

  if (input_a4 === null) {
    if (input_a1 !== null && input_a2 !== null && input_a3 !== null) {
      if (
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_a3 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1"
      ) {
        a4.innerHTML = "1";
        input_a4 = a4.innerHTML;
      } else if (
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_a3 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2"
      ) {
        a4.innerHTML = "2";
        input_a4 = a4.innerHTML;
      } else if (
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_a3 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3"
      ) {
        a4.innerHTML = "3";
        ("");
        input_a4 = a4.innerHTML;
      } else if (
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_a3 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4"
      ) {
        a4.innerHTML = "4";
        input_a4 = a4.innerHTML;
      }
    } else if (input_a3 !== null && input_b3 !== null && input_b4 !== null) {
      if (
        input_a3 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1"
      ) {
        a4.innerHTML = "1";
        input_a4 = a4.innerHTML;
      } else if (
        input_a3 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2"
      ) {
        a4.innerHTML = "2";
        input_a4 = a4.innerHTML;
      } else if (
        input_a3 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3"
      ) {
        a4.innerHTML = "3";
        input_a4 = a4.innerHTML;
      } else if (
        input_a3 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4"
      ) {
        a4.innerHTML = "4";
        input_a4 = a4.innerHTML;
      }
    } else if (input_a2 !== null && input_c2 !== null && input_c4 !== null) {
      if (
        input_a2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        a4.innerHTML = "1";
        input_a4 = a4.innerHTML;
      } else if (
        input_a2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        a4.innerHTML = "2";
        input_a4 = a4.innerHTML;
      } else if (
        input_a2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        a4.innerHTML = "3";
        input_a4 = a4.innerHTML;
      } else if (
        input_a2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        a4.innerHTML = "4";
        input_a4 = a4.innerHTML;
      }
    }
    if (input_a4 === null && input_a2 !== null) {
      if (
        input_a2 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_c1 === "1" || input_c3 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a2 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_c1 === "2" || input_c3 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a2 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_c1 === "3" || input_c3 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a2 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_c1 === "4" || input_c3 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    } else if (input_a4 === null && input_a3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b1 === "1" || input_b2 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b1 === "2" || input_b2 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b1 === "3" || input_b2 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b1 === "4" || input_b2 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    }
    if (input_a4 === null && input_b1 !== null && input_c1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b1 === "1" && input_c1 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b1 === "2" && input_c1 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b1 === "3" && input_c1 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b1 === "4" && input_c1 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    }
    if (input_a4 === null && input_b1 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b1 === "1" && input_c3 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b1 === "2" && input_c3 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b1 === "3" && input_c3 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b1 === "4" && input_c3 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    }
    if (input_a4 === null && input_b2 !== null && input_c1 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b2 === "1" && input_c1 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b2 === "2" && input_c1 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b2 === "3" && input_c1 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b2 === "4" && input_c1 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    }
    if (input_a4 === null && input_b2 !== null && input_c3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b2 === "1" && input_c3 === "1") {
          a4.innerHTML = "1";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b2 === "2" && input_c3 === "2") {
          a4.innerHTML = "2";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b2 === "3" && input_c3 === "3") {
          a4.innerHTML = "3";
          input_a4 = a4.innerHTML;
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b2 === "4" && input_c3 === "4") {
          a4.innerHTML = "4";
          input_a4 = a4.innerHTML;
        }
      }
    }
    if (input_a4 === null && input_a3 !== null && input_b3 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a3 !== "1" && input_b3 !== "1") {
          if (input_d2 === "1" || input_d4 === "1") {
            a4.innerHTML = "1";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a3 !== "2" && input_b3 !== "2") {
          if (input_d2 === "2" || input_d4 === "2") {
            a4.innerHTML = "2";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a3 !== "3" && input_b3 !== "3") {
          if (input_d2 === "3" || input_d4 === "3") {
            a4.innerHTML = "3";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a3 !== "4" && input_b3 !== "4") {
          if (input_d2 === "4" || input_d4 === "4") {
            a4.innerHTML = "4";
            input_a4 = a4.innerHTML;
          }
        }
      }
    }
    if (input_a4 === null && input_a3 !== null && input_b4 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a3 !== "1" && input_b4 !== "1") {
          if (input_d1 === "1" || input_d3 === "1") {
            a4.innerHTML = "1";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a3 !== "2" && input_b4 !== "2") {
          if (input_d1 === "2" || input_d3 === "2") {
            a4.innerHTML = "2";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a3 !== "3" && input_b4 !== "3") {
          if (input_d1 === "3" || input_d3 === "3") {
            a4.innerHTML = "3";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a3 !== "4" && input_b4 !== "4") {
          if (input_d1 === "4" || input_d3 === "4") {
            a4.innerHTML = "4";
            input_a4 = a4.innerHTML;
          }
        }
      }
    }
    if (input_a4 === null && input_a2 !== null && input_c2 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a2 !== "1" && input_c2 !== "1") {
          if (input_d3 === "1" || input_d4 === "1") {
            a4.innerHTML = "1";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a2 !== "2" && input_c2 !== "2") {
          if (input_d3 === "2" || input_d4 === "2") {
            a4.innerHTML = "2";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a2 !== "3" && input_c2 !== "3") {
          if (input_d3 === "3" || input_d4 === "3") {
            a4.innerHTML = "3";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a2 !== "4" && input_c2 !== "4") {
          if (input_d3 === "4" || input_d4 === "4") {
            a4.innerHTML = "4";
            input_a4 = a4.innerHTML;
          }
        }
      }
    }
    if (input_a4 === null && input_a2 !== null && input_c4 !== null) {
      if (
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_a2 !== "1" && input_c4 !== "1") {
          if (input_d1 === "1" || input_d2 === "1") {
            a4.innerHTML = "1";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_a2 !== "2" && input_c4 !== "2") {
          if (input_d1 === "2" || input_d2 === "2") {
            a4.innerHTML = "2";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_a2 !== "3" && input_c4 !== "3") {
          if (input_d1 === "3" || input_d2 === "3") {
            a4.innerHTML = "3";
            input_a4 = a4.innerHTML;
          }
        }
      }
      if (
        input_a4 === null &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_a2 !== "4" && input_c4 !== "4") {
          if (input_d1 === "4" || input_d2 === "4") {
            a4.innerHTML = "4";
            input_a4 = a4.innerHTML;
          }
        }
      }
    }
  }

  if (input_b1 === null) {
    if (input_b2 !== null && input_b3 !== null && input_b4 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b1.innerHTML = "1";
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b1.innerHTML = "2";
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        b1.innerHTML = "3";
        ("");
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b1.innerHTML = "4";
        input_b1 = b1.innerHTML;
      }
    } else if (input_b2 !== null && input_a1 !== null && input_a2 !== null) {
      if (
        input_b2 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b1.innerHTML = "1";
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b1.innerHTML = "2";
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        b1.innerHTML = "3";
        input_b1 = b1.innerHTML;
      } else if (
        input_b2 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b1.innerHTML = "4";
        input_b1 = b1.innerHTML;
      }
    } else if (input_b3 !== null && input_d1 !== null && input_d3 !== null) {
      if (
        input_b3 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1"
      ) {
        b1.innerHTML = "1";
        input_b1 = b1.innerHTML;
      } else if (
        input_b3 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2"
      ) {
        b1.innerHTML = "2";
        input_b1 = b1.innerHTML;
      } else if (
        input_b3 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3"
      ) {
        b1.innerHTML = "3";
        input_b1 = b1.innerHTML;
      } else if (
        input_b3 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4"
      ) {
        b1.innerHTML = "4";
        input_b1 = b1.innerHTML;
      }
    }
    if (input_b1 === null && input_b2 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a3 === "1" || input_a4 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a3 === "2" || input_a4 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a3 === "3" || input_a4 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a3 === "4" || input_a4 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_b3 !== null) {
      if (
        input_b3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_d2 === "1" || input_d4 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_d2 === "2" || input_d4 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_d2 === "3" || input_d4 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_d2 === "4" || input_d4 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_a3 !== null && input_d2 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a3 === "1" && input_d2 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a3 === "2" && input_d2 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a3 === "3" && input_d2 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a3 === "4" && input_d2 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_a3 !== null && input_d4 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a3 === "1" && input_d4 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a3 === "2" && input_d4 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a3 === "3" && input_d4 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a3 === "4" && input_d4 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_a4 !== null && input_d2 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a4 === "1" && input_d2 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a4 === "2" && input_d2 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a4 === "3" && input_d2 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a4 === "4" && input_d2 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_a4 !== null && input_d4 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a4 === "1" && input_d4 === "1") {
          b1.innerHTML = "1";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a4 === "2" && input_d4 === "2") {
          b1.innerHTML = "2";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a4 === "3" && input_d4 === "3") {
          b1.innerHTML = "3";
          input_b1 = b1.innerHTML;
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a4 === "4" && input_d4 === "4") {
          b1.innerHTML = "4";
          input_b1 = b1.innerHTML;
        }
      }
    }
    if (input_b1 === null && input_b2 !== null && input_a1 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b2 !== "1" && input_a1 !== "1") {
          if (input_c2 === "1" || input_c4 === "1") {
            b1.innerHTML = "1";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b2 !== "2" && input_a1 !== "2") {
          if (input_c2 === "2" || input_c4 === "2") {
            b1.innerHTML = "2";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b2 !== "3" && input_a1 !== "3") {
          if (input_c2 === "3" || input_c4 === "3") {
            b1.innerHTML = "3";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b2 !== "4" && input_a1 !== "4") {
          if (input_c2 === "4" || input_c4 === "4") {
            b1.innerHTML = "4";
            input_b1 = b1.innerHTML;
          }
        }
      }
    }
    if (input_b1 === null && input_b2 !== null && input_a2 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b2 !== "1" && input_a2 !== "1") {
          if (input_c1 === "1" || input_c3 === "1") {
            b1.innerHTML = "1";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b2 !== "2" && input_a2 !== "2") {
          if (input_c1 === "2" || input_c3 === "2") {
            b1.innerHTML = "2";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b2 !== "3" && input_a2 !== "3") {
          if (input_c1 === "3" || input_c3 === "3") {
            b1.innerHTML = "3";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b2 !== "4" && input_a2 !== "4") {
          if (input_c1 === "4" || input_c3 === "4") {
            b1.innerHTML = "4";
            input_b1 = b1.innerHTML;
          }
        }
      }
    }
    if (input_b1 === null && input_b3 !== null && input_d1 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b3 !== "1" && input_d1 !== "1") {
          if (input_c3 === "1" || input_c4 === "1") {
            b1.innerHTML = "1";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b3 !== "2" && input_d1 !== "2") {
          if (input_c3 === "2" || input_c4 === "2") {
            b1.innerHTML = "2";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b3 !== "3" && input_d1 !== "3") {
          if (input_c3 === "3" || input_c4 === "3") {
            b1.innerHTML = "3";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b3 !== "4" && input_d1 !== "4") {
          if (input_c3 === "4" || input_c4 === "4") {
            b1.innerHTML = "4";
            input_b1 = b1.innerHTML;
          }
        }
      }
    }
    if (input_b1 === null && input_b3 !== null && input_d3 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b3 !== "1" && input_d3 !== "1") {
          if (input_c1 === "1" || input_c2 === "1") {
            b1.innerHTML = "1";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b3 !== "2" && input_d3 !== "2") {
          if (input_c1 === "2" || input_c2 === "2") {
            b1.innerHTML = "2";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b3 !== "3" && input_d3 !== "3") {
          if (input_c1 === "3" || input_c2 === "3") {
            b1.innerHTML = "3";
            input_b1 = b1.innerHTML;
          }
        }
      }
      if (
        input_b1 === null &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b3 !== "4" && input_d3 !== "4") {
          if (input_c1 === "4" || input_c2 === "4") {
            b1.innerHTML = "4";
            input_b1 = b1.innerHTML;
          }
        }
      }
    }
  }

  if (input_b2 === null) {
    if (input_b1 !== null && input_b3 !== null && input_b4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1"
      ) {
        b2.innerHTML = "1";
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2"
      ) {
        b2.innerHTML = "2";
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3"
      ) {
        b2.innerHTML = "3";
        ("");
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4"
      ) {
        b2.innerHTML = "4";
        input_b2 = b2.innerHTML;
      }
    } else if (input_b1 !== null && input_a1 !== null && input_a2 !== null) {
      if (
        input_b1 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1"
      ) {
        b2.innerHTML = "1";
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2"
      ) {
        b2.innerHTML = "2";
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3"
      ) {
        b2.innerHTML = "3";
        input_b2 = b2.innerHTML;
      } else if (
        input_b1 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4"
      ) {
        b2.innerHTML = "4";
        input_b2 = b2.innerHTML;
      }
    } else if (input_b4 !== null && input_d2 !== null && input_d4 !== null) {
      if (
        input_b4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        b2.innerHTML = "1";
        input_b2 = b2.innerHTML;
      } else if (
        input_b4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        b2.innerHTML = "2";
        input_b2 = b2.innerHTML;
      } else if (
        input_b4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        b2.innerHTML = "3";
        input_b2 = b2.innerHTML;
      } else if (
        input_b4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        b2.innerHTML = "4";
        input_b2 = b2.innerHTML;
      }
    }
    if (input_b2 === null && input_b1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a3 === "1" || input_a4 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a3 === "2" || input_a4 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a3 === "3" || input_a4 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a3 === "4" || input_a4 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_b4 !== null) {
      if (
        input_b4 !== "1" &&
        input_b3 !== "1" &&
        input_b1 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_d1 === "1" || input_d3 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b4 !== "2" &&
        input_b3 !== "2" &&
        input_b1 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_d1 === "2" || input_d3 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b4 !== "3" &&
        input_b3 !== "3" &&
        input_b1 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_d1 === "3" || input_d3 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b4 !== "4" &&
        input_b3 !== "4" &&
        input_b1 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_d1 === "4" || input_d3 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_a3 !== null && input_d1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a3 === "1" && input_d1 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a3 === "2" && input_d1 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a3 === "3" && input_d1 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a3 === "4" && input_d1 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_a3 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a3 === "1" && input_d3 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a3 === "2" && input_d3 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a3 === "3" && input_d3 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a3 === "4" && input_d3 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_a4 !== null && input_d1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a4 === "1" && input_d1 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a4 === "2" && input_d1 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a4 === "3" && input_d1 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a4 === "4" && input_d1 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_a4 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a4 === "1" && input_d3 === "1") {
          b2.innerHTML = "1";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a4 === "2" && input_d3 === "2") {
          b2.innerHTML = "2";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a4 === "3" && input_d3 === "3") {
          b2.innerHTML = "3";
          input_b2 = b2.innerHTML;
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a4 === "4" && input_d3 === "4") {
          b2.innerHTML = "4";
          input_b2 = b2.innerHTML;
        }
      }
    }
    if (input_b2 === null && input_b1 !== null && input_a1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b1 !== "1" && input_a1 !== "1") {
          if (input_c2 === "1" || input_c4 === "1") {
            b2.innerHTML = "1";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b1 !== "2" && input_a1 !== "2") {
          if (input_c2 === "2" || input_c4 === "2") {
            b2.innerHTML = "2";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b1 !== "3" && input_a1 !== "3") {
          if (input_c2 === "3" || input_c4 === "3") {
            b2.innerHTML = "3";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b1 !== "4" && input_a1 !== "4") {
          if (input_c2 === "4" || input_c4 === "4") {
            b2.innerHTML = "4";
            input_b2 = b2.innerHTML;
          }
        }
      }
    }
    if (input_b2 === null && input_b1 !== null && input_a2 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b1 !== "1" && input_a2 !== "1") {
          if (input_c1 === "1" || input_c3 === "1") {
            b2.innerHTML = "1";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b1 !== "2" && input_a2 !== "2") {
          if (input_c1 === "2" || input_c3 === "2") {
            b2.innerHTML = "2";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b1 !== "3" && input_a2 !== "3") {
          if (input_c1 === "3" || input_c3 === "3") {
            b2.innerHTML = "3";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b1 !== "4" && input_a2 !== "4") {
          if (input_c1 === "4" || input_c3 === "4") {
            b2.innerHTML = "4";
            input_b2 = b2.innerHTML;
          }
        }
      }
    }
    if (input_b2 === null && input_b4 !== null && input_d2 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b4 !== "1" && input_d2 !== "1") {
          if (input_c3 === "1" || input_c4 === "1") {
            b2.innerHTML = "1";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b4 !== "2" && input_d2 !== "2") {
          if (input_c3 === "2" || input_c4 === "2") {
            b2.innerHTML = "2";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b4 !== "3" && input_d2 !== "3") {
          if (input_c3 === "3" || input_c4 === "3") {
            b2.innerHTML = "3";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b4 !== "4" && input_d2 !== "4") {
          if (input_c3 === "4" || input_c4 === "4") {
            b2.innerHTML = "4";
            input_b2 = b2.innerHTML;
          }
        }
      }
    }
    if (input_b2 === null && input_b4 !== null && input_d4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_b4 !== "1" &&
        input_a1 !== "1" &&
        input_a2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b4 !== "1" && input_d4 !== "1") {
          if (input_c1 === "1" || input_c2 === "1") {
            b2.innerHTML = "1";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_b4 !== "2" &&
        input_a1 !== "2" &&
        input_a2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b4 !== "2" && input_d4 !== "2") {
          if (input_c1 === "2" || input_c2 === "2") {
            b2.innerHTML = "2";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_b4 !== "3" &&
        input_a1 !== "3" &&
        input_a2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b4 !== "3" && input_d4 !== "3") {
          if (input_c1 === "3" || input_c2 === "3") {
            b2.innerHTML = "3";
            input_b2 = b2.innerHTML;
          }
        }
      }
      if (
        input_b2 === null &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_b4 !== "4" &&
        input_a1 !== "4" &&
        input_a2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b4 !== "4" && input_d4 !== "4") {
          if (input_c1 === "4" || input_c2 === "4") {
            b2.innerHTML = "4";
            input_b2 = b2.innerHTML;
          }
        }
      }
    }
  }

  if (input_b3 === null) {
    if (input_b2 !== null && input_b1 !== null && input_b4 !== null) {
      if (
        input_b2 !== "1" &&
        input_b1 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b3.innerHTML = "1";
        input_b3 = b3.innerHTML;
      } else if (
        input_b2 !== "2" &&
        input_b1 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b3.innerHTML = "2";
        input_b3 = b3.innerHTML;
      } else if (
        input_b2 !== "3" &&
        input_b1 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        b3.innerHTML = "3";
        ("");
        input_b3 = b3.innerHTML;
      } else if (
        input_b2 !== "4" &&
        input_b1 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b3.innerHTML = "4";
        input_b3 = b3.innerHTML;
      }
    } else if (input_b4 !== null && input_a3 !== null && input_a4 !== null) {
      if (
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        b3.innerHTML = "1";
        input_b3 = b3.innerHTML;
      } else if (
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        b3.innerHTML = "2";
        input_b3 = b3.innerHTML;
      } else if (
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        b3.innerHTML = "3";
        input_b3 = b3.innerHTML;
      } else if (
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        b3.innerHTML = "4";
        input_b3 = b3.innerHTML;
      }
    } else if (input_b1 !== null && input_d1 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b4 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1"
      ) {
        b3.innerHTML = "1";
        input_b3 = b3.innerHTML;
      } else if (
        input_b1 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b4 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2"
      ) {
        b3.innerHTML = "2";
        input_b3 = b3.innerHTML;
      } else if (
        input_b1 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b4 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3"
      ) {
        b3.innerHTML = "3";
        input_b3 = b3.innerHTML;
      } else if (
        input_b1 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b4 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4"
      ) {
        b3.innerHTML = "4";
        input_b3 = b3.innerHTML;
      }
    }
    if (input_b3 === null && input_b1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b4 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_d2 === "1" || input_d4 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b4 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_d2 === "2" || input_d4 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b4 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_d2 === "3" || input_d4 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b4 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_d2 === "4" || input_d4 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_b4 !== null) {
      if (
        input_b4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a1 === "1" || input_a2 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a1 === "2" || input_a2 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a1 === "3" || input_a2 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a1 === "4" || input_a2 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_a1 !== null && input_d2 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a1 === "1" && input_d2 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a1 === "2" && input_d2 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a1 === "3" && input_d2 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a1 === "4" && input_d2 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_a1 !== null && input_d4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a1 === "1" && input_d4 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a1 === "2" && input_d4 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a1 === "3" && input_d4 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a1 === "4" && input_d4 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_a2 !== null && input_d2 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a2 === "1" && input_d2 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a2 === "2" && input_d2 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a2 === "3" && input_d2 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a2 === "4" && input_d2 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_a2 !== null && input_d4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_a2 === "1" && input_d4 === "1") {
          b3.innerHTML = "1";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_a2 === "2" && input_d4 === "2") {
          b3.innerHTML = "2";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_a2 === "3" && input_d4 === "3") {
          b3.innerHTML = "3";
          input_b3 = b3.innerHTML;
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_a2 === "4" && input_d4 === "4") {
          b3.innerHTML = "4";
          input_b3 = b3.innerHTML;
        }
      }
    }
    if (input_b3 === null && input_b4 !== null && input_a3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b4 !== "1" && input_a3 !== "1") {
          if (input_c2 === "1" || input_c4 === "1") {
            b3.innerHTML = "1";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b4 !== "2" && input_a3 !== "2") {
          if (input_c2 === "2" || input_c4 === "2") {
            b3.innerHTML = "2";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b4 !== "3" && input_a3 !== "3") {
          if (input_c2 === "3" || input_c4 === "3") {
            b3.innerHTML = "3";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b4 !== "4" && input_a3 !== "4") {
          if (input_c2 === "4" || input_c4 === "4") {
            b3.innerHTML = "4";
            input_b3 = b3.innerHTML;
          }
        }
      }
    }
    if (input_b3 === null && input_b4 !== null && input_a4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b4 !== "1" && input_a4 !== "1") {
          if (input_c1 === "1" || input_c3 === "1") {
            b3.innerHTML = "1";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b4 !== "2" && input_a4 !== "2") {
          if (input_c1 === "2" || input_c3 === "2") {
            b3.innerHTML = "2";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b4 !== "3" && input_a4 !== "3") {
          if (input_c1 === "3" || input_c3 === "3") {
            b3.innerHTML = "3";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b4 !== "4" && input_a4 !== "4") {
          if (input_c1 === "4" || input_c3 === "4") {
            b3.innerHTML = "4";
            input_b3 = b3.innerHTML;
          }
        }
      }
    }
    if (input_b3 === null && input_b1 !== null && input_d1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b1 !== "1" && input_d1 !== "1") {
          if (input_c3 === "1" || input_c4 === "1") {
            b3.innerHTML = "1";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b1 !== "2" && input_d1 !== "2") {
          if (input_c3 === "2" || input_c4 === "2") {
            b3.innerHTML = "2";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b1 !== "3" && input_d1 !== "3") {
          if (input_c3 === "3" || input_c4 === "3") {
            b3.innerHTML = "3";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b1 !== "4" && input_d1 !== "4") {
          if (input_c3 === "4" || input_c4 === "4") {
            b3.innerHTML = "4";
            input_b3 = b3.innerHTML;
          }
        }
      }
    }
    if (input_b3 === null && input_b1 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        if (input_b1 !== "1" && input_d3 !== "1") {
          if (input_c1 === "1" || input_c2 === "1") {
            b3.innerHTML = "1";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        if (input_b1 !== "2" && input_d3 !== "2") {
          if (input_c1 === "2" || input_c2 === "2") {
            b3.innerHTML = "2";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        if (input_b1 !== "3" && input_d3 !== "3") {
          if (input_c1 === "3" || input_c2 === "3") {
            b3.innerHTML = "3";
            input_b3 = b3.innerHTML;
          }
        }
      }
      if (
        input_b3 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        if (input_b1 !== "4" && input_d3 !== "4") {
          if (input_c1 === "4" || input_c2 === "4") {
            b3.innerHTML = "4";
            input_b3 = b3.innerHTML;
          }
        }
      }
    }
  }

  if (input_b4 === null) {
    if (input_b2 !== null && input_b3 !== null && input_b1 !== null) {
      if (
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_b1 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1"
      ) {
        b4.innerHTML = "1";
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_b1 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2"
      ) {
        b4.innerHTML = "2";
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_b1 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3"
      ) {
        b4.innerHTML = "3";
        ("");
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_b1 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4"
      ) {
        b4.innerHTML = "4";
        input_b4 = b4.innerHTML;
      }
    } else if (input_b3 !== null && input_a3 !== null && input_a4 !== null) {
      if (
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1"
      ) {
        b4.innerHTML = "1";
        input_b4 = b4.innerHTML;
      } else if (
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2"
      ) {
        b4.innerHTML = "2";
        input_b4 = b4.innerHTML;
      } else if (
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3"
      ) {
        b4.innerHTML = "3";
        input_b4 = b4.innerHTML;
      } else if (
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4"
      ) {
        b4.innerHTML = "4";
        input_b4 = b4.innerHTML;
      }
    } else if (input_b2 !== null && input_d2 !== null && input_d4 !== null) {
      if (
        input_b2 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1"
      ) {
        b4.innerHTML = "1";
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2"
      ) {
        b4.innerHTML = "2";
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3"
      ) {
        b4.innerHTML = "3";
        input_b4 = b4.innerHTML;
      } else if (
        input_b2 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4"
      ) {
        b4.innerHTML = "4";
        input_b4 = b4.innerHTML;
      }
    }
    if (input_b4 === null && input_b2 !== null) {
      if (
        input_b2 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_d1 === "1" || input_d3 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b2 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_d1 === "2" || input_d3 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b2 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_d1 === "3" || input_d3 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b2 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_d1 === "4" || input_d3 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_b3 !== null) {
      if (
        input_b3 !== "1" &&
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a1 === "1" || input_a2 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b3 !== "2" &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a1 === "2" || input_a2 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b3 !== "3" &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a1 === "3" || input_a2 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b3 !== "4" &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a1 === "4" || input_a2 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_a1 !== null && input_d1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a1 === "1" && input_d1 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a1 === "2" && input_d1 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a1 === "3" && input_d1 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a1 === "4" && input_d1 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_a1 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a1 === "1" && input_d3 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a1 === "2" && input_d3 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a1 === "3" && input_d3 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a1 === "4" && input_d3 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_a2 !== null && input_d1 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a2 === "1" && input_d1 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a2 === "2" && input_d1 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a2 === "3" && input_d1 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a2 === "4" && input_d1 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_a2 !== null && input_d3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a2 === "1" && input_d3 === "1") {
          b4.innerHTML = "1";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a2 === "2" && input_d3 === "2") {
          b4.innerHTML = "2";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a2 === "3" && input_d3 === "3") {
          b4.innerHTML = "3";
          input_b4 = b4.innerHTML;
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a2 === "4" && input_d3 === "4") {
          b4.innerHTML = "4";
          input_b4 = b4.innerHTML;
        }
      }
    }
    if (input_b4 === null && input_b3 !== null && input_a3 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b3 !== "1" && input_a3 !== "1") {
          if (input_c2 === "1" || input_c4 === "1") {
            b4.innerHTML = "1";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b3 !== "2" && input_a3 !== "2") {
          if (input_c2 === "2" || input_c4 === "2") {
            b4.innerHTML = "2";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b3 !== "3" && input_a3 !== "3") {
          if (input_c2 === "3" || input_c4 === "3") {
            b4.innerHTML = "3";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b3 !== "4" && input_a3 !== "4") {
          if (input_c2 === "4" || input_c4 === "4") {
            b4.innerHTML = "4";
            input_b4 = b4.innerHTML;
          }
        }
      }
    }
    if (input_b4 === null && input_b3 !== null && input_a4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b3 !== "1" && input_a4 !== "1") {
          if (input_c1 === "1" || input_c3 === "1") {
            b4.innerHTML = "1";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b3 !== "2" && input_a4 !== "2") {
          if (input_c1 === "2" || input_c3 === "2") {
            b4.innerHTML = "2";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b3 !== "3" && input_a4 !== "3") {
          if (input_c1 === "3" || input_c3 === "3") {
            b4.innerHTML = "3";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b3 !== "4" && input_a4 !== "4") {
          if (input_c1 === "4" || input_c3 === "4") {
            b4.innerHTML = "4";
            input_b4 = b4.innerHTML;
          }
        }
      }
    }
    if (input_b4 === null && input_b2 !== null && input_d2 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b2 !== "1" && input_d2 !== "1") {
          if (input_c3 === "1" || input_c4 === "1") {
            b4.innerHTML = "1";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b2 !== "2" && input_d2 !== "2") {
          if (input_c3 === "2" || input_c4 === "2") {
            b4.innerHTML = "2";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b2 !== "3" && input_d2 !== "3") {
          if (input_c3 === "3" || input_c4 === "3") {
            b4.innerHTML = "3";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b2 !== "4" && input_d2 !== "4") {
          if (input_c3 === "4" || input_c4 === "4") {
            b4.innerHTML = "4";
            input_b4 = b4.innerHTML;
          }
        }
      }
    }
    if (input_b4 === null && input_b2 !== null && input_d4 !== null) {
      if (
        input_b1 !== "1" &&
        input_b2 !== "1" &&
        input_b3 !== "1" &&
        input_a3 !== "1" &&
        input_a4 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_b2 !== "1" && input_d4 !== "1") {
          if (input_a1 === "1" || input_a2 === "1") {
            b4.innerHTML = "1";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "2" &&
        input_b2 !== "2" &&
        input_b3 !== "2" &&
        input_a3 !== "2" &&
        input_a4 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_b2 !== "2" && input_d4 !== "2") {
          if (input_a1 === "2" || input_a2 === "2") {
            b4.innerHTML = "2";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "3" &&
        input_b2 !== "3" &&
        input_b3 !== "3" &&
        input_a3 !== "3" &&
        input_a4 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_b2 !== "3" && input_d4 !== "3") {
          if (input_a1 === "3" || input_a2 === "3") {
            b4.innerHTML = "3";
            input_b4 = b4.innerHTML;
          }
        }
      }
      if (
        input_b4 === null &&
        input_b1 !== "4" &&
        input_b2 !== "4" &&
        input_b3 !== "4" &&
        input_a3 !== "4" &&
        input_a4 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_b2 !== "4" && input_d4 !== "4") {
          if (input_a1 === "4" || input_a2 === "4") {
            b4.innerHTML = "4";
            input_b4 = b4.innerHTML;
          }
        }
      }
    }
  }

  if (input_c1 === null) {
    if (input_c2 !== null && input_c3 !== null && input_c4 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        c1.innerHTML = "1";
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        c1.innerHTML = "2";
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        c1.innerHTML = "3";
        ("");
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        c1.innerHTML = "4";
        input_c1 = c1.innerHTML;
      }
    } else if (input_c2 !== null && input_d1 !== null && input_d2 !== null) {
      if (
        input_c2 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        c1.innerHTML = "1";
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        c1.innerHTML = "2";
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        c1.innerHTML = "3";
        input_c1 = c1.innerHTML;
      } else if (
        input_c2 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        c1.innerHTML = "4";
        input_c1 = c1.innerHTML;
      }
    } else if (input_c3 !== null && input_a1 !== null && input_a3 !== null) {
      if (
        input_c3 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1"
      ) {
        c1.innerHTML = "1";
        input_c1 = c1.innerHTML;
      } else if (
        input_c3 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2"
      ) {
        c1.innerHTML = "2";
        input_c1 = c1.innerHTML;
      } else if (
        input_c3 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3"
      ) {
        c1.innerHTML = "3";
        input_c1 = c1.innerHTML;
      } else if (
        input_c3 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4"
      ) {
        c1.innerHTML = "4";
        input_c1 = c1.innerHTML;
      }
    }
    if (input_c1 === null && input_c2 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        if (input_d3 === "1" || input_d4 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        if (input_d3 === "2" || input_d4 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        if (input_d3 === "3" || input_d4 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        if (input_d3 === "4" || input_d4 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_c3 !== null) {
      if (
        input_c3 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        if (input_a2 === "1" || input_a4 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c3 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        if (input_a2 === "2" || input_a4 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c3 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        if (input_a2 === "3" || input_a4 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c3 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        if (input_a2 === "4" || input_a4 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_a2 !== null && input_d3 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a2 === "1" && input_d3 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a2 === "2" && input_d3 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a2 === "3" && input_d3 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a2 === "4" && input_d3 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_a2 !== null && input_d4 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a2 === "1" && input_d4 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a2 === "2" && input_d4 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a2 === "3" && input_d4 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a2 === "4" && input_d4 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_a4 !== null && input_d3 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a4 === "1" && input_d3 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a4 === "2" && input_d3 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a4 === "3" && input_d3 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a4 === "4" && input_d3 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_a4 !== null && input_d4 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a4 === "1" && input_d4 === "1") {
          c1.innerHTML = "1";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a4 === "2" && input_d4 === "2") {
          c1.innerHTML = "2";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a4 === "3" && input_d4 === "3") {
          c1.innerHTML = "3";
          input_c1 = c1.innerHTML;
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a4 === "4" && input_d4 === "4") {
          c1.innerHTML = "4";
          input_c1 = c1.innerHTML;
        }
      }
    }
    if (input_c1 === null && input_c2 !== null && input_d1 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c2 !== "1" && input_d1 !== "1") {
          if (input_b2 === "1" || input_b4 === "1") {
            c1.innerHTML = "1";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c2 !== "2" && input_d1 !== "2") {
          if (input_b2 === "2" || input_b4 === "2") {
            c1.innerHTML = "2";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c2 !== "3" && input_d1 !== "3") {
          if (input_b2 === "3" || input_b4 === "3") {
            c1.innerHTML = "3";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c2 !== "4" && input_d1 !== "4") {
          if (input_b2 === "4" || input_b4 === "4") {
            c1.innerHTML = "4";
            input_c1 = c1.innerHTML;
          }
        }
      }
    }
    if (input_c1 === null && input_c2 !== null && input_d2 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c2 !== "1" && input_d2 !== "1") {
          if (input_b1 === "1" || input_b3 === "1") {
            c1.innerHTML = "1";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c2 !== "2" && input_d2 !== "2") {
          if (input_b1 === "2" || input_b3 === "2") {
            c1.innerHTML = "2";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c2 !== "3" && input_d2 !== "3") {
          if (input_b1 === "3" || input_b3 === "3") {
            c1.innerHTML = "3";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c2 !== "4" && input_d2 !== "4") {
          if (input_b1 === "4" || input_b3 === "4") {
            c1.innerHTML = "4";
            input_c1 = c1.innerHTML;
          }
        }
      }
    }
    if (input_c1 === null && input_c3 !== null && input_a1 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c3 !== "1" && input_a1 !== "1") {
          if (input_b4 === "1" || input_b3 === "1") {
            c1.innerHTML = "1";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c3 !== "2" && input_a1 !== "2") {
          if (input_b4 === "2" || input_b3 === "2") {
            c1.innerHTML = "2";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c3 !== "3" && input_a1 !== "3") {
          if (input_b4 === "3" || input_b3 === "3") {
            c1.innerHTML = "3";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c3 !== "4" && input_a1 !== "4") {
          if (input_b4 === "4" || input_b3 === "4") {
            c1.innerHTML = "4";
            input_c1 = c1.innerHTML;
          }
        }
      }
    }
    if (input_c1 === null && input_c3 !== null && input_a3 !== null) {
      if (
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a3 !== "1" &&
        input_a1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c3 !== "1" && input_a3 !== "1") {
          if (input_b1 === "1" || input_b2 === "1") {
            c1.innerHTML = "1";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a3 !== "2" &&
        input_a1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c3 !== "2" && input_a3 !== "2") {
          if (input_b1 === "2" || input_b2 === "2") {
            c1.innerHTML = "2";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a3 !== "3" &&
        input_a1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c3 !== "3" && input_a3 !== "3") {
          if (input_b1 === "3" || input_b2 === "3") {
            c1.innerHTML = "3";
            input_c1 = c1.innerHTML;
          }
        }
      }
      if (
        input_c1 === null &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a3 !== "4" &&
        input_a1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c3 !== "4" && input_a3 !== "4") {
          if (input_b1 === "4" || input_b2 === "4") {
            c1.innerHTML = "4";
            input_c1 = c1.innerHTML;
          }
        }
      }
    }
  }

  if (input_c2 === null) {
    if (input_c1 !== null && input_c3 !== null && input_c4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        c2.innerHTML = "1";
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        c2.innerHTML = "2";
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        c2.innerHTML = "3";
        ("");
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        c2.innerHTML = "4";
        input_c2 = c2.innerHTML;
      }
    } else if (input_c1 !== null && input_d1 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        c2.innerHTML = "1";
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        c2.innerHTML = "2";
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        c2.innerHTML = "3";
        input_c2 = c2.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        c2.innerHTML = "4";
        input_c2 = c2.innerHTML;
      }
    } else if (input_c4 !== null && input_a2 !== null && input_a4 !== null) {
      if (
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_c3 !== "1" &&
        input_c1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        c2.innerHTML = "1";
        input_c2 = c2.innerHTML;
      } else if (
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_c3 !== "2" &&
        input_c1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        c2.innerHTML = "2";
        input_c2 = c2.innerHTML;
      } else if (
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_c3 !== "3" &&
        input_c1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        c2.innerHTML = "3";
        input_c2 = c2.innerHTML;
      } else if (
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_c3 !== "4" &&
        input_c1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        c2.innerHTML = "4";
        input_c2 = c2.innerHTML;
      }
    }
    if (input_c2 === null && input_c1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        if (input_d3 === "1" || input_d4 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        if (input_d3 === "2" || input_d4 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        if (input_d3 === "3" || input_d4 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        if (input_d3 === "4" || input_d4 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_c4 !== null) {
      if (
        input_c4 !== "1" &&
        input_c3 !== "1" &&
        input_c1 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        if (input_a1 === "1" || input_a3 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c4 !== "2" &&
        input_c3 !== "2" &&
        input_c1 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        if (input_a1 === "2" || input_a3 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c4 !== "3" &&
        input_c3 !== "3" &&
        input_c1 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        if (input_a1 === "3" || input_a3 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c4 !== "4" &&
        input_c3 !== "4" &&
        input_c1 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        if (input_a1 === "4" || input_a3 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_a1 !== null && input_d3 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a1 === "1" && input_d3 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a1 === "2" && input_d3 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a1 === "3" && input_d3 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a1 === "4" && input_d3 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_a3 !== null && input_d3 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a3 === "1" && input_d3 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a3 === "2" && input_d3 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a3 === "3" && input_d3 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a3 === "4" && input_d3 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_a1 !== null && input_d4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a1 === "1" && input_d4 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a1 === "2" && input_d4 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a1 === "3" && input_d4 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a1 === "4" && input_d4 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_a3 !== null && input_d4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_a3 === "1" && input_d4 === "1") {
          c2.innerHTML = "1";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_a3 === "2" && input_d4 === "2") {
          c2.innerHTML = "2";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_a3 === "3" && input_d4 === "3") {
          c2.innerHTML = "3";
          input_c2 = c2.innerHTML;
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_a3 === "4" && input_d4 === "4") {
          c2.innerHTML = "4";
          input_c2 = c2.innerHTML;
        }
      }
    }
    if (input_c2 === null && input_c1 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c1 !== "1" && input_d1 !== "1") {
          if (input_b2 === "1" || input_b4 === "1") {
            c2.innerHTML = "1";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c1 !== "2" && input_d1 !== "2") {
          if (input_b2 === "2" || input_b4 === "2") {
            c2.innerHTML = "2";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c1 !== "3" && input_d1 !== "3") {
          if (input_b2 === "3" || input_b4 === "3") {
            c2.innerHTML = "3";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c1 !== "4" && input_d1 !== "4") {
          if (input_b2 === "4" || input_b4 === "4") {
            c2.innerHTML = "4";
            input_c2 = c2.innerHTML;
          }
        }
      }
    }
    if (input_c2 === null && input_c1 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c1 !== "1" && input_d2 !== "1") {
          if (input_b1 === "1" || input_b3 === "1") {
            c2.innerHTML = "1";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c1 !== "2" && input_d2 !== "2") {
          if (input_b1 === "2" || input_b3 === "2") {
            c2.innerHTML = "2";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c1 !== "3" && input_d2 !== "3") {
          if (input_b1 === "3" || input_b3 === "3") {
            c2.innerHTML = "3";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c1 !== "4" && input_d2 !== "4") {
          if (input_b1 === "4" || input_b3 === "4") {
            c2.innerHTML = "4";
            input_c2 = c2.innerHTML;
          }
        }
      }
    }
    if (input_c2 === null && input_c4 !== null && input_a2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c4 !== "1" && input_a2 !== "1") {
          if (input_b3 === "1" || input_b4 === "1") {
            c2.innerHTML = "1";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c4 !== "2" && input_a2 !== "2") {
          if (input_b3 === "2" || input_b4 === "2") {
            c2.innerHTML = "2";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c4 !== "3" && input_a2 !== "3") {
          if (input_b3 === "3" || input_b4 === "3") {
            c2.innerHTML = "3";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c4 !== "4" && input_a2 !== "4") {
          if (input_b3 === "4" || input_b4 === "4") {
            c2.innerHTML = "4";
            input_c2 = c2.innerHTML;
          }
        }
      }
    }
    if (input_c2 === null && input_c4 !== null && input_a4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        if (input_c4 !== "1" && input_a4 !== "1") {
          if (input_b1 === "1" || input_b2 === "1") {
            c2.innerHTML = "1";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        if (input_c4 !== "2" && input_a4 !== "2") {
          if (input_b1 === "2" || input_b2 === "2") {
            c2.innerHTML = "2";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        if (input_c4 !== "3" && input_a4 !== "3") {
          if (input_b1 === "3" || input_b2 === "3") {
            c2.innerHTML = "3";
            input_c2 = c2.innerHTML;
          }
        }
      }
      if (
        input_c2 === null &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        if (input_c4 !== "4" && input_a4 !== "4") {
          if (input_b1 === "4" || input_b2 === "4") {
            c2.innerHTML = "4";
            input_c2 = c2.innerHTML;
          }
        }
      }
    }
  }

  if (input_c3 === null) {
    if (input_c1 !== null && input_c2 !== null && input_c4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        c3.innerHTML = "1";
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        c3.innerHTML = "2";
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        c3.innerHTML = "3";
        ("");
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        c3.innerHTML = "4";
        input_c3 = c3.innerHTML;
      }
    } else if (input_c4 !== null && input_d3 !== null && input_d4 !== null) {
      if (
        input_c4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        c3.innerHTML = "1";
        input_c3 = c3.innerHTML;
      } else if (
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        c3.innerHTML = "2";
        input_c3 = c3.innerHTML;
      } else if (
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        c3.innerHTML = "3";
        input_c3 = c3.innerHTML;
      } else if (
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        c3.innerHTML = "4";
        input_c3 = c3.innerHTML;
      }
    } else if (input_c1 !== null && input_a1 !== null && input_a3 !== null) {
      if (
        input_c1 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        c3.innerHTML = "1";
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        c3.innerHTML = "2";
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        c3.innerHTML = "3";
        input_c3 = c3.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        c3.innerHTML = "4";
        input_c3 = c3.innerHTML;
      }
    }
    if (input_c3 === null && input_c1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        if (input_a2 === "1" || input_a4 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        if (input_a2 === "2" || input_a4 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        if (input_a2 === "3" || input_a4 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        if (input_a2 === "4" || input_a4 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_c4 !== null) {
      if (
        input_c4 !== "1" &&
        input_c2 !== "1" &&
        input_c1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1"
      ) {
        if (input_d1 === "1" || input_d2 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c4 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2"
      ) {
        if (input_d1 === "2" || input_d2 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c4 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3"
      ) {
        if (input_d1 === "3" || input_d2 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c4 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4"
      ) {
        if (input_d1 === "4" || input_d2 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_a2 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a2 === "1" && input_d1 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a2 === "2" && input_d1 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a2 === "3" && input_d1 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a2 === "4" && input_d1 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_a2 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a2 === "1" && input_d2 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a2 === "2" && input_d2 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a2 === "3" && input_d2 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a2 === "4" && input_d2 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_a4 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a4 === "1" && input_d1 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a4 === "2" && input_d1 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a4 === "3" && input_d1 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a4 === "4" && input_d1 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_a4 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a4 === "1" && input_d2 === "1") {
          c3.innerHTML = "1";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a4 === "2" && input_d2 === "2") {
          c3.innerHTML = "2";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a4 === "3" && input_d2 === "3") {
          c3.innerHTML = "3";
          input_c3 = c3.innerHTML;
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a4 === "4" && input_d2 === "4") {
          c3.innerHTML = "4";
          input_c3 = c3.innerHTML;
        }
      }
    }
    if (input_c3 === null && input_c4 !== null && input_d3 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c4 !== "1" && input_d3 !== "1") {
          if (input_b2 === "1" || input_b4 === "1") {
            c3.innerHTML = "1";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c4 !== "2" && input_d3 !== "2") {
          if (input_b2 === "2" || input_b4 === "2") {
            c3.innerHTML = "2";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c4 !== "3" && input_d3 !== "3") {
          if (input_b2 === "3" || input_b4 === "3") {
            c3.innerHTML = "3";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c4 !== "4" && input_d3 !== "4") {
          if (input_b2 === "4" || input_b4 === "4") {
            c3.innerHTML = "4";
            input_c3 = c3.innerHTML;
          }
        }
      }
    }
    if (input_c3 === null && input_c4 !== null && input_d4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c4 !== "1" && input_d4 !== "1") {
          if (input_b1 === "1" || input_b3 === "1") {
            c3.innerHTML = "1";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c4 !== "2" && input_d4 !== "2") {
          if (input_b1 === "2" || input_b3 === "2") {
            c3.innerHTML = "2";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c4 !== "3" && input_d4 !== "3") {
          if (input_b1 === "3" || input_b3 === "3") {
            c3.innerHTML = "3";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c4 !== "4" && input_d4 !== "4") {
          if (input_b1 === "4" || input_b3 === "4") {
            c3.innerHTML = "4";
            input_c3 = c3.innerHTML;
          }
        }
      }
    }
    if (input_c3 === null && input_c1 !== null && input_a1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c1 !== "1" && input_a1 !== "1") {
          if (input_b3 === "1" || input_b4 === "1") {
            c3.innerHTML = "1";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c1 !== "2" && input_a1 !== "2") {
          if (input_b3 === "2" || input_b4 === "2") {
            c3.innerHTML = "2";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c1 !== "3" && input_a1 !== "3") {
          if (input_b3 === "3" || input_b4 === "3") {
            c3.innerHTML = "3";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c1 !== "4" && input_a1 !== "4") {
          if (input_b3 === "4" || input_b4 === "4") {
            c3.innerHTML = "4";
            input_c3 = c3.innerHTML;
          }
        }
      }
    }
    if (input_c3 === null && input_c1 !== null && input_a3 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c4 !== "1" &&
        input_a1 !== "1" &&
        input_a3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c1 !== "1" && input_a3 !== "1") {
          if (input_b1 === "1" || input_b2 === "1") {
            c3.innerHTML = "1";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c4 !== "2" &&
        input_a1 !== "2" &&
        input_a3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c1 !== "2" && input_a3 !== "2") {
          if (input_b1 === "2" || input_b2 === "2") {
            c3.innerHTML = "2";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c4 !== "3" &&
        input_a1 !== "3" &&
        input_a3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c1 !== "3" && input_a3 !== "3") {
          if (input_b1 === "3" || input_b2 === "3") {
            c3.innerHTML = "3";
            input_c3 = c3.innerHTML;
          }
        }
      }
      if (
        input_c3 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c4 !== "4" &&
        input_a1 !== "4" &&
        input_a3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c1 !== "4" && input_a3 !== "4") {
          if (input_b1 === "4" || input_b2 === "4") {
            c3.innerHTML = "4";
            input_c3 = c3.innerHTML;
          }
        }
      }
    }
  }

  if (input_c4 === null) {
    if (input_c1 !== null && input_c3 !== null && input_c2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_c2 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        c4.innerHTML = "1";
        input_c4 = c4.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_c2 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        c4.innerHTML = "2";
        input_c4 = c4.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_c2 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        c4.innerHTML = "3";
        ("");
        input_c4 = c4.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_c2 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        c4.innerHTML = "4";
        input_c4 = c4.innerHTML;
      }
    } else if (input_c3 !== null && input_d3 !== null && input_d4 !== null) {
      if (
        input_c3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        c4.innerHTML = "1";
        input_c4 = c4.innerHTML;
      } else if (
        input_c3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        c4.innerHTML = "2";
        input_c4 = c4.innerHTML;
      } else if (
        input_c3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        c4.innerHTML = "3";
        input_c4 = c4.innerHTML;
      } else if (
        input_c3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        c4.innerHTML = "4";
        input_c4 = c4.innerHTML;
      }
    } else if (input_c2 !== null && input_a2 !== null && input_a4 !== null) {
      if (
        input_c2 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1"
      ) {
        c4.innerHTML = "1";
        input_c4 = c4.innerHTML;
      } else if (
        input_c2 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2"
      ) {
        c4.innerHTML = "2";
        input_c4 = c4.innerHTML;
      } else if (
        input_c2 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3"
      ) {
        c4.innerHTML = "3";
        input_c4 = c4.innerHTML;
      } else if (
        input_c2 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4"
      ) {
        c4.innerHTML = "4";
        input_c4 = c4.innerHTML;
      }
    }
    if (input_c4 === null && input_c2 !== null) {
      if (
        input_c2 !== "1" &&
        input_c1 !== "1" &&
        input_c3 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        if (input_a1 === "1" || input_a3 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c2 !== "2" &&
        input_c1 !== "2" &&
        input_c3 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        if (input_a1 === "2" || input_a3 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c2 !== "3" &&
        input_c1 !== "3" &&
        input_c3 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        if (input_a1 === "3" || input_a3 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c2 !== "4" &&
        input_c1 !== "4" &&
        input_c3 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        if (input_a1 === "4" || input_a3 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_c3 !== null) {
      if (
        input_c3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1"
      ) {
        if (input_d1 === "1" || input_d2 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2"
      ) {
        if (input_d1 === "2" || input_d2 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3"
      ) {
        if (input_d1 === "3" || input_d2 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4"
      ) {
        if (input_d1 === "4" || input_d2 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_a1 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a1 === "1" && input_d1 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a1 === "2" && input_d1 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a1 === "3" && input_d1 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a1 === "4" && input_d1 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_a1 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a1 === "1" && input_d2 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a1 === "2" && input_d2 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a1 === "3" && input_d2 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a1 === "4" && input_d2 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_a3 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a3 === "1" && input_d1 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a3 === "2" && input_d1 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a3 === "3" && input_d1 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a3 === "4" && input_d1 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_a3 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_a3 === "1" && input_d2 === "1") {
          c4.innerHTML = "1";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_a3 === "2" && input_d2 === "2") {
          c4.innerHTML = "2";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_a3 === "3" && input_d2 === "3") {
          c4.innerHTML = "3";
          input_c4 = c4.innerHTML;
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_a3 === "4" && input_d2 === "4") {
          c4.innerHTML = "4";
          input_c4 = c4.innerHTML;
        }
      }
    }
    if (input_c4 === null && input_c3 !== null && input_d3 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c3 !== "1" && input_d3 !== "1") {
          if (input_b2 === "1" || input_b4 === "1") {
            c4.innerHTML = "1";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c3 !== "2" && input_d3 !== "2") {
          if (input_b2 === "2" || input_b4 === "2") {
            c4.innerHTML = "2";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c3 !== "3" && input_d3 !== "3") {
          if (input_b2 === "3" || input_b4 === "3") {
            c4.innerHTML = "3";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c3 !== "4" && input_d3 !== "4") {
          if (input_b2 === "4" || input_b4 === "4") {
            c4.innerHTML = "4";
            input_c4 = c4.innerHTML;
          }
        }
      }
    }
    if (input_c4 === null && input_c3 !== null && input_d4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c3 !== "1" && input_d4 !== "1") {
          if (input_b1 === "1" || input_b3 === "1") {
            c4.innerHTML = "1";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c3 !== "2" && input_d4 !== "2") {
          if (input_b1 === "2" || input_b3 === "2") {
            c4.innerHTML = "2";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c3 !== "3" && input_d4 !== "3") {
          if (input_b1 === "3" || input_b3 === "3") {
            c4.innerHTML = "3";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c3 !== "4" && input_d4 !== "4") {
          if (input_b1 === "4" || input_b3 === "4") {
            c4.innerHTML = "4";
            input_c4 = c4.innerHTML;
          }
        }
      }
    }
    if (input_c4 === null && input_c2 !== null && input_a2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c2 !== "1" && input_a2 !== "1") {
          if (input_b4 === "1" || input_b3 === "1") {
            c4.innerHTML = "1";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c2 !== "2" && input_a2 !== "2") {
          if (input_b4 === "2" || input_b3 === "2") {
            c4.innerHTML = "2";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c2 !== "3" && input_a2 !== "3") {
          if (input_b4 === "3" || input_b3 === "3") {
            c4.innerHTML = "3";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c2 !== "4" && input_a2 !== "4") {
          if (input_b4 === "4" || input_b3 === "4") {
            c4.innerHTML = "4";
            input_c4 = c4.innerHTML;
          }
        }
      }
    }
    if (input_c4 === null && input_c2 !== null && input_a4 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_c3 !== "1" &&
        input_a2 !== "1" &&
        input_a4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        if (input_c2 !== "1" && input_a4 !== "1") {
          if (input_b1 === "1" || input_b2 === "1") {
            c4.innerHTML = "1";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_c3 !== "2" &&
        input_a2 !== "2" &&
        input_a4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        if (input_c2 !== "2" && input_a4 !== "2") {
          if (input_b1 === "2" || input_b2 === "2") {
            c4.innerHTML = "2";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_c3 !== "3" &&
        input_a2 !== "3" &&
        input_a4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        if (input_c2 !== "3" && input_a4 !== "3") {
          if (input_b1 === "3" || input_b2 === "3") {
            c4.innerHTML = "3";
            input_c4 = c4.innerHTML;
          }
        }
      }
      if (
        input_c4 === null &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_c3 !== "4" &&
        input_a2 !== "4" &&
        input_a4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        if (input_c2 !== "4" && input_a4 !== "4") {
          if (input_b1 === "4" || input_b2 === "4") {
            c4.innerHTML = "4";
            input_c4 = c4.innerHTML;
          }
        }
      }
    }
  }

  if (input_d1 === null) {
    if (input_d2 !== null && input_d3 !== null && input_d4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        d1.innerHTML = "1";
        input_d1 = d1.innerHTML;
      } else if (
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        d1.innerHTML = "2";
        input_d1 = d1.innerHTML;
      } else if (
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        d1.innerHTML = "3";
        ("");
        input_d1 = d1.innerHTML;
      } else if (
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        d1.innerHTML = "4";
        input_d1 = d1.innerHTML;
      }
    } else if (input_c1 !== null && input_c2 !== null && input_d2 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        d1.innerHTML = "1";
        input_d1 = d1.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        d1.innerHTML = "2";
        input_d1 = d1.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        d1.innerHTML = "3";
        input_d1 = d1.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        d1.innerHTML = "4";
        input_d1 = d1.innerHTML;
      }
    } else if (input_d3 !== null && input_b1 !== null && input_b3 !== null) {
      if (
        input_d3 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        d1.innerHTML = "1";
        input_d1 = d1.innerHTML;
      } else if (
        input_d3 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        d1.innerHTML = "2";
        input_d1 = d1.innerHTML;
      } else if (
        input_d3 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        d1.innerHTML = "3";
        input_d1 = d1.innerHTML;
      } else if (
        input_d3 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        d1.innerHTML = "4";
        input_d1 = d1.innerHTML;
      }
    }
    if (input_d1 === null && input_d2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        if (input_c3 === "1" || input_c4 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        if (input_c3 === "2" || input_c4 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        if (input_c3 === "3" || input_c4 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        if (input_c3 === "4" || input_c4 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_d3 !== null) {
      if (
        input_d3 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        if (input_b2 === "1" || input_b4 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d3 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        if (input_b2 === "2" || input_b4 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d3 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        if (input_b2 === "3" || input_b4 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d3 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        if (input_b2 === "4" || input_b4 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_b2 !== null && input_c3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b2 === "1" && input_c3 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b2 === "2" && input_c3 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b2 === "3" && input_c3 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b2 === "4" && input_c3 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_b2 !== null && input_c4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b2 === "1" && input_c4 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b2 === "2" && input_c4 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b2 === "3" && input_c4 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b2 === "4" && input_c4 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_b4 !== null && input_c3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b4 === "1" && input_c3 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b4 === "2" && input_c3 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b4 === "3" && input_c3 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b4 === "4" && input_c3 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_b4 !== null && input_c4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b4 === "1" && input_c4 === "1") {
          d1.innerHTML = "1";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b4 === "2" && input_c4 === "2") {
          d1.innerHTML = "2";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b4 === "3" && input_c4 === "3") {
          d1.innerHTML = "3";
          input_d1 = d1.innerHTML;
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b4 === "4" && input_c4 === "4") {
          d1.innerHTML = "4";
          input_d1 = d1.innerHTML;
        }
      }
    }
    if (input_d1 === null && input_d2 !== null && input_c1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d2 !== "1" && input_c1 !== "1") {
          if (input_a2 === "1" || input_a4 === "1") {
            d1.innerHTML = "1";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d2 !== "2" && input_c1 !== "2") {
          if (input_a2 === "2" || input_a4 === "2") {
            d1.innerHTML = "2";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d2 !== "3" && input_c1 !== "3") {
          if (input_a2 === "3" || input_a4 === "3") {
            d1.innerHTML = "3";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d2 !== "4" && input_c1 !== "4") {
          if (input_a2 === "4" || input_a4 === "4") {
            d1.innerHTML = "4";
            input_d1 = d1.innerHTML;
          }
        }
      }
    }
    if (input_d1 === null && input_d2 !== null && input_c2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d2 !== "1" && input_c2 !== "1") {
          if (input_a1 === "1" || input_a3 === "1") {
            d1.innerHTML = "1";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d2 !== "2" && input_c2 !== "2") {
          if (input_a1 === "2" || input_a3 === "2") {
            d1.innerHTML = "2";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d2 !== "3" && input_c2 !== "3") {
          if (input_a1 === "3" || input_a3 === "3") {
            d1.innerHTML = "3";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d2 !== "4" && input_c2 !== "4") {
          if (input_a1 === "4" || input_a3 === "4") {
            d1.innerHTML = "4";
            input_d1 = d1.innerHTML;
          }
        }
      }
    }
    if (input_d1 === null && input_d3 !== null && input_b1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d3 !== "1" && input_b1 !== "1") {
          if (input_a3 === "1" || input_a4 === "1") {
            d1.innerHTML = "1";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d3 !== "2" && input_b1 !== "2") {
          if (input_a3 === "2" || input_a4 === "2") {
            d1.innerHTML = "2";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d3 !== "3" && input_b1 !== "3") {
          if (input_a3 === "3" || input_a4 === "3") {
            d1.innerHTML = "3";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d3 !== "4" && input_b1 !== "4") {
          if (input_a3 === "4" || input_a4 === "4") {
            d1.innerHTML = "4";
            input_d1 = d1.innerHTML;
          }
        }
      }
    }
    if (input_d3 !== null && input_b3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d3 !== "1" && input_b3 !== "1") {
          if (input_a1 === "1" || input_a2 === "1") {
            d1.innerHTML = "1";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d3 !== "2" && input_b3 !== "2") {
          if (input_a1 === "2" || input_a2 === "2") {
            d1.innerHTML = "2";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d3 !== "3" && input_b3 !== "3") {
          if (input_a1 === "3" || input_a2 === "3") {
            d1.innerHTML = "3";
            input_d1 = d1.innerHTML;
          }
        }
      }
      if (
        input_d1 === null &&
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d3 !== "4" && input_b3 !== "4") {
          if (input_a1 === "4" || input_a2 === "4") {
            d1.innerHTML = "4";
            input_d1 = d1.innerHTML;
          }
        }
      }
    }
  }

  if (input_d2 === null) {
    if (input_d1 !== null && input_d3 !== null && input_d4 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        d2.innerHTML = "1";
        input_d2 = d2.innerHTML;
      } else if (
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        d2.innerHTML = "2";
        input_d2 = d2.innerHTML;
      } else if (
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        d2.innerHTML = "3";
        ("");
        input_d2 = d2.innerHTML;
      } else if (
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        d2.innerHTML = "4";
        input_d2 = d2.innerHTML;
      }
    } else if (input_c1 !== null && input_c2 !== null && input_d1 !== null) {
      if (
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_d1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1"
      ) {
        d2.innerHTML = "1";
        input_d2 = d2.innerHTML;
      } else if (
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_d1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2"
      ) {
        d2.innerHTML = "2";
        input_d2 = d2.innerHTML;
      } else if (
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_d1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3"
      ) {
        d2.innerHTML = "3";
        input_d2 = d2.innerHTML;
      } else if (
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_d1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4"
      ) {
        d2.innerHTML = "4";
        input_d2 = d2.innerHTML;
      }
    } else if (input_d4 !== null && input_b2 !== null && input_b4 !== null) {
      if (
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        d2.innerHTML = "1";
        input_d2 = d2.innerHTML;
      } else if (
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        d2.innerHTML = "2";
        input_d2 = d2.innerHTML;
      } else if (
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        d2.innerHTML = "3";
        input_d2 = d2.innerHTML;
      } else if (
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        d2.innerHTML = "4";
        input_d2 = d2.innerHTML;
      }
    }
    if (input_d2 === null && input_d1 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1"
      ) {
        if (input_c3 === "1" || input_c4 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2"
      ) {
        if (input_c3 === "2" || input_c4 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3"
      ) {
        if (input_c3 === "3" || input_c4 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4"
      ) {
        if (input_c3 === "4" || input_c4 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_d4 !== null) {
      if (
        input_d4 !== "1" &&
        input_d3 !== "1" &&
        input_d1 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1"
      ) {
        if (input_b1 === "1" || input_b3 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d4 !== "2" &&
        input_d3 !== "2" &&
        input_d1 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2"
      ) {
        if (input_b1 === "2" || input_b3 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d4 !== "3" &&
        input_d3 !== "3" &&
        input_d1 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3"
      ) {
        if (input_b1 === "3" || input_b3 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d4 !== "4" &&
        input_d3 !== "4" &&
        input_d1 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4"
      ) {
        if (input_b1 === "4" || input_b3 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_b1 !== null && input_c3 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b1 === "1" && input_c3 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b1 === "2" && input_c3 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b1 === "3" && input_c3 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b1 === "4" && input_c3 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_b1 !== null && input_c4 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b1 === "1" && input_c4 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b1 === "2" && input_c4 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b1 === "3" && input_c4 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b1 === "4" && input_c4 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_b3 !== null && input_c3 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b3 === "1" && input_c3 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b3 === "2" && input_c3 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b3 === "3" && input_c3 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b3 === "4" && input_c3 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_b3 !== null && input_c4 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_b3 === "1" && input_c4 === "1") {
          d2.innerHTML = "1";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_b3 === "2" && input_c4 === "2") {
          d2.innerHTML = "2";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_b3 === "3" && input_c4 === "3") {
          d2.innerHTML = "3";
          input_d2 = d2.innerHTML;
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_b3 === "4" && input_c4 === "4") {
          d2.innerHTML = "4";
          input_d2 = d2.innerHTML;
        }
      }
    }
    if (input_d2 === null && input_d1 !== null && input_c1 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d1 !== "1" && input_c1 !== "1") {
          if (input_a2 === "1" || input_a4 === "1") {
            d2.innerHTML = "1";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d1 !== "2" && input_c1 !== "2") {
          if (input_a2 === "2" || input_a4 === "2") {
            d2.innerHTML = "2";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d1 !== "3" && input_c1 !== "3") {
          if (input_a2 === "3" || input_a4 === "3") {
            d2.innerHTML = "3";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d1 !== "4" && input_c1 !== "4") {
          if (input_a2 === "4" || input_a4 === "4") {
            d2.innerHTML = "4";
            input_d2 = d2.innerHTML;
          }
        }
      }
    }
    if (input_d2 === null && input_d1 !== null && input_c2 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d1 !== "1" && input_c2 !== "1") {
          if (input_a1 === "1" || input_a3 === "1") {
            d2.innerHTML = "1";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d1 !== "2" && input_c2 !== "2") {
          if (input_a1 === "2" || input_a3 === "2") {
            d2.innerHTML = "2";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d1 !== "3" && input_c2 !== "3") {
          if (input_a1 === "3" || input_a3 === "3") {
            d2.innerHTML = "3";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d1 !== "4" && input_c2 !== "4") {
          if (input_a1 === "4" || input_a3 === "4") {
            d2.innerHTML = "4";
            input_d2 = d2.innerHTML;
          }
        }
      }
    }
    if (input_d4 !== null && input_b2 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d4 !== "1" && input_b2 !== "1") {
          if (input_a3 === "1" || input_a4 === "1") {
            d2.innerHTML = "1";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d4 !== "2" && input_b2 !== "2") {
          if (input_a3 === "2" || input_a4 === "2") {
            d2.innerHTML = "2";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d4 !== "3" && input_b2 !== "3") {
          if (input_a3 === "3" || input_a4 === "3") {
            d2.innerHTML = "3";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d4 !== "4" && input_b2 !== "4") {
          if (input_a3 === "4" || input_a4 === "4") {
            d2.innerHTML = "4";
            input_d2 = d2.innerHTML;
          }
        }
      }
    }
    if (input_d2 === null && input_d4 !== null && input_b4 !== null) {
      if (
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_d4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c1 !== "1" &&
        input_c2 !== "1"
      ) {
        if (input_d4 !== "1" && input_b4 !== "1") {
          if (input_a1 === "1" || input_a2 === "1") {
            d2.innerHTML = "1";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_d4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c1 !== "2" &&
        input_c2 !== "2"
      ) {
        if (input_d4 !== "2" && input_b4 !== "2") {
          if (input_a1 === "2" || input_a2 === "2") {
            d2.innerHTML = "2";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_d4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c1 !== "3" &&
        input_c2 !== "3"
      ) {
        if (input_d4 !== "3" && input_b4 !== "3") {
          if (input_a1 === "3" || input_a2 === "3") {
            d2.innerHTML = "3";
            input_d2 = d2.innerHTML;
          }
        }
      }
      if (
        input_d2 === null &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_d4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c1 !== "4" &&
        input_c2 !== "4"
      ) {
        if (input_d4 !== "4" && input_b4 !== "4") {
          if (input_a1 === "4" || input_a2 === "4") {
            d2.innerHTML = "4";
            input_d2 = d2.innerHTML;
          }
        }
      }
    }
  }

  if (input_d3 === null) {
    if (input_d2 !== null && input_d1 !== null && input_d4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        d3.innerHTML = "1";
        input_d3 = d3.innerHTML;
      } else if (
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        d3.innerHTML = "2";
        input_d3 = d3.innerHTML;
      } else if (
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        d3.innerHTML = "3";
        ("");
        input_d3 = d3.innerHTML;
      } else if (
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        d3.innerHTML = "4";
        input_d3 = d3.innerHTML;
      }
    } else if (input_c3 !== null && input_c4 !== null && input_d4 !== null) {
      if (
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        d3.innerHTML = "1";
        input_d3 = d3.innerHTML;
      } else if (
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        d3.innerHTML = "2";
        input_d3 = d3.innerHTML;
      } else if (
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        d3.innerHTML = "3";
        input_d3 = d3.innerHTML;
      } else if (
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        d3.innerHTML = "4";
        input_d3 = d3.innerHTML;
      }
    } else if (input_d1 !== null && input_b1 !== null && input_b3 !== null) {
      if (
        input_d1 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        d3.innerHTML = "1";
        input_d3 = d3.innerHTML;
      } else if (
        input_d1 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        d3.innerHTML = "2";
        input_d3 = d3.innerHTML;
      } else if (
        input_d1 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        d3.innerHTML = "3";
        input_d3 = d3.innerHTML;
      } else if (
        input_d1 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        d3.innerHTML = "4";
        input_d3 = d3.innerHTML;
      }
    }
    if (input_d3 === null && input_d1 !== null) {
      if (
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_d4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        if (input_b2 === "1" || input_b4 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_d4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        if (input_b2 === "2" || input_b4 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_d4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        if (input_b2 === "3" || input_b4 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_d4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        if (input_b2 === "4" || input_b4 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_d4 !== null) {
      if (
        input_d4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1"
      ) {
        if (input_c1 === "1" || input_c2 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2"
      ) {
        if (input_c1 === "2" || input_c2 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3"
      ) {
        if (input_c1 === "3" || input_c2 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4"
      ) {
        if (input_c1 === "4" || input_c2 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_b2 !== null && input_c1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b2 === "1" && input_c1 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b2 === "2" && input_c1 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b2 === "3" && input_c1 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b2 === "4" && input_c1 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_b2 !== null && input_c2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b2 === "1" && input_c2 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b2 === "2" && input_c2 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b2 === "3" && input_c2 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b2 === "4" && input_c2 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_b4 !== null && input_c1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b4 === "1" && input_c1 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b4 === "2" && input_c1 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b4 === "3" && input_c1 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b4 === "4" && input_c1 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_b4 !== null && input_c2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b4 === "1" && input_c2 === "1") {
          d3.innerHTML = "1";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b4 === "2" && input_c2 === "2") {
          d3.innerHTML = "2";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b4 === "3" && input_c2 === "3") {
          d3.innerHTML = "3";
          input_d3 = d3.innerHTML;
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b4 === "4" && input_c2 === "4") {
          d3.innerHTML = "4";
          input_d3 = d3.innerHTML;
        }
      }
    }
    if (input_d3 === null && input_d4 !== null && input_c3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d4 !== "1" && input_c3 !== "1") {
          if (input_a2 === "1" || input_a4 === "1") {
            d3.innerHTML = "1";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d4 !== "2" && input_c3 !== "2") {
          if (input_a2 === "2" || input_a4 === "2") {
            d3.innerHTML = "2";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d4 !== "3" && input_c3 !== "3") {
          if (input_a2 === "3" || input_a4 === "3") {
            d3.innerHTML = "3";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d4 !== "4" && input_c3 !== "4") {
          if (input_a2 === "4" || input_a4 === "4") {
            d3.innerHTML = "4";
            input_d3 = d3.innerHTML;
          }
        }
      }
    }
    if (input_d3 === null && input_d4 !== null && input_c4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d4 !== "1" && input_c4 !== "1") {
          if (input_a1 === "1" || input_a3 === "1") {
            d3.innerHTML = "1";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d4 !== "2" && input_c4 !== "2") {
          if (input_a1 === "2" || input_a3 === "2") {
            d3.innerHTML = "2";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d4 !== "3" && input_c4 !== "3") {
          if (input_a1 === "3" || input_a3 === "3") {
            d3.innerHTML = "3";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d4 !== "4" && input_c4 !== "4") {
          if (input_a1 === "4" || input_a3 === "4") {
            d3.innerHTML = "4";
            input_d3 = d3.innerHTML;
          }
        }
      }
    }
    if (input_d3 === null && input_d1 !== null && input_b1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d1 !== "1" && input_b1 !== "1") {
          if (input_a3 === "1" || input_a4 === "1") {
            d3.innerHTML = "1";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d1 !== "2" && input_b1 !== "2") {
          if (input_a3 === "2" || input_a4 === "2") {
            d3.innerHTML = "2";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d1 !== "3" && input_b1 !== "3") {
          if (input_a3 === "3" || input_a4 === "3") {
            d3.innerHTML = "3";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d1 !== "4" && input_b1 !== "4") {
          if (input_a3 === "4" || input_a4 === "4") {
            d3.innerHTML = "4";
            input_d3 = d3.innerHTML;
          }
        }
      }
    }
    if (input_d3 === null && input_d1 !== null && input_b3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d4 !== "1" &&
        input_b1 !== "1" &&
        input_b3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d1 !== "1" && input_b3 !== "1") {
          if (input_a1 === "1" || input_a2 === "1") {
            d3.innerHTML = "1";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d4 !== "2" &&
        input_b1 !== "2" &&
        input_b3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d1 !== "2" && input_b3 !== "2") {
          if (input_a1 === "2" || input_a2 === "2") {
            d3.innerHTML = "2";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d4 !== "3" &&
        input_b1 !== "3" &&
        input_b3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d1 !== "3" && input_b3 !== "3") {
          if (input_a1 === "3" || input_a2 === "3") {
            d3.innerHTML = "3";
            input_d3 = d3.innerHTML;
          }
        }
      }
      if (
        input_d3 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d4 !== "4" &&
        input_b1 !== "4" &&
        input_b3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d1 !== "4" && input_b3 !== "4") {
          if (input_a1 === "4" || input_a2 === "4") {
            d3.innerHTML = "4";
            input_d3 = d3.innerHTML;
          }
        }
      }
    }
  }

  if (input_d4 === null) {
    if (input_d2 !== null && input_d3 !== null && input_d1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d3 !== "1" &&
        input_d1 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        d4.innerHTML = "1";
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "2" &&
        input_d3 !== "2" &&
        input_d1 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        d4.innerHTML = "2";
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "3" &&
        input_d3 !== "3" &&
        input_d1 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        d4.innerHTML = "3";
        ("");
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "4" &&
        input_d3 !== "4" &&
        input_d1 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        d4.innerHTML = "4";
        input_d4 = d4.innerHTML;
      }
    } else if (input_c3 !== null && input_c4 !== null && input_d3 !== null) {
      if (
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1"
      ) {
        d4.innerHTML = "1";
        input_d4 = d4.innerHTML;
      } else if (
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2"
      ) {
        d4.innerHTML = "2";
        input_d4 = d4.innerHTML;
      } else if (
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3"
      ) {
        d4.innerHTML = "3";
        input_d4 = d4.innerHTML;
      } else if (
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4"
      ) {
        d4.innerHTML = "4";
        input_d4 = d4.innerHTML;
      }
    } else if (input_d2 !== null && input_b2 !== null && input_b4 !== null) {
      if (
        input_d2 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1"
      ) {
        d4.innerHTML = "1";
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2"
      ) {
        d4.innerHTML = "2";
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3"
      ) {
        d4.innerHTML = "3";
        input_d4 = d4.innerHTML;
      } else if (
        input_d2 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4"
      ) {
        d4.innerHTML = "4";
        input_d4 = d4.innerHTML;
      }
    }
    if (input_d4 === null && input_d2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1"
      ) {
        if (input_b1 === "1" || input_b3 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2"
      ) {
        if (input_b1 === "2" || input_b3 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3"
      ) {
        if (input_b1 === "3" || input_b3 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4"
      ) {
        if (input_b1 === "4" || input_b3 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_d3 !== null) {
      if (
        input_d3 !== "1" &&
        input_d1 !== "1" &&
        input_d2 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1"
      ) {
        if (input_c1 === "1" || input_c2 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d3 !== "2" &&
        input_d1 !== "2" &&
        input_d2 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2"
      ) {
        if (input_c1 === "2" || input_c2 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d3 !== "3" &&
        input_d1 !== "3" &&
        input_d2 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3"
      ) {
        if (input_c1 === "3" || input_c2 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d3 !== "4" &&
        input_d1 !== "4" &&
        input_d2 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4"
      ) {
        if (input_c1 === "4" || input_c2 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_b1 !== null && input_c1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b1 === "1" && input_c1 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b1 === "2" && input_c1 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b1 === "3" && input_c1 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b1 === "4" && input_c1 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_b1 !== null && input_c2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b1 === "1" && input_c2 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b1 === "2" && input_c2 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b1 === "3" && input_c2 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b1 === "4" && input_c2 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_b3 !== null && input_c1 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b3 === "1" && input_c1 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b3 === "2" && input_c1 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b3 === "3" && input_c1 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b3 === "4" && input_c1 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_b3 !== null && input_c2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_b3 === "1" && input_c2 === "1") {
          d4.innerHTML = "1";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_b3 === "2" && input_c2 === "2") {
          d4.innerHTML = "2";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_b3 === "3" && input_c2 === "3") {
          d4.innerHTML = "3";
          input_d4 = d4.innerHTML;
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_b3 === "4" && input_c2 === "4") {
          d4.innerHTML = "4";
          input_d4 = d4.innerHTML;
        }
      }
    }
    if (input_d4 === null && input_d3 !== null && input_c3 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d3 !== "1" && input_c3 !== "1") {
          if (input_a2 === "1" || input_a4 === "1") {
            d4.innerHTML = "1";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d3 !== "2" && input_c3 !== "2") {
          if (input_a2 === "2" || input_a4 === "2") {
            d4.innerHTML = "2";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d3 !== "3" && input_c3 !== "3") {
          if (input_a2 === "3" || input_a4 === "3") {
            d4.innerHTML = "3";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d3 !== "4" && input_c3 !== "4") {
          if (input_a2 === "4" || input_a4 === "4") {
            d4.innerHTML = "4";
            input_d4 = d4.innerHTML;
          }
        }
      }
    }
    if (input_d4 === null && input_d3 !== null && input_c4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d3 !== "1" && input_c4 !== "1") {
          if (input_a1 === "1" || input_a3 === "1") {
            d4.innerHTML = "1";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d3 !== "2" && input_c4 !== "2") {
          if (input_a1 === "2" || input_a3 === "2") {
            d4.innerHTML = "2";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d3 !== "3" && input_c4 !== "3") {
          if (input_a1 === "3" || input_a3 === "3") {
            d4.innerHTML = "3";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d3 !== "4" && input_c4 !== "4") {
          if (input_a1 === "4" || input_a3 === "4") {
            d4.innerHTML = "4";
            input_d4 = d4.innerHTML;
          }
        }
      }
    }
    if (input_d4 === null && input_d2 !== null && input_b2 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d2 !== "1" && input_b2 !== "1") {
          if (input_a3 === "1" || input_a4 === "1") {
            d4.innerHTML = "1";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d2 !== "2" && input_b2 !== "2") {
          if (input_a3 === "2" || input_a4 === "2") {
            d4.innerHTML = "2";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d2 !== "3" && input_b2 !== "3") {
          if (input_a3 === "3" || input_a4 === "3") {
            d4.innerHTML = "3";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d2 !== "4" && input_b2 !== "4") {
          if (input_a3 === "4" || input_a4 === "4") {
            d4.innerHTML = "4";
            input_d4 = d4.innerHTML;
          }
        }
      }
    }
    if (input_d4 === null && input_d2 !== null && input_b4 !== null) {
      if (
        input_d2 !== "1" &&
        input_d1 !== "1" &&
        input_d3 !== "1" &&
        input_b2 !== "1" &&
        input_b4 !== "1" &&
        input_c3 !== "1" &&
        input_c4 !== "1"
      ) {
        if (input_d2 !== "1" && input_b4 !== "1") {
          if (input_a1 === "1" || input_a2 === "1") {
            d4.innerHTML = "1";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "2" &&
        input_d1 !== "2" &&
        input_d3 !== "2" &&
        input_b2 !== "2" &&
        input_b4 !== "2" &&
        input_c3 !== "2" &&
        input_c4 !== "2"
      ) {
        if (input_d2 !== "2" && input_b4 !== "2") {
          if (input_a1 === "2" || input_a2 === "2") {
            d4.innerHTML = "2";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "3" &&
        input_d1 !== "3" &&
        input_d3 !== "3" &&
        input_b2 !== "3" &&
        input_b4 !== "3" &&
        input_c3 !== "3" &&
        input_c4 !== "3"
      ) {
        if (input_d2 !== "3" && input_b4 !== "3") {
          if (input_a1 === "3" || input_a2 === "3") {
            d4.innerHTML = "3";
            input_d4 = d4.innerHTML;
          }
        }
      }
      if (
        input_d4 === null &&
        input_d2 !== "4" &&
        input_d1 !== "4" &&
        input_d3 !== "4" &&
        input_b2 !== "4" &&
        input_b4 !== "4" &&
        input_c3 !== "4" &&
        input_c4 !== "4"
      ) {
        if (input_d2 !== "4" && input_b4 !== "4") {
          if (input_a1 === "4" || input_a2 === "4") {
            d4.innerHTML = "4";
            input_d4 = d4.innerHTML;
          }
        }
      }
    }
  }
}

function solving() {
  let solved = 0;
  if (input_a1 !== null) solved += 1;
  if (input_a2 !== null) solved += 1;
  if (input_a3 !== null) solved += 1;
  if (input_a4 !== null) solved += 1;
  if (input_b1 !== null) solved += 1;
  if (input_b2 !== null) solved += 1;
  if (input_b3 !== null) solved += 1;
  if (input_b4 !== null) solved += 1;
  if (input_c1 !== null) solved += 1;
  if (input_c2 !== null) solved += 1;
  if (input_c3 !== null) solved += 1;
  if (input_c4 !== null) solved += 1;
  if (input_d1 !== null) solved += 1;
  if (input_d2 !== null) solved += 1;
  if (input_d3 !== null) solved += 1;
  if (input_d4 !== null) solved += 1;

  solver();

  let solved_last = 0;
  if (input_a1 !== null) solved_last += 1;
  if (input_a2 !== null) solved_last += 1;
  if (input_a3 !== null) solved_last += 1;
  if (input_a4 !== null) solved_last += 1;
  if (input_b1 !== null) solved_last += 1;
  if (input_b2 !== null) solved_last += 1;
  if (input_b3 !== null) solved_last += 1;
  if (input_b4 !== null) solved_last += 1;
  if (input_c1 !== null) solved_last += 1;
  if (input_c2 !== null) solved_last += 1;
  if (input_c3 !== null) solved_last += 1;
  if (input_c4 !== null) solved_last += 1;
  if (input_d1 !== null) solved_last += 1;
  if (input_d2 !== null) solved_last += 1;
  if (input_d3 !== null) solved_last += 1;
  if (input_d4 !== null) solved_last += 1;

  if (solved_last > solved) solving();
}

function solve_sudoku() {
  if (solved === false) {
    click_a1 = false;
    click_a2 = false;
    click_a3 = false;
    click_a4 = false;
    click_b1 = false;
    click_b2 = false;
    click_b3 = false;
    click_b4 = false;
    click_c1 = false;
    click_c2 = false;
    click_c3 = false;
    click_c4 = false;
    click_d1 = false;
    click_d2 = false;
    click_d3 = false;
    click_d4 = false;
    a1.style.background = "whitesmoke";
    a2.style.background = "whitesmoke";
    a3.style.background = "whitesmoke";
    a4.style.background = "whitesmoke";
    b1.style.background = "whitesmoke";
    b2.style.background = "whitesmoke";
    b3.style.background = "whitesmoke";
    b4.style.background = "whitesmoke";
    c1.style.background = "whitesmoke";
    c2.style.background = "whitesmoke";
    c3.style.background = "whitesmoke";
    c4.style.background = "whitesmoke";
    d1.style.background = "whitesmoke";
    d2.style.background = "whitesmoke";
    d3.style.background = "whitesmoke";
    d4.style.background = "whitesmoke";

    if (input_a1 === null) a1.style.color = "blue";
    if (input_a2 === null) a2.style.color = "blue";
    if (input_a3 === null) a3.style.color = "blue";
    if (input_a4 === null) a4.style.color = "blue";
    if (input_b1 === null) b1.style.color = "blue";
    if (input_b2 === null) b2.style.color = "blue";
    if (input_b3 === null) b3.style.color = "blue";
    if (input_b4 === null) b4.style.color = "blue";
    if (input_c1 === null) c1.style.color = "blue";
    if (input_c2 === null) c2.style.color = "blue";
    if (input_c3 === null) c3.style.color = "blue";
    if (input_c4 === null) c4.style.color = "blue";
    if (input_d1 === null) d1.style.color = "blue";
    if (input_d2 === null) d2.style.color = "blue";
    if (input_d3 === null) d3.style.color = "blue";
    if (input_d4 === null) d4.style.color = "blue";

    if (count === 0) {
      if (input_a1 === null) temp_a1 = true;
      if (input_a2 === null) temp_a2 = true;
      if (input_a3 === null) temp_a3 = true;
      if (input_a4 === null) temp_a4 = true;
      if (input_b1 === null) temp_b1 = true;
      if (input_b2 === null) temp_b2 = true;
      if (input_b3 === null) temp_b3 = true;
      if (input_b4 === null) temp_b4 = true;
      if (input_c1 === null) temp_c1 = true;
      if (input_c2 === null) temp_c2 = true;
      if (input_c3 === null) temp_c3 = true;
      if (input_c4 === null) temp_c4 = true;
      if (input_d1 === null) temp_d1 = true;
      if (input_d2 === null) temp_d2 = true;
      if (input_d3 === null) temp_d3 = true;
      if (input_d4 === null) temp_d4 = true;
    }

    solving();

    if (
      input_a1 === null ||
      input_a2 === null ||
      input_a3 === null ||
      input_a4 === null ||
      input_b1 === null ||
      input_b2 === null ||
      input_b3 === null ||
      input_b4 === null ||
      input_c1 === null ||
      input_c2 === null ||
      input_c3 === null ||
      input_c4 === null ||
      input_d1 === null ||
      input_d2 === null ||
      input_d3 === null ||
      input_d4 === null
    ) {
      if (count <= 1) {
        count = count + 1;
        if (solved === false) solve_sudoku();
      } else if (count === 2) {
        count = count + 1;
        let array = [];
        if (input_a1 === null) array.push(1);
        if (input_a2 === null) array.push(2);
        if (input_a3 === null) array.push(3);
        if (input_a4 === null) array.push(4);
        if (input_b1 === null) array.push(5);
        if (input_b2 === null) array.push(6);
        if (input_b3 === null) array.push(7);
        if (input_b4 === null) array.push(8);
        if (input_c1 === null) array.push(9);
        if (input_c2 === null) array.push(10);
        if (input_c3 === null) array.push(11);
        if (input_c4 === null) array.push(12);
        if (input_d1 === null) array.push(13);
        if (input_d2 === null) array.push(14);
        if (input_d3 === null) array.push(15);
        if (input_d4 === null) array.push(16);
        let i = array.length;
        random = array[Math.floor(Math.random() * i)];
        if (random === 1) a1_random();
        else if (random === 2) a2_random();
        else if (random === 3) a3_random();
        else if (random === 4) a4_random();
        else if (random === 5) b1_random();
        else if (random === 6) b2_random();
        else if (random === 7) b3_random();
        else if (random === 8) b4_random();
        else if (random === 9) c1_random();
        else if (random === 10) c2_random();
        else if (random === 11) c3_random();
        else if (random === 12) c4_random();
        else if (random === 13) d1_random();
        else if (random === 14) d2_random();
        else if (random === 15) d3_random();
        else if (random === 16) d4_random();
        if (solved === false) solve_sudoku();
      } else {
        clear_temp();

        if (repeated === false) {
          count = 0;
          repeated = true;
          if (solved === false) solve_sudoku();
        } else if (repeated === true) {
          impossible();
        }
      }
    }
    if (
      input_a1 !== null &&
      input_a2 !== null &&
      input_a3 !== null &&
      input_a4 !== null &&
      input_b1 !== null &&
      input_b2 !== null &&
      input_b3 !== null &&
      input_b4 !== null &&
      input_c1 !== null &&
      input_c2 !== null &&
      input_c3 !== null &&
      input_c4 !== null &&
      input_d1 !== null &&
      input_d2 !== null &&
      input_d3 !== null &&
      input_d4 !== null
    ) {
      notif.style.visibility = "visible";
      notif.innerHTML = "Solving Ends";
      solved = true;
      solve.innerHTML = "EDIT";
    }
  } else if (solved === true) {
    notif.style.visibility = "visible";
    notif.innerHTML = "Edit Sudoku";
    solved = false;
    solve.innerHTML = "SOLVE";
  }

  keyboard.style.visibility = "hidden";
}

function clear_all() {
  a1.style.color = "black";
  a2.style.color = "black";
  a3.style.color = "black";
  a4.style.color = "black";
  b1.style.color = "black";
  b2.style.color = "black";
  b3.style.color = "black";
  b4.style.color = "black";
  c1.style.color = "black";
  c2.style.color = "black";
  c3.style.color = "black";
  c4.style.color = "black";
  d1.style.color = "black";
  d2.style.color = "black";
  d3.style.color = "black";
  d4.style.color = "black";

  solved = false;

  click_a1 = false;
  click_a2 = false;
  click_a3 = false;
  click_a4 = false;
  click_b1 = false;
  click_b2 = false;
  click_b3 = false;
  click_b4 = false;
  click_c1 = false;
  click_c2 = false;
  click_c3 = false;
  click_c4 = false;
  click_d1 = false;
  click_d2 = false;
  click_d3 = false;
  click_d4 = false;
  repeated -= false;
  key = null;
  input_a1 = null;
  input_a2 = null;
  input_a3 = null;
  input_a4 = null;
  input_b1 = null;
  input_b2 = null;
  input_b3 = null;
  input_b4 = null;
  input_c1 = null;
  input_c2 = null;
  input_c3 = null;
  input_c4 = null;
  input_d1 = null;
  input_d2 = null;
  input_d3 = null;
  input_d4 = null;
  count = 0;

  a1.innerHTML = "";
  a2.innerHTML = "";
  a3.innerHTML = "";
  a4.innerHTML = "";
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  c1.innerHTML = "";
  c2.innerHTML = "";
  c3.innerHTML = "";
  c4.innerHTML = "";
  d1.innerHTML = "";
  d2.innerHTML = "";
  d3.innerHTML = "";
  d4.innerHTML = "";

  a1.style.background = "whitesmoke";
  a2.style.background = "whitesmoke";
  a3.style.background = "whitesmoke";
  a4.style.background = "whitesmoke";
  b1.style.background = "whitesmoke";
  b2.style.background = "whitesmoke";
  b3.style.background = "whitesmoke";
  b4.style.background = "whitesmoke";
  c1.style.background = "whitesmoke";
  c2.style.background = "whitesmoke";
  c3.style.background = "whitesmoke";
  c4.style.background = "whitesmoke";
  d1.style.background = "whitesmoke";
  d2.style.background = "whitesmoke";
  d3.style.background = "whitesmoke";
  d4.style.background = "whitesmoke";
  notif.style.visibility = "hidden";
  notif.innerHTML = " ";

  temp_a1 = false;
  temp_a2 = false;
  temp_a3 = false;
  temp_a4 = false;
  temp_b1 = false;
  temp_b2 = false;
  temp_b3 = false;
  temp_b4 = false;
  temp_c1 = false;
  temp_c2 = false;
  temp_c3 = false;
  temp_c4 = false;
  temp_d1 = false;
  temp_d2 = false;
  temp_d3 = false;
  temp_d4 = false;

  repeated = false;
  solve.innerHTML = "SOLVE";
  keyboard.style.visibility = "hidden";
}

function a1_random() {
  if (input_a1 === null && random === 1) {
    let array = [];
    if (
      input_a2 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_b1 !== "1" &&
      input_b2 !== "1" &&
      input_c1 !== "1" &&
      input_c3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_a2 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_b1 !== "2" &&
      input_b2 !== "2" &&
      input_c1 !== "2" &&
      input_c3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_a2 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_b1 !== "3" &&
      input_b2 !== "3" &&
      input_c1 !== "3" &&
      input_c3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_a2 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_b1 !== "4" &&
      input_b2 !== "4" &&
      input_c1 !== "4" &&
      input_c3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      a1.innerHTML = "1";
      a1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      a1.innerHTML = "2";
      a1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      a1.innerHTML = "3";
      a1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      a1.innerHTML = "4";
      a1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a1 = a1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function a2_random() {
  if (input_a2 === null && random === 2) {
    let array = [];
    if (
      input_a1 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_b1 !== "1" &&
      input_b2 !== "1" &&
      input_c2 !== "1" &&
      input_c4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_a1 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_b1 !== "2" &&
      input_b2 !== "2" &&
      input_c2 !== "2" &&
      input_c4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_a1 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_b1 !== "3" &&
      input_b2 !== "3" &&
      input_c2 !== "3" &&
      input_c4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_a1 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_b1 !== "4" &&
      input_b2 !== "4" &&
      input_c2 !== "4" &&
      input_c4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      a2.innerHTML = "1";
      a2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      a2.innerHTML = "2";
      a2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      a2.innerHTML = "3";
      a2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      a2.innerHTML = "4";
      a2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a2 = a2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function a3_random() {
  if (input_a3 === null && random === 3) {
    let array = [];
    if (
      input_a2 !== "1" &&
      input_a1 !== "1" &&
      input_a4 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_c1 !== "1" &&
      input_c3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_a2 !== "2" &&
      input_a1 !== "2" &&
      input_a4 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_c1 !== "2" &&
      input_c3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_a2 !== "3" &&
      input_a1 !== "3" &&
      input_a4 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_c1 !== "3" &&
      input_c3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_a2 !== "4" &&
      input_a1 !== "4" &&
      input_a4 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_c1 !== "4" &&
      input_c3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      a3.innerHTML = "1";
      a3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      a3.innerHTML = "2";
      a3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      a3.innerHTML = "3";
      a3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      a3.innerHTML = "4";
      a3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a3 = a3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function a4_random() {
  if (input_a4 === null && random === 4) {
    let array = [];
    if (
      input_a2 !== "1" &&
      input_a3 !== "1" &&
      input_a1 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_c2 !== "1" &&
      input_c4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_a2 !== "2" &&
      input_a3 !== "2" &&
      input_a1 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_c2 !== "2" &&
      input_c4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_a2 !== "3" &&
      input_a3 !== "3" &&
      input_a1 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_c2 !== "3" &&
      input_c4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_a2 !== "4" &&
      input_a3 !== "4" &&
      input_a1 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_c2 !== "4" &&
      input_c4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      a4.innerHTML = "1";
      a4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      a4.innerHTML = "2";
      a4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      a4.innerHTML = "3";
      a4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      a4.innerHTML = "4";
      a4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_a4 = a4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function b1_random() {
  if (input_b1 === null && random === 5) {
    let array = [];
    if (
      input_b2 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_a1 !== "1" &&
      input_a2 !== "1" &&
      input_d1 !== "1" &&
      input_d3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_b2 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_a1 !== "2" &&
      input_a2 !== "2" &&
      input_d1 !== "2" &&
      input_d3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_b2 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_a1 !== "3" &&
      input_a2 !== "3" &&
      input_d1 !== "3" &&
      input_d3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_b2 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_a1 !== "4" &&
      input_a2 !== "4" &&
      input_d1 !== "4" &&
      input_d3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      b1.innerHTML = "1";
      b1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      b1.innerHTML = "2";
      b1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      b1.innerHTML = "3";
      b1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      b1.innerHTML = "4";
      b1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b1 = b1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function b2_random() {
  if (input_b2 === null && random === 6) {
    let array = [];
    if (
      input_b1 !== "1" &&
      input_b3 !== "1" &&
      input_b4 !== "1" &&
      input_a1 !== "1" &&
      input_a2 !== "1" &&
      input_d2 !== "1" &&
      input_d4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_b1 !== "2" &&
      input_b3 !== "2" &&
      input_b4 !== "2" &&
      input_a1 !== "2" &&
      input_a2 !== "2" &&
      input_d2 !== "2" &&
      input_d4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_b1 !== "3" &&
      input_b3 !== "3" &&
      input_b4 !== "3" &&
      input_a1 !== "3" &&
      input_a2 !== "3" &&
      input_d2 !== "3" &&
      input_d4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_b1 !== "4" &&
      input_b3 !== "4" &&
      input_b4 !== "4" &&
      input_a1 !== "4" &&
      input_a2 !== "4" &&
      input_d2 !== "4" &&
      input_d4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      b2.innerHTML = "1";
      b2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      b2.innerHTML = "2";
      b2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      b2.innerHTML = "3";
      b2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      b2.innerHTML = "4";
      b2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b2 = b2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function b3_random() {
  if (input_b3 === null && random === 7) {
    let array = [];
    if (
      input_b2 !== "1" &&
      input_b1 !== "1" &&
      input_b4 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_d1 !== "1" &&
      input_d3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_b2 !== "2" &&
      input_b1 !== "2" &&
      input_b4 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_d1 !== "2" &&
      input_d3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_b2 !== "3" &&
      input_b1 !== "3" &&
      input_b4 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_d1 !== "3" &&
      input_d3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_b2 !== "4" &&
      input_b1 !== "4" &&
      input_b4 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_d1 !== "4" &&
      input_d3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      b3.innerHTML = "1";
      b3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      b3.innerHTML = "2";
      b3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      b3.innerHTML = "3";
      b3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      b3.innerHTML = "4";
      b3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b3 = b3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function b4_random() {
  if (input_b4 === null && random === 8) {
    let array = [];
    if (
      input_b2 !== "1" &&
      input_b3 !== "1" &&
      input_b1 !== "1" &&
      input_a3 !== "1" &&
      input_a4 !== "1" &&
      input_d2 !== "1" &&
      input_d4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_b2 !== "2" &&
      input_b3 !== "2" &&
      input_b1 !== "2" &&
      input_a3 !== "2" &&
      input_a4 !== "2" &&
      input_d2 !== "2" &&
      input_d4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_b2 !== "3" &&
      input_b3 !== "3" &&
      input_b1 !== "3" &&
      input_a3 !== "3" &&
      input_a4 !== "3" &&
      input_d2 !== "3" &&
      input_d4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_b2 !== "4" &&
      input_b3 !== "4" &&
      input_b1 !== "4" &&
      input_a3 !== "4" &&
      input_a4 !== "4" &&
      input_d2 !== "4" &&
      input_d4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      b4.innerHTML = "1";
      b4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      b4.innerHTML = "2";
      b4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      b4.innerHTML = "3";
      b4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      b4.innerHTML = "4";
      b4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_b4 = b4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function c1_random() {
  if (input_c1 === null && random === 9) {
    let array = [];
    if (
      input_c2 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_d1 !== "1" &&
      input_d2 !== "1" &&
      input_a1 !== "1" &&
      input_a3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_c2 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_d1 !== "2" &&
      input_d2 !== "2" &&
      input_a1 !== "2" &&
      input_a3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_c2 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_d1 !== "3" &&
      input_d2 !== "3" &&
      input_a1 !== "3" &&
      input_a3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_c2 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_d1 !== "4" &&
      input_d2 !== "4" &&
      input_a1 !== "4" &&
      input_a3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      c1.innerHTML = "1";
      c1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      c1.innerHTML = "2";
      c1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      c1.innerHTML = "3";
      c1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      c1.innerHTML = "4";
      c1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c1 = c1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function c2_random() {
  if (input_c2 === null && random === 10) {
    let array = [];
    if (
      input_c1 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_d1 !== "1" &&
      input_d2 !== "1" &&
      input_a2 !== "1" &&
      input_a4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_c1 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_d1 !== "2" &&
      input_d2 !== "2" &&
      input_a2 !== "2" &&
      input_a4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_c1 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_d1 !== "3" &&
      input_d2 !== "3" &&
      input_a2 !== "3" &&
      input_a4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_c1 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_d1 !== "4" &&
      input_d2 !== "4" &&
      input_a2 !== "4" &&
      input_a4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      c2.innerHTML = "1";
      c2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      c2.innerHTML = "2";
      c2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      c2.innerHTML = "3";
      c2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      c2.innerHTML = "4";
      c2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c2 = c2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function c3_random() {
  if (input_c3 === null && random === 11) {
    let array = [];
    if (
      input_c2 !== "1" &&
      input_c1 !== "1" &&
      input_c4 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_a1 !== "1" &&
      input_a3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_c2 !== "2" &&
      input_c1 !== "2" &&
      input_c4 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_a1 !== "2" &&
      input_a3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_c2 !== "3" &&
      input_c1 !== "3" &&
      input_c4 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_a1 !== "3" &&
      input_a3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_c2 !== "4" &&
      input_c1 !== "4" &&
      input_c4 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_a1 !== "4" &&
      input_a3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      c3.innerHTML = "1";
      c3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      c3.innerHTML = "2";
      c3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      c3.innerHTML = "3";
      c3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      c3.innerHTML = "4";
      c3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c3 = c3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function c4_random() {
  if (input_c4 === null && random === 12) {
    let array = [];
    if (
      input_c2 !== "1" &&
      input_c3 !== "1" &&
      input_c1 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_a2 !== "1" &&
      input_a4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_c2 !== "2" &&
      input_c3 !== "2" &&
      input_c1 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_a2 !== "2" &&
      input_a4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_c2 !== "3" &&
      input_c3 !== "3" &&
      input_c1 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_a2 !== "3" &&
      input_a4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_c2 !== "4" &&
      input_c3 !== "4" &&
      input_c1 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_a2 !== "4" &&
      input_a4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      c4.innerHTML = "1";
      c4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      c4.innerHTML = "2";
      c4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      c4.innerHTML = "3";
      c4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      c4.innerHTML = "4";
      c4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_c4 = c4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function d1_random() {
  if (input_d1 === null && random === 13) {
    let array = [];
    if (
      input_d2 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_c1 !== "1" &&
      input_c2 !== "1" &&
      input_b1 !== "1" &&
      input_b3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_d2 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_c1 !== "2" &&
      input_c2 !== "2" &&
      input_b1 !== "2" &&
      input_b3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_d2 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_c1 !== "3" &&
      input_c2 !== "3" &&
      input_b1 !== "3" &&
      input_b3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_d2 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_c1 !== "4" &&
      input_c2 !== "4" &&
      input_b1 !== "4" &&
      input_b3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      d1.innerHTML = "1";
      d1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      d1.innerHTML = "2";
      d1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      d1.innerHTML = "3";
      d1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      d1.innerHTML = "4";
      d1.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d1 = d1.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function d2_random() {
  if (input_d2 === null && random === 14) {
    let array = [];
    if (
      input_d1 !== "1" &&
      input_d3 !== "1" &&
      input_d4 !== "1" &&
      input_c1 !== "1" &&
      input_c2 !== "1" &&
      input_b2 !== "1" &&
      input_b4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_d1 !== "2" &&
      input_d3 !== "2" &&
      input_d4 !== "2" &&
      input_c1 !== "2" &&
      input_c2 !== "2" &&
      input_b2 !== "2" &&
      input_b4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_d1 !== "3" &&
      input_d3 !== "3" &&
      input_d4 !== "3" &&
      input_c1 !== "3" &&
      input_c2 !== "3" &&
      input_b2 !== "3" &&
      input_b4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_d1 !== "4" &&
      input_d3 !== "4" &&
      input_d4 !== "4" &&
      input_c1 !== "4" &&
      input_c2 !== "4" &&
      input_b2 !== "4" &&
      input_b4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      d2.innerHTML = "1";
      d2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      d2.innerHTML = "2";
      d2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      d2.innerHTML = "3";
      d2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      d2.innerHTML = "4";
      d2.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d2 = d2.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function d3_random() {
  if (input_d3 === null && random === 15) {
    let array = [];
    if (
      input_d2 !== "1" &&
      input_d1 !== "1" &&
      input_d4 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_b1 !== "1" &&
      input_b3 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_d2 !== "2" &&
      input_d1 !== "2" &&
      input_d4 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_b1 !== "2" &&
      input_b3 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_d2 !== "3" &&
      input_d1 !== "3" &&
      input_d4 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_b1 !== "3" &&
      input_b3 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_d2 !== "4" &&
      input_d1 !== "4" &&
      input_d4 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_b1 !== "4" &&
      input_b3 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      d3.innerHTML = "1";
      d3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      d3.innerHTML = "2";
      d3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      d3.innerHTML = "3";
      d3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      d3.innerHTML = "4";
      d3.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d3 = d3.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}

function d4_random() {
  if (input_d4 === null && random === 16) {
    let array = [];
    if (
      input_d2 !== "1" &&
      input_d3 !== "1" &&
      input_d1 !== "1" &&
      input_c3 !== "1" &&
      input_c4 !== "1" &&
      input_b2 !== "1" &&
      input_b4 !== "1"
    ) {
      array.push(1);
    }
    if (
      input_d2 !== "2" &&
      input_d3 !== "2" &&
      input_d1 !== "2" &&
      input_c3 !== "2" &&
      input_c4 !== "2" &&
      input_b2 !== "2" &&
      input_b4 !== "2"
    ) {
      array.push(2);
    }
    if (
      input_d2 !== "3" &&
      input_d3 !== "3" &&
      input_d1 !== "3" &&
      input_c3 !== "3" &&
      input_c4 !== "3" &&
      input_b2 !== "3" &&
      input_b4 !== "3"
    ) {
      array.push(3);
    }
    if (
      input_d2 !== "4" &&
      input_d3 !== "4" &&
      input_d1 !== "4" &&
      input_c3 !== "4" &&
      input_c4 !== "4" &&
      input_b2 !== "4" &&
      input_b4 !== "4"
    ) {
      array.push(4);
    }
    let i = array.length;
    key = array[Math.floor(Math.random() * i)];
    if (key === undefined) {
      if (solved === false) solve_sudoku();
      return;
    }
    if (key === 1) {
      d4.innerHTML = "1";
      d4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 2) {
      d4.innerHTML = "2";
      d4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 3) {
      d4.innerHTML = "3";
      d4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    } else if (key === 4) {
      d4.innerHTML = "4";
      d4.style.background = "whitesmoke";
      notif.style.visibility = "hidden";
      input_d4 = d4.innerHTML;
      count = 1;
      solving();
      if (solved === false) solve_sudoku();
    }
  }
}
