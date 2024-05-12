import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi2";

import logo from "../../images/Logologo.jpg";

import "./index.css";

const Header = () => {
  const [lang, setLang] = useState();
  return (
    <div className="header-comp">
      <div className="logo-card">
        <div className="menu-icon-card">
          <FiMenu className="menu-icon" size={30} />
          <img className="logo" src={logo} alt="website-logo" />
        </div>
        <h1 className="logo-head">LOGO</h1>
        <div className="icons-card">
          <CiSearch size={30} />
          <CiHeart size={30} />
          <TbShoppingBag size={30} />
          <HiOutlineUser className="user-icon" size={30} />
          <select
            className="sel-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            name="language"
          >
            <option className="lang" value="ENG">
              ENG
            </option>
            <option className="lang" value="TLG">
              TLG
            </option>
            <option className="lang" value="KAN">
              KAN
            </option>
          </select>
        </div>
      </div>
      <ul className="nav-card-list">
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
    </div>
  );
};

export default Header;
