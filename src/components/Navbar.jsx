//Navbar.jsx

// Import necessary dependencies
import React, { useState } from 'react'; 
// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { RiProfileFill } from "react-icons/ri";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { FaXTwitter } from "react-icons/fa6";

// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300'>
      {/* Your logo or brand name */}
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>Raul Diaz Pacheco III</h1>
      </div>

      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* ... other menu items ... */}
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* ... other mobile menu items ... */}
      </ul>

      {/* Social icons - hidden on smaller screens, shown on large screens */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn - sliding animation on hover */}
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="https://www.linkedin.com/in/raul-pacheco" className='flex justify-between items-center w-full text-gray-300 px-4' target="_blank" rel='noopener noreferrer'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a href="https://github.com/RaulPachec0" className='flex justify-between items-center w-full text-gray-300 px-4' target="_blank" rel='noopener noreferrer'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="" className='flex justify-between items-center w-full text-gray-300 px-4' target="_blank" rel='noopener noreferrer'>
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a href="" className='flex justify-between items-center w-full text-gray-300 px-4' target="_blank" rel='noopener noreferrer'>
              Resume <RiProfileFill size={30} />
            </a>
          </li>
          {/* ... other social links ... */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;