import  { useEffect, useState } from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'; // Import the verified icon

function DealershipCards() {
  const [dealerships, setDealerships] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    fetch('http://localhost:3000/api/dealerships')
      .then(response => response.json())
      .then(data => setDealerships(data))
      .catch(error => console.error('Error fetching dealership data:', error));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-6">
      {dealerships.map((dealership) => (
        <a
          key={dealership.Dealer_id}
          href="#"
          className="shadow-slate-900 shadow-2xl flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://scx2.b-cdn.net/gfx/news/hires/2024/car-dealership.jpg"
            alt="Dealership"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex items-center mb-2">
              <h5 className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {dealership.username}
              </h5>
              {dealership.verified === 1 && (
                <CheckBadgeIcon className="h-6 w-6 text-blue-500 ml-2" aria-label="Verified dealership" />
              )}
            </div>
            <p className="font-display mb-3 font-normal text-gray-700 dark:text-gray-400">
              Your trusted vehicle marketplace. We connect you to a network of verified dealerships for a safe, seamless, and hassle-free buying experience.
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default DealershipCards;
