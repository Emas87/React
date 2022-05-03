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
    type: "select",
    name: "Isolated Server Hostname",
    options: ["JFSOFS001", "JFSOFS002", "JFSOFS003", "JFSOFS004" ]
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
    <>
      <Forms structure={importFormStructure} handleSubmit={handleSubmitImport}/>
      <Forms structure={DeleteFormStructure} handleSubmit={handleSubmitDelete}/>
    </>
  )
}

export default IsolatedServers