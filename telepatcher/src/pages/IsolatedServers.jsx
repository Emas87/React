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

const importDeleteStructure = [
  {
    type: "select",
    name: "Isolated Server Hostname",
    constraint: "", //None
    options: ["JFSOFS001", "JFSOFS002", "JFSOFS003", "JFSOFS004" ]
  },{
    type: "input-text",
    name: "Isolated Server PGP Key ID",
    constraint: "", //None
    value: "0xC10EBF3A",
    disable: true
  },{
    type: "submit",
    name: "Import PGP Key",
    constraint: "", //None
  },
]

const handleSubmitImport = () => {

}
const handleSubmitDelete = () => {

}
function IsolatedServers() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Isolated Servers')
  return (
    <>
      <Forms structure={importFormStructure} handleSubmit={handleSubmitImport}/>
      <Forms structure={importDeleteStructure} handleSubmit={handleSubmitDelete}/>
    </>
  )
}

export default IsolatedServers