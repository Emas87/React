import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function Users() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('Users')
  return (
    <div>Users</div>
  )
}

export default Users