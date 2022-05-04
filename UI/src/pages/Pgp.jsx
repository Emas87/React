import { useContext } from 'react'
import Button from '../components/common/Button';
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';

function exportPGPKey(){
    console.log("Export PGP Key")
}
function createPGPKey(){
    console.log("Create PGP Key")
}
function resetPGPKey(){
    console.log("Reset PGP Key")
}

const createFormStructure = [
    {
      type: "input-text",
      placeholder: "PGP Key",
      constraint: "[]", //None
      value: ""
    },{
      type: "submit",
      name: "Create PGP Key",
      constraint: "", //None
    },
  ]
  const resetFormStructure = [
    {
      type: "input-text",
      placeholder: "PGP Key",
      constraint: "", //None
      value: ""
    },{
      type: "submit",
      name: "Reset PGP Key",
      constraint: "", //None
    },
  ]

  
function Pgp() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('PGP')
  return (
    <div className="container-fluid">
      <div className="row">
      <div className='col-sm'/>
        <div className='col-sm'>
          <Button name="Export PGP Key" handleClick={exportPGPKey}></Button>
        </div>
      <div className='col-sm'/>
      </div>
      <div className="row">
        <div className='col'>
          <Forms structure={createFormStructure} handleSubmit={createPGPKey}/>
        </div>
        <div className='col'>
          <Forms structure={resetFormStructure} handleSubmit={resetPGPKey}/>
        </div>
      </div>
    </div>
  )
}

export default Pgp