import "./Home.css";
import Hero from "../../Sections/Hero/Hero";
import { templateGalleryBooks } from "../../Sections/GalleryCards/GalleryCards";
import { printFilters } from "../../Sections/Filters/Filters";


const templateHome = () => {
  return `
    <div id="homeSection">
      ${Hero()}
      <div id="mainTemplate"> 
      </div>
    </div>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML += templateHome();
  const filters$$ = document.querySelector("#mainTemplate");
  printFilters(filters$$);
  templateGalleryBooks();
};


export default Home;
