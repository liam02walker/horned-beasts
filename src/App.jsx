import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Data from "./data.json";
import ClickedBeast from "./ClickedBeast";
import { useState } from "react";
import Filter from "./Filter";

export default function App() {
  const [clickedBeast, setClickedBeast] = useState(false);
  const [beastClicked, setBeastClicked] = useState({});

  function handleClickedBeast(beast) {
    setClickedBeast(!clickedBeast);
    setBeastClicked(beast);
  }

  return (
    <div className="app">
      <Header />
      <Filter />
      {Data.map((item) => {
        return <Gallery key={item._id} imgURL={item.image_url} desc={item.description} title={item.title} handleClickedBeast={handleClickedBeast} />;
      })}
      {clickedBeast && <ClickedBeast beastClicked={beastClicked} handleClickedBeast={handleClickedBeast} />}
      <Footer />
    </div>
  );
}
