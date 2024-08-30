import React from "react";
import Card from "./Card";
// import gaurav from '../Cards/gaurav1.png';
import gaurav from '../Cards/gaurav1.jpg'
import aman from '../Cards/amanimg.jpg'
import atul from '../Cards/atulimg.jpg'

const CardPage = ({ name, title, image }) => {
  return (
    <>
      <div className=" ">
        <h1 className="text-center my-8 flex items-center justify-center  text-4xl px-2 border-[2px] bg-gray-700 py-2  text-yellow-400 mb-10">
          What my clients are saying?
        </h1>
        <div className="grid sm:grid-cols-3  gap-y-10 items-center justify-center sm:m-12  m-16  sm:mb-12 gap-x-8">
        <Card
            name="Aman Vishwakarma"
            title="I can bet that it's too hard to find professional developers like Anurag.
            He could peek inside my mind and made the site exactly as I wanted. Much appreciated"
            image={aman}
          />
          
          <Card
            name="Atul Varma"
            title="I worked with Prince to make my website. i am Speechless by looking at his work ethic and dedication.Working
            with him was the best decision I made."
            image={atul}
          />
          <Card
            name="Gaurav Shukla"
            title="Prince was a wonderful developer to work with! He anticipated everything I need to consider for my
            website.He also went the extra mile and added details that I hadn't considered!."
            image={gaurav}
          />
         
        </div>
      </div>
    </>
  );
};

export default CardPage;
