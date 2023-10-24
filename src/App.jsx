import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Data from "./data.json";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="imgContainer">
        {Data.map((e) => {
          return (
            <>
              <Gallery title={e.title} imgURL={e.image_url} desc={e.description} />
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
