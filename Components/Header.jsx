import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify';

const Header = () => {


  const [email,setEmail] = React.useState("");

  const onSubmitHandler = async(e) =>{
    e.preventDefault(); 
    const formData = new FormData();
    formData.append('email',email);
    const response = await fetch('/api/email',{
      method:"POST",
      body: JSON.stringify({ email }),
    })
    if(response.status === 200){
      toast.success("Email added successfully");
      setEmail("");
    }else{
      toast.error("Error adding email");
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Image src={assets.logo} width={180} alt="" className=" cursor-pointer w-[130px] sm:w-auto"/>
          <button className="cursor-pointer flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get Started <Image src={assets.arrow} alt=""/></button>  
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Fuel Your Curiosity
Explore blogs on tech, startups, and ideas shaping the future.
</p>
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" className='pl-4 outline-none' />
                <button type='submit' className=' cursor-pointer border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text:white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header