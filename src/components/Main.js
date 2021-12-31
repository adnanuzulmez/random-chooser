import { useState, useEffect } from "react";
import Random from "./Random";
import IncButton from "./IncButton";
import DeleteButton from "./DeleteButton";
import "./Styles.css";
const Main = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (value === "") {
      alert("alan boş olamaz");
    } else {
      setItems([value, ...items]);
      setTempItems([value, ...tempItems]);
      setValue("");
      e.preventDefault();
    }
  };

  return (
    <div>
      <h2 className="app-title">Random Chooser</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="item-input"
          type="text"
          onChange={handleValue}
          value={value}
          placeholder="Type whatever you want"
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      <div className="list-container">
        <div className="list-items">
          <h4>Items</h4>
          <ul className="list-elements">
            {items.map((data, index) => {
              return (
                <li key={index}>
                  <IncButton
                    dataValue={data}
                    incValue={setTempItems}
                    newValue={tempItems}
                  />
                  <span className="result-span">{data}</span>
                  <DeleteButton
                    dataValue={data}
                    deleteValue={setItems}
                    newValue={items}
                    fullValue={setTempItems}
                    choosenValue={tempItems}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Random array={tempItems} />
    </div>
  );
};

export default Main;
