export default function SelectedBeast({ showBigImg, imgURL }) {
  {
    console.log(showBigImg);
  }
  return (
    <div className="modal">
      <img src={imgURL} />
      <button onClick={showBigImg}>CLOSE</button>
    </div>
  );
}
