import React, { useContext } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';

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
    type: "select",
    name: "User Type",
    options: ["App Admin", "Customer"]
  },{
    type: "checkbox",
    name: "Custom",
    constraint: "", //None
    options: ["Create Patch File", "Reports"]
  },{
    type: "submit",
    name: "Create",
    constraint: "", //None
  },
]

const ResetFromStructure = [
  {
    type: "select",
    name: "LoginID",
    options: ["User1", "User2", "User3", "User4",]
  },{
    type: "input-password",
    name: "Password",
    constraint: "", //None
    value: ""
  },{
    type: "select",
    name: "User Type",
    options: ["App Admin", "Customer"]
  },{
    type: "checkbox",
    name: "Custom",
    constraint: "", //None
    options: ["Create Patch File", "Reports"]
  },{
    type: "submit",
    name: "Reset",
    constraint: "", //None
  },
]

const handleSubmitCreate = (event) => {
  console.log("Import PGP Key")  
}
const handleSubmitReset = (event) => {
  console.log("Delete PGP Key")
}
function Users() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Users')
  return (
    <>
      <Forms structure={CreateFormStructure} handleSubmit={handleSubmitCreate}/>
      <Forms structure={ResetFromStructure} handleSubmit={handleSubmitReset}/>
    </>
  )
}


export default Users