import React from "react";

const DeleteButton = (props) => {
  let deleteFromArray = [];

  const deleteItem = () => {
    deleteFromArray = props.newValue.filter((data) => {
      return data !== props.dataValue;
    });
    props.deleteValue([...deleteFromArray]);
    props.fullValue([...deleteFromArray]);
    console.log(props.newValue);
  };
  return (
    <button className="close-span" onClick={deleteItem}>
      x
    </button>
  );
};

export default DeleteButton;
