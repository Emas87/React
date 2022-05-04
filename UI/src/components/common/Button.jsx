function Button(props) {
  
  return (
    <button className={props.className? props.className : "btn btn-primary"} onClick={props.handleClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button