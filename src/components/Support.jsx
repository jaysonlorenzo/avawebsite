import React from "react";
import {
    PhoneIcon, ArrowSmRightIcon,
} from '@heroicons/react/outline'
import {
    ChipIcon, SupportIcon
} from '@heroicons/react/solid'
import supportImg from '../images/home.jpg'
const Support = () => {
    return(
    <div id="services" className="w-full mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="" />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
                   
                </h2>
                <h3 className="text-5xl font-bold py-6 text-center">
                    Our Services to Help You
                </h3>
                <p className="py-4 text-3xl text-slate-300">Increase Conversions & Revenue by Driving the Right Traffic. 15 years of expertise using organic approaches and techniques to increase search engine rankings</p>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 text-black">
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">Business Consultation</h3>
                        <p className="text-gray-600 text-xl">We'll sit with you and work on with your corporate needs. Our strategists are with you on your journey</p>
                    
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="font-bold flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/></p>
                    </div> 
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">Web & App Development</h3>
                        <p className="text-gray-600 text-xl">Let's make your business more visible with beautiful secure websites we can develop. We'll base our work with your needs.</p>
                    
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="font-bold flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/></p>
                    </div> 
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>
                        <h3 className="font-bold text-2xl my-6">SEO Optimizing</h3>
                        <p className="text-gray-600 text-xl">Make your business well built and known on the web with our assistance. You're one click away from prospective clients</p>
                    
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="font-bold flex items-center text-indigo-600">Contact Us <ArrowSmRightIcon className="w-5 ml-2"/></p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default Support;