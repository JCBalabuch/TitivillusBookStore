import "./Header.css";

import leftHeader from "../LeftHeader/LeftHeader";
import navCenterHeader from "../CenterHeader/CenterHeader";
import { linksNav } from "../../Data/Data";
import rightHeader from "../RightHeader/RightHeader";



const templateHeader = () =>{
  return `
  ${leftHeader()}
  ${navCenterHeader(linksNav)}
  ${rightHeader()}
  `
};

const Header = () => {
  document.querySelector("header").innerHTML += templateHeader();
};

export default Header;