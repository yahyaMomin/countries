import { useQuery } from "react-query";
import instance from "../axios/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "./Table";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Countries = () => {
   const [position, setPosition] = useState("fixed top-0");

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
      setSearchTerm("");
      refetch();
   }, [sortBy]);

   let lastScrollY = window.scrollY;

   const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 180) {
         // When the user scrolls to the top, set position to sticky
         setPosition("sticky");
      } else if (currentScrollY > lastScrollY) {
         // When scrolling down, set position to relative
      }

      lastScrollY = currentScrollY;
   };
   window.addEventListener("scroll", handleScroll);

   return (
      <div>
         <div className="flex justify-center flex-col md:flex-row items-center">
            <input
               onChange={search}
               value={searchTerm}
               type="text"
               placeholder="search"
               className=" bg-accent rounded-sm mx-1 md:mx-3 border-none outline-none px-4 py-2 w-full md:w-1/2"
            />
            <div className="my-3 bg-primary text-black px-4 py-2 rounded-sm">
               <Link to="/detail">compare countries</Link>
            </div>
         </div>
         {isLoading && isFetching ? (
            <Loader />
         ) : (
            <>
               <div
                  className={`m-0 ${
                     position === "sticky" ? "h-[100vh]" : "h-full"
                  } overflow-auto p-0`}
               >
                  {isError ? (
                     <h1>{error.message}</h1>
                  ) : (
                     <table className="styled-table">
                        <thead className="relative z-40">
                           <tr className="active-row">
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 flag
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Country
                              </th>

                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 population <br /> (2024)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 density (KM)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 density (MI)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 area <br />
                                 <span className="text-sm">
                                    (KM <sup>2</sup>)
                                 </span>
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 land area <br />{" "}
                                 <span className="text-sm">
                                    (KM <sup>2</sup>)
                                 </span>
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 netChange
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 growthRate
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 world <br />
                                 Percentage
                              </th>

                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Crime Index
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Overall Criminality Score
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Criminal Markets Score
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Criminal Actors Score
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Resilience Score
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Safety Index
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Monthly Cost of Living
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Cost of Living Index <br /> (Numbeo)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Cost of Living <br />
                                 plus Rent Index <br /> (Numbeo 2023)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Cost of Living Index <br /> (Expatistan)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Cost of Living Index <br /> (Global Economy)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Local Purchasing Power Index <br /> (Numbeo
                                 2023)
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 Country code
                              </th>
                              <th
                                 className={`md:text-base text-sm ${position}`}
                              >
                                 rank
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
                  )}
               </div>
            </>
         )}
      </div>
   );
};

export default Countries;
