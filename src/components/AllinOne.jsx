import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const AllinOne = () => {
  return (
    <div id='testimonials' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>
                Testimonials
            </h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>Let's hear what our Clients Have to Say.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4'>
      
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>J. Bailey</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4 '>"AVA's entire team is outstanding! When it comes to tight deadlines and big requests, they understand the creativity I like. They have fully embraced our shift to digital marketing and are quite skilled at creating social media and video content."</p>

                    </div>
                </div>
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>Harry</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4'>"They did an excellent job transitioning from Invisible to Visible."</p>

                    </div>
                </div>
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>Marlon B.</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4'>"Their services helped my business grow.</p>

                    </div>
                </div>
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>Christopher D.</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4'>"AVA is far ahead of the competition. The videos they create are flawlessly edited, and the images appear to jump off the page. The main thing thatdraws me in is AVA's passion and drive to provide not only a better service, but also a cutting-edge presentation. It is extremely rare to come across a service that focuses on deliverables"</p>

                    </div>
                </div>
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>Thomas R.</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4'>"Ken and his team will go to any length to be the best. Avision Associates tests the boundaries of what is great in order to deliver what is spectacular."</p>

                    </div>
                </div>
                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600' /></div>
                    
                    <div>
                        <h3 className='font-bold text-lg'>Kathy Smith</h3>
                        <p className='italic text-gray-500 text-lg pt-2 pb-4'>"I can't say enough good things about this astute marketing firm... Their work is defined by their talent, passion and vision. These guyshave a natural, not learned, creative vision. They combine an artistic vision with cutting-edge marketing technologies and tools."</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllinOne