import Select from "./Select"
import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"

function Forms(props) {
  const handleChange = () => {

  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(event)
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.structure.map((item, itemIndex) => {
        if(item.type.search("-") !== -1){
          //complex item
          let [type, elementType] = item.type.split("-")
          switch(type){
            case "input":
              return (<Input key={itemIndex} name={item.name} type={elementType} value={item.value} disabled={item.disabled} handleChange={handleChange}/>)
            default:
              return <></>
          }
        } else {
          //simple item
          switch(item.type){
            case "submit":
              return (<input key="submit" type="submit" value={item.name}/>)
            case "select":
              return (<Select key={itemIndex} name={item.name} options={item.options} handleChange={handleChange}/>)
            case "checkbox":
              return (<CheckboxGroup key={itemIndex} name={item.name} options={item.options} handleChange={handleChange}/>)
            default:
              return <></>
          }
        }
      })}
    </form>
  )
}

export default Forms