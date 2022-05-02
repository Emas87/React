import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Mfa() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('MFA')
  return (
    <div>Mfa</div>
  )
}

export default Mfa