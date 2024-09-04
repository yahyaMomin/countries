import { useQuery } from "react-query";
import instance from "../axios/axios";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "./Table";
import Loader from "./Loader";

const Countries = () => {
   const { sortBy } = useSelector((state) => state.home);

   async function getAllCountries() {
      const res = await instance.get(`?sortBy=${sortBy}`);
      return res.data;
   }

   const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
      queryKey: ["allCountries", sortBy],
      queryFn: getAllCountries,
      refetchOnWindowFocus: false,
   });
   useEffect(() => {
      refetch();
   }, [sortBy]);

   return (
      <div>
         {isLoading && isFetching ? (
            <Loader />
         ) : (
            <>
               <div className="overflow-scroll h-[90dvh] mt-2">
                  <table className="styled-table min-w-[920px]  w-full cursor-default">
                     <thead>
                        <tr>
                           <th colSpan="4" className="text-center">
                              General Information
                           </th>
                           <th colSpan="8"> Area & Population</th>
                           <th colSpan="6"> Crime & Safety</th>
                           <th colSpan="6"> Cost of Living</th>
                        </tr>
                        <tr className="active-row">
                           <td className="md:text-base text-sm">index</td>
                           <td className="md:text-base text-sm">Country</td>
                           <td className="md:text-base text-sm">
                              Country code
                           </td>
                           <td className="md:text-base text-sm">rank</td>
                           <td className="md:text-base text-sm">
                              population <br /> (2024)
                           </td>
                           <td className="md:text-base text-sm">
                              density (KM)
                           </td>
                           <td className="md:text-base text-sm">
                              density (MI)
                           </td>
                           <td className="md:text-base text-sm">
                              area <br />
                              <span className="text-sm">
                                 (KM <sup>2</sup>)
                              </span>
                           </td>
                           <td className="md:text-base text-sm">
                              land area <br />{" "}
                              <span className="text-sm">
                                 (KM <sup>2</sup>)
                              </span>
                           </td>
                           <td className="md:text-base text-sm">netChange</td>
                           <td className="md:text-base text-sm">growthRate</td>
                           <td className="md:text-base text-sm">
                              world <br />
                              Percentage
                           </td>

                           <td className="md:text-base text-sm">Crime Index</td>
                           <td className="md:text-base text-sm">
                              Overall Criminality Score
                           </td>
                           <td className="md:text-base text-sm">
                              Criminal Markets Score
                           </td>
                           <td className="md:text-base text-sm">
                              Criminal Actors Score
                           </td>
                           <td className="md:text-base text-sm">
                              Resilience Score
                           </td>
                           <td className="md:text-base text-sm">
                              Safety Index
                           </td>
                           <td className="md:text-base text-sm">
                              Monthly Cost of Living
                           </td>
                           <td className="md:text-base text-sm">
                              Cost of Living Index <br /> (Numbeo 2023)
                           </td>
                           <td className="md:text-base text-sm">
                              Cost of Living <br /> Plus Rent Index <br />{" "}
                              (Numbeo 2023)
                           </td>
                           <td className="md:text-base text-sm">
                              Cost of Living Index <br /> (Expatistan)
                           </td>
                           <td className="md:text-base text-sm">
                              Cost of Living Index <br /> (Global Economy)
                           </td>
                           <td className="md:text-base text-sm">
                              Local Purchasing Power Index <br /> (Numbeo 2023)
                           </td>
                        </tr>
                     </thead>
                     <tbody>
                        {data?.countries.map((item, index) => {
                           const data = {
                              ...item,
                              index: index,
                              transformed: true,
                           };
                           return <Table key={index} item={data} />;
                        })}
                     </tbody>
                  </table>
               </div>
               <Footer />
            </>
         )}
      </div>
   );
};

export default Countries;
