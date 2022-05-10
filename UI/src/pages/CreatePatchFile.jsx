import React, { useContext, useRef } from 'react'
import Forms from '../components/common/Forms';
import MainMenu from '../components/common/MainMenu';
import GlobalContext from '../context/GlobalContext';

const testlink = [
  {
      linkName: "Name Matching",
      description: "This link is for test purpose only",
      destination: "/UserMainMenu/CreatePatchFile/NameMatching"
  }
]


const CreateFormStructure = [
  {
    type: "input-file",
    name: "Input File",
    constraint: "", //None
    value: ""
  },{
    type: "input-date",
    name: "Last Scan Date",
    constraint: "", //None
    value: ""
  },{
    type: "dropdown",
    name: "Isolated Server Name",
    options: [{name:"iso1", id:0}, {name:"iso2", id:1}]
  },{
    type: "input-text",
    name: "Isolated Server GPG Key ID",
    constraint: "", //None
    value: ""
  },{
    type: "input-dir",
    name: "Output Directory",
    constraint: "", //None
    value: ""
  },{
    type: "submit",
    name: "Create",
    constraint: "", //None
  },
]

function CreatePatchFile() {
  const handleSubmitCreate = () => {
    //const result = UsersFunc.submitCreate(InputFile.current.value, LastScanDate.current.value, IsolatedServerName.current.value,, GPGKeyID.current.value, OutputFile.current.value)
    //console.log(result)
  }

  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Users')

  const InputFile = useRef(null)
  const LastScanDate = useRef(null)
  const IsolatedServerName = useRef(null)
  const GPGKeyID = useRef(null)
  const OutputFile = useRef(null)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[InputFile, LastScanDate, IsolatedServerName, GPGKeyID, OutputFile]} structure={CreateFormStructure} handleSubmit={handleSubmitCreate}/>
        </div>
      </div>
      <MainMenu linkList={testlink}/>

    </div>
  )
}


export default CreatePatchFile