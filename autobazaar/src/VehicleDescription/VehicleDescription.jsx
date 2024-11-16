import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

function VehicleDescription() {
  const { id } = useParams(); // Extract ID from the URL
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/specs/${id}`) // Use ID to fetch specific vehicle data
      .then((response) => response.json())
      .then((data) => setVehicle(data))
      .catch((error) => console.error("Error fetching vehicle data:", error));
  }, [id]);

  if (!vehicle) return <p>Loading...</p>; // Handle loading state

  return (
    <div className="items-center justify-center bg-slate-600 p-10 ">
      <h1 className="text-center text-slate-100 font-bold text-4xl p-5 font-display">{vehicle.make} {vehicle.model}</h1>
      
      <div className="items-center justify-center bg-slate-600">

        

        <div className="flex justify-center mb-10">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 w-1/2">
            <img
              src="https://images.unsplash.com/photo-1563969105242-37c55b40c5ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 bg-slate-500 mb-10 p-5">
        <table
          width="100%"
          className="table table-bordered text-center table-engine-detail fs16"
        >
          <tbody>
            <tr>
              <td className="text-center">
                <div className="flex flex-col items-center justify-center">
                  <CalendarDaysIcon
                    className="h-10 w-10 "
                    aria-label="Year"
                  ></CalendarDaysIcon>
                  <p>{vehicle.year}</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/Images/noun-engine-10760.svg"
                    className="h-10 w-10"
                    alt="AutoBazaar Logo"
                  />
                  <p>{vehicle.engine_capacity} CC</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/Images/manual-transmission.svg"
                    className="h-10 w-10"
                    alt="AutoBazaar Logo"
                  />
                  <p>{vehicle.transmission}</p>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/Images/gas-station.svg"
                    className="h-10 w-10"
                    alt="AutoBazaar Logo"
                  />
                  <p>{vehicle.engine_type}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div className="flex justify-center bg-slate-600">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4">
          <table className="w-full text-sm text-center rtl:text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  colSpan="2"
                  className="px-6 py-3 text-center font-medium text-gray-900 dark:text-white"
                >
                  Specifications
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Make
                </th>
                <td className="px-6 py-4 text-center">{vehicle.make}</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Model
                </th>
                <td className="px-6 py-4 text-center">{vehicle.model}</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Year
                </th>
                <td className="px-6 py-4 text-center">{vehicle.year}</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Color
                </th>
                <td className="px-6 py-4 text-center">{vehicle.color}</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Engine Capacity
                </th>
                <td className="px-6 py-4 text-center">
                  {vehicle.engine_capacity}
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Transmission
                </th>
                <td className="px-6 py-4 text-center">
                  {vehicle.transmission}
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  Engine Type
                </th>
                <td className="px-6 py-4 text-center">{vehicle.engine_type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VehicleDescription;
