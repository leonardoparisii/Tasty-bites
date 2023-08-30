import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";

function Navbar() {
  const socialsIcons = [
    {
      title: "Instagram",
      src: Instagram,
      url: "",
    },
    {
      title: "X",
      src: X,
      url: "",
    },
    {
      title: "Github",
      src: Github,
      url: "",
    },
  ];

  return (
    <div className="max-w-[1485px] w-[90%] mx-auto mt-6 flex flex-row justify-between items-center sm:mt-3 mb-10 relative z-50">
      <div className="flex gap-20">
        <NavLink to="/discover" className="z-50 flex w-fit gap-20 items-center">
          <h1 className=" font-black font-mulish text-3xl text-[#e5c687] block">
            <span className="text-[#2d4739]">TASTY</span>
            BITES
          </h1>
        </NavLink>
      </div>
      <Searchbar styles="backdrop-blur-sm hidden md:flex justify-between item-center md:w-[375px] lg:w-[500px] px-3 py-[6px] bg-transparent border border-[#bebfbf] rounded-lg" />
      <div className="flex gap-4">
        {socialsIcons.map((item) => (
          <div key={item.title} className="w-fit cursor-pointer">
            <Link to={item.url}>
              <img src={item.src} className="w-6 h-6" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
