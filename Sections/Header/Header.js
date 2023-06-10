import "./Header.css";
import leftHeader from "../LeftHeader/LeftHeader";
import NavCenterHeader from "../CenterHeader/CenterHeader";
import RightHeader from "../RightHeader/RightHeader";
// import { linksNav } from "../../Data/Data";


const templateH = () => {
  return `${leftHeader()}
  ${NavCenterHeader()}
  ${RightHeader}`;
};


const Header = () => {
  document.querySelector("header").innerHTML = templateH();
};

// const Header = () => {
//   const header = document.createElement("header");

//   LEFT HEADER

// const leftHeader = document.createElement("div");
// leftHeader.classList.add("leftHeader");

// const img = document.createElement("img");
// img.src = "./assets/TitivillusSI.jpg";
// img.alt = "Titivillus BookStore Logo";
// leftHeader.appendChild(img);

// const h2 = document.createElement("h2");
// h2.classList.add("bookStoreName");
// h2.textContent = "Titivillus BookStore";
// leftHeader.appendChild(h2);

// header.appendChild(leftHeader);

// CENTER HEADER

// const centerHeader = document.createElement("nav");
// centerHeader.classList.add("centerHeader");

// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// const a1 = document.createElement("a");
// a1.href = "#Home";
// a1.textContent = "Home";
// li1.appendChild(a1);
// ul.appendChild(li1);

// const li2 = document.createElement("li");
// const a2 = document.createElement("a");
// a2.href = "#BooksClub";
// a2.textContent = "Book'sClub";
// li2.appendChild(a2);
// ul.appendChild(li2);

// const li3 = document.createElement("li");
// const a3 = document.createElement("a");
// a3.href = "#About";
// a3.textContent = "About";
// li3.appendChild(a3);
// ul.appendChild(li3);

// centerHeader.appendChild(ul);

// header.appendChild(centerHeader);

// RIGHT HEADER

// const rightHeader = document.createElement("div");
// rightHeader.classList.add("rightHeader");

// const signIn = document.createElement("button");
// signIn.textContent = "Sign in";
// rightHeader.appendChild(signIn);

// const logIn = document.createElement("button");
// logIn.textContent = "Log in";
// rightHeader.appendChild(logIn);

//   const shop = document.createElement("button");
//   const imgShp = document.createElement("img");
//   imgShp.src = "./assets/CestaCompraTTV.png";
//   imgShp.alt = "Shopping Cart";
//   imgShp.appendChild(img);
//   shop.appendChild(imgShp);
//   rightHeader.appendChild(shop);

//   const mode = document.createElement("button");
//   mode.id = "themeMode";
//   const imgMode = document.createElement("img");
//   imgMode.src = "./assets/day.png";
//   imgMode.alt = "Light Mode Image";
//   mode.appendChild(imgMode);
//   rightHeader.appendChild(mode);

//   header.appendChild(rightHeader);

//   document.body.appendChild(header);
// };

export default Header;
