"use client";

import Image from "next/image";
import React from "react";

type TOnPress = {
    onPress: () => void;
};

const ScrollToTopButton = ({ onPress }: TOnPress) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <button
                aria-label="scroll to top"
                className="bg-white border-none outline-none focus:outline-none z-50 h-8 w-8 rounded-full shadow-sm shadow-[#939CA3]"
                onClick={onPress}
            >
                <Image
                    src={'/assets/images/site/scroll.png'}
                    alt="Back to top"
                    height={16}
                    width={16}
                    className="mx-auto"
                />
            </button>
        </div>

    );
};

export default ScrollToTopButton;
