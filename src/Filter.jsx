import { useState } from "react";
import Data from "./data.json";

export default function Filter() {
  const [form, setForm] = useState({
    numHorns: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(filteredArr);
  }

  const filteredArr = Data.filter((beast) => beast.horns > form.numHorns);

  return (
    <form className="filterContainer" onSubmit={handleSubmit}>
      <label className="hornText" for="numHorns">
        Filter By Horns:
      </label>
      <input className="hornInput" name="numHorns" type="number" min={1} max={100} onChange={handleChange} />
      <button>SUBMIT</button>
    </form>
  );
}
