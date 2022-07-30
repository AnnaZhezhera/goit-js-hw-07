import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", selectedImageHandler);

function selectedImageHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImage = event.target.dataset.original;
  //   const modalDiv = modal.element();
  //   const img = modalDiv.querySelector("img");

  //   img.setAttribute("src", originalImage);

  //   modal.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  });
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
