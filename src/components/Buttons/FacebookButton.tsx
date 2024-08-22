import React from 'react'
import Image from 'next/image'

const FacebookButton = () => {
    return (
        <button className='py-3 border border-purpleHo text-greyHo text-sm font-semibold leading-4 rounded-[8px] relative w-full'>
            <span className="absolute top-1/3 left-6 translate-y-0">
                <Image
                    src={`/assets/images/site/facebook.png`}
                    alt='Facebook Sign in'
                    height={16}
                    width={16}
                />
            </span>
            Continue with Facebook
        </button>
    )
}

export default FacebookButton