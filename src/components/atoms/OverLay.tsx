import React, { ReactNode } from 'react'


const OverLay = ({ children }: { children: ReactNode }) => {
    return (
        <div className='fixed inset-0  h-screen w-screen bg-black bg-opacity-30 z-1000'>
            {children}
        </div>
    )
}

export default OverLay