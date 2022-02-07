
import './App.css';
import Home from './pages/Home';
import './style.css'
import React from 'react';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Forum from  './pages/Forum';
import { Contact } from './pages/Contact';
import DirectorySubmission from './pages/DirectorySubmission';
import FreeDirectories from './pages/FreeDirectories';
import PaidDirectories from './pages/PaidDirectories';
import TruestedDirectories from './pages/TruestedDirectories';
import NicheDirectories from './pages/NicheDirectories';
import Dashboard from './pages/Dashboard';
import AddListing from './pages/AddListing';




function App() {
  const [show,setShow]=React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [user,setUser]=React.useState(null);

  return (
    <>
    <BrowserRouter>
      <Header show={show} setShow={setShow} isRegister={isRegister} setIsRegister={setIsRegister} isLogin={isLogin} setIsLogin={setIsLogin} user={user} setUser={setUser}/>
      <Routes>
        <Route path="*" element={ <h1 className='text-center mt-5 text-danger' > 404 Not found </h1>} />
        <Route path="/dev" element={<Home />} />
        <Route path='/dev/about' element={<About/>} />
        <Route path='/dev/forum' element={<Forum/>} />
        <Route path='/dev/contact-us' element={<Contact/>} />
        <Route path='/dev/directory-submission' element={<DirectorySubmission/>} />
        <Route path='/dev/free-directory' element={<FreeDirectories/>} />
        <Route path='/dev/paid-directory' element={<PaidDirectories/>} />
        <Route path='/dev/trusted-directory' element={<TruestedDirectories/>} />
        <Route path='/dev/niche-directory' element={<NicheDirectories/>} />
        <Route path="/dev/dashboard" element={<Dashboard/>}/>
        <Route path="/dev/add-listing" element={user?<AddListing user={user}/>:<Navigate to={'/dev'}/>}/>
      
      </Routes>
      <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
