import React from "react";

// Main props for Viewer Component
export type ViewerImagesTypes = {
  controls?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  styles?: React.CSSProperties;
  className?: string;
};

export type imgsType = {
  src: string;
  alt: string;
  viewerid: string;
};

export type IconsActionsType = {
  setShowViewer: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<imgsType | undefined>>;
};

export interface CustomImageViewerProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  viewerid?: string;
}

export type PrevImage = {
  props: {
    alt: string;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
    src: string;
    viewerid: string;
  };
};

declare const Viewer: (props: ViewerImagesTypes) => JSX.Element;
export default Viewer;
