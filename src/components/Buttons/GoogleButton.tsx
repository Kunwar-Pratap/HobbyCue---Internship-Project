import React from 'react'
import Image from 'next/image'

const GoogleButton = () => {
    return (
        <button className='md:py-3 py-2 border border-purpleHo text-greyHo text-xs md:text-sm font-semibold leading-4 rounded-[8px] relative w-full'>
            <span className="absolute top-1/3 left-6 translate-y-0">
                <Image
                    src={`/assets/images/site/Google.png`}
                    alt='Google Sign in'
                    height={16}
                    width={16}
                />
            </span>
            Continue with Google
        </button>
    )
}

export default GoogleButton