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
            />
        </div>
    )
}

export default Brand