import React from 'react'
import type { TOutlineButton } from '@/types'

const SolidButton = ({ text }: TOutlineButton) => {
    return (
        <button className='md:py-2 py-1 px-4 border-none text-white bg-purpleHo md:text-[20px] text-sm leading-[20px] font-semibold md:leading-[30px] rounded-[8px]'>
            {text}
        </button>
    )
}

export default SolidButton