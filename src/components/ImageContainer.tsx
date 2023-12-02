import { CustomImageViewerProps } from "../types";

const ImageContainer: React.FC<CustomImageViewerProps> = (props) => {
  return <img {...props} />;
};
export default ImageContainer;
