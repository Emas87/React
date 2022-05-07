import { useContext, useRef } from 'react'
import Button from '../components/common/Button';
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';
import * as GpgFunc from './GpgEndpoints'




const createFormStructure = [
    {
      type: "input-text",
      placeholder: "GPG Key",
      constraint: "[]", //None
      value: ""
    },{
      type: "submit",
      name: "Create GPG Key",
      constraint: "", //None
    },
  ]
  const resetFormStructure = [
    {
      type: "input-text",
      placeholder: "GPG Key",
      constraint: "", //None
      value: ""
    },{
      type: "submit",
      name: "Reset GPG Key",
      constraint: "", //None
    },
  ]

  
function Gpg() {
  function exportGPGKey(){
    const result = GpgFunc.exportGPGKey()
    console.log(result)
  }
  function createGPGKey(){
    const result = GpgFunc.createGPGKey(gpgKeyCreate.current.value)
    console.log(result)
  }
  function resetGPGKey(){
    const result = GpgFunc.resetGPGKey(gpgKeyReset.current.value)
    console.log(result)
  }

  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('GPG')

  const gpgKeyCreate = useRef(null)
  const gpgKeyReset = useRef(null)

  return (
    <div className="container-fluid">
      <div className="row">
      <div className='col-sm'/>
        <div className='col-sm'>
          <Button name="Export GPG Key" handleClick={exportGPGKey}></Button>
        </div>
      <div className='col-sm'/>
      </div>
      <div className="row">
        <div className='col'>
          <Forms references={[gpgKeyCreate]} structure={createFormStructure} handleSubmit={createGPGKey}/>
        </div>
        <div className='col'>
          <Forms references={[gpgKeyReset]} structure={resetFormStructure} handleSubmit={resetGPGKey}/>
        </div>
      </div>
    </div>
  )
}

export default Gpg