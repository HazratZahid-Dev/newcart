import React, { useState } from "react";
import Card from "./Card";

import user from "../Config/Data";
import Cart from "./Cart";
import "../Style/Home.css";

const Home = () => {
  const [UserData, setUserData] = useState([]);

  console.log(UserData);
  return (
    <div className="flex  flex-wrap justify-between  main__home">
      <div className="Home__card">
        <Card
          className="text-white  flex card__scroll"
          user={user}
          setUserData={setUserData}
          UserData={UserData}
        />
      </div>

      <div>
        <Cart UserData={UserData} />
      </div>
    </div>
  );
};

export default Home;
