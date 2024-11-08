import Image from 'next/image'
import React, { useRef, useState } from 'react'


interface SinglePropertyInterface {
    name: string;
    address: string;
    isBestSeller: boolean;
    amenities: { name: string; id: string }[];
    id: string;
    images?: { id: string, url: string }[];
}

const IndividualProperty = (data: SinglePropertyInterface) => {
    const [selectedImage, setSelectedImage] = useState<string>("")
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 600,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="absolute right-0 top-0 z-1000">

            <div className="h-[828px] w-[600px] bg-white p-[19px] flex flex-col  gap-5 overflow-y-auto scrollbar-hidden">
                <div className='flex gap-4 overflow-x-auto scrollbar-hidden '>
                    {
                        data?.images?.map((image, index) => {
                            return <Image
                                src={image.url}
                                alt="property-image"
                                width={480}
                                height={270}
                                className="w-full rounded-2xl"
                                key={image.id}
                            />
                        })
                    }

                </div>

                <div className='relative w-full'>
                    <div className='flex gap-[2px] overflow-hidden w-full' ref={scrollRef}>
                        {
                            data?.images?.map((image, index) => {
                                return <div className={`w-[68.25px] h-[44px] cursor-pointer p-1 border-2 rounded-md ${selectedImage === image?.id ? "border-cta-border" : "border-transparent"}`} onClick={() => setSelectedImage(image.id)} key={image?.id}>
                                    <div className='relative h-full w-full'>
                                        <Image
                                            src={image.url}
                                            alt="property-image"
                                            fill
                                            className="w-full rounded-[4px]"
                                        />
                                    </div>
                                </div>


                            })
                        }

                    </div>
                    <div className='absolute right-0 w-10 h-10 rounded-70 border border-basic flex items-center justify-center top-0 bg-white' onClick={handleScrollRight}>
                        <Image src="/Arrow-right.svg" height={24} width={24} alt='Arrow-right' className='text-cta-darker' />
                    </div>
                </div>


                <div>

                </div>
            </div>
        </div>
    )
}

export default IndividualProperty