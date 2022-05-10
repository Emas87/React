import React, { useContext, useRef } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';
import * as UsersFunc from './LoginEndpoints'


const loginFormStructure = [
  {
    type: "input-text",
    name: "Login ID",
    constraint: "[a-Z0-9]", //alphanumeric
    value: ""
  },{
    type: "input-password",
    name: "Password",
    constraint: "", //None
    value: ""
  },{
    type: "input-text",
    name: "MFA Token",
    constraint: "", //None
    value: ""
  },{
    type: "submit",
    name: "Login",
    constraint: "", //None
  },
]

function Login() {
  const handleSubmit = () => {
    const result = UsersFunc.submit(loginID.current.value, password.current.value, mfaToken.current.value)
    console.log(result)
  }
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Vulnerability Finder')

  const loginID = useRef(null)
  const password = useRef(null)
  const mfaToken = useRef(null)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[loginID, password, mfaToken]} structure={loginFormStructure} handleSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}


export default Login