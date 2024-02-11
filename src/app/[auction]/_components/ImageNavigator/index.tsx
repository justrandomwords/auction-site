'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageNavigatorProps = {
    imageURLs?: string[]
} 

export default function ImageNavigator({
    imageURLs,
}: ImageNavigatorProps) {
    const [ openImage, setOpenImage ] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (imageURLs && imageURLs.length > 0)
            setOpenImage(imageURLs[0])
    }, [imageURLs])

    return (
        <div className='grid gap-8'>
            <div className='relative h-[30rem] bg-empty rounded-lg overflow-hidden'>
                {openImage &&
                    <Image
                        className='object-cover'
                        src={openImage}
                        alt={'mainIamge'}
                        fill
                    />
                }
            </div>
            
            <div className='flex overflow-auto gap-4 '>
                { imageURLs?.map(imageURL => 
                    <Image
                        className='aspect-square rounded-md cursor-pointer'
                        src={imageURL}
                        width={80}
                        height={80}
                        alt={'mainIamge'}
                        onClick={() => setOpenImage(imageURL)}
                    />)
                }
            </div>
        </div>
    )
}