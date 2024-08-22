import {
    Inter as FontSans,
    Poppins,
} from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    fallback: ["system-ui", "arial"],
    adjustFontFallback: true,
    display: "swap",
});

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    fallback: ["var(--font-sans)", "system-ui", "arial"],
    adjustFontFallback: true,
    display: "swap",
});
