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
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`;
  gallery.innerHTML += item;
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageSource = event.target.dataset.source;

    const modal = basicLightbox.create(`
      <img src="${imageSource}" width="800" height="600">
    `);

    modal.show();

    const closeModalOnEsc = (event) => {
      if (event.key === "Escape") {
        modal.close();
        document.removeEventListener("keydown", closeModalOnEsc);
      }
    };

    document.addEventListener("keydown", closeModalOnEsc);
  }
});
