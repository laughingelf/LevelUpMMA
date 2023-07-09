import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SignupPrices from './pages/SignupPrices';
import LocationsSchedule from './pages/LocationsSchedule';
import Testimonies from './pages/Testimonies';
import FAQ from './pages/FAQ';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />

      <Routes>


        <Route path='/' element={<Homepage />} />
        <Route path='/signup-and-prices' element={<SignupPrices />} />
        <Route path='/locations-shedule' element={<LocationsSchedule />} />
        <Route path='/parent-testimonies' element={<Testimonies />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/events' element={<Events />} />



      </Routes>

      <Footer />




    </div >
  );
}

export default App;
