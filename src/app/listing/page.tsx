import React from 'react'
import dynamic from 'next/dynamic'
const Filter = dynamic(() => import('@/app/listing/filter'))


const ListingPage = () => {
  return (
    <div className=''>
      <div className="bg-secondary h-[56px] flex items-center w-[320px] p-3 border-b border-basic">
        <p className="text-[16px] leading-[17px] font-semibold">Filters</p>
      </div>
      <Filter />
    </div>
  )
}


export default ListingPage