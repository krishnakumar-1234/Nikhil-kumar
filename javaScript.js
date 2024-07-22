const MenuIcon = document.getElementById("MenuIcon");
const rightbarContainer = document.getElementById("rightbarContainer");
const blurWholePage = document.querySelector(".blurWholePage");
const CloseIcon = document.getElementById("CloseIcon");

function rightBarClose() {
  blurWholePage.style.display = "none";
  rightbarContainer.style.display = "none";
  rightbarContainer.style.animationName = "rightbarAnimation";
}

MenuIcon.addEventListener("click", () => {
  rightbarContainer.style.display = "flex";
  rightbarContainer.style.animationName = "rightbarAnimation";
  blurWholePage.style.display = "flex";
});
blurWholePage.addEventListener("click", () => {
  rightBarClose();
});
CloseIcon.addEventListener("click", () => {
  rightBarClose();
});

const slides = document.querySelector(".slide-wrapper");
const slide = document.querySelectorAll(".slide");
const totalSlides = slide.length;
const slideWidth = slide[0].offsetWidth;
let currentIndex = 0;

function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides / 2) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides / 2 - 1;
  }
  updateSlidePosition();
}

document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", prevSlide);

setInterval(nextSlide, 3000); // Slide every 3 seconds

document.querySelectorAll(".like-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Liked!");
  });
});

document.querySelectorAll(".share-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Shared!");
  });
});

document.querySelectorAll(".like-fullScreen").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Coming soon");
  });
});
