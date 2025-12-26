const giftBox = document.getElementById("giftBox");
const flyerContainer = document.getElementById("flyerContainer");
const flyer = document.getElementById("flyer");

giftBox.addEventListener("click", () => {
  giftBox.classList.add("open");

  // depois de abrir a tampa
  setTimeout(() => {
    giftBox.classList.add("back");
  }, 900);

  // depois de ir pra trás, mostra panfleto
  setTimeout(() => {
    flyerContainer.classList.add("show");
  }, 1600);

  // depois que o panfleto já está visível, some a caixa
  setTimeout(() => {
    giftBox.classList.add("hide");
  }, 2300);
});

flyer.addEventListener("click", () => {
  flyer.classList.toggle("open");
});










