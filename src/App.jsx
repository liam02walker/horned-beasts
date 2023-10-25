import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Data from "./data.json";
import SelectedBeast from "./SelectedBeast";
import { useState } from "react";

function App() {
  const [bigImg, setBigImg] = useState(false);
  const [imgURL, setImgURL] = useState("");

  function showBigImg() {
    setBigImg(!bigImg);
    // change imgURL to be what I clicked
    // Pass into selected beast
    setImgURL(Data.image_url);
  }
  return (
    <div className="app">
      <Header />
      <div className="imgContainer">
        {Data.map((e) => {
          return (
            <>
              <Gallery showBigImg={showBigImg} key={e._id} imgURL={e.image_url} />
            </>
          );
        })}
      </div>
      {bigImg && <SelectedBeast showBigImg={showBigImg} imgURL={imgURL} />}
      <Footer />
    </div>
  );
}

export default App;
