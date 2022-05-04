import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"
import DropdownSearchable from "./DropDownSearchable"

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
              return (<Input key={itemIndex} placeholder={item.placeholder} name={item.name} type={elementType} value={item.value} disabled={item.disabled} handleChange={handleChange}/>)
            default:
              return <></>
          }
        } else {
          //simple item
          switch(item.type){
            case "submit":
              return (<input className="btn btn-primary" key="submit" type="submit" value={item.name}/>)
            case "dropdown":
              return (<DropdownSearchable key={itemIndex} name={item.name} items={item.options} onItemSelected={handleChange}/>)
            case "checkbox":
              return (<CheckboxGroup key={itemIndex} name={item.name} options={item.options} />)
            default:
              return <></>
          }
        }
      })}
    </form>
  )
}

export default Forms