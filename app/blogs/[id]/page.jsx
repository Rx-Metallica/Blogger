// 'use client'
// import Image from 'next/image'
// import { assets} from '@/Assets/assets'
// import React, { useEffect, useState } from 'react'
// import { useParams } from "next/navigation";
// import Link from 'next/link'
// import Footer from '@/Components/Footer';
// import axios from 'axios';

// const page = ({params}) => {

//   //  const { id } = React.use(params); // unwrap the promise

//   const [data,setData] = useState(null)

//   const fetchBlogData = async ()=>{
//       const response = await axios.get('/api/blog',{
//         params:{
//           // id:params.id
//           id: params.id
//         }
//       });
//       setData(response.data)
//       console.log("blogs id page",response.data);
//   }

//   useEffect(()=>{
//     fetchBlogData();
//   },[])

//   return ( data ?<>
//     <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
//         <div className='flex justify-between items-center'>
//           <Link href='/'>
//             <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
//           </Link>
//             <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]'>
//                Get Started <Image src={assets.arrow} alt='' />
//               </button>
//         </div>
//         <div className='text-center my-24'>
//                 <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.blog.title}</h1>
//                 <Image className='mx-auto mt-6 border border-white rounded-full' src={data.blog.authorImg} width={60} height={60} alt='' />
//                 <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.blog.author}</p>
//         </div>
//     </div>
//     <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
//       <Image src={data.blog.image} width={1280} height={720} alt='' className='border-4 border-white' />
//         <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
//         <p>{data.blog.description}</p>
//         {/* <h3 className='my-5 text-[18px] font-semibold'>Lorem ipsum dolor sit amet.</h3>
//         <p className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nemo dolor sed voluptatum veniam, commodi quaerat dolores cum maiores vitae eos minima eaque veritatis possimus molestiae. Possimus sit alias delectus.</p> */}
//       <div className='my-24'>
//         <p className='textblack font fontesemibold my-4'>Share this article on Social Media</p>
//         <div className='flex'>
//           <Image alt='' src={assets.facebook_icon}  />
//           <Image alt='' src={assets.twitter_icon}  />
//           <Image alt='' src={assets.googleplus_icon}  />
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>:<></>
//   )
// }

// export default page
'use client'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import Link from 'next/link'
import Footer from '@/Components/Footer';
import axios from 'axios';

const page = ({ params }) => {

  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
      const response = await axios.get('/api/blog', {
        params: {
          id: params.id
        }
      });
      setData(response.data)
      console.log("blogs id page", response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, [])

  if (!data) return null;

  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]'>
            Get Started <Image src={assets.arrow} alt='' />
          </button>
        </div>

        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
            {data.blog.title}
          </h1>
          <Image
            className='mx-auto mt-6 border border-white rounded-full'
            src={data.blog.authorImg}
            width={60}
            height={60}
            alt=''
          />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.blog.author}</p>
        </div>
      </div>

      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image
          src={data.blog.image}
          width={1280}
          height={720}
          alt=''
          className='border-4 border-white'
        />

        <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>

        {/* Render HTML description */}
        <div
          className='friendly prose max-w-none'
          dangerouslySetInnerHTML={{ __html: data.blog.description }}
        />

        <div className='my-24'>
          <p className='textblack font fontesemibold my-4'>Share this article on Social Media</p>
          <div className='flex'>
            <Image alt='' src={assets.facebook_icon} />
            <Image alt='' src={assets.twitter_icon} />
            <Image alt='' src={assets.googleplus_icon} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
