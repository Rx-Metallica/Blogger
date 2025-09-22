import React from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets'

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,id}) => {
    const BlogDate = new Date(date);
    console.log("blog table item",authorImg,title,author,date);
  return (
     <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-5 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon}/>
            <p>{author?author:"No Author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"No title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(id)} className=' cursor-pointer px-6 py-4'>
            x
        </td>
     </tr>
  )
}

export default BlogTableItem