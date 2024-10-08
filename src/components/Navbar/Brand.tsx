import React from 'react'
import Image from 'next/image'

const Brand = () => {
    return (
        <div className="relative">
            <Image
                src={'/assets/images/brand/HobbyCueLogo.png'}
                alt='HobbyCue'
                height={60}
                width={293.26}
                className='hidden md:block'
            />
            <Image
                src={'/assets/images/brand/HobbyCueLogo.png'}
                alt='HobbyCue'
                height={32}
                width={156}
                className='md:hidden'
            />
        </div>
    )
}

export default Brand