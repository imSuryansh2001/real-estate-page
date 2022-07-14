import React  from 'react'
import one from "../images/one.png"
import "./Six.css"
// swiper dependencies

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";



const Six = () => {
  return (
    <>
        <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-20 md:mt-24 lg:mt-32 mx-3 text-[#171818]'>What Clients Say About us ?</h1>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:mt-16">

        <SwiperSlide>

        
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            {/* feedback main div */}
            <div className='w-[95%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-lg rounded-lg p-3 mb-3 mx-auto mt-8 bg-[#E6E6E6]'>
                <p className='text-xl text-justify font-myFont'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nisi, velit libero iste cum aperiam soluta cumque necessitatibus hic eligendi in autem doloribus explicabo temporibus eius atque quidem repellendus dicta possimus natus eum labore delectus reprehenderit fugiat. Perferendis, commodi aliquid!"
                </p>
                {/* profile name div */}
                <div className='bg-[#858987] mt-4 rounded-lg mb-2 items-center flex justify-around'>
                    <div>
                        <img src={one} alt={one}/>
                    </div>

                    <div>
                        <h1 className='text-[#171818] text-xl tracking-[0.2rem] font-semibold'>John Michael</h1>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        
        
      </Swiper>


    </>
  );
}

export default Six
