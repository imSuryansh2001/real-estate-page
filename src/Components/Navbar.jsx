import React, { useState } from 'react'
import {ImHome} from "react-icons/im"
import {VscListSelection} from "react-icons/vsc"
import {HiOutlineX} from "react-icons/hi"
import {Link} from "react-scroll"

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <>
    {/* navbar main box */}
        <div id="navbarr" className='flex items-center justify-between mt-3 w-[90%] mx-auto md:mt-4 md:justify-evenly lg:justify-between lg:w-[90%] lg:mx-auto'>
            
            <ImHome className="text-3xl text-[#171818]"/>
            
            {/* div for hamburger */}
            <div onClick={handleNav}>
            {nav?<HiOutlineX className='text-2xl text-[#171818] md:hidden'/>:<VscListSelection className='text-2xl text-[#171818] md:hidden'/>}
            
            </div>
 
            <ul className='ml-3 md:justify-around hidden md:flex'>
               <Link to="homee" smooth={true} duration={1500}><li className='md:mx-8 font-semibold font-myFont cursor-pointer hover:border-b-[#1bdf8d] duration-1000 hover:border-2 hover:outline-none text-[#858987]'>Home</li></Link>

                <Link to="locationss" smooth={true} duration={1500}><li className='md:mx-8 font-semibold font-myFont cursor-pointer hover:border-b-[#1bdf8d] duration-1000 hover:border-2 hover:outline-none text-[#858987]'>Locations</li></Link>

                <Link to='exploree' smooth={true} duration={1500}><li className='md:mx-8 font-semibold font-myFont cursor-pointer hover:border-b-[#1bdf8d] duration-1000 hover:border-2 hover:outline-none text-[#858987]'>Explore</li></Link>

                <Link to="savingss" smooth={true} duration={1500}><li className='md:mx-8 font-semibold font-myFont cursor-pointer hover:border-b-[#1bdf8d] duration-1000 hover:border-2 hover:outline-none text-[#858987]'>Savings</li></Link>

               <Link to="contactt" smooth={true} duration={1500}> <li className='md:mx-8 font-semibold font-myFont cursor-pointer hover:border-b-[#1bdf8d] duration-1000 hover:border-2 hover:outline-none text-[#858987]'>Contact</li></Link>
            </ul>


            {/* nav bar mobile main box */}
            <div className={ nav? "bg-[#1BDF8D] sm:h-[45vh] sm:mt-[25rem] rounded-bl-xl rounded-br-xl w-[100%] absolute left-0 py-2 mt-[22rem] rotate-[360deg]  ease-in-out duration-[1.5s] md:hidden": "absolute left-[-100%]"}>
                <ul className='ml-5 sm:ml-9 sm:mt-6 tracking-[0.1rem]'>
                    <Link to="homee" smooth={true} duration={1500}><li className='text-white font-bold tracking-[0.2rem] font-myFont py-3 text-xl'>Home</li></Link>

                    <Link to='locationss' smooth={true} duration={1500}><li className='text-white font-bold tracking-[0.2rem] font-myFont py-3 text-xl'>Locations</li></Link>

                    <Link to="exploree" smooth={true} duration={1500}><li className='text-white font-bold tracking-[0.2rem] font-myFont py-3 text-xl'>Explore</li></Link>

                    <Link to='savingss' smooth={true} duration={1500}><li className='text-white font-bold tracking-[0.2rem] font-myFont py-3 text-xl'>Savings</li></Link>

                    <Link to="contactt" smooth={true} duration={1500}><li className='text-white font-bold tracking-[0.2rem] font-myFont py-3 text-xl'>Contact</li></Link>

                </ul>
            </div>

        </div>
    </>
  );
}

export default Navbar