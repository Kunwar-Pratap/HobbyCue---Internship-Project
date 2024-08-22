import React from 'react'
import type { TOutlineButton } from '@/types'

const FullWidthSolidButton = ({ text, className }: TOutlineButton) => {
    return (
        <button className={`py-3 border border-purpleHo text-white bg-purpleHo text-sm font-semibold leading-4 rounded-lg w-full ${className}`}>
            {text}
        </button>
    )
}

export default FullWidthSolidButton