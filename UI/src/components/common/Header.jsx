import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import Button from './Button';

function Header() {
  const [buttondDisabled, SetbuttondDisabled] = useState(false)
  const [userName, setUserName] = useState("Username")
  
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
      setUserName("Username")
    }
  }
  
  useEffect(() => {
    if(path.pathname === "/"){
      SetbuttondDisabled(true)
    } else if(buttondDisabled) {
      SetbuttondDisabled(false)
    }
    // eslint-disable-next-line
  }, [path.pathname])

  return (
    <header className="layout__header container-fluid">
      <nav className="navbar navbar-expand-xl navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="d-inline-block align-text-top me-2" height="23" src="../../../node_modules/@intc/dlux-bootstrap/dist/images/logos/unboxed/logo-energyblue-white.svg" alt="Intel"/>
            Vulnerability Patch Manager - {currentPage}
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              {buttondDisabled? null:<Button className="btn btn-secondary" name="Back" handleClick={GoBack} disabled={buttondDisabled}/>}
              </li>
            </ul>
            <div className="navbar-text text-nowrap">
              <i className="fa fa-user"></i> {userName}
            </div>
          </div>
        </div>
      </nav>      
    </header>
  )
}

export default Header