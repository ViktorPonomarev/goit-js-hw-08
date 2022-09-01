// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

/* 1. Создание и рендер разметки по массиву данных 
galleryItems и предоставленному шаблону элемента галереи.
 */

const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// imgContainer.addEventListener('click', onImgContainerClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {

        return `
        <a class="gallery__item" 
        href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" 
  />
</a>
        `;
    })
        .join('');
}

/* 5. Посмотри в документации секцию «Options» и добавь отображение
 подписей к изображениям из атрибута alt. Пусть подпись будет 
 снизу и появляется через 250 миллисекунд после открытия изображения. 
 */
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
    // nav: true,
    // close: true,
    // caption: true,
    
});


console.log(galleryItems);
