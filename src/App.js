 import React, { useState } from 'react';
import Navbar from '../src/Compunents/Navbar';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from '../src/Pages/Home';
// import Cart from '../src/Pages/Cart';
import CartMain from './Pages/CartMain';

 
 
function App() {
  const [UserData, setUserData] = useState([])
    
  

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
          {/* user={user} */}
            <Route path='/' 
          setUserData={setUserData}
          UserData={UserData} element={<Home  />} />
     
             <Route path='/Cart' UserData={UserData} element={<CartMain/> }/> 
             
        
           
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
