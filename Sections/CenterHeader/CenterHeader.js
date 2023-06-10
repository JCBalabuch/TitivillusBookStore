import "./CenterHeader.css";
// import { linksNav } from "../../Data/Data";

// const NavCenterHeader = (links) => {
//   return `
//     <nav class="centerHeader">
//         <ul>
//             ${links
//               .map(
//                 (link) => `
//             <li>
//                 <a href=${link.link} id=${link.id}>${link.name}</a>
//             </li>
//             `
//               )
//               .join("")}
//         </ul>
//     </nav>
//     `;
// };

const NavCenterHeader = () => {
    return `
    <p>Home</p>
    <p>BookClub</p>
    <p>About</p>
    `
}

export default NavCenterHeader;