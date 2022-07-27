// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const destructImages = destruct => {
    const { preview, original, description } = destruct;
  return `
    <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>` 
}
const galerryOfImages = document.querySelector('.gallery');
const addImages = galleryItems.map(destructImages).join('');
const container = document.querySelector('.gallery');
galerryOfImages.insertAdjacentHTML('afterbegin', addImages);


function clickToOpenOriginalImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return
  }
}
new SimpleLightbox('.gallery__item', {  captionsData: 'alt',  captionDelay: 250}).on('show.simplelightbox');


container.addEventListener('click', clickToOpenOriginalImg);