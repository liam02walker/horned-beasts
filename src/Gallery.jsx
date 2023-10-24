import { useState } from "react";

export default function Gallery(props) {
  const [likes, setLikes] = useState(0);

  function likeSetter() {
    setLikes(likes + 1);
  }
  return (
    <div className="galleryImages">
      <h2 className="galleryTitle">{props.title}</h2>
      <h3>FAVOURITES: {likes}</h3>
      <div className="imageContainer">
        <img src={props.imgURL} alt={props.desc} className="galleryImage" />
        <span className="likeButton" onClick={likeSetter}>
          ❤️
        </span>
      </div>
      <p className="galleryDesc">{props.desc}</p>
    </div>
  );
}
