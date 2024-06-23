const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

nextEl.addEventListener("click", () => {
  currentImg++;
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
