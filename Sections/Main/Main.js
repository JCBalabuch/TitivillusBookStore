import "./Main.css";
import galleryBooks from "../GalleryCards/GalleryCards";
import { dataBooks } from "../../Data/Data";


const templateMain = () => {
    return `
    ${galleryBooks()}
    `
};

// const Main = templateMain;

// const Main = () => {
//     document.querySelector("main").innerHTML += templateMain();
//   };
  
  export default templateMain;