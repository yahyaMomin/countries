import { useQuery } from "react-query";
import instance from "../axios/axios";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "./Table";
import Loader from "./Loader";

const Countries = () => {
   const { sortBy, order } = useSelector((state) => state.home);

   const [searchTerm, setSearchTerm] = useState("");

   const getAllCountries = async () => {
      const res = await instance.get(`?sortBy=${sortBy}&order=${order}`);
      return res.data;
   };
   const getSearchCountries = async () => {
      const res = await instance.get(`/search/${searchTerm}`);
      return res.data;
   };
   const queryKey = searchTerm
      ? ["searchCountries", searchTerm]
      : ["allCountries", sortBy, order];

   const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
      queryKey,
      queryFn: searchTerm ? getSearchCountries : getAllCountries,
      refetchOnWindowFocus: false,
   });

   const search = (e) => {
      const text = e.target.value;
      setSearchTerm(text);
   };
   useEffect(() => {
      refetch();
   }, [sortBy]);

   return (
      <div>
         <div className="flex justify-center">
            <input
               onChange={search}
               value={searchTerm}
               type="text"
               placeholder="search"
               className=" bg-accent rounded-sm mx-3 border-none outline-none px-4 py-2 w-full md:w-1/2"
            />
         </div>
         {isLoading && isFetching ? (
            <Loader />
         ) : (
            <>
               <div className=" m-0 max-h-[100dvh] overflow-auto p-0">
                  <table className="styled-table">
                     <thead className="relative z-40">
                        <tr className="active-row">
                           <th className="md:text-base text-sm">flag</th>
                           <th className="md:text-base text-sm">Country</th>
                           <th className="md:text-base text-sm">
                              Country code
                           </th>
                           <th className="md:text-base text-sm">rank</th>
                           <th className="md:text-base text-sm">
                              population <br /> (2024)
                           </th>
                           <th className="md:text-base text-sm">
                              density (KM)
                           </th>
                           <th className="md:text-base text-sm">
                              density (MI)
                           </th>
                           <th className="md:text-base text-sm">
                              area <br />
                              <span className="text-sm">
                                 (KM <sup>2</sup>)
                              </span>
                           </th>
                           <th className="md:text-base text-sm">
                              land area <br />{" "}
                              <span className="text-sm">
                                 (KM <sup>2</sup>)
                              </span>
                           </th>
                           <th className="md:text-base text-sm">netChange</th>
                           <th className="md:text-base text-sm">growthRate</th>
                           <th className="md:text-base text-sm">
                              world <br />
                              Percentage
                           </th>

                           <th className="md:text-base text-sm">Crime Index</th>
                           <th className="md:text-base text-sm">
                              Overall Criminality Score
                           </th>
                           <th className="md:text-base text-sm">
                              Criminal Markets Score
                           </th>
                           <th className="md:text-base text-sm">
                              Criminal Actors Score
                           </th>
                           <th className="md:text-base text-sm">
                              Resilience Score
                           </th>
                           <th className="md:text-base text-sm">
                              Safety Index
                           </th>
                           <th className="md:text-base text-sm">
                              Monthly Cost of Living
                           </th>
                           <th className="md:text-base text-sm">
                              Cost of Living Index <br /> (Numbeo)
                           </th>
                           <th className="md:text-base text-sm">
                              Cost of Living <br />
                              plus Rent Index <br /> (Numbeo 2023)
                           </th>
                           <th className="md:text-base text-sm">
                              Cost of Living Index <br /> (Expatistan)
                           </th>
                           <th className="md:text-base text-sm">
                              Cost of Living Index <br /> (Global Economy)
                           </th>
                           <th className="md:text-base text-sm">
                              Local Purchasing Power Index <br /> (Numbeo 2023)
                           </th>
                        </tr>
                     </thead>

                     <tbody className="relative z-10">
                        {data?.countries.map((item) => {
                           const data = {
                              ...item,
                              transformed: true,
                           };
                           return <Table key={data._id} item={data} />;
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
