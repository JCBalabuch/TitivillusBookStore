import Hero from "../../Sections/Hero/Hero"
import templateMain from "../../Sections/Main/Main";
import Main from "../../Sections/Main/Main";
import "./Home.css"


const templateHome = () => {
    return `
    ${Hero()}
    ${templateMain()}
    `
};

const Home = () => {
    document.querySelector("main").innerHTML += templateHome();
  };
  
  export default Home;