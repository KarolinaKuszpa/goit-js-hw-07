import { galleryItems } from "./gallery-items.js";
// Change code below this line
//pętla for:

const ul = document.querySelector(".gallery");

for (const gallery of galleryItems) {
  const Elementli = `<div class= "gallery__item">
      <a class = "gallery__link" href="${gallery.original}">
        <img
         
          class="gallery__image"
          src="${gallery.preview}"
          data-source="${gallery.original}"
          alt="${gallery.description}"
        />
      </a>
    </div>`;
  const listElement = document.createElement("li");
  listElement.innerHTML = Elementli;
  ul.appendChild(listElement);
}
console.log(galleryItems);

ul.addEventListener("click", (ev) => {
  ev.preventDefault();

  const instance = window.basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
});
