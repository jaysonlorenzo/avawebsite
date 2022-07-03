import React from "react";
import bgImg from "../images/stonks.png"
import { Link } from "gatsby"


const Hero = () => {
    return(
    <div id="home" className="w-full h-screen bg-white flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto transition duration-150 ease-out md:ease-in">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 transition duration-150 ease-out md:ease-in">
                <p className="text-2xl">
                    </p>
                <h1 className="py-6 text-5xl md:text-7xl font-bold sm:pt-11">We Help You to Grow your Business</h1>
                <p className="text-2xl">We base the websites we create on the best practices for online marketing, which also include title tags, internal links, original content and, keyword search</p>
                <button className="ease-in-out duration-300 py-3 px-6 sm:w-[60%] my-4">
                            <Link to="/Organicpg#orgpack">Get Started</Link>
                </button>

            </div>
            <div>
                <img className="image1 w-full skew-y-6" src={bgImg} alt=""/>
            </div>
            
        </div>
    </div>
    )

}
export default Hero