import Navbar from "./Navbar/Navbar";
import RegisterForm from "./Register/Register";
import LoginForm from "./Login/Login";
import Home from "./Home/Home"
import Footer from './Footer/Footer'
import Dealership from "./Dealership/Dealership";
import DealershipCards from "./DealershipCards/DealershipCards";
import Vehicle from "./Vehicle/Vehicle"
import VehicleCards from "./VehicleCards/VehicleCards"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import VehicleDescription from "./VehicleDescription/VehicleDescription";
function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route
            exact
            path="/autobazaar/src/Home"
            element={<Home/>}
          />
          <Route
            exact
            path="/autobazaar/src/Register"
            element={<RegisterForm />}
          />
          <Route 
            exact
            path="/autobazaar/src/Login" 
            element={<LoginForm />} 
          />
          <Route
            exact
            path="/autobazaar/src/Dealership"
            element={<Dealership/>}
          />  
          <Route
            exact
            path="/autobazaar/src/DealershipCards/DealershipCards.jsx"
            element={<DealershipCards/>}
          />
          <Route
            exact
            path="/autobazaar/src/Vehicle"
            element={<Vehicle/>}
          />
          <Route
            exact
            path="/autobazaar/src/VehicleCards/VehicleCards.jsx"
            element={<VehicleCards/>}
          />
          <Route path="/autobazaar/src/vehicle/:id" element={<VehicleDescription />} />
          <Route 
            path="*" 
            element={<Navigate to="/autobazaar/src/Home" />} 
            />
        </Routes>
      </Router>

      <Footer/>
      

      
    </>
  );
}

export default App;
