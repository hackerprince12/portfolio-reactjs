import React from "react";
import Feature from "./Features/Feature";
import bg1 from "./Map/meimg44.jpeg";
import bg2 from "./Map/princebg2.jpg";
const About = () => {
  return (
    <div id="about">
      <div className="mt-[72px] sm:flex shadow-lg m-4 sm:flex-row   items-center p-2">
        <div className=" flex flex-col gap-y-1 text-start justify-center  md:w-1/2 md:h-1/2">
          <h2 className="text-6xl px-6 py-2 font-bold sm:text-start text-center  text-yellow-400">
            About Me
          </h2>
          <p className="flex m-2 coverflow-hidden font-semibold   p-4 mb-8 text-2xl  ">
            As a Full Stack Web Developer with a background in the MERN stack
            and Redux, I excel at efficiently building applications. With a
            strong professional foundation, I am eager to contribute as an asset
            to any organization
          </p>
          <div className="items-start gap-4 px-6 mb-4">
            <button className="btn hover:bg-yellow-300 bg-yellow-400">
              <a href="https://drive.google.com/file/d/1sU9KnX9wVOV6s2qcdmfjZP4zgMIOuUcy/view?usp=drivesdk">
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="flex justify-around md:h-1/2 md:w-1/2">
          <img src={bg1} className="max-h-[510px]" alt="banner" />
        </div>
      </div>
      <div className=" sm:flex sm:flex-row shadow-lg m-4 items-center">
        <div className="flex md:h-1/2 md:w-1/2 mt-4">
          <img src={bg2} className="p-2" alt="banner" />
        </div>

        <div className=" flex flex-col gap-y-4 text-start justify-center p-4  md:w-1/2 md:h-1/2">
          <h2 className="text-5xl px-4 py-2 font-bold sm:text-start text-center text-yellow-400">
            Here are few Highlights:
          </h2>
          <p className="flex overflow-hidden px-4  text-2xl  ">
            <ul className="px-4">
              <li className="text-2xl font-semibold list-disc p-2">
                Full Stack web Developer
              </li>
              <li className="text-2xl font-semibold list-disc p-2">
                React and React Native
              </li>
              {/* <li className="text-2xl font-semibold list-disc p-2">Interactive Front End per the design</li> */}
              <li className="text-2xl font-semibold list-disc p-2">
                Redux for state Management
              </li>
              <li className="text-2xl font-semibold list-disc p-2">
                Building REST API
              </li>
              <li className="text-2xl font-semibold list-disc p-2">
                Managing database
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="lex   text-center mt-8 pb-2 justify-center">
        <h className="text-6xl text-gray-900  font-bold p-2">Skills</h>
        <p className="text-gray-500 py-2 px-4">
          Here are some of my skills that I use to create projects
        </p>
      </div>
      <div className=" flex justify-center shadow-lg m-4 md:mb-24 mb-16 items-center my-8 p-2">
        <Feature />
      </div>
    </div>
  );
};

export default About;
