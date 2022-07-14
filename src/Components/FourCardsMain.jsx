import React from 'react'
import two from "../images/two.jpg"
import ten from "../images/ten.jpg"
import three from "../images/three.jpg"
import Four from './Four'

const FourCardsMain = () => {
  return (
    <>
        <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-20 md:mt-24 lg:mt-32 mx-3 text-[#171818]'>Locations</h1>
    
    {/* cards main box all */}
        <div className='md:flex md:mx-3'>
        <Four
            title="San Fransisco"
            img= {two}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="Explore More"
        />
        <Four
            title="London"
            img= {ten}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="Explore More"
        />
        <Four
            title="New York"
            img= {three}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="Explore More"
        />
        </div>
    </>
  );
}

export default FourCardsMain