import React from "react";

const About = () => {
    return(
        <div id="about" className="about w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">
                        Trusted by Everyone across the world
                    </h2>
                    <p className="text-3xl py-6 text-gray-500">An aggresive strategy for digital marketing gives client partners the accelerated SERP performance they require for expansion.</p>
                    <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">100%</p>
                            <p className="text-gray-400 mt-2">Completion</p>
                        </div>
                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">24/7</p>
                            <p className="text-gray-400 mt-2">Assistance</p>
                        </div>
                        <div className="border py-8 rounded-xl shadow-xl">
                            <p className="text-6xl font-bold text-indigo-600">100K</p>
                            <p className="text-gray-400 mt-2">Transaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About