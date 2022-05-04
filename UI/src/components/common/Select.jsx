import { useState } from 'react'

function Select(props) {
  const handleChange = (event) =>{
    setselectValue(event.target.value)
    props.handleChange(event)
  }
  const [selectValue, setselectValue] = useState(props.options[0])
  return (
    <>
      <label >{props.name}</label>
      <select value={selectValue} onChange={handleChange}>
       {props.options.map((option, optionIndex)=>{
          return (<option key={"option" + optionIndex} value={option}>{option}</option>)
        })}
        </select>
    </>
  )
}

export default Select