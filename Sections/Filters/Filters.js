import { DATABOOKS } from "../../Data/Data";
import "./Filters.css";
export const printFilters = (filters$$) => {

  const editorialFilter = (filters$$) => {
    const editorials = [];

    for (const book of DATABOOKS) {
      if (!editorials.includes(book.editorial)) {
        editorials.push(book.editorial);
      }
    }

    const divEditorial$$ = document.createElement("div");
    divEditorial$$.id = "searchByEditorial";

    const tituloEditorial$$ = document.createElement("h4");
    tituloEditorial$$.textContent = "Filtrar por Editoriales";
    divEditorial$$.appendChild(tituloEditorial$$);

    const editorial$$ = document.createElement("select");
    editorial$$.id = "editorialSelect";
    divEditorial$$.appendChild(editorial$$);

    console.log(editorial$$);

    for (const editorial of editorials) {
      const edOptions$$ = document.createElement("option");
      edOptions$$.text = editorial;

      editorial$$.append(edOptions$$);
    }
    divEditorial$$.append(editorial$$);

    editorial$$.addEventListener("change", (e) => {
      const selectValue = e.value;
      console.log(`el valor seleccionado es: ${selectValue}`)
    });

    filters$$.appendChild(divEditorial$$);
  };


  const templateFilters = (filters$$) => {
    // return `
    // <div class="filters-section">
    //   <h3>Busca por:</h3>
    //   <div class="filters">
    //     <div class="searchByEditorial">
    //         <h4>Editorial</h4>
    //         <select id="searchByEditorial">
    //             <option>-</option>
    //         </select>
    //     </div>
    //     <div class="searchByTitleOrAuthor">
    //         <h4>Título o autor</h4>
    //         <input type="text" placeholder="Título o Autor" id="searchByTitleOrAuthor">
    //     </div>
    //     <div class="searchByPrice">
    //         <h4>Precio máximo</h4>
    //         <input type="number" id="searchByPrice">
    //     </div>
    //   </div>
    // </div>
    //   `;
    editorialFilter(filters$$)
  };

  // filters$$.innerHTML += templateFilters();
  templateFilters(filters$$)
};

// const addOptionsSearchByEditorial = () => {
//   const optionsSearchByEditorial = document.querySelector("#searchByEditorial");
//   let editorials = [];

//   dataBooks.forEach((book) => {
//     const editorialOption = document.createElement("p");
//     // const editorialOption = `
//     // <p></p>
//     // `
//     editorialOption.value = book.editorial;
//     editorialOption.innerText = book.editorial;

//     // if (condition) {

//     // } else {

//     // }
//     // optionsSearchByEditorial.append(editorialOption);

//     console.log(editorialOption);
//   });
// };

// // printFilters();
// addOptionsSearchByEditorial();
