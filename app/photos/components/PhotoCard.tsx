import React from 'react'
import { Photo } from '@/app/libs/Photos'
import styles from './photocard.module.css'
import Image from 'next/image'
import { MdFavorite } from "react-icons/md";
import { IconName } from "react-icons/md";

export default function PhotoCard({ photo }: { photo: Photo }) {



  return (
    <>
      <div className={styles.photoCardContainer}>
        <div>
          <Image
            src={photo.imgSrc}
            alt={photo.name}
            width={300}
            height={300}
            className='object-cover aspect-square rounded-xl'
          />
        </div>
        <div className='photoInfo'>
          <p className='text-xl py-3 font-bold'>{photo.name}</p>
          <p className='font-light'>{photo.username}</p>
          <div
            style={{
              backgroundColor: '#1c1c1c',
            }}
          >
            <MdFavorite />
          </div>
        </div>
      </div>
    </>
  )
}
