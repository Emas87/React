import React, { useContext, useRef, useState } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';
import * as UsersFunc from './UsersEndpoints'


const CreateFormStructure = [
  {
    type: "input-text",
    name: "LoginID",
    constraint: "[a-Z0-9]", //alphanumeric
    value: ""
  },{
    type: "input-password",
    name: "Password",
    constraint: "", //None
    value: ""
  },{
    type: "dropdown",
    name: "User Type",
    options: [{name:"App Admin", id:0}, {name:"Customer", id:1}]
  },{
    type: "checkbox",
    name: "Custom",
    constraint: "", //None
    options: [{name:"Create Patch File", isChecked:false, id:0}, {name:"Reports", isChecked:false, id:1}]
  },{
    type: "submit",
    name: "Create",
    constraint: "", //None
  },
]

const ResetFromStructure = [
  {
    type: "dropdown",
    name: "LoginID",
    options: [{name:"User1", id:0}, {name:"User2", id:1}, {name:"User3", id:2}, {name:"User4", id:3},]
  },{
    type: "input-password",
    name: "Password",
    constraint: "", //None
    value: ""
  },{
    type: "dropdown",
    name: "User Type",
    options: [{name:"App Admin", id:0}, {name:"Customer", id:1}]
  },{
    type: "checkbox",
    name: "Custom",
    constraint: "", //None
    options: [{name:"Create Patch File", isChecked:false, id:0}, {name:"Reports", isChecked:false, id:1}]
  },{
    type: "submit",
    name: "Reset",
    constraint: "", //None
  },
]

function Users() {
  const handleSubmitCreate = () => {
    const result = UsersFunc.submitCreate(LoginIDCreate.current.value, passwordCreate.current.value, dropdownCreate.current.value, checkboxItemsCreate)
    console.log(result)
  }
  const handleSubmitReset = () => {
    const result = UsersFunc.submitReset(LoginIDReset.current.value, passwordReset.current.value, userTypeReset.current.value, checkboxItemsReset)
    console.log(result)
  }
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Users')

  const LoginIDCreate = useRef(null)
  const passwordCreate = useRef(null)
  const dropdownCreate = useRef(null)
  const [checkboxItemsCreate, setcheckboxItemsCreate] = useState(CreateFormStructure[3].options);

  const LoginIDReset= useRef(null)
  const passwordReset = useRef(null)
  const userTypeReset = useRef(null)
  const [checkboxItemsReset, setcheckboxItemsReset] = useState(ResetFromStructure[3].options);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[LoginIDCreate, passwordCreate, dropdownCreate, setcheckboxItemsCreate]} structure={CreateFormStructure} handleSubmit={handleSubmitCreate}/>
        </div>
        <div className='col'>
          <Forms references={[LoginIDReset, passwordReset, userTypeReset, setcheckboxItemsReset]} structure={ResetFromStructure} handleSubmit={handleSubmitReset}/>
        </div>
      </div>
    </div>
  )
}


export default Users