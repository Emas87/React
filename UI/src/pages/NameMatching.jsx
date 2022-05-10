import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Forms from '../components/common/Forms';
import GlobalContext from '../context/GlobalContext';


const MapFormStructure = [
  {
    type: "input-text",
    name: "OP/App Name",
    constraint: "",
    value: "Windows Server 2016",
    disabled: true,
  },{
    type: "input-text",
    name: "OS/App Version",
    constraint: "", //None
    value: "14393.0",
    disabled: true,
  },{
    type: "dropdown",
    name: "NIST Vulnerability Names",
    options: [
      {name:"1607 OS build 14393.3866", id:0}, 
      {name:"1607 OS build 14393.1532", id:1}, 
      {name:"1607 OS build 14393.3755", id:2}, 
      {name:"1607 OS build 14393.4169", id:3}, 
      {name:"1607 OS build 14393.3504", id:4}, 
      {name:"1809 OS build 17763.107", id:5}]
  },{
    type: "submit",
    name: "Map",
    constraint: "", //None
  },
]

function NameMatching() {
  const handleMap = () => {
    //const result = UsersFunc.submitCreate(dropdownMap.current.value)
    //console.log(result)
  }

  const path = useLocation()
  const navigate = useNavigate()

  const GoBack = () => {
    let newPath = path.pathname
    if(newPath[newPath.length - 1] === "/"){
      newPath = newPath.slice(0, -1)
    }
    let re = /(.*\/)/
    let matches = newPath.match(re)
    if(matches !== null){
      navigate(matches[1])
    } else {
      // Current page is root
      console.log('Error: there should be at least 1 "/" in the path: ' + path.pathname)
    }
  }

  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Name Matching')

  const dropdownMap = useRef(null)

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col'>
          <Forms references={[null, null, dropdownMap]} structure={MapFormStructure} handleSubmit={handleMap}/>
        </div>
      </div>
      <div className="row">
        <div className='col'>
          <Button name="Cancel" handleClick={GoBack}></Button>
        </div>
      </div>
    </div>
  )
}


export default NameMatching