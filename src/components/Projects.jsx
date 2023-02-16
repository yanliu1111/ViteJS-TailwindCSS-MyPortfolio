import React from "react";
import ProjectItem from "./ProjectItem";
import crypto from "../assets/crypto2.jpg";
import bookworm from "../assets/bookworm2.jpg";
import hellocalgary from "../assets/hellocalgary.jpg";
import audioplayer from "../assets/audioplayer.jpg";
import ProjectHead from "./ProjectHead";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div>
        <ProjectHead />
      </div>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={crypto}
          title="Crypto web App"
          link="https://github.com/yanliu1111/ReactFirebase-FullStackProject-crytobase"
        />
        <ProjectItem
          img={audioplayer}
          title="Audio Player mobil App"
          link="https://github.com/yanliu1111/ReactNative-expo-functionComponent-AudioPlayer"
        />
        <ProjectItem
          img={bookworm}
          title="Bookworm web App"
          link="https://github.com/yanliu1111/ReactFirebase-FullStackProject-bookLibrary"
        />
        <ProjectItem
          img={hellocalgary}
          title="Egg Hunter mobile App"
          link="https://github.com/maggiechew/Green-Eggs-and-RAM"
        />
      </div>
    </div>
  );
};

export default Projects;
