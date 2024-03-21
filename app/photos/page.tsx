import React from 'react'
import { photos } from '../libs/Photos'
import Link from 'next/link'
import Image from 'next/image'
export default function Gellery() {
  return (
   <>
   {
    <div className="py-24 min-h-100">
      <div className="container mx-auto">
        <h1 className='text-6xl text-center font-bold py-7'>Photos</h1>
        <ul className='flex flex-wrap justify-around gap-5'>
        {
          photos.map((photo)=>{
            return(
              <li key={photo.id}>
                <Link href={`photos/${photo.id}`}>
                  <Image
                  src={photo.imgSrc}
                  width={350}
                  alt={photo.name}
                  height={250}
                  className='aspect-square object-cover photoCardContainer rounded-xl'
                  />
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
   }
   </>
  )
}
