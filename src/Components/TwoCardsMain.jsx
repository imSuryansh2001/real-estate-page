import React from 'react'
import four from "../images/four.jpg"
import five from "../images/five.jpg"
import six from "../images/six.jpg"
import Two from './Two';

const TwoCardsMain = () => {
  return (
    <>
    <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-16 md:mt-24 lg:mt-32 mx-3 text-[#171818]'>Recent Properties</h1>
    
    {/* cards main box all */}
        <div className='md:flex md:mx-3'>
        <Two
            title="Orhid Villa"
            img= {four}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="$450,0000"
        />
        <Two
            title="557 Gracia"
            img= {five}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="$500,0000"
        />
        <Two
            title="Orhid Villa"
            img= {six}
            txt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet debitis dolor nobis quibusdam laudantium, placeat, numquam minus vero assumenda sunt nostrum et sed praesentium."
            price="$700,0000"
        />
        </div>
    </>
  );
}

export default TwoCardsMain