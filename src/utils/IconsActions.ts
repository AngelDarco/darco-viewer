import { ReactNode } from "react";
import { PrevImage } from "../types/index.module";
import { IconsActionsType } from "../types/index.module";

export default class IconsActions {
  setShowViewer: IconsActionsType["setShowViewer"];
  setImage: IconsActionsType["setImage"];

  constructor(parameters: IconsActionsType) {
    this.setShowViewer = parameters.setShowViewer;
    this.setImage = parameters.setImage;
  }
  zoomIn(img: Element | string) {
    if (img instanceof HTMLElement) img.style.objectFit = "fill";
    else {
      const image = document.querySelector("[viewerid]");
      if (image instanceof HTMLElement) image.style.objectFit = "fill";
    }
  }

  zoomOut(img: Element | string) {
    if (img instanceof HTMLElement) img.style.objectFit = "none";
    else {
      const image = document.querySelector("[viewerid]");
      if (image instanceof HTMLElement) image.style.objectFit = "none";
    }
  }
  extend(e: string | undefined) {
    if (!e) return;
    const id = document.querySelector(`[viewerid="${e}"]`);
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
      viewerid: e.currentTarget.getAttribute("viewerid") || "",
    });
  }
  close() {
    this.setShowViewer(true);
  }
  prevRigth(arr: ReactNode | null, img: string | undefined) {
    if (!Array.isArray(arr) || arr.length < 1 || !img) return;
    const next = arr.filter(({ props }: PrevImage) => {
      const { viewerid } = props;
      if (Number.parseInt(img) >= arr.length)
        return Number.parseInt(viewerid) == 1;
      return Number.parseInt(viewerid) === Number.parseInt(img) + 1;
    });
    const { src, alt, viewerid } = next[0].props;
    this.setImage({
      src,
      alt,
      viewerid,
    });
  }
  prevLeft(arr: ReactNode | null, img: string | undefined) {
    if (!Array.isArray(arr) || arr.length < 1 || !img) return;

    const previous = arr.filter(({ props }: PrevImage) => {
      const { viewerid } = props;
      if (Number.parseInt(img) <= 1)
        return Number.parseInt(viewerid) == arr.length;
      return Number.parseInt(viewerid) === Number.parseInt(img) - 1;
    });

    const { src, alt, viewerid } = previous[0].props;
    this.setImage({
      src,
      alt,
      viewerid,
    });
  }
}
