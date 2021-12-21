import React from "react";

const DeleteButton = (props) => {
  const deleteItem = () => {
    props.fullValue(
      props.choosenValue.filter((data) => {
        return data !== props.dataValue;
      })
    );
    props.deleteValue(
      props.newValue.filter((data) => {
        return data !== props.dataValue;
      })
    );
    console.log(props.newValue);
  };
  return (
    <button className="close-span" onClick={deleteItem}>
      x
    </button>
  );
};

export default DeleteButton;
