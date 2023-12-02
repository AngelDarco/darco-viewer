// import Viewer from "./components/Viewer";
import Viewer from "darco-viewer";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-end ">
      <div
        className="
        w-full h-28
        flex
        justify-center
        items-center
        gap-4

        [&>img]:w-[100px]
        [&>img]:h-[100px] 
        [&>img]:rounded-full 
        [&>img]:border "
      >
        <Viewer>
          <img src={img1} alt="Image of a school girl, generated by a ia" />
          <img src={img2} alt="image 02" />
          <img src={img3} alt="image of the girl generated by a ia" />
        </Viewer>
      </div>
    </div>
  );
}

export default App;
