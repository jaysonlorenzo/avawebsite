import React from "react";
import bgImg from "../images/businessAnalysis.png"



const HeroOrg = () => {
    return(
    <div id="home" className="w-full h-screen bg-white flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto transition duration-150 ease-out md:ease-in">
        <div>
                <img className="image1 w-full skew-y-6" src={bgImg} alt=""/>
            </div>
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 transition duration-150 ease-out md:ease-in">
                <p className="text-2xl">
                    </p>
                <h1 className="py-6 text-5xl md:text-7xl font-bold sm:pt-11">We offer Organic Packages to fit your needs</h1>
                <p className="text-2xl"></p>
                <button className="ease-in-out duration-300 py-3 px-6 sm:w-[60%] my-4">Get Started</button>

            </div>
            
            
        </div>
    </div>
    )

}
export default HeroOrg