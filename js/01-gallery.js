import { galleryItems } from "./gallery-items.js";
// Change code below this line
//pętla for:

const LiElement = document.createElement("li");
console.log(LiElement);
const ul = document.querySelector(".gallery");
console.log(galleryItems);

for (const gallery of galleryItems) {
  const li = document.createElement("li");

  document.body.innerHTML = galleryItems.map(
    (gallery) =>
      `<div class="gallery__item">
      <a class "gallery__link" href="${gallery.original}">
        <img
          style="width:500px; height:500px;"
          class="gallery__image"
          src="${gallery.preview}"
          data-source="large-image.jpg"
          alt="${gallery.description}"
        />
      </a>
    </div>`
  );

  console.log(ul);
}
ul.addEventListener("click", (ev) => {
  ev.preventDefault();

  window.basicLightbox.create(
    `<img style="width:500px; height:500px" src=${gallery.preview} ${gallery.original} ${gallery.description}/>`
  );
  gallery.show();
});
