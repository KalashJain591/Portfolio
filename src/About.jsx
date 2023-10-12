import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I'm a passionate and dedicated individual with a strong foundation in web development and a deep love for competitive programming. As a web developer, I bring creativity and problem-solving skills to every project, striving to create user-friendly and visually appealing websites. My expertise spans across a range of technologies, including HTML, CSS, JavaScript, and various web frameworks.

          My ability to work well within a team is something I'm proud of. Collaborative teamwork allows me to exchange ideas, tackle complex challenges, and deliver high-quality results.
        </p>

        <br />

        <p className="text-xl ">
          One of my key strengths is my adaptability. I thrive in dynamic environments, and I'm always eager to learn and explore new technologies to stay at the forefront of the industry. My ability to work well within a team is something I'm proud of. Collaborative teamwork allows me to exchange ideas, tackle complex challenges, and deliver high-quality results.

          Being a tech enthusiast, I'm constantly motivated to stay updated with the latest industry trends, which enables me to build modern, efficient, and cutting-edge web solutions. I'm excited to take on new opportunities and challenges in the world of web development and competitive programming.
        </p>
        <p className="text-xl mt-10">

          Being a tech enthusiast, I'm constantly motivated to stay updated with the latest industry trends, which enables me to build modern, efficient, and cutting-edge web solutions. I'm excited to take on new opportunities and challenges in the world of web development and competitive programming.
        </p>
      </div>
    </div>
  );
};

export default About;