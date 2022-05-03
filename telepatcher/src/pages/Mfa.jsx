import { useContext } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';

const handleSet = (event) => {
  console.log("Set MFA")  
}
const handleReset = (event) => {
  console.log("Reset MFA")
}
const SetFormStructure = [
  {
    type: "input-text",
    name: "MFA",
    constraint: "[a-Z0-9]", //alphanumeric
    value: ""
  },{
    type: "submit",
    name: "Set MFA",
    constraint: "", //None
  },
]
const ResetFormStructure = [
  {
    type: "input-text",
    name: "MFA",
    constraint: "[a-Z0-9]", //alphanumeric
    value: ""
  },{
    type: "submit",
    name: "Reset MFA",
    constraint: "", //None
  },
]

function Mfa() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Multi Factor Authentication')
  return (
    <>
      <Forms structure={SetFormStructure} handleSubmit={handleSet}/>
      <Forms structure={ResetFormStructure} handleSubmit={handleReset}/>
    </>
  )
}

export default Mfa