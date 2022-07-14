import React from 'react'

const One = () => {
  return (
   <>
    <h1 id="homee" className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-10 md:mt-16 lg:mt-24 mx-3 text-[#171818]'>Premium Properties</h1>
    <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-3 mx-3 text-[#171818]'>Non-Premium Prices</h1>

    <div className='w-[95%] md:w-[80%] lg:w-[60%] mx-auto mt-4 md:mt-6'>
    <p className='px-2 text-justify md:leading-[1.8rem] md:text-lg tracking-[0.1rem] text-[#858987]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur enim optio impedit rem ea asperiores suscipit ex repellendus, eveniet a beatae recusandae totam, neque sapiente eos et adipisci itaque consequuntur facere non possimus? Labore quod sed aspernatur, veritatis consequuntur aliquam?</p>
    </div>

    {/* buttons div */}
    <div className='flex flex-col md:flex-row justify-evenly w-[70%] md:w-[60%] lg:w-[40%] mx-auto'>
    <button className='btn mt-4 active:bg-green-700 md:text-lg md:px-5 md:py-4 md:mt-8'>View Properties</button>
    <button className='btn mt-3 md:text-lg active:bg-white md:px-5 md:py-4 md:mt-8 bg-[#DFFFF2] text-[#1BDF8D]'>Explore Locations</button>
    </div>
    

   </>
  );
}

export default One
