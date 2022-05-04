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
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms structure={CreateFormStructure} handleSubmit={handleSubmitCreate}/>
        </div>
        <div className='col'>
          <Forms structure={ResetFromStructure} handleSubmit={handleSubmitReset}/>
        </div>
      </div>
    </div>
      
      

  )
}


export default Users