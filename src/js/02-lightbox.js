import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = galleryItems[i];
  const currentImageSource = galleryItem.preview;
  const item = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${currentImageSource}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`;
  gallery.innerHTML += item;
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    lightbox.open();
  }
});
