import React from 'react'

function Select() {
  return (
    <>
      <label key={"label" + itemIndex}>{item.name}</label>
      <select key={"select" + itemIndex} value={item.name} onChange={handleChange}>
       {item.options.map((option, optionIndex)=>{
            return (<option key={"option" + itemIndex + "-" + optionIndex} value={option}>{option}</option>)
            })}
        </select>
    </>
  )
}

export default Select