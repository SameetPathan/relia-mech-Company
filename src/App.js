import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import ForceLogin from './components/ForceLogin';
import Loader from './components/Loader';
import Home from './components/Home';
import Navbarcomponent from './components/NavbarComponent';

function App() {
  const [currentAccount, setCurrentAccount] = useState(false);

  return (
    <div className="App">
    <Loader></Loader>
      {currentAccount?
      <Router>

          <Navbarcomponent setCurrentAccount={setCurrentAccount} currentAccount={currentAccount}></Navbarcomponent>
          <>
            <Routes> 
              <Route exact path='/' element={<Home currentAccount={currentAccount}></Home>}></Route>
            </Routes>
          </>
            <FooterComponent></FooterComponent>
      </Router>
      :
      <Router>
          <Navbarcomponent setCurrentAccount={setCurrentAccount} currentAccount={currentAccount} ></Navbarcomponent>
          <>
            <Routes> 
              <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
              <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
            </Routes>
          </>
            <FooterComponent></FooterComponent>
      </Router> 
    }
    </div>
  );
}

export default App;
