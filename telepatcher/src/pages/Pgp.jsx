import { useContext } from 'react'
import Button from '../components/common/Button';
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
function Pgp() {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('PGP')
  return (
    <>
        <Button name="Export PGP Key" handleClick={exportPGPKey}></Button>
        <div>
            <input></input>
            <Button name="Create PGP Key" handleClick={createPGPKey}></Button>
        </div>
        <div>
            <input></input>
            <Button name="Reset PGP Key" handleClick={resetPGPKey}></Button>
        </div>
    </>
  )
}

export default Pgp