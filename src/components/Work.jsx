import React from "react";
import { workData, assets } from "../../assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Here are some of the projects I have worked on:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 my-8 sm:my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-9/12 rounded-md absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 py-1.5 sm:py-2 px-2 sm:px-3 flex items-center justify-between text-xs sm:text-sm md:text-base duration-300 group-hover:bottom-5 sm:group-hover:bottom-7 shadow-sm">
              <div className="overflow-hidden max-w-[80%]">
                <h2 className="font-semibold text-xs sm:text-sm truncate">{project.title}</h2>
                <p className="text-gray-700 text-xs truncate">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  width={16}
                  height={16}
                  className="w-4 sm:w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-[#fcf4ff] duration-500">
        Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
      </a>

    </div>
  );
};

export default Work;
