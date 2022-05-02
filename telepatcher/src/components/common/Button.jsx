function Button(props) {
  return (
    <button className="" onClick={props.handleClick} disabled={props.disabled}>{props.name}</button>
  )
}

export default Button