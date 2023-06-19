import { dataBooks } from "../../Data/Data";
import "./Filters.css";

const templateFilters = () => {
  return `
    <h3>Busca por:</h3>
    <div class="searchByEditorial">
        <h4>Editorial</h4>
        <select id="searchByEditorial">
            <option>-</option>
        </select>
    </div>
    <div class="searchByTitleOrAuthor">
        <h4>Título o autor</h4>
        <input type="text" placeholder="Título o Autor" id="searchByTitleOrAuthor">
    </div>
    <div class="searchByPrice">
        <h4>Precio máximo</h4>
        <input type="number" id="searchByPrice">
    </div>
    `;
};


const addOptionsSearchByEditorial = () => {
    const optionsSearchByEditorial = document.querySelector("#searchByEditorial");

    dataBooks.forEach(book => {
        const editorialOption = document.createElement("option");
        // editorialOption.value = book.editorial;
        editorialOption.innerText = book.editorial;

        // optionsSearchByEditorial.append(editorialOption);
        console.log(editorialOption.value);
    });
};

addOptionsSearchByEditorial();

export const filters = () => {
    document.querySelector("main").innerHTML += templateFilters();
  };
  