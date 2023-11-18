// Main props for PreviewViewer Component
export type ViewerImageType = {
  img: imgsType[];
  show: () => void;
};

type imgsType = {
  src: string | undefined;
  alt: string;
};
