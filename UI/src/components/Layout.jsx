import "./Layout.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from '../components/common/MainMenu';
import Header from '../components/common/Header';
import Gpg from '../pages/Gpg';
import Mfa from '../pages/Mfa';
import Users from '../pages/Users';
import IsolatedServers from '../pages/IsolatedServers';
import { GlobalProvider } from '../context/GlobalContext';
import Login from "../pages/Login";
import Reports from "../pages/Reports";
import DeleteNist from "../pages/DeleteNist";
import CreatePatchFile from "../pages/CreatePatchFile";
import NameMatching from "../pages/NameMatching";

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
  },{
    linkName: "User Main Menu",
    description: "This link is for test purpose only",
    destination: "/UserMainMenu"
  }  
]

const userMainManuLinks = [
  {
    linkName: "Create Patch File",
    description: "Create Patch File information.",
    destination: "/UserMainMenu/CreatePatchFile"
  },{
    linkName: "Delete NIST Mapping",
    description: "Delete one or more scan name to NIST database name mapping to enable reselection of the names from NIST to map the scan name.",
    destination: "/UserMainMenu/DeleteNist"
  },{
    linkName: "Reports",
    description: "Display information on the usage of the online server, and basic statistics on the vulnerabilities identified, and patches downloaded.",
    destination: "/UserMainMenu/Reports"
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
                <Route exact path="/UserMainMenu" element={<MainMenu linkList={userMainManuLinks}/>}/>
                <Route path="/GPG" element={<Gpg/>}/>
                <Route path="/MFA" element={<Mfa/>}/>
                <Route path="/IsolatedServers" element={<IsolatedServers/>}/>
                <Route path="/Users" element={<Users/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/UserMainMenu/CreatePatchFile" element={<CreatePatchFile/>}/>
                <Route path="/UserMainMenu/CreatePatchFile/NameMatching" element={<NameMatching/>}/>
                <Route path="/UserMainMenu/DeleteNist" element={<DeleteNist/>}/>
                <Route path="/UserMainMenu/Reports" element={<Reports/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GlobalProvider>
	);
};
export default Layout;