import React from "react";
// import IMG2 from "../src/Assets/IMG2.png";


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            name:"E-Commerce Website",
            status :"Completed",
            demo: "https://www.savornaturals.in/",
            code: "https://github.com/KalashJain591/Savor.git",
            about:"My Contribution in the Project is to work on Frontend and Login and Signup Functionality . The Tech-Stack used was MERN stack .",
            flag:1
        },
        {
            id: 2,
            name:'University Fest Website',
            status :"Completed",
            demo: "https://moonstone.onrender.com/",
            code: "https://github.com/KalashJain591/moonstone-fest.git",
            about:"My Contribution in the Project is to work on Frontend and Login and Signup Functionality . The Tech-Stack used was MERN stack .",
            flag:1

        },
        {
            id: 3,
            name : "Movie Search Application",
            status :"Completed",
            demo: "https://all-movie-search.netlify.app/",
            code: "https://all-movie-search.netlify.app/",
            about:"My Contribution in the Project is to work on Frontend and Login and Signup Functionality . The Tech-Stack used was MERN stack .",
            flag:1

        },
        {
            id: 4,
            name : "Blog Application",
            status :"In Progress",
            demo: "https://all-movie-search.netlify.app/",
            code: "https://all-movie-search.netlify.app/",
            about:"My Contribution in the Project is to work on Frontend and Login and Signup Functionality . The Tech-Stack used was MERN stack .",
            flag:1

        },

    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 w-80 h-64 hover:scale-105"

                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={demo}>Demo</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={code}>Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, name, src, demo, code, flag, status, about }) => (
                        <div className="shadow-md shadow-gray-600 rounded-lg">
                            <h1 className="text-center p-2">{name} </h1>
                            <h2 className="p-2">Status : {status}</h2>
                            <div className="relative group ">
                               <img width="30" height="30" src="https://img.icons8.com/dotty/80/FFFF00/about.png" alt="about" />
                                 <div className="border-dashed border-2 m-2 p-2 hidden group-hover:block duration-200  transition-all ">
                                    <h1 className="text-center">About</h1>
                                    <p>{about} </p>
                                </div> 
                            </div>
                            <div className=" grid grid-cols-2 items-center p-2">

                                {/* <h1>Github</h1> */}
                                <div className="flex justify-center">
                                    <a href={code} ><img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="github" /></a></div>
                                <div className="flex justify-center">
                                    <a href={demo}><img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/website--v2.png" alt="website--v2" /></a></div>
                                {/* <h1>Website</h1> */}

                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;