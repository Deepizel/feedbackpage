const button = document.querySelector("button");
const popup = document.querySelector(".nxtcard");
const close = document.querySelector(".closx");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const popupTxt = document.querySelector(".selectText");

btn1.addEventListener('click', () => {
    btn1.style.background = 'black';
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
    popupTxt.innerText = "You have selected 1 of 5";
});

btn2.addEventListener("click", () => {
    btn1.style.display = "none";
    btn2.style.background = "black";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
     popupTxt.innerText = "You have selected 2 of 5";
});

btn3.addEventListener("click", () => {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.background = "black";
    btn4.style.display = "none";
    btn5.style.display = "none";
     popupTxt.innerText = "You have selected 3 of 5";
});

btn4.addEventListener("click", () => {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.background = "black";
    btn5.style.display = "none";
     popupTxt.innerText = "You have selected 4 of 5";
});

btn5.addEventListener("click", () => {
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.background = "black";
     popupTxt.innerText = "You have selected 5 of 5";
});

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

