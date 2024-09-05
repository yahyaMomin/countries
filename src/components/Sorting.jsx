import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setOrder } from "../store/homeSlice";

const Sorting = () => {
   const dispatch = useDispatch();
   const { order } = useSelector((state) => state.home);
   const changeInput = (e) => {
      const sortBy = e.target.value;
      dispatch(setSortBy(sortBy));
   };
   const selectInput = (e) => {
      const name = e.target.name;
      if (order === name) return;
      dispatch(setOrder(name));
   };
   const getButtonClassName = (name) => {
      return `
         px-4 py-2 rounded-md text-black
         ${
            order === name
               ? " bg-primary"
               : "bg-transparent border border-primary text-white"
         }
      `;
   };
   return (
      <div>
         <div>
            <div className="max-w-[450px]  w-full mx-auto mt-3">
               <select
                  defaultValue="rank"
                  onChange={changeInput}
                  name="sortBy"
                  id="sortBy"
                  className="w-full bg-accent mx-auto p-2 rounded-sm text-primary"
               >
                  <option value="place&by=alphaBet=true">A to Z</option>
                  <option value="area">Area (km²)</option>
                  <option value="landArea">Land Area (km²)</option>
                  <option value="pop2024">population</option>
                  <option value="density">Population Density (per km²)</option>
                  <option value="densityMi">
                     Population Density (per Mi²)
                  </option>
                  <option value="netChange">Net Population Change</option>
                  <option value="growthRate">Population Growth Rate</option>
                  <option value="worldPercentage">
                     World Population Percentage
                  </option>
                  <option value="crimeIndex">Crime Index</option>
                  <option value="overallCriminalityScore">
                     Overall Criminality Score
                  </option>
                  <option value="criminalMarketsScore">
                     Criminal Markets Score
                  </option>
                  <option value="criminalActorsScore">
                     Criminal Actors Score
                  </option>
                  <option value="resilienceScore">Resilience Score</option>
                  <option value="safetyIndex">Safety Index</option>

                  <option value="monthlyCostOfLiving">
                     Monthly Cost of Living
                  </option>
                  <option value="costOfLivingIndexNumbeo2023">
                     Cost of Living Index (Numbeo 2023)
                  </option>
                  <option value="costOfLivingPlusRentIndexNumbeo2023">
                     Cost of Living Plus Rent Index (Numbeo 2023)
                  </option>
                  <option value="costOfLivingIndexExpatistan">
                     Cost of Living Index (Expatistan)
                  </option>
                  <option value="costOfLivingIndexGlobalEconomy">
                     Cost of Living Index (Global Economy)
                  </option>
                  <option value="localPurchasingPowerIndexNumbeo2023">
                     Local Purchasing Power Index (Numbeo 2023)
                  </option>
               </select>
               <div className="flex justify-center items-center gap-3 my-2">
                  <button
                     onClick={selectInput}
                     name="highest"
                     className={getButtonClassName("highest")}
                  >
                     highest
                  </button>
                  <button
                     onClick={selectInput}
                     name="lowest"
                     className={getButtonClassName("lowest")}
                  >
                     lowest
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sorting;
