import "./Layout.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from '../components/common/MainMenu';
import Header from '../components/common/Header';
import Gpg from '../pages/Gpg';
import Mfa from '../pages/Mfa';
import Users from '../pages/Users';
import IsolatedServers from '../pages/IsolatedServers';
import { GlobalProvider } from '../context/GlobalContext';

const links = [
  {
      linkName: "GPG",
      description: "Create the Online Server GPG Key Pair if not created. Reset the Online Server GPG Key Pair. Export the Online Server GPG Public Key.",
      destination: "/GPG"
  },{
      linkName: "Isolated Servers",
      description: "Import Isolated Server GPG Public Key to associate with 1 or more servers. Remove existing Online server GPG Public Key to remove an association with an Online Server.",
      destination: "/IsolatedServers"
  },{
      linkName: "MFA",
      description: "Set or reset the MFA token.",
      destination: "/MFA"
  },{
      linkName: "Users",
      description: "Create the App Admin user and other users in the system.",
      destination: "/Users"
  },
]

const Layout = () => {
	return (
    <GlobalProvider>
      <Router>
        <div className="layout container-fluid">
          <div className="row">
            <Header className="col"/>
          </div>
          <div className="row">
            <div className="layout__sidebar"></div>
            <div className='layout__body col'>          
              <Routes>
                <Route exact path="/" element={<MainMenu linkList={links}/>}/>
                <Route path="/GPG" element={<Gpg/>}/>
                <Route path="/MFA" element={<Mfa/>}/>
                <Route path="/IsolatedServers" element={<IsolatedServers/>}/>
                <Route path="/Users" element={<Users/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GlobalProvider>
	);
};
export default Layout;