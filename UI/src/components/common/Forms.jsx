import Input from "./Input"
import CheckboxGroup from "./CheckboxGroup"
import DropdownSearchable from "./DropDownSearchable"

// TODO: any change in dropdown or checkbox is triggering submit
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
              return (<Input reference={props.references[itemIndex]} key={itemIndex} placeholder={item.placeholder} name={item.name} type={elementType} value={item.value} disabled={item.disabled}/>)
            default:
              return <></>
          }
        } else {
          //simple item
          switch(item.type){
            case "submit":
              return (<input className="btn btn-primary" key="submit" type="submit" value={item.name}/>)
            case "dropdown":
              return (<DropdownSearchable  reference={props.references[itemIndex]} key={itemIndex} name={item.name} items={item.options} onItemSelected={handleChange}/>)
            case "checkbox":
              return (<CheckboxGroup  reference={props.references[itemIndex]} key={itemIndex} name={item.name} options={item.options} />)
            default:
              return <></>
          }
        }
      })}
    </form>
  )
}

export default Forms