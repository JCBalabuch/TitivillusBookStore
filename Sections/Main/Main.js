import printGalleryBooks from "../GalleryCards/GalleryCards";
import "./Main.css";

const templateMain = () => {
  return `
    <div id="mainTemplate">
      <h2>Esto es una prueba</h2>
      <h3>esto es otra prueba</h3>
      ${printGalleryBooks()}
    </div>
    `;
};

export default templateMain;
