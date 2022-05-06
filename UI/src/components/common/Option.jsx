import { Link } from 'react-router-dom'

function Option(props) {
  return (
    <>
        <Link to={props.link.destination}>{props.link.linkName}</Link>
        <p>{props.link.description}</p>
    </>
  )
}

export default Option