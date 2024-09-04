import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
   return (
      <div className="h-[90dvh] w-full flex justify-center items-center">
         <CirclesWithBar
            height="100"
            width="100"
            color="#FFBADE"
            outerCircleColor="#FFBADE"
            innerCircleColor="#FFBADE"
            barColor="#FFBADE"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
         />
      </div>
   );
};

export default Loader;
