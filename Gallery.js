const images = [
  {
    src: "nikhil-images/download.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-images/download-1.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-images/download-2.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-images/download-3.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-4.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-images/download-5.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-images/download-6.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-images/download-7.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-8.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-images/download-9.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-images/download-10.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-images/download-11.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-12.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-13.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-14.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-15.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-16.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-17.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-18.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-19.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-20.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-21.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-22.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-23.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-24.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-25.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-26.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-27.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-images/download-28.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "download-2.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  // Add more image objects as needed
];

const galleryGrid = document.getElementById("gallery-grid");

images.map((image, index) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";
  galleryItem.dataset.index = index;
  galleryItem.innerHTML = `
       <img src="${image.src}" alt="${image.title}" class="gallery-image">
       <h3>${image.title}</h3>
       <p>${image.description}</p>
       <div class="gallery-actions">
         <button class="like-btn"><i class="fas fa-heart"></i> <p>Like</p></button>
         <button class="fullscreen-btn"><i class="fas fa-expand"></i> <p>FullView</p></button>
         <button class="share-btn"><i class="fas fa-share"></i> <p>Share</p></button>
       </div>
     `;
  galleryGrid.appendChild(galleryItem);
});

const fullscreenContainer = document.querySelector(".fullscreen-container");
const fullscreenImage = document.querySelector(".fullscreen-image");
const fullscreenPrev = document.querySelector(".fullscreen-prev");
const fullscreenNext = document.querySelector(".fullscreen-next");
const fullscreenClose = document.querySelector(".fullscreen-close");

let currentImageIndex = 0;

document.querySelectorAll(".fullscreen-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentImageIndex = index;
    showFullscreenImage();
  });
});

fullscreenPrev.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
  showFullscreenImage();
});

fullscreenNext.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
  showFullscreenImage();
});

fullscreenClose.addEventListener("click", () => {
  fullscreenContainer.style.display = "none";
});

function showFullscreenImage() {
  const currentItem = images[currentImageIndex];
  fullscreenImage.src = currentItem.src;
  fullscreenContainer.style.display = "flex";
}
