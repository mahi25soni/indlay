import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {}

const ConnectUsMobileBanner = (props: Props) => {
    return (
        <div className="relative flex h-[422px] flex-col w-full items-center rounded-3xl bg-cta-darker gap-5 lg:hidden">
            <div className='relative w-full h-[150px] '>
                <Image src="/ConnectUsMobleBanner.svg" alt="Connent Us Banner" fill className="rounded-3xl" />
            </div>
            <div className="relative max-h-full flex flex-col items-center lg:items-end justify-center bg-cta-darker  text-white text-center w-full">

                <h1 className="mb-6 text-5xl font-bold text-primary">Get Started</h1>
                <div className="mb-[50px] text-2xl leading-[26.88px] font-medium ">
                    <p>Find your best </p>
                    <p>suitable service</p>
                </div>

                <button className=" flex items-center justify-center gap-4 rounded-70 border border-secondary px-5 py-3 text-secondary">
                    <p>Create an account</p>
                    <GoArrowRight className="h-6 w-6" />
                </button>
                {/* <div className="bg-bg-cta-darker clip-path-custom absolute inset-0 z-10"></div> */}
            </div>
        </div>
    )
}

export default ConnectUsMobileBanner