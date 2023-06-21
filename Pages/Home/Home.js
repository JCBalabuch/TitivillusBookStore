import Hero from "../../Sections/Hero/Hero";
import templateMain from "../../Sections/Main/Main";
import "./Home.css";

const templateHome = () => {
  return `
    <div id="homeSection">
      ${Hero()}
      ${templateMain()}
    </div>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML += templateHome();
};

export default Home;
