import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-3/4 mx-auto h-[70vh] bg-gradient-to-r from-slate-400 to-slate-600 rounded-lg mt-10 flex justify-around gap-6">
      <img
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
        alt="image"
      />
      <div className="flex items-center p-10 flex-col">
        <h1>Hi!! I'm Jeevan</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          delectus perspiciatis incidunt illo aliquid. Repudiandae earum rem
          pariatur eaque eligendi ullam, possimus, esse commodi, at voluptates
          molestiae dolorem nam placeat!
        </p>
      </div>
    </div>
  );
};

export default Hero;
