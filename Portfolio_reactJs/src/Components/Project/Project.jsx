import React from "react";
// import { Link } from "react-router-dom";

const Project = ({ name, title, image, link }) => {
  return (
    <>
      <div className="relative  flex w-70 mt-8 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="card bg-base-100  max-h-56 image-full w-76  shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{title}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary border-none bg-yellow-300 text-black hover:text-white ">
                <a href={link}>Live preview</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
