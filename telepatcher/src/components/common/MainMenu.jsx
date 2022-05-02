import Option from './Option'


function MainMenu(props) {
  return (
    <div>
        {props.linkList.map((link, index) => {
            return(<Option key={index} link={link}/>)            
        })}
    </div>
  )
}

export default MainMenu