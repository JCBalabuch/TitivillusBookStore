import "./GalleryCards.css";
import { dataBooks } from "../../Data/Data";

const galleryBooks = () => {
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
        img.alt = book.title + "cover";
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
        price.textContent = book.price + "€";
        bookCard.append(price);

        li.append(bookCard);

        ulGallery.append(li);
    };
    gallery.append(ulGallery);

    // document.body.append(gallery)
};

export default galleryBooks;
