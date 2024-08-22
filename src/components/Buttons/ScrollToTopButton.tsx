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
                className="dark:bg-buttonWhite bg-primary-500 border-none outline-none focus:outline-none z-50"
                onClick={onPress}
            >
                <Image
                    src={'/assets/images/site/scroll.png'}
                    alt=""
                    height={16}
                    width={16}
                />
            </button>
            <div className="py-[2px] bg-white shadow-sm shadow-[#78787824]">
                <p className="text-[10px]  font-medium leading-3 tracking-wider text-purpleHo">Go to top (Ctrl+Home)</p>
            </div>
        </div>

    );
};

export default ScrollToTopButton;
