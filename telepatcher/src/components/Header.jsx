import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import Button from './common/Button';

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
    <header>
      <h2>Telepatcher - {currentPage}</h2>
      <Button name="Back" handleClick={GoBack} disabled={buttondDisabled}/>    
    </header>
  )
}

export default Header