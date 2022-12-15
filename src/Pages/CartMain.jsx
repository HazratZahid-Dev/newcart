
import React, { useState } from 'react';
import Card from './Card';

import user from '../Config/Data';
import Cart from './Cart';





const CartMain = () => {
    const [UserData, setUserData] = useState([])
 
  console.log(UserData)
  return (
    <div className="flex">


       <Cart UserData={UserData}/>  
  
    </div>
  );
};

export default CartMain;