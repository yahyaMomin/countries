/* eslint-disable react/prop-types */
import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ item }) => {
   const [selected, setSelected] = useState([]);

   const navigate = useNavigate();
   const parseNumber = (number) => {
      return number ? parseFloat(number.toFixed(2)) : "-";
   };
   const handleClick = (id) => {
      selected.includes(id)
         ? setSelected((prev) => prev.filter((item) => item !== id))
         : setSelected((prev) => [...prev, id]);
   };
   return (
      <tr
         className={`active-row ${
            selected.includes(item._id) ? "selected" : ""
         }`}
         onClick={() => handleClick(item._id)}
      >
         <th className="sticky left-0 bg-clip-padding z-50 bg-accent">
            <img
               src={`https://flagcdn.com/w20/${item.cca2.toLowerCase()}.png`}
               width="20"
               alt={item.cca2}
            />
         </th>
         <td className="text-sm  w-20 md:text-base">{item.country}</td>

         <td className="text-sm md:text-base">{millify(item.pop2024)}</td>
         <td className="text-sm md:text-base">{parseNumber(item.density)}</td>
         <td className="text-sm md:text-base">{parseNumber(item.densityMi)}</td>
         <td className="text-sm md:text-base">{millify(item.area)}</td>
         <td className="text-sm md:text-base">{millify(item.landAreaKm)}</td>
         <td className="text-sm md:text-base">{item.netChange}</td>
         <td className="text-sm md:text-base">{item.growthRate}</td>
         <td className="text-sm md:text-base">{item.worldPercentage}</td>
         <td className="text-sm md:text-base">
            {parseNumber(item.crimeIndex)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.overallCriminalityScore)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.criminalMarketsScore)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.criminalActorsScore)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.resilienceScore)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.safetyIndex)}
         </td>
         <td className="text-sm md:text-base">
            {item.monthlyCostOfLiving ? item.monthlyCostOfLiving + "$" : "-"}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.costOfLivingIndexNumbeo2023)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.costOfLivingPlusRentIndexNumbeo2023)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.costOfLivingIndexExpatistan)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.costOfLivingIndexGlobalEconomy)}
         </td>
         <td className="text-sm md:text-base">
            {parseNumber(item.localPurchasingPowerIndexNumbeo2023)}
         </td>
         <td className="text-sm md:text-base">{item.cca2}</td>
         <td className="text-sm md:text-base">{item.rank}</td>
      </tr>
   );
};

export default Table;
