import { useState } from "react";

const Random = (props) => {
  const [choosen, setChoosen] = useState("");
  const chooseItem = () => {
    setChoosen(props.array[Math.floor(Math.random() * props.array.length)]);
  };
  return (
    <div className="random-container">
      <div className="add-btn">
        <button className="add-button" onClick={chooseItem}>
          Choose
        </button>
        <div className="result">
          <h2 className="rand-res">{choosen}</h2>
        </div>
        {console.log(props.array)}
      </div>
    </div>
  );
};

export default Random;
