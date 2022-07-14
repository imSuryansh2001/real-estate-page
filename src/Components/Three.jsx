import React from 'react'
import eight from "../images/eight.jpeg"

const Three = () => {
  return (
    <>
        <div id="exploree" className='bg-cover bg-center md:mt-16 h-[45vh] w-[95%] md:w-[96%] lg:w-[97%] mx-auto mt-10 rounded-lg px-3 mb-3' style={{ backgroundImage: `url(${eight})` }}>

        <h1 className='text-4xl md:text-5xl pt-12 md:pt-16 text-white font-bold'>Experience Luxury Like Never Before</h1>
        <p className='text-white font-myFont text-xl mt-4 md:mt-6 font-semibold tracking-[0.2rem]'>50+ Exotic locations across the globe.</p>
          <button className='btn bg-transparent shadow-none active:bg-white active:text-[#171818] active:shadow-none mt-8 text-xl font-myFont border border-white'>EXPLORE LOCATIONS</button>
        </div>
    </>
  );
}

export default Three