import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

const App = () => {
   return (
      <div className="mx-2 md:mx-0 ">
         <div className=" max-w-[1200px] container mx-auto  bg-background text-white">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/main" element={<MainPage />} />
               <Route path="/info/:id" element={<Detail />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </div>
      </div>
   );
};

export default App;
