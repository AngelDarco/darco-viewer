import { default as React_2 } from 'react';

export declare interface CustomImageViewerProps
extends React_2.ImgHTMLAttributes<HTMLImageElement> {
    viewerid?: string;
}

export declare type IconsActionsType = {
    setShowViewer: React_2.Dispatch<React_2.SetStateAction<boolean>>;
    setImage: React_2.Dispatch<React_2.SetStateAction<imgsType | undefined>>;
    setZoom: React_2.Dispatch<React_2.SetStateAction<boolean>>;
};

export declare type imgsType = {
    src: string;
    alt: string;
    viewerid: string;
};

export declare type PrevImage = {
    props: {
        alt: string;
        id?: string;
        onClick?: (e: React_2.MouseEvent<HTMLImageElement>) => void;
        src: string;
        viewerid: string;
    };
};

declare const Viewer: (props: ViewerImagesTypes) => JSX.Element;
export default Viewer;

export declare type ViewerImagesTypes = {
    controls?: boolean;
    children?: React_2.ReactNode | React_2.ReactNode[];
};

export { }
