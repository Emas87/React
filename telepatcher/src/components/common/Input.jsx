import { useState } from "react"

function Input(props) {
  const handleChange = (event) =>{
    setinputValue(event.target.value)
    props.handleChange(event)
  }
  const [inputValue, setinputValue] = useState(props.value)
  return (
  <div className="container">
      <label>{props.name}</label>
      <input type={props.type}
      value={inputValue} 
      disabled={props.disabled? props.disabled : false}
      onChange={handleChange}
      />
    </div>
  )
}

export default Input