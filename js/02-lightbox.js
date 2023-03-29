import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ul = document.querySelector(".gallery");

for (const gallery of galleryItems) {
  const Elementli = `<div class= "gallery__item" href="${gallery.or}">
  
  <img 
  class="gallery__image" 
  src="${gallery.preview}" 
  alt="${gallery.description}" />
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
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
});

console.log(galleryItems);
