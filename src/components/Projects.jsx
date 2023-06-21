import React from "react";
import ProjectItem from "./ProjectItem";
import crypto from "../assets/crypto2.jpg";
import bookworm from "../assets/bookworm2.jpg";
import hellocalgary from "../assets/appScreens.png";
import audioplayer from "../assets/audioplayer.jpg";
import tsNotebook from "../assets/notebookTsVite.png";
import myBlog from "../assets/myBlogNextjsTs.png";
import htmlCss from "../assets/onlyHTMLCSS.png";
import ecommerce from "../assets/ecommerce1.jpg";
import ProjectHead from "./ProjectHead";
import flaskrestapi from "../assets/flaskrestapi2.jpg";
import embeddings from "../assets/embeddings3.jpg";
import inventory from "../assets/inventory2.jpg";
import echarts from "../assets/echarts.jpg";
import prisma from "../assets/prisma.jpg";
import phpproj from "../assets/php.jpg";

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
        {/* php */}
        <ProjectItem
          img={phpproj}
          title="E-commerce web with PHP and MySQL"
          projgithub="https://github.com/yanliu1111/php-tutorial/tree/main/14_product_crud/03_mvc"
        />
        {/* echarts */}
        <ProjectItem
          img={echarts}
          title="Realtime pandemic dashboard using web scrapping data"
          projgithub="https://github.com/yanliu1111/dashboard-flask-echarts"
        />
        {/* prisma */}
        <ProjectItem
          img={prisma}
          title="Turbo monorepo project with ORMs and data migrations strategies"
          projgithub="https://github.com/yanliu1111/monorepo-docker-fullstack-app"
        />
        {/* inventory */}
        <ProjectItem
          img={inventory}
          title="Inventory and Payment App & Microservices"
          projgithub="https://github.com/yanliu1111/microservices-fastapi-fullStack-app"
        />
        {/* embeddings */}
        <ProjectItem
          img={embeddings}
          title="ChatGPT API Embeddings Supabase"
          projgithub="https://github.com/yanliu1111/ChatGPT-API-embeddings-Supabase"
        />
        {/* flaskrestapi */}
        <ProjectItem
          img={flaskrestapi}
          title="Build a REST API with Flask"
          projgithub="https://github.com/yanliu1111/flask-rest-api-project"
          projlink="https://flask-rest-api-project-rmrw.onrender.com/"
        />
        {/* eccommerce */}
        <ProjectItem
          img={ecommerce}
          title="E-commerce web with React and TS"
          projgithub="https://github.com/yanliu1111/react-typeScript-ecommerce-proj"
          projlink="https://courageous-buttercream-dab68f.netlify.app/"
        />
        {/* myBlog */}
        <ProjectItem
          img={myBlog}
          title="CodeBlog with Nextjs and TS"
          projgithub="https://github.com/yanliu1111/nextjs-ts-my-markdown-blog"
          projlink="https://www.yancodeblog.codes/"
        />
        {/* tsNotebook */}
        <ProjectItem
          img={tsNotebook}
          title="Notebook App with TS and Vite"
          projgithub="https://github.com/yanliu1111/typescript-training/tree/main/vite/vite-ts-project"
          //popup no deploy yet
        />
        {/* Project3 */}
        <ProjectItem
          img={hellocalgary}
          title="Egg Hunter mobile App"
          projgithub="https://github.com/maggiechew/Green-Eggs-and-RAM"
        />
        <ProjectItem
          img={crypto}
          title="Crypto web App"
          projgithub="https://github.com/yanliu1111/ReactFirebase-FullStackProject-crytobase"
        />
        <ProjectItem
          img={htmlCss}
          title="Only HTML & CSS"
          projgithub="https://github.com/yanliu1111/make-website-using-HTML-CSS"
          projlink="https://yanliu1111.github.io/make-website-using-HTML-CSS/"
        />
        <ProjectItem
          img={audioplayer}
          title="Audio Player mobil App"
          projgithub="https://github.com/yanliu1111/ReactNative-expo-functionComponent-AudioPlayer"
        />
        <ProjectItem
          img={bookworm}
          title="Bookworm web App"
          projgithub="https://github.com/yanliu1111/ReactFirebase-FullStackProject-bookLibrary"
        />
      </div>
    </div>
  );
};

export default Projects;
