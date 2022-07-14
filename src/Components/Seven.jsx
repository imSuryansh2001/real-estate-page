import React from 'react'
import { useForm } from "react-hook-form";

const Seven = () => {

    const {register, handleSubmit,watch,formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("name"));

  return (
    <>

        <div id="contactt" className='w-[100%] bg-gradient-to-br py-10  from-[#1BDF8D] to-[#E6E6E6] flex flex-col justify-center items-center mt-10'>

        <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-myFont font-extrabold mt-12 md:mt-16 lg:mt-24 mx-3 text-[#171818]'>Contact us</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-[#171818] text-xl py-2'>Name :</p>
            <input {...register("name",{minLength:3,required:true}) } className='outline-none placeholder:tracking-[0.2rem] w-[90vw] md:w-[70vw] lg:w-[50vw] placeholder:text-center text-center text-[#171818] py-1 border border-[#171818] rounded-lg text-xl' autoComplete='off' type="text" placeholder='name'/>
            <p className='text-red-600'>{errors.name?.type==="required" && "Name is required"}</p>
            <p className='text-red-600'>{errors.name?.type==="minLength" && "Minimum characters 3"}</p>



            <p className='text-[#171818] text-xl py-2'>Email :</p>
            <input {...register("email",{required:true}) } className='outline-none placeholder:tracking-[0.2rem] w-[90vw] md:w-[70vw] lg:w-[50vw] placeholder:text-center text-center text-[#171818] py-1 border border-[#171818] rounded-lg text-xl' autoComplete='off' type="email" placeholder='email'/>
            <p className='text-red-600'> {errors.email?.type==="required" && "Email is required"}</p>



            <p className='text-[#171818] text-xl py-2'>Password :</p>
            <input {...register("password",{required:true,maxLength:14})} className='outline-none mb-2 placeholder:tracking-[0.2rem] w-[90vw] md:w-[70vw] lg:w-[50vw] placeholder:text-center text-center text-[#171818] py-1 border border-[#171818] rounded-lg text-xl' autoComplete='off' type="password" placeholder='password'/>
            <p className='text-red-600'>{errors.password?.type==="required" && "Mobile no is required"}</p>
            <p className='text-red-600'>{errors.password?.type==="maxLength" && "Maximum characters 14"}</p>



            <center>
            <button className='bg-[#171818] active:bg-black text-[#1BDF8D] w-[90vw] md:w-[70vw] lg:w-[50vw] mt-8 text-xl rounded-lg tracking-[0.1rem] px-4 py-3'>Sign Up</button>
            </center>
            

        </form>
        </div>
    </>
  );
}

export default Seven