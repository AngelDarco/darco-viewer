import styles from "../styles/Viewer.module.css";
const CloseViewer = ({
  style,
  controls,
  close
}: {
  style?: string;
  controls: boolean;
  close: () => void;
}) => {
  return (
    <div
      className={` ${styles.svg}
    ${!controls && style}
    `}
      onClick={() => close()}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="100%"
        width="100%"
      >
        <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
      </svg>
    </div>
  );
};
export default CloseViewer;
