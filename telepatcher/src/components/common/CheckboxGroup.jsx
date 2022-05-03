import { useState } from "react"
import Input from "./Input"

function CheckboxGroup(props) {
    const handleChange = (event, optionIndex) =>{
      const updatedBoxesValues = boxesValues.map( (boxValue, index) => {
        return index === optionIndex? !boxValue : boxValue
      })

      console.log(optionIndex)
      setBoxesValues(updatedBoxesValues)
      props.handleChange(event)
    }
    const [boxesValues, setBoxesValues] = useState(Array(props.options.length).fill(false))
    return (
      <div className="container">
        <label>{props.name}</label>
        {props.options.map( (option, optionIndex) => {
          return (<Input key={"checkbox" + optionIndex} name={option} value={option} type="checkbox" handleChange={(event) => handleChange(event,optionIndex)}/>)
        })}
      </div>
    )
  }
  // TODO only leave key under lists

export default CheckboxGroup