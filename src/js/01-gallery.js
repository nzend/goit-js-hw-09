// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Рендер HTML галереї
function createGalleryItem(itemsArray) {
  const markup = itemsArray
    .map(({ preview, original, description }) => {
      return ` 
     <li class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
  return markup;
}

galleryList.addEventListener('click', onGalleryListClick);

const link = document.querySelector('.gallery__link');

function onGalleryListClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
