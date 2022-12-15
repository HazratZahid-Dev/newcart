import React, { useState } from "react";
import {FaShoppingCart} from "react-icons/fa"
import '../src/App.css'

const LeftSide = ({user,UserData,setUserData}) => {

  return (
    <div className="bg-green-600 h-[400px] w-[400px]" onClick={e=>setUserData([user,...UserData])}>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.add}</p>
    </div>
  );
};

const RightSide = ({UserData}) => {

    return (
      <div  className=" bg-red-600 h-auto w-[400px]" >
{UserData.map(user=>{
  return   <>
 <span> <FaShoppingCart/> {UserData.length}</span>
  <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.add}</p>
  </>
})}
      
      </div>
    );
  };
const Rough = () => {
  const [UserData, setUserData] = useState([])
  const user =
    {
      id: 2,
      name: "asad",
      add: "khyber",
    }
   
  ;
  console.log(UserData)
  return (
    <div className="flex">

      <LeftSide className='text-white w-[800px]' user={user} setUserData={setUserData} UserData={UserData}  />
      <RightSide  UserData={UserData} />
    </div>
  );
};

export default Rough;