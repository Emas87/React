import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/common/MainMenu';
import Header from './components/Header';
import Pgp from './pages/Pgp';
import Mfa from './pages/Mfa';
import Users from './pages/Users';
import IsolatedServers from './pages/IsolatedServers';
import { GlobalProvider } from './context/GlobalContext';


const links = [
  {
      linkName: "PGP",
      description: "Create the Online Server PGP Key Pair if not created. Reset the Online Server PGP Key Pair. Export the Online Server PGP Public Key.",
      destination: "/PGP"
  },{
      linkName: "Isolated Servers",
      description: "Import Isolated Server PGP Public Key to associate with 1 or more servers. Remove existing Online server PGP Public Key to remove an association with an Online Server.",
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


function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <div className='container'>          
          <Routes>
            <Route exact path="/" element={<MainMenu linkList={links}/>}/>
            <Route path="/PGP" element={<Pgp/>}/>
            <Route path="/MFA" element={<Mfa/>}/>
            <Route path="/IsolatedServers" element={<IsolatedServers/>}/>
            <Route path="/Users" element={<Users/>}/>
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
