import { useParams } from "react-router-dom";
import instance from "../axios/axios";
import { useQuery } from "react-query";
import Loader from "./Loader";
import { useState } from "react";
import Table from "./Table";

const Detail = () => {
   const [position, setPosition] = useState("fixed top-0");
   const [inputs, setInputs] = useState([{ value: "" }, { value: "" }]);

   const values = inputs.map((item) => item.value);

   const getMultipleCountries = async () => {
      const ids = values.join(",");
      const res = await instance.get(`/multiple?ids=${ids}`);
      return res.data;
   };

   const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
      queryKey: ["multiple", inputs],
      queryFn: getMultipleCountries,
      enabled: false,
   });

   const handleInputChange = (index, event) => {
      const values = [...inputs];
      values[index].value = event.target.value;
      setInputs(values);
   };
   const handleAddField = () => {
      setInputs([...inputs, { value: "" }]);
   };
   const removeInput = (index) => {
      const values = [...inputs];
      values.splice(index, 1);
      setInputs(values);
   };

   const areAllInputsEmpty = inputs.every((input) => input.value.trim() === "");
   const isLastInputEmpty = inputs[inputs.length - 1].value.trim() === "";

   console.log(data?.countries.length);

   return (
      <div className="flex justify-center mt-2 items-center w-full flex-col">
         <div className="flex w-full relative flex-col md:flex-row justify-center items-center flex-wrap gap-4">
            {inputs.map((item, index) => (
               <div
                  key={index}
                  className="flex w-full flex-col  justify-center items-center  flex-wrap gap-1"
               >
                  <div className=" max-w-[450px] w-full flex justify-center relative items-center">
                     <input
                        className="relative w-full"
                        type="text"
                        value={item.value}
                        placeholder="enter country name"
                        onChange={(event) => handleInputChange(index, event)}
                     />
                     <button
                        disabled={inputs.length <= 2}
                        onClick={() => removeInput(index)}
                        className={`remove absolute top-[50%] right-[5px]  transform  translate-y-[-50%] ${
                           inputs.length <= 2
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                        } `}
                     >
                        &#10006;
                     </button>
                  </div>
               </div>
            ))}
            <div className="buttons  w-full flex justify-center items-center gap-4">
               <button
                  className={`${
                     isLastInputEmpty && "cursor-not-allowed"
                  } bg-accent  px-2 py-1 text-white rounded-sm `}
                  disabled={isLastInputEmpty}
                  onClick={handleAddField}
               >
                  add more
               </button>
               <button
                  onClick={() => refetch()}
                  className={`bg-primary px-2 py-1 text-black rounded-sm ${
                     areAllInputsEmpty ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  disabled={areAllInputsEmpty}
               >
                  compare now
               </button>
            </div>
         </div>
         {isLoading && isFetching ? (
            <Loader />
         ) : (
            <>
               {isError ? (
                  <h1>{error.message}</h1>
               ) : (
                  <>
                     {data && (
                        <div className={`m-0 w-full overflow-auto p-0`}>
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
                                       Cost of Living Index <br /> (Global
                                       Economy)
                                    </th>
                                    <th
                                       className={`md:text-base text-sm ${position}`}
                                    >
                                       Local Purchasing Power Index <br />{" "}
                                       (Numbeo 2023)
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
                        </div>
                     )}
                     {data?.countries.length < 2 && (
                        <h1 className="mt-4 text-red-400">
                           make sure country name is correct !
                        </h1>
                     )}
                  </>
               )}
            </>
         )}
      </div>
   );
   // const { id } = useParams();
   // const getCountry = async () => {
   //    const res = await instance.get(`/${id}`);
   //    return res.data;
   // };
   // const { data, error, isError, isLoading, isFetching } = useQuery({
   //    queryKey: ["singleCountry", id],
   //    queryFn: getCountry,
   // });
   // if (isError) return <h1>{error.message}</h1>;

   // const country = data ? data.country : null;

   // // const truncate = (str, maxLength = 50) =>
   // //    str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;

   // return (
   //    <div>
   //       {isLoading && isFetching ? (
   //          <Loader />
   //       ) : (
   //          <>
   //             <div className="flex justify-center items-center border flex-col">
   //                <table className="styled-table border">
   //                   <thead className="">
   //                      <tr>
   //                         <td className="text-center">
   //                            All information about {country.country}
   //                         </td>
   //                      </tr>
   //                   </thead>
   //                   <tbody>
   //                      <tr>
   //                         <th className="my-5 bg-primary text-black">
   //                            country
   //                         </th>
   //                         <td className="text-center">{country.country}</td>
   //                      </tr>
   //                   </tbody>
   //                </table>
   //             </div>
   //          </>
   //       )}
   //    </div>
   // );
};

// {
// 	"status": "success",
// 	"country": {
// 		"_id": "66d563902ef5277f359a32fb",
// 		"country": "Bermuda",
// 		"place": 60,
// 		"pop1980": 53673,
// 		"pop2000": 61550,
// 		"pop2010": 63725,
// 		"pop2023": 64698,
// 		"pop2024": 64636,
// 		"pop2030": 63868,
// 		"pop2050": 56937,
// 		"area": 54,
// 		"landAreaKm": 54,
// 		"cca2": "BM",
// 		"cca3": "BMU",
// 		"unMember": false,
// 		"netChange": 0,
// 		"growthRate": -0.001,
// 		"worldPercentage": 0,
// 		"density": 1196.963,
// 		"densityMi": 3100.1341,
// 		"rank": 206,
// 		"crimeIndex": null,
// 		"overallCriminalityScore": null,
// 		"criminalMarketsScore": null,
// 		"criminalActorsScore": null,
// 		"resilienceScore": null,
// 		"safetyIndex": null,
// 		"costOfLivingIndexNumbeo2023": 141.1,
// 		"costOfLivingPlusRentIndexNumbeo2023": 118.2,
// 		"monthlyCostOfLiving": null,
// 		"costOfLivingIndexExpatistan": 292,
// 		"costOfLivingIndexGlobalEconomy": 225.86,
// 		"localPurchasingPowerIndexNumbeo2023": 75.9,
// 		"__v": 0
// 	}
// }

export default Detail;
