import React from 'react'
// import IMG1 from "../src/Assets/IMG1.jpg"
import HTML5 from "../src/Assets/HTML5.png"
import Js from "../src/Assets/Js.png"
import CSS from "../src/Assets/CSS.png"
import react from "../src/Assets/react.png"
import MongoDb from "../src/Assets/Mongodb.png"
import Nodejs from "../src/Assets/nodejs.png"
import Tailwind from "../src/Assets/tailwind.png"
import Bootstrap from "../src/Assets/bootstrap.png"
import Java from "../src/Assets/java.png"
import C from "../src/Assets/c++.png"
// import IMG1 from "../src/Assets/IMG1.jpg"

const TechStack = () => {
    const techs = [
        {
            id: 1,
            src: HTML5,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: CSS,
            title: "CSS",
            style: "shadow-blue-500",
        }, {
            id: 3,
            src: Js,
            title: "JavaScript",
            style: "shadow-yellow-500",
        }, {
            id: 5,
            src: Bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500",
        },
        {
            id: 6,
            src: react,
            title: "React",
            style: "shadow-blue-500",
        },
        {
            id: 7,
            src: MongoDb,
            title: "MongoDb",
            style: "shadow-green-500",
        },
        {
            id: 8,
            src: Nodejs,
            title: "Nodejs",
            style: "shadow-green-500",
        },

        {
            id: 9,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-blue-500",
        },
        {
            id: 9,
            src: C,
            title: "C++",
            style: "shadow-blue-500",
        },
        {
            id: 9,
            src: Java,
            title: "Java",
            style: "shadow-orange-500",
        },
        
    ];
    return (
        <div
            name="techStack"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full'>
                <div className=' pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>
                        Tech-stack
                    </p>
                    <p className="py-6">Here are Some Technologies I am familiar to</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20   mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
