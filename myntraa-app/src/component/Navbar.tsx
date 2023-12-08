import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className=" flex shadow-lg text-sm font-bold text-gray items-center p-5">
      <img
        src="data:image/jpeg;base64,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"
        className="ml-4 mt-2 w-19 h-12 items-center"
      />
      <h1 className="ml-10 mt-2 items-center">MEN</h1>
      <h1 className="ml-10 mt-2 items-center">WOMEN</h1>
      <h1 className="ml-10 mt-2 items-center">KIDS</h1>
      <h1 className="ml-10 mt-2 items-center">HOME & LIVING</h1>
      <h1 className="ml-10 mt-2 items-center">BEAUTY</h1>
      <h1 className="ml-10 mt-2 items-center">STUDIO</h1>

    
      <div className="ml-12 mt-2 flex items-center border border-gray-100 bg-gray-100 w-[35rem] h-10">
        <FaMagnifyingGlass className="h-3 w-3 ml-2" />
        <input
          className=" outline-none bg-gray-100 font-normal text-gray-900 text-sm rounded-lg block w-full p-2.5"
          type="text"
          placeholder="Search for products"
        />
      </div>

      <div className="ml-6 text-xs  ">
        <RiAccountCircleLine className="w-5 h-5 ml-2" />
        <h1>Login</h1>
      </div>
      <div className="ml-6 text-xs   ">
        <GrLogout className="w-5 h-5 ml-2" />
        <h1>Logout</h1>
      </div>

      

    </div>
  );
};

export default Navbar;
