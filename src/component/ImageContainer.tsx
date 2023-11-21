import { CustomImageViewerProps } from "../types/index.module";

const ImageContainer: React.FC<CustomImageViewerProps> = (props) => {
  return <img {...props} />;
};
export default ImageContainer;
