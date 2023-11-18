// Main props for PreviewViewer Component
export type ViewerImageType = {
  img: imgsType;
  children?: React.ReactNode | React.ReactNode[];
};

export type imgsType = {
  src: string | undefined;
  alt: string;
};
