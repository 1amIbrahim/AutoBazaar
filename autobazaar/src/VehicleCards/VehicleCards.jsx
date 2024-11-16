import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VehicleCards() {
  const [vehicles, setVehicles] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    fetch("http://localhost:3000/api/vehicle")
      .then((response) => response.json())
      .then((data) => setVehicles(data))
      .catch((error) =>
        console.error("Error fetching vehicle data:", error)
      );
  }, []);

  return (
    <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.vehile_id} // Ensure each card has a unique key
          className="max-w-lg bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="rounded-t-2xl"
              src={vehicle.imageUrl || "https://via.placeholder.com/300"} // Use dynamic image URL or fallback
              alt={vehicle.name || "Vehicle"}
            />
          </a>
          <div className="p-10">
            <a href="#">
              <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
                {vehicle.make || "Unnamed Vehicle"} {vehicle.model}
              </h5>
            </a>
            <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                PKR {vehicle.price}
            </h5> 
            <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
              {vehicle.year ||
                "No description available for this vehicle."} {/* Use dynamic description */}
            </p>
            <Link
              to={`/autobazaar/src/vehicle/${vehicle.vehicle_id}`}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Now
              <svg
                className="rtl:rotate-180 w-3 h-3 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleCards;
