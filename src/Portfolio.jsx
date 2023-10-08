import React from "react";
import IMG2 from "../src/Assets/IMG2.png";


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: "https://firebasestorage.googleapis.com/v0/b/blog-app-6ac9e.appspot.com/o/images%2FSavorimg2.png?alt=media&token=97e7010b-81f9-47fa-aeef-46bb00746303&_gl=1*karzcc*_ga*NzE3NDAxNDE0LjE2OTE4Mzk1NTc.*_ga_CW55HF8NVT*MTY5Njc3NDcwOC4xMC4xLjE2OTY3NzQ4NTQuMzguMC4w",
            demo:"https://www.savornaturals.in/",
            code :"https://github.com/KalashJain591/Savor.git"
        },
        {
            id: 2,
            src: "https://firebasestorage.googleapis.com/v0/b/blog-app-6ac9e.appspot.com/o/images%2Fmoonstone.png?alt=media&token=a08d587c-d868-4bd4-8882-8db31b9b107f&_gl=1*msg4p2*_ga*NzE3NDAxNDE0LjE2OTE4Mzk1NTc.*_ga_CW55HF8NVT*MTY5Njc3NDcwOC4xMC4xLjE2OTY3NzUyODYuMzUuMC4w",
            demo:"https://moonstone.onrender.com/",
            code:"https://github.com/KalashJain591/moonstone-fest.git"
        },
        {
            id: 3,
            src: "https://firebasestorage.googleapis.com/v0/b/blog-app-6ac9e.appspot.com/o/images%2Fmovie%20application.png?alt=media&token=e81f3da8-e48e-4ca7-9c33-5f8aff25566f&_gl=1*q4wanu*_ga*NzE3NDAxNDE0LjE2OTE4Mzk1NTc.*_ga_CW55HF8NVT*MTY5Njc3NDcwOC4xMC4xLjE2OTY3NzU0MzIuNDUuMC4w",
            demo:"https://all-movie-search.netlify.app/",
            code:"https://all-movie-search.netlify.app/"
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

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src,demo ,code}) => (
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
                </div>
            </div>
        </div>
    );
};

export default Portfolio;