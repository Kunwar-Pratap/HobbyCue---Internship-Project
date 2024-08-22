"use client";

import { useEffect, useState } from "react";

import ScrollToTopButton from "../Buttons/ScrollToTopButton";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-4 xl:right-6 2xl:right-40 z-30">
            {isVisible && <ScrollToTopButton onPress={scrollToTop} />}
        </div>
    );
}
