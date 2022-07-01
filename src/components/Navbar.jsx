import React, {useState} from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import comLog from "../images/AVA-logo.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"

const OrganickPackages = [
    {
      text: "Organic Packages",
      url: "/Organicpg",
      badge: false,
      description:
        "Get a quote"
    },
    
  ]
  const CU = [
    {
        text: "Contact Us",
        url: "/ContactUs",
        badge: false,
        description:
          "Get a quote"
      },
    ]

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);


    return(
        <header className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <img className="w-36" src={comLog} alt="" />
                    <ul className="hidden md:flex transition duration-150 ease-out md:ease-in">
                        <li><AnchorLink to="/#home">Home</AnchorLink></li>
                        <li><AnchorLink to="/#about">About Us</AnchorLink></li>
                        <li><AnchorLink to="/#services">Services</AnchorLink></li>
                        <li>
                        {OrganickPackages.map((link, i) => (
                        <React.Fragment key={link.url}>
                            <Link to={link.url}>{link.text}</Link>
                            {i !== OrganickPackages.length - 1 && <> · </>}
                        </React.Fragment>
                        ))}
                        </li>
                        <li>{CU.map((link, i) => (
                        <React.Fragment key={link.url}>
                            <Link to={link.url}>{link.text}</Link>
                            {i !== CU.length - 1 && <> · </>}
                        </React.Fragment>
                        ))}</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-8 py-3">Contact Us</button>
                </div>
                <div className="md:hidden mr-4" onClick={handleClick} onKeyDown={handleClick}>
                    {
                        !nav ? <MenuIcon className="w-5"/> : <XIcon className="w-5"/>
                    }
                </div>
            </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 transition duration-150 ease-out md:ease-in' }>
            <li className="border-b-2 border-zinc-300 w-full"><AnchorLink to="/">Home</AnchorLink></li>
            <li className="border-b-2 border-zinc-300 w-full"><AnchorLink to="#about">About Us</AnchorLink></li>
            <li className="border-b-2 border-zinc-300 w-full"><AnchorLink to="#services">Services</AnchorLink></li>
            <li className="border-b-2 border-zinc-300 w-full"><AnchorLink to="Organic">Organic Packages</AnchorLink></li>
            <li className="border-b-2 border-zinc-300 w-full"><AnchorLink to="#footer">Contact Us</AnchorLink></li>
            <div className="flex flex-col my-4" >
                <button className="px-8 py-3">Call Us</button>
            </div>
        </ul>

        </header>
    )
}

export default Navbar