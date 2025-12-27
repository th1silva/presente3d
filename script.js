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

let isTouching = false;
let lastTouchX = 0;

flyer3d.addEventListener("touchstart", e => {
  isTouching = true;
  lastTouchX = e.touches[0].clientX;
});

flyer3d.addEventListener("touchend", () => {
  isTouching = false;
});

flyer3d.addEventListener("touchmove", e => {
  if (!isTouching) return;
  const x = e.touches[0].clientX;
  const delta = x - lastTouchX;
  rotationY += delta * 0.4;
  flyer3d.style.transform = `rotateY(${rotationY}deg)`;
  lastTouchX = x;
});










