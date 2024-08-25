// Initialize Swiper
const imagesSlide = [
  {
    src: "nikhil-imagesSlide/download.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-imagesSlide/download-1.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-imagesSlide/download-2.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-imagesSlide/download-3.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-4.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-imagesSlide/download-5.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-imagesSlide/download-6.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-imagesSlide/download-7.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-8.jpg",
    title: "Image Title 1",
    description: "Description of the edited image 1.",
  },
  {
    src: "nikhil-imagesSlide/download-9.jpg",
    title: "Image Title 2",
    description: "Description of the edited image 2.",
  },
  {
    src: "nikhil-imagesSlide/download-10.jpg",
    title: "Image Title 3",
    description: "Description of the edited image 3.",
  },
  {
    src: "nikhil-imagesSlide/download-11.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-12.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-13.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-14.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-15.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-16.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-17.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-18.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-19.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-20.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-21.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-22.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-23.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-24.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-25.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-26.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-27.jpg",
    title: "Image Title 4",
    description: "Description of the edited image 4.",
  },
  {
    src: "nikhil-imagesSlide/download-28.jpg",
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

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperWrapper = document.getElementById("swiperWrapper");

images.map((image, index) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "swiper-slide";
  galleryItem.dataset.index = index;
  galleryItem.innerHTML = `

          <img src="${image.src}" alt="${image.title}" class="gallery-image">
          <div class="slide-info">${image.description}</div>

        `;
  swiperWrapper.appendChild(galleryItem);
});
