import { useState } from "react";

export default function Gallery({ title, desc, imgURL, showBigImg }) {
  const [likes, setLikes] = useState(0);

  function likeSetter() {
    setLikes(likes + 1);
  }
  return (
    <div className="galleryImages">
      <h2 className="galleryTitle">{title}</h2>
      <div className="imageContainer">
        <img src={imgURL} alt={desc} className="galleryImage" onClick={showBigImg} />
        <span className="likeButton" onClick={likeSetter}>
          {likes}❤️
        </span>
      </div>
      <p className="galleryDesc">{desc}</p>
    </div>
  );
}
