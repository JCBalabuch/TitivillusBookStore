import "./About.css";

import { aboutDescription } from "../../Data/Data";

const TemplateAbout = () => {
    return `
        <div class = "about">
            <img src="./assets/TitivillusBI.jpg" alt="Logo Titivillus BookStore">
            <p>${aboutDescription}</p>
        </div>
    `
};

const About = () => {
    document.querySelector("main").innerHTML = TemplateAbout();
}

export default About; 