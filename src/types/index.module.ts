// Main props for PreviewViewer Component
export type ViewerImagesTypes = {
  header?: boolean;
  children?: React.ReactNode | React.ReactNode[];
};

export type imgsType = {
  src: string | undefined;
  alt: string;
  id: string;
};

export type IconsActionsType = {
  setShowViewer: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<imgsType | undefined>>;
};
