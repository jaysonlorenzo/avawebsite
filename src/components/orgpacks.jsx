import React from "react";
import orgImg from "../images/orgbgImg.png"
const OrgPack = () => {
    return(
        <div id="orgpack" className="w-full my-32">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto transition duration-150 ease-out md:ease-in">
                <div className="w-full h-full">
                <img className=" w-full h-full object-cover" src={orgImg} alt=''/>
                </div>
                <div className="max-w-[1240px] mx-auto text-white relative py-32">
                    <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-3 pt-4'>
                        
                        <a href="/ROI.html" class="block p-6 max-w-sm bg-white rounded-lg border border-indigo-200 shadow-md hover:bg-indigo-100 dark:bg-indigo-800 dark:border-indigo-700 dark:hover:bg-indigo-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FAST PHASE</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">10 Organic Listings</p>
                            
                        </a>
                        <a href="/ROI.html" class="block p-6 max-w-sm bg-white rounded-lg border border-indigo-200 shadow-md hover:bg-indigo-100 dark:bg-indigo-800 dark:border-indigo-700 dark:hover:bg-indigo-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MCI</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Major Commission Increaser (20 Organic Listings)</p>
                            
                        </a>
                        <a href="/ROI.html" class="block p-6 max-w-sm bg-white rounded-lg border border-indigo-200 shadow-md hover:bg-indigo-100 dark:bg-indigo-800 dark:border-indigo-700 dark:hover:bg-indigo-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ERP</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Equity Real Property (30 Organic Listings)</p>
                            
                        </a>
                        <a href="/ROI.html" class="block p-6 max-w-sm bg-white rounded-lg border border-indigo-200 shadow-md hover:bg-indigo-100 dark:bg-indigo-800 dark:border-indigo-700 dark:hover:bg-indigo-700">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AIR</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">All in package (40 Organic listings)</p>
                            
                        </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default OrgPack