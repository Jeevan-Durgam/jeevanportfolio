import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLogoWebComponent } from "react-icons/io5";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="mb-4 p-4 flex justify-between items-center">
      <div className="text-4xl flex items-center">
        <IoLogoWebComponent /> <span className="text-lg">Jeevan</span>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <BsFacebook cursor={"pointer"} size={18} />
        <BsInstagram cursor={"pointer"} size={18} />
        <BsTwitter cursor={"pointer"} size={18} />
        <BsLinkedin cursor={"pointer"} size={18} />
        <button className="bg-slate-800 text-white p-2 rounded-md">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
