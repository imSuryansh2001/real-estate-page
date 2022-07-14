import React from 'react'
import {ImHome} from "react-icons/im"

import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"

const Eight = () => {
  return (
    <>
    <footer className="text-gray-400 bg-[#171818] body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <ImHome className='text-[#1BDF8D] text-2xl'/>
    <span className="ml-3 text-xl">Prime Properties</span>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"> © 1995-2022
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer"> primeproperties@gmail.com</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <a href="https://www.instagram.com/"target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className='text-xl cursor-pointer mx-3 md:text-2xl text-[#1bdf8d]'/></a>

      <a href="https://twitter.com/"target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className='text-xl cursor-pointer mx-3 md:text-2xl text-[#1bdf8d]'/></a>

      <a href="https://www.facebook.com/"target="_blank" rel="noopener noreferrer"><BsFacebook className='text-xl cursor-pointer mx-3 md:text-2xl text-[#1bdf8d]'/></a>
      
      <a href="https://www.linkedin.com/signup"target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-xl cursor-pointer mx-3 md:text-2xl text-[#1bdf8d]'/></a>

    </span>
  </div>
</footer>
    </>
  );
}

export default Eight