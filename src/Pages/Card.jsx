import React from "react";
import User from "../Config/Data";
import '../Style/Card.css'

const Card = ({ user, UserData, setUserData }) => {
  return (
    <div className="Card__over flex flex-wrap mt-4  ">
     

      {User.map((user) => (
       
        
          <div className="   Card__main   p-3  Main__card  flex flex-wrap" >
            <div className=" h-[400px] w-[300px]    Inner__card  text-center mt-4 p-1 rounded-md pt-4 m-auto">
              <img  src={user.img} className="rounded-xl w-64 h-60 m-auto card__img"  />
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.add}</p>
              <button
                type="button"
                className="bg-white p-2 rounded-md border card__btn animate-bounce mt-2 "
                onClick={(e) => setUserData([user, ...UserData])}
              >
                Add To Cart
              </button>
            </div>
          </div>
      
        
    
      ))}
    </div>
  );
};

export default Card;
