/* eslint-disable react/prop-types */

import millify from "millify";

const Table = ({ item }) => {
   const parseNumber = (number) => {
      return number ? parseFloat(number.toFixed(2)) : "-";
   };
   return (
      <tr className="active-row">
         <td>{item.index + 1}</td>
         <td className="text-sm  w-20 md:text-base">{item.country}</td>
         <td>{item.cca2}</td>
         <td>{item.rank}</td>
         <td>{millify(item.pop2024)}</td>
         <td>{parseNumber(item.density)}</td>
         <td>{parseNumber(item.densityMi)}</td>
         <td>{millify(item.area)}</td>
         <td>{millify(item.landAreaKm)}</td>
         <td>{item.netChange}</td>
         <td>{item.growthRate}</td>
         <td>{item.worldPercentage}</td>
         <td>{parseNumber(item.crimeIndex)}</td>
         <td>{parseNumber(item.overallCriminalityScore)}</td>
         <td>{parseNumber(item.criminalMarketsScore)}</td>
         <td>{parseNumber(item.criminalActorsScore)}</td>
         <td>{parseNumber(item.resilienceScore)}</td>
         <td>{parseNumber(item.safetyIndex)}</td>
         <td>
            {item.monthlyCostOfLiving ? item.monthlyCostOfLiving + "$" : "-"}
         </td>
         <td>{parseNumber(item.costOfLivingIndexNumbeo2023)}</td>
         <td>{parseNumber(item.costOfLivingPlusRentIndexNumbeo2023)}</td>
         <td>{parseNumber(item.costOfLivingIndexExpatistan)}</td>
         <td>{parseNumber(item.costOfLivingIndexGlobalEconomy)}</td>
         <td>{parseNumber(item.localPurchasingPowerIndexNumbeo2023)}</td>
      </tr>
   );
};

export default Table;
