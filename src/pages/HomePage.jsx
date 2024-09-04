import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
   return (
      <div>
         <div className="flex justify-center flex-col items-center h-[100dvh]">
            <h1 className="text-2xl mb-2">get all info in one place</h1>
            <Link
               to="/main"
               className="bg-primary px-10 py-2 text-lg rounded-sm w-fit text-black"
            >
               explore
            </Link>
         </div>
      </div>
   );
};

export default HomePage;
