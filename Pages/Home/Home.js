import "./Home.css";
import Hero from "../../Sections/Hero/Hero";
import { templateGalleryBooks } from "../../Sections/GalleryCards/GalleryCards";


const templateHome = () => {
  return `
    <div id="homeSection">
      ${Hero()}
      <div id="mainTemplate"> 
      ${templateGalleryBooks()}
      </div>
    </div>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML += templateHome();
};

export default Home;
