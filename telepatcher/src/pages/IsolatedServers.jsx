import React, { useContext } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';

const importFormStructure = [
  {
    type: "input-text",
    name: "Isolated Server Hostname",
    constraint: "[a-Z0-9]", //alphanumeric
    value: ""
  },{
    type: "input-file",
    name: "File",
    constraint: "", //None
    value: ""
  },{
    type: "submit",
    name: "Import PGP Key",
    constraint: "", //None
  },
]

const DeleteFormStructure = [
  {
    type: "dropdown",
    name: "Isolated Server Hostname",
    options: [{name:"JFSOFS001", id:0}, {name:"JFSOFS002", id:2}, {name:"JFSOFS003", id:3}, {name:"JFSOFS004", id:4} ]
  },{
    type: "input-text",
    name: "Isolated Server PGP Key ID",
    constraint: "", //None
    value: "0xC10EBF3A",
    disabled: true
  },{
    type: "submit",
    name: "Delete PGP Key",
    constraint: "", //None
  },
]

const handleSubmitImport = (event) => {
  console.log("Import PGP Key")  
}
const handleSubmitDelete = (event) => {
  console.log("Delete PGP Key")
}
function IsolatedServers() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Isolated Servers')
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms structure={importFormStructure} handleSubmit={handleSubmitImport}/>
        </div>
        <div className='col'>
          <Forms structure={DeleteFormStructure} handleSubmit={handleSubmitDelete}/>
        </div>
      </div>
    </div>
  )
}

export default IsolatedServers