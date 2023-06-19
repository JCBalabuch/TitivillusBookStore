import "./Main.css";

import { dataBooks } from "../../Data/Data";
import { filters } from "../Filters/Filters";
import templateGalleryBooks from "../GalleryCards/GalleryCards";


const templateMain = () => {
    return `
    <div id="mainTemplate">
    ${filters()}
    ${templateGalleryBooks()}
    </div>
    `
};

// const Main = templateMain;

// const Main = () => {
//     document.querySelector("main").innerHTML += templateMain();
//   };
  
  export default templateMain;