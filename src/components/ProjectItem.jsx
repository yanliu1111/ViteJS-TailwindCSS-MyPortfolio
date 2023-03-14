import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";

const ProjectItem = ({ img, title, projgithub, projlink }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        {/* <a href={link}>
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More info
          </p>
        </a> */}

        <div className="flex p-4 justify-center gap-20 flex-wrap">
          <a
            className="text-white font-bold hover:scale-105 transition-all duration-300"
            href={projgithub}
          >
            <AiFillGithub size={32} />
          </a>

          <a
            className=" text-white font-bold hover:scale-105 transition-all duration-300"
            href={projlink}
          >
            <RiPagesLine size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
