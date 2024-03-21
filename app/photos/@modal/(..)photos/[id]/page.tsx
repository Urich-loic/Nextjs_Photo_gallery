"use client";
import Image from "next/image"
import { photos } from "@/app/libs/Photos"
import { Photo } from "@/app/libs/Photos"
import PhotoCard from "../../../components/PhotoCard"
import { MyModal } from "@/app/photos/components/Modal"
export default function SinglePage({ params }: {
  params: {
    id: string
  }
}) {

  const photo: Photo = photos.find(photo => photo.id === params.id)!

  return (
    <>
      <div className="container mx-auto py-20">

        <MyModal>
          <div>
            <Image
              src={photo.imgSrc}
              alt={photo.name}
              width={500}
              height={300}
              className='object-cover aspect-square rounded-xl'
            />
          </div>
          <div className='photoInfo'>
            <p className='text-xl py-3 font-bold'>{photo.name}</p>
            <p className='font-light'>{photo.username}</p>
          </div>
        </MyModal>

      </div>
    </>
  )
}
