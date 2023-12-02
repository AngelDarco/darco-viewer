import { ReactNode } from "react";
import { PrevImage } from "../types";
import { IconsActionsType } from "../types";

export default class IconsActions {
  setShowViewer: IconsActionsType["setShowViewer"];
  setImage: IconsActionsType["setImage"];
  setZoom: IconsActionsType["setZoom"];

  constructor(parameters: IconsActionsType) {
    this.setShowViewer = parameters.setShowViewer;
    this.setImage = parameters.setImage;
    this.setZoom = parameters.setZoom;
  }
  /**
   * Zooms in on the image.
   *
   * @param {Element | string} img - The image element or image selector.
   * @return {void} This function does not return anything.
   */
  zoomIn(img: Element | string) {
    if (img instanceof HTMLElement) {
      img.style.width = "100%";
    } else {
      const image = document.querySelector("[viewerid]");
      if (image instanceof HTMLElement) {
        image.style.width = "100%";
      }
    }
    this.setZoom(false);
  }

  /**
   * Zooms out the image.
   *
   * @param {Element | string} img - The image element or the viewer id.
   * @return {void} This function does not return anything.
   */
  zoomOut(img: Element | string) {
    if (img instanceof HTMLElement) {
      img.style.width = "auto";
    } else {
      const image = document.querySelector("[viewerid]");
      if (image instanceof HTMLElement) {
        image.style.width = "auto";
      }
    }
    this.setZoom(true);
  }
  /**
   * Extends the element to fullscreen if it exists.
   *
   * @param {string | undefined} e - The image ID, to be extended.
   */
  extend(e: string | undefined) {
    if (!e) return;
    const id = document.querySelector(`[viewerid="${e}"]`);
    if (!id) return;
    id?.requestFullscreen();
    if (id && document.fullscreenEnabled)
      id.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) this.zoomOut(id);
      });
  }
  /**
   * Show the image in the viewer.
   *
   * @param {React.MouseEvent<HTMLImageElement>} e - the mouse event, with the image triggering the function
   */
  show(e: React.MouseEvent<HTMLImageElement>) {
    this.setShowViewer(false);
    this.setImage({
      src: e.currentTarget.src,
      alt: e.currentTarget.alt,
      viewerid: e.currentTarget.getAttribute("viewerid") || "",
    });
  }
  /**
   * Closes the image viewer.
   *
   * @param {Element | string} img - The image element ID, to remove from the viewer.
   */
  close(img: Element | string) {
    this.setShowViewer(true);
    this.zoomOut(img);
  }
  /**
   * Filters and selects the previous right image from the given array.
   *
   * @param {ReactNode | null} arr - The array of ReactNodes to filter.
   * @param {string | undefined} img - The image to compare against the viewer IDs.
   */
  prevRigth(arr: ReactNode | null, img: string | undefined) {
    if (!Array.isArray(arr) || arr.length < 1 || !img) return;
    const next = arr.find(({ props }: PrevImage) => {
      const { viewerid } = props;
      return +img >= arr.length ? +viewerid == 1 : +viewerid === +img + 1;
    });
    if (next) {
      const { src, alt, viewerid } = next.props;
      this.setImage({
        src,
        alt,
        viewerid,
      });
      this.zoomOut(next);
    }
  }
  /**
   * Filters the given array of ReactNode objects and returns the previous element based on the `props.viewerid` value.
   *
   * @param {ReactNode | null} arr - The array to filter.
   * @param {string | undefined} img - The image value to compare against `props.viewerid`.
   */
  prevLeft(arr: ReactNode | null, img: string | undefined) {
    if (!Array.isArray(arr) || arr.length < 1 || !img) return;

    const previous = arr.find(({ props }: PrevImage) => {
      const { viewerid } = props;
      return +img <= 1 ? +viewerid == arr.length : +viewerid === +img - 1;
    });

    if (previous) {
      const { src, alt, viewerid } = previous.props;
      this.setImage({
        src,
        alt,
        viewerid,
      });
      this.zoomOut(previous);
    }
  }
}
