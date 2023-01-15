import React from "react";

const ProjectHead = () => {
  return (
    <div className="rounded-div my-2 ">
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <div className="flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 cursor-pointer hover:scale-110 ease-in duration-200">
            <article className="p-4 m-4">
              <h4 className="text-xl font-bold text-center text-[#001b5e]">
                What I Believe
              </h4>

              <ul className="list-disc">
                <li>I believe in self-motivation &#38; determination</li>
                <li>I believe in the power of constructive feedback</li>
                <li>I believe in getting things done </li>
              </ul>
            </article>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center  rounded-3xl shadow-lg bg-gray-100 shadow-gray-400 m-2 cursor-pointer hover:scale-110 ease-in duration-200">
            <article className="p-4 m-4">
              <h4 className="text-xl font-bold text-center text-[#001b5e]">
                What I Do
              </h4>

              <ul className="list-disc">
                <li>Deliver solutions that excite customers </li>
                <li>Use software to solve non-software problems </li>
                <li>Create and design with passion</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHead;
