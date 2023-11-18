import { IconsActionsType } from "../types/index.module";

export default class IconsActions {
  setShowViewer: IconsActionsType["setShowViewer"];
  setImage: IconsActionsType["setImage"];

  constructor(parameters: IconsActionsType) {
    this.setShowViewer = parameters.setShowViewer;
    this.setImage = parameters.setImage;
  }
  zoomIn() {
    console.log("zoomIn");
  }

  zoomOut() {
    console.log("zoomOut");
  }
  extend() {
    console.log("extend");
  }
  show(e: React.MouseEvent<HTMLImageElement>) {
    console.log("close");
    this.setShowViewer(true);
    this.setImage({ src: e.currentTarget.src, alt: e.currentTarget.alt });
  }
  close() {
    this.setShowViewer(false);
  }
  prevRigth() {
    console.log("prevRigth");
  }
  prevLeft() {
    console.log("prevLeft");
  }
}
