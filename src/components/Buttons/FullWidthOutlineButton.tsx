import React from 'react'
import type { TOutlineButton } from '@/types'

const FullWidthOutlineButton = ({ text, className }: TOutlineButton) => {
    return (
        <button className={`md:py-3 py-2 text-xs border border-black text-black md:text-sm font-semibold leading-4 rounded-lg w-full ${className}`}>
            {text}
        </button>
    )
}

export default FullWidthOutlineButton