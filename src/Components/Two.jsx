import React from 'react'

const Two = (props) => {
  return (
    <>
        {/* card main box */}
        <div className='w-[95%] md:mx-2 mt-10 mx-auto shadow-gray-500 shadow-md bg-[#DFFFF2] rounded-lg mb-2'>
          <img className='rounded-lg' src={props.img} alt=""/>
          <h1 className='font-bold text-3xl text-[#171818] ml-2 mt-2'> {props.title} </h1>
          <p className='px-2 mt-2 text-justify md:text-lg text-[#171818]'>{props.txt}</p>
          {/* price and view box */}
          <div className='flex md:flex-col lg:flex-row justify-evenly items-center mt-4 pb-2'>
          <p className='text-[#1BDF8D] ml-2 font-semibold mt-2 text-lg'>{props.price}</p>
          <button className='btn active:bg-green-700 mt-2 rounded-full'>View Property</button>
          </div>
        </div>
    </>
  );
}

export default Two