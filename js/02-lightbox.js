import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", selectedImageHandler);

function selectedImageHandler(event) {
  const originalImage = event.target.dataset.original;
}

function createImageCardMarkup(galleryItems) {
  let arrayOfLinks = [];

  galleryItems.forEach((galleryItem) => {
    const linkWrap = document.createElement("a");

    const image = document.createElement("img");
    image.setAttribute("src", galleryItem.preview);
    image.setAttribute("data-original", galleryItem.original);
    image.style.width = "100%";
    image.style.height = "100%";

    linkWrap.setAttribute("href", galleryItem.preview);
    linkWrap.classList.add("gallery__item");

    linkWrap.append(image);
    image.classList.add("gallery__image");
    image.setAttribute("alt", galleryItem.description);

    arrayOfLinks.push(linkWrap);
  });

  gallery.append(...arrayOfLinks);
}
createImageCardMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
