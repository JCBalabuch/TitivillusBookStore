import "./Header.css";

import LeftHeader from "../LeftHeader/LeftHeader";
import NavCenterHeader from "../CenterHeader/CenterHeader";
import RightHeader from "../RightHeader/RightHeader";
import { linksNav } from "../../Data/Data";


const templateH = () => {
  return `${LeftHeader()}
  ${NavCenterHeader(linksNav)}
  ${RightHeader}`;
};


const Header = () => {
  document.querySelector("header").innerHTML = templateH();
};

export default Header;