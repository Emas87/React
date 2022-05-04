import { Link } from 'react-router-dom'

function Option(props) {
  return (
    <div>
        <Link to={props.link.destination}>{props.link.linkName}</Link>
        <p>{props.link.description}</p>
    </div>
  )
}

export default Option