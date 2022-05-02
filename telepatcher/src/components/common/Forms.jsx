function Forms(props) {
  const handleChange = () => {

  }

  return (
    <form onSubmit={props.handleSubmit}>
      {props.structure.map((item, itemIndex) => {
        if(item.type.search("-") !== -1){
          //complex item
          let [type, elementType] = item.type.split("-")
          switch(type){
            case "input":
              return (
                <>
                <label key={"label" + itemIndex}>{item.name}</label>
                <input key={"input" + itemIndex} 
                  type={elementType} 
                  value={item.value} 
                  disabled={item.disabled? item.disabled : false}
                  onChange={handleChange}
                />
                </>)
            default:
              return <></>
          }
        } else {
          //simple item
          switch(item.type){
            case "submit":
              return (<input key="submit" type="submit" value={item.name}/>)
            case "select":
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
            default:
              return <></>
          }
        }
      })}
    </form>
  )
}

export default Forms