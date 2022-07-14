import React from 'react'
import Five from './Components/Five';
import FourCardsMain from './Components/FourCardsMain';
import Navbar from './Components/Navbar';
import One from './Components/One';
import Three from './Components/Three';
import TwoCardsMain from './Components/TwoCardsMain';
import Six from './Components/Six';
import Eight from './Components/Eight';
import {BsFileArrowUpFill} from "react-icons/bs"
import { Link } from 'react-scroll';
import Seven from './Components/Seven';


const App = () => {
  return (
    <>
    
    <Link to="navbarr" smooth={true} duration={1500}><BsFileArrowUpFill className='text-2xl mt-24 md:ml-8 lg:ml-[2rem] cursor-pointer md:mt-28 lg:mt-32 text-[#9dffd6] rounded-lg bg-gray-900 ml-2 z-10 fixed shadow-gray-500 shadow-lg'/></Link>

      <Navbar/>
      <One/>
      <TwoCardsMain/>
      <Three/>
      <FourCardsMain/>
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
    </>
  );
}

export default App
