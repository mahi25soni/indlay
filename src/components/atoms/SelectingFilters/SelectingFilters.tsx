"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
    heading: string,
    id: string,
    options: string[],
    selectedItems: string[],
    width: string,
    selectItem: (item: string) => void,
    clearAll: () => void,
    applyFilter: () => void,
    onClose: () => void

}

const SelectingFilters = (data: Props) => {

    const [searchFilter, setSearchFilter] = useState<string>('')

    const mainClass = `absolute top-full right-0 bg-white px-4 z-200 lg:w-[${data?.width}] w-[350px] rounded-3xl border border-basic`

    console.log("teh main class is ", mainClass)
    return (
        <div className={mainClass}
            style={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.04)" }}
        >
            <div className='h-[52px] border-b border-basic flex justify-between items-center font-medium text-base leading-[17.92px]'>
                <div>{data?.heading}</div>
                <div onClick={data?.onClose}>
                    <Image src={"/close.svg"} alt='Close Button' height={20} width={20} />
                </div>
            </div>


            <div className="border-1.5 flex h-[52px] gap-3 rounded-[50px] border-basic p-4 my-3">
                <Image
                    src="/SearchIcon.svg"
                    height={20}
                    width={20}
                    alt="At the rate icon"
                />
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchFilter}
                    onChange={(e) => {
                        setSearchFilter(e.target.value);
                    }}
                    className="border-none bg-transparent outline-none"
                />
            </div>

            <div className='flex flex-col w-full gap-3  mb-2'>
                <div className='flex flex-wrap gap-3'>
                    {data?.options?.map((item) => (
                        <label
                            key={item}
                            className="flex items-center cursor-pointer justify-center gap-2"
                        >
                            <span
                                onClick={() => data?.selectItem(item)}
                                className="h-5 w-5 p-[2.5px]"
                            >
                                <input type="checkbox" className="h-[15px] w-[15px] border-[1.5px] border-white border-opacity-25" id={data?.id} checked={data?.selectedItems.includes(item)} />
                            </span>
                            {item}
                        </label>
                    ))}
                </div>
                <div className='flex h-[34px] justify-end'>
                    <button className='rounded-70 w-[82px] font-normal text-base leading-[17.92px] flex justify-center items-center text-light-gray' onClick={data?.clearAll}>
                        <span>Clear All</span>
                    </button>
                    <button className='rounded-70 w-[82px] font-medium text-base leading-[17.92px] flex justify-center items-center text-cta-darker' onClick={data?.applyFilter}>
                        <span>Apply</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SelectingFilters