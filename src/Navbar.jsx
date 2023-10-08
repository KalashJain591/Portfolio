import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"
const Navbar = () => {

    const [nav, setNav] = useState(false);
    const elem = [
        {
            id: 1,
            link: "home",
            name: "Home"
        }, {
            id: 2,
            link: "about",
            name: "About"
        }, {
            id: 3,
            link: "portfolio",
            name: "Portfolio"
        }, {
            id: 4,
            link: "techStack",
            name: "TechStack"
        }, {
            id: 5,
            link: "contact",
            name: "Contact"
        },]

    return (
        <div className='flex justify-between  items-center w-full h-20 px-4 text-white bg-black  '>
            <div>
                <h1 className='text-5xl font-signature ml-2 '>Kalash</h1>
            </div>

            <ul className='hidden md:flex '>
                {
                    elem.map((key) => {
                        return <>
                            <li key={key.id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                                <Link smooth duration={500} to={key.link}>{key.name}</Link></li></>
                    })
                }

            </ul>
            <div onClick={() => setNav(!nav)}
                className="cursor-pointer md:hidden z-10 pr-4 text-gray-500 ">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


            {nav && <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 '>
                {
                    elem.map((key) => {
                        return <>
                            <li key={key.id} className='px-4 cursor-pointer capitalize py-6 text-4xl '>
                                <Link smooth duration={500}  to={key.link}>{key.name}</Link></li></>
                    })
                }

            </ul>}


        </div>
    )
}

export default Navbar
