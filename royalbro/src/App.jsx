import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
// import {Footer} from "./Components/Footer";
import {Home} from "./Components/Home"
import {BasicPagination } from "./Components/Pagination";
import {Routes, Route, Link} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer/Footer"

function App() {
  return (
    
<>
      <div style={{ width: "100%", position: "absolute", zIndex: "14" }}>
        <Navbar />
      </div>
      <Home/>
      <Data />
      {/* {modal ? <Location state={setModal} /> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bookingPage" element={<Booking />}></Route>
        <Route path="/checkout/:id" element={<Checkout />}></Route>
        <Route path="/checkout/paymentpage/:total" element={<Paymentpage />}></Route>
      </Routes> */}
    
      <Footer />
      
    </>
   
  )
}

export default App;
