import React from 'react'
// import { BsArrowRightSquare } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import IMG1 from '../src/Assets/IMG1.jpg';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="flex  h-screen  bg-gradient-to-b from-black via-black to-gray-800"
        >

            <div className="  items-center mx-auto justify-center  h-full px-4  mt-10 md:mt-0 md:grid    grid-cols-9 ">

                <div className="  md:col-start-2 col-span-5  mt-5 flex flex-col  justify-center mx-5 ">
                    <h2 className=" text-6xl md:text-7xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4  md:text-2xl   ">
                    Aspiring web developer with a keen interest in modern technologies like React, Tailwind,Express, MongoDB and Nodejs. Ready to start my journey in software development with an Adaptive Attitude 😊
                    </p>

                    <div className=' '>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group   text-white w-fit px-6 py-3 my-2 flex flex-none items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>      
                 <div className='  md:col-span-3 '>
                    <img
                        src={IMG1}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-1/2 md:w-1/2 mt-5"
                    />
                </div>  
            </div>



        </div>
    )
}

export default Home
