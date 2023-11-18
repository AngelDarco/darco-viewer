// Main props for PreviewViewer Component
export type ViewerImageType = {
  children?: React.ReactNode | React.ReactNode[];
};

export type imgsType = {
  src: string | undefined;
  alt: string;
};

export type IconsActionsType = {
  setShowViewer: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<imgsType | undefined>>;
};
