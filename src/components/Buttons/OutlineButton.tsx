import React from 'react'
import type { TOutlineButton } from '@/types'

const OutlineButton = ({ text }: TOutlineButton) => {
    return (
        <button className='md:py-3 sm:px-[29px] border-[1px] border-purpleHo text-purpleHo md:text-sm text-xs font-semibold leading-4 rounded-[8px] w-full py-2 sm:w-fit'>
            {text}
        </button>
    )
}

export default OutlineButton