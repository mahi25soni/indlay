import React from 'react'
import { BsArrowsAngleExpand } from "react-icons/bs";

interface Props {
    backToListing: () => void
}

const ExpandedMap = (data: Props) => {
    return (
        <div className='w-full h-[674px]'>
            <div className='h-[58px] flex justify-between items-center px-5'>
                <div className='font-medium leading-[15.68px]'>Showing 20 results</div>
                <button
                    className="flex items-center justify-center font-normal text-[14px] leading-[15.68px] gap-3 text-cta-darker border border-basic rounded-70 px-3 py-1 h-[36px] w-[143px]"
                    onClick={data.backToListing}
                >
                    Back to listing
                    <BsArrowsAngleExpand />
                </button>
            </div>

            <div>
                Map Area
            </div>
        </div>
    )
}

export default ExpandedMap