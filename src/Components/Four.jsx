import React from 'react'

const Four = (props) => {
  return (
    <>
        {/* card main box */}
        <div id="locationss" className='w-[95%] md:mx-2 mt-10 mx-auto shadow-gray-500 shadow-md bg-[#E6E6E6] rounded-lg mb-2'>
          <img className='rounded-lg' src={props.img} alt=""/>
          <h1 className='font-bold text-3xl text-[#171818] ml-2 mt-2'> {props.title} </h1>
          <p className='px-2 mt-2 text-justify md:text-lg text-[#171818]'>{props.txt}</p>
          {/* price and view box */}
          <div className='flex md:flex-col lg:flex-row justify-evenly items-center mt-4 pb-2'>
          <p className='text-[#171818] ml-2 font-semibold mt-2 text-lg'>{props.price}</p>
          <button className='btn mt-2 border active:bg-green-200 border-[#171818] bg-transparent  text-[#171818] rounded-full '>Popular Locations</button>
          </div>
        </div>
    </>
  );
}

export default Four