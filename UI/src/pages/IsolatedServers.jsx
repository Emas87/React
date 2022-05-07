import { useContext, useRef } from 'react'
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';
import * as IsolatedServersFunc from './IsolatedServersEndpoints'

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
    name: "Import GPG Key",
    constraint: "", //None
  },
]

const deleteFormStructure = [
  {
    type: "dropdown",
    name: "Isolated Server Hostname",
    value: "",
    options: [{name:"JFSOFS001", id:0}, {name:"JFSOFS002", id:2}, {name:"JFSOFS003", id:3}, {name:"JFSOFS004", id:4} ]
  },{
    type: "input-text",
    name: "Isolated Server GPG Key ID",
    constraint: "", //None
    value: "0xC10EBF3A",
    disabled: true
  },{
    type: "submit",
    name: "Delete GPG Key",
    constraint: "", //None
  },
]

function IsolatedServers() {
  const handleSubmitImport = () => {
    const result = IsolatedServersFunc.submitImport(inputImport.current.value, inputFileImport.current.value)
    console.log(result)
  }
  
  const handleSubmitDelete = () => {
    const result = IsolatedServersFunc.submitDelete(inputDelete.current.value, outputDelete.current.value)
    console.log(result)
  }

  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Isolated Servers')

  const inputImport = useRef(null)
  const inputFileImport = useRef(null)
  const inputDelete = useRef(null)
  const outputDelete = useRef(null)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[inputImport, inputFileImport]} structure={importFormStructure} handleSubmit={handleSubmitImport}/>
        </div>
        <div className='col'>
          <Forms references={[inputDelete, outputDelete]} structure={deleteFormStructure} handleSubmit={handleSubmitDelete}/>
        </div>
      </div>
    </div>
  )
}

export default IsolatedServers