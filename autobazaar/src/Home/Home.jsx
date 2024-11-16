import { Link } from "react-router-dom";
const Home = () => {
  return (

    <div className=" bg-slate-600 w-full h-full pb-10" >
      <section className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1563969105242-37c55b40c5ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="font-display mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-geist">
            Welcome To AutoBazaar
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 font-display">
            Your one-stop destination for finding, buying, and selling quality
            vehicles.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
           
            <Link

             to='/autobazaar/src/Vehicle'
             className=" font-display inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"

            >
              Explore
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              
           
           
            
              
            
            <a
              href="#"
              className=" font-display inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <div>
        <div className="flex items-centers justify-center w-full p-5 space-x-20">
        <a
          href="/autobazaar/src/Dealership"
          className="shadow-slate-900 shadow-2xl flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://scx2.b-cdn.net/gfx/news/hires/2024/car-dealership.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className=" font-display mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Verified Dealerships
            </h5>
            <p className="font-display mb-3 font-normal text-gray-700 dark:text-gray-400">
            Your trusted vehicle marketplace. We connect you to a network of verified dealerships for a safe, seamless, and hassle-free buying experience.
            </p>
          </div>
        </a>
        <a
          href="#"
          className="shadow-slate-900 shadow-2xl flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://images.unsplash.com/photo-1563969105242-37c55b40c5ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="font-display mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-display mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
        </div>
        <p className="font-display mb-3 text-center text-gray-900 dark:text-gray-800 pt-10">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
      </div>
      
    </div>
    
  
  );
};

export default Home;
