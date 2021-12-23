import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';

const refs  = {
galeryList: document.querySelector(".gallery")
}

const galeryMarcup = galleryItems.map(({description, original, preview}) => {
  return `<li class="gallery__item"> 
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`}).join("")

const listDecoration = refs.galeryList.style.listStyleType = "none";
    
refs.galeryList.insertAdjacentHTML("afterbegin", galeryMarcup);

let galleryImg = document.querySelector(".gallery__image")

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
      captionDelay: 250,
   });