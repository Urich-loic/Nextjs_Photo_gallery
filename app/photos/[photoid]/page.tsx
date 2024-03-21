import Image from "next/image"
import { photos } from "@/app/libs/Photos"
import { Photo } from "@/app/libs/Photos"
import PhotoCard from "../components/PhotoCard"
import Link from "next/link"
export default function SinglePage({params}:{
    params:{
        photoid:string
    }
}) {

  const photo:Photo = photos.find(photo=>photo.id === params.photoid)!

  return (
    <>
    <div className="container mx-auto py-20">
    <h2 className="pb-4"><Link href={'/photos'} className="font-medium underline">Back to photos gallery</Link></h2>
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
    </div>
    </>
  )
}
