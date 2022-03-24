const button = document.querySelector("button");
const popup = document.querySelector(".nxtcard");
const close = document.querySelector(".closx");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});
