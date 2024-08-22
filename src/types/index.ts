export type TOutlineButton = {
    text: string;
    className?: string;
    onClick?: () => void;
}

export type TFooterLinks = {
    id: number;
    label: string;
}

export type TSocialData = {
    id: number;
    image: string;
    alt: string;
}

export type TFeaturesData = {
    id: number;
    title: string;
    desc: string;
    ico: string;
    buttonText: string;
}

export type TNavIconsData = {
    id: number;
    icon: string;
}