import { useState } from "react";

export default function Gallery({ title, desc, imgURL, handleClickedBeast }) {
  const [likes, setLikes] = useState(0);

  function likeSetter() {
    setLikes(likes + 1);
  }
  return (
    <div className="imageContainer">
      <img src={imgURL} alt={desc} className="galleryImage" onClick={() => handleClickedBeast({ title, desc, imgURL })} />
      <span className="likeButton" onClick={likeSetter}>
        {likes}❤️
      </span>
    </div>
  );
}
