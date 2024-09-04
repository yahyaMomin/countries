import React from "react";
import bg from "../assets/bg.webp";
import { Link } from "react-router-dom";

const Home = () => {
   console.log(bg);

   return (
      <div>
         <div
            className="flex justify-center bg-cover bg-top items-center flex-col h-screen"
            style={{ backgroundImage: `url(${bg})` }}
         >
            <h1 className="text-2xl mb-2">get all info in one place</h1>
            <Link
               to="/home"
               className="bg-primary px-4 py-2 text-lg rounded-md text-black"
            >
               explore
            </Link>
         </div>
      </div>
   );
};

export default Home;
