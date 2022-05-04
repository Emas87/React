import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Option from './Option'


function MainMenu(props) {
  const {updateCurrentPage} = useContext(GlobalContext);
  updateCurrentPage('')
  return (
    <div>
        {props.linkList.map((link, index) => {
            return(<Option key={index} link={link}/>)            
        })}
    </div>
  )
}

export default MainMenu