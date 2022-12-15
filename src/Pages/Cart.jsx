import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import 'D:/NewCart/newcart/src/Style/Cart.css'
// import User from "../Config/Data";

const Cart = ({ UserData }) => {
  console.log(UserData);
  return (
    <div div className="Cart__overflow w-[300px] mt-4 ">
      <div className="text-center w-16 h-16 flex justify-center m-auto icon__main gap-2 p-20 mt-10 mb-5 icon__div">
        <div className='cart__icon '>
          <FaShoppingCart className="text-center m-auto mt-1" />
        </div>
        <div className='number ' >
          <span > {UserData.length}</span>
        </div>
      </div>
      <div className="   text-center">
        {/* {UserData.map((user) => (
            
            
              <div key={user.id} className="  p-5 font-bold">
                <img src={user.img} className="h-[250px] w-[300px] m-auto rounded-md" />
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.add}</p>
              </div>
              
            
          )
        )} */}


        {UserData.map((user) => (
       
        
       <div className="   Card__main   p-3  Main__card  flex flex-wrap bg-green-100" >
         <div className=" h-[400px] w-[300px]    Inner__card  text-center mt-4 p-1 rounded-md pt-4 m-auto">
           <img  src={user.img} className="rounded-xl w-64 h-60 m-auto card__img"  />
           <p>{user.id}</p>
           <p>{user.name}</p>
           <p>{user.add}</p>
           
         </div>
       </div>
   
     
 
   ))}
      </div>
    </div>
  );
};

export default Cart;
