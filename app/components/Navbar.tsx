import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-evenly py-6">
      <div></div>
      <div className="flex justify-between gap-6">
        <a href="#hero">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Works">Works</a>
        <a href="#Footer">Contact Me</a>
      </div>
    </div>
  );
};

export default Navbar;
