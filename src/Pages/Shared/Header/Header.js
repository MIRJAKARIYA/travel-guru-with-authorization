import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../../logo.png";
import {AiOutlineSearch} from 'react-icons/ai';

const Header = () => {
  return (
    <header className="p-2 flex md:flex-row flex-col items-center justify-between lg:w-[80%] lg:mx-auto mt-5">
      <div className="w-[450px] flex justify-between items-center">
        <div>
          <img src={Logo} width={120} alt="" />
        </div>
        <div className="relative">
          <small className="text-white absolute top-2 left-2 text-xl"><AiOutlineSearch></AiOutlineSearch></small>
          <input className="search-fied pl-10" type="text" name="" id="" placeholder='search your destination' />
        </div>
      </div>
      <div className="flex items-center w-[450px] mr-5">
        <div className="link-containers">
          <Link to='/news'>News</Link>
          <Link to='/destination'>Destination</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>

  </header>
  )
};

export default Header;