import React, { useState } from "react"
//import Input from "./Input"

const CheckboxItem = ({ item, onClick }) => {
	return (
		<button className="dropdown-item" onClick={onClick}>
			<i
				className={`${
					item.isChecked ? "intelicon-check-box" : "intelicon-empty-box"
				}`}
			></i>
			{item.name}
		</button>
	);
};

function CheckboxGroup(props) {

    const [filteredItems, setFilteredItems] = useState(props.options);

    const toggleItem = toggledItem => {
      const updatedItems = filteredItems.map(item => {
        if (item.id === toggledItem.id) {
          item.isChecked = !item.isChecked;
          if (item.isChecked && props.onItemSelected) props.onItemSelected(item);
        }
        return item;
      });
      setFilteredItems(updatedItems);
    };

    const style = { maxHeight: "20rem", overflow: "auto" };
	
    return (
      <div className="" style = {style}>
        <label className="m-0">{props.name}</label>
        {props.options.map( (option, optionIndex) => {
          return (<CheckboxItem item={option} onClick={() => toggleItem(option)} key={"checkbox" + optionIndex}/>)
        })}
      </div>
    )
  }
  // TODO only leave key under lists

export default CheckboxGroup