import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-justify">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I'm a passionate and dedicated individual with a strong foundation in web development and a deep love for competitive programming. As a web developer, I bring creativity and problem-solving skills to every Project

          My ability to work well within a team is something I'm proud of. Collaborative teamwork allows me to exchange ideas, tackle complex challenges, and deliver high-quality results.
        </p>

        <br />

        <p className="text-xl ">
          Being a tech enthusiast, I'm constantly motivated to stay updated with the latest industry trends, which enables me to build modern, efficient, and cutting-edge web solutions. I'm excited to take on new opportunities and challenges in the world of web development and competitive programming.
        </p>
        <p className="text-xl mt-10">

        </p>
      </div>
    </div>
  );
};

export default About;