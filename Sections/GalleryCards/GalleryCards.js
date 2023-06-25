import "./GalleryCards.css";
import { dataBooks } from "../../Data/Data";

export const templateGalleryBooks = () => {
  const galleryBooks = document.querySelector("#mainTemplate");

  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const ulGallery = document.createElement("ul");
  ulGallery.classList.add("ulGallery");

  for (const book of dataBooks) {
    const li = document.createElement("li");

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const bookImg = document.createElement("div");
    bookImg.classList.add("bookImg");
    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title + " cover";
    bookImg.append(img);
    bookCard.append(bookImg);

    const title = document.createElement("h3");
    title.textContent = book.title;
    bookCard.append(title);

    const author = document.createElement("h4");
    author.textContent = book.author;
    bookCard.append(author);

    const editorial = document.createElement("p");
    editorial.textContent = book.editorial;
    bookCard.append(editorial);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = book.price + "€";
    bookCard.append(price);

    li.append(bookCard);

    ulGallery.append(li);
  }

  gallery.append(ulGallery);

  document.body.append(gallery)
  galleryBooks.append(gallery);

  console.log(gallery);
};

// export const galleryBooks = () => {
//   document.querySelector("#homeSection").innerHTML += templateGalleryBooks();
// };
// galleryBooks.append(gallery);

// export default templateGalleryBooks;

// La línea de abajo, colocada al final de la función template, lo inseta en el body, pero necesito que lo inserte en el main
// document.body.append(gallery);

// export const templateGalleryBooks = () => {
//   return `
//   <div class="gallery">
//     <ul class="ulGallery">
//       ${booksGallery()}
//     </ul>
//   </div>
//   `;
// };

// const booksGallery = () => {
//   for (const book of dataBooks) {
//     return `
//     <li>
//       <div class="bookCard">
//         <div class="bookImg">
//           <img src="${book.cover}" alt="${book.title}" cover/>
//         </div>
//         <h3>${book.title}</h3>
//         <h4>${book.author}</h4>
//         <p>${book.editorial}</p>
//         <p class="price">${book.price}€</p>
//       </div>
//     </li>
//     `;
//   }
// };

// console.log(booksGallery);
