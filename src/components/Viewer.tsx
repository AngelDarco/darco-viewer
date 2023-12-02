import React, { useEffect, useState } from "react";
import { ViewerImagesTypes, imgsType } from "../types";
import IconsActions from "../utils/IconsActions";
import ImageContainer from "./ImageContainer";
import CloseViewer from "./CloseViewer";
const Viewer = (props: ViewerImagesTypes) => {
  const { controls, children } = props;
  const [showViewer, setShowViewer] = useState(true);
  const [zoom, setZoom] = useState(true);
  const [image, setImage] = useState<imgsType | undefined>();

  // Props states
  const [showControls, setShowControls] = useState(true);

  const icons = new IconsActions({ setShowViewer, setImage, setZoom });

  useEffect(() => {
    // Show the controls with Props
    if (controls === undefined || controls) setShowControls(true);
    else {
      setShowControls(false);
    }
  }, [controls, image, children]);

  const [arrChilds, setArrChilds] = useState<React.ReactNode | undefined>();

  useEffect(() => {
    const handlerChilds = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onClick: (e) => icons.show(e),
          viewerid: (index + 1).toString(),
          key: index,
        } as {
          onClick: (
            // eslint-disable-next-line prettier/prettier
            e: React.MouseEvent<HTMLImageElement, MouseEvent>
          ) => void;
        });
      }
    });

    setArrChilds(handlerChilds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <>
      {showViewer ? (
        arrChilds
      ) : (
        <div
          className="
          absolute 
          top-0
          left-0
          w-full
          h-full
          bg-black/70
    "
        >
          <header
            className={`
            w-full
                h-[var(--header-height)]
                flex
                items-center
                justify-between
                px-9
                ${!showControls && "absolute z-10 [&>div]:w-10 !justify-end"}
            `}
          >
            {showControls ? (
              /* Gallery current image index and lenght */
              <>
                <div>
                  <p>
                    {" "}
                    {image && image?.viewerid} /{" "}
                    {Array.isArray(children) && children.length}
                  </p>
                </div>
                {/* controls Icons */}
                <div
                  className="
          flex
          gap-4
          [&>div]:w-6
          [&>div]:h-6
          [&>div]:cursor-pointer
        "
                >
                  {/* extend */}
                  <div onClick={() => icons.extend(image && image?.viewerid)}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="100%"
                      width="100%"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                    </svg>
                  </div>
                  {/* zoom more */}
                  {zoom ? (
                    <div
                      onClick={() => icons.zoomIn(image ? image?.viewerid : "")}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="100%"
                        width="100%"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  ) : (
                    /* zoom less */
                    <div
                      onClick={() =>
                        icons.zoomOut(image ? image?.viewerid : "")
                      }
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="100%"
                        width="100%"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  )}

                  {/* close */}
                  <CloseViewer controls close={() => icons.close("")} />
                </div>
              </>
            ) : (
              <CloseViewer controls={false} close={() => icons.close("")} />
            )}
          </header>

          <main
            className={`
            w-full
      ${
        showControls
          ? "h-[calc(100%-var(--header-height)-var(--footer-height))]"
          : "h-full"
      }
        flex
        items-center
        justify-center
       [&>img]:max-w-full
       [&>img]:max-h-full
       [&>img]:object-cover
       relative
            `}
          >
            {/* Main Image in the Viewer */}
            <ImageContainer
              src={image && image?.src}
              viewerid={image ? image?.viewerid : ""}
              alt={image && image?.alt}
            />

            {/* Viewer Control buttons */}
            {showControls && (
              <div
                className="
        absolute
        top-2/4
        left-0
        w-full
        px-9
        flex
        justify-between
        items-center
        z-50

        [&>div]:w-9
        [&>div]:h-9
        [&>div]:cursor-pointer
        [&>div]:text-white/50
        "
              >
                <div
                  id="prev-left"
                  onClick={() =>
                    icons.prevLeft(
                      arrChilds,
                      // eslint-disable-next-line prettier/prettier
                      image ? image.viewerid : undefined
                    )
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="100%"
                    width="100%"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                  </svg>
                </div>
                <div
                  id="prev-rigth"
                  onClick={() => icons.prevRigth(arrChilds, image?.viewerid)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="100%"
                    width="100%"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                  </svg>
                </div>
              </div>
            )}
          </main>
          {showControls && (
            <footer
              className="
              w-full
              h-[var(--footer-height)]
              flex
              justify-center
              items-center
                "
            >
              <p>{image && image?.alt}</p>
            </footer>
          )}
        </div>
      )}
    </>
  );
};
export default Viewer;