import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex justify-between items-center px-[40px] h-[60px] shadow-md text-secondary ">
      <div className="">
        <h1 className="text-[23px] font-black tracking-[1px]">NELCA</h1>
      </div>
      <div>
        <ul className="flex justify-between gap-[20px] font-bold ">
          <li className=" text-secondary cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-secondary cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className=" text-secondary cursor-pointer">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className=" text-secondary cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
