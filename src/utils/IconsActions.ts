import { IconsActionsType } from "../types/index.module";

export default class IconsActions {
  setShowViewer: IconsActionsType["setShowViewer"];
  setImage: IconsActionsType["setImage"];

  constructor(parameters: IconsActionsType) {
    this.setShowViewer = parameters.setShowViewer;
    this.setImage = parameters.setImage;
  }
  zoomIn(img: HTMLElement | string) {
    if (img instanceof HTMLElement) img.style.objectFit = "fill";
    else {
      const image = document.getElementById(img);
      if (image) image.style.objectFit = "fill";
    }
  }

  zoomOut(img: HTMLElement | string) {
    if (img instanceof HTMLElement) img.style.objectFit = "none";
    else {
      const image = document.getElementById(img);
      if (image) image.style.objectFit = "none";
    }
  }
  extend(e: string | undefined) {
    if (!e) return;
    const id = document.getElementById(e);
    if (!id) return;
    id?.requestFullscreen();
    if (id && document.fullscreenEnabled)
      id.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement) this.zoomIn(id);
        else this.zoomOut(id);
      });
  }
  show(e: React.MouseEvent<HTMLImageElement>) {
    this.setShowViewer(false);
    this.setImage({
      src: e.currentTarget.src,
      alt: e.currentTarget.alt,
      id: e.currentTarget.id,
    });
  }
  close() {
    this.setShowViewer(true);
  }
  prevRigth() {
    console.log("prevRigth");
  }
  prevLeft() {
    console.log("prevLeft");
  }
}
