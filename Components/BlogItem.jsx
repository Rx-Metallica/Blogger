// import { assets, blog_data } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const BlogItem = ({title,category,description,image,id}) => {
//   return (
//     <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
//         <Link href={`/blogs/${id}`}>
//           <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
//         </Link>
//         <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
//         <div className="p-5">
//             <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
//             <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
//             <Link href={`/blogs/${id}`}  className='inline-flex items-center py-2 font-semibold text-center'>
//                 Read More <Image src={assets.arrow} className='ml-2' alt="" width={12}/>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default BlogItem

import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Utility: safely truncate HTML to a certain number of characters
const truncateHTML = (html, maxLength) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  let text = div.textContent || div.innerText || '';
  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }
  return text;
};

const BlogItem = ({ title, category, description, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      
      {/* Blog image */}
      <Link href={`/blogs/${id}`}>
        {image ? (
          <Image
            src={image}
            alt={title || 'Blog Image'}
            width={400}
            height={400}
            className="border-b border-black object-cover"
          />
        ) : (
          <Image
            src="/default-blog.png"
            alt="Default Blog"
            width={400}
            height={400}
            className="border-b border-black object-cover"
          />
        )}
      </Link>

      {/* Category badge */}
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>

      <div className="p-5">
        {/* Blog title */}
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>

        {/* Truncated HTML preview */}
        <div
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{ __html: truncateHTML(description, 120) }}
        />

        {/* Read more link */}
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center text-black hover:underline"
        >
          Read More
          <Image src={assets.arrow} className="ml-2" alt="Arrow" width={12} height={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
