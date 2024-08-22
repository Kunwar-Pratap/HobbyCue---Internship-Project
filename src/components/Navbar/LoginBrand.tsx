import React from 'react'
import Image from 'next/image'

const LoginBrand = () => {
    return (
        <div className="relative">
            <Image
                src={'/assets/images/brand/login.png'}
                alt='HobbyCue'
                height={60}
                width={60}
                className='hidden md:block'
            />
            <Image
                src={'/assets/images/brand/login.png'}
                alt='HobbyCue'
                height={32}
                width={32}
                className='md:hidden'
            />
        </div>
    )
}

export default LoginBrand