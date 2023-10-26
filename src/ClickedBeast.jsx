export default function ClickedBeast({ handleClickedBeast, beastClicked }) {
  return (
    <div className="clickedBeastContainer">
      <h2>{beastClicked.title}</h2>
      <img className="clickedBeastImg" src={beastClicked.imgURL} alt="This is the clicked beast image" />
      <p>{beastClicked.desc}</p>
      <button className="closeButton" onClick={handleClickedBeast}>
        X
      </button>
    </div>
  );
}
