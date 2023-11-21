// Main props for PreviewViewer Component
export type ViewerImagesTypes = {
  header?: boolean;
  children?: React.ReactNode | React.ReactNode[];
};

export type imgsType = {
  src: string | undefined;
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
