import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import Button from './Button';

function Header() {
  const [buttondDisabled, SetbuttondDisabled] = useState(false)
  
  const {currentPage} = useContext(GlobalContext);
  
  const path = useLocation()
  const navigate = useNavigate()
  
  const GoBack = () => {
    let re = /(.*\/)/
    let matches = path.pathname.match(re)
    if(matches !== null){
      navigate(matches[1])
    } else {
      // Current page is root
      console.log('Error: there should be at least 1 "/" in the path: ' + path.pathname)
    }
  }
  
  useEffect(() => {
    if(path.pathname === "/"){
      SetbuttondDisabled(true)
    } else if(buttondDisabled) {
      SetbuttondDisabled(false)
    }
  }, [buttondDisabled, path.pathname])

  return (
    <header className="layout__header container-fluid">
      <div className="row">
        <div className='col'>
          <h1>Telepatcher - {currentPage}</h1>
        </div>
        <div className='col'>
          {buttondDisabled? null:<Button name="Back" handleClick={GoBack} disabled={buttondDisabled}/>}
        </div>
      </div>
      
    </header>
  )
}

export default Header