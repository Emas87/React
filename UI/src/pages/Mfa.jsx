import { useContext, useRef } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';
import * as MfaFunc from './MfaEndpoints'

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
  const handleSet = () => {
    const result = MfaFunc.createMFA(mfaCreate.current.value)
    console.log(result)
  }
  const handleReset = () => {
    const result = MfaFunc.resetMFA(mfaReset.current.value)
    console.log(result)
  }

  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Multi Factor Authentication')

  const mfaCreate = useRef(null)
  const mfaReset = useRef(null)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[mfaCreate]} structure={SetFormStructure} handleSubmit={handleSet}/>
        </div>
        <div className='col'>
          <Forms references={[mfaReset]} structure={ResetFormStructure} handleSubmit={handleReset}/>
        </div>
      </div>
    </div>
  )
}

export default Mfa