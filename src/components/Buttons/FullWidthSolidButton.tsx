import React from 'react'
import type { TOutlineButton } from '@/types'

const FullWidthSolidButton = ({ text, className }: TOutlineButton) => {
    return (
        <button className={`md:py-3 py-2 border border-purpleHo text-white bg-purpleHo md:text-sm text-xs font-semibold leading-4 rounded-lg w-full ${className}`}>
            {text}
        </button>
    )
}

export default FullWidthSolidButton