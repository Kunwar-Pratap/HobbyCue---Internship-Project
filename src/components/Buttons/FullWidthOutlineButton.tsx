import React from 'react'
import type { TOutlineButton } from '@/types'

const FullWidthOutlineButton = ({ text, className }: TOutlineButton) => {
    return (
        <button className={`py-3 border border-black text-black text-sm font-semibold leading-4 rounded-lg w-full ${className}`}>
            {text}
        </button>
    )
}

export default FullWidthOutlineButton