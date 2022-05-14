import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
// import {Footer} from "./Components/Footer";
import {Home} from "./Components/Home"
import {BasicPagination } from "./Components/Pagination";
import {Routes, Route, Link} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer/Footer"
import {Test} from "./Components/Test";
import {Products} from "./Components/Product"
import {Paymentpage} from "./Components/Paymentpage"
// import {SigninMain} from "./Components/signinSignup/SigninMain"
function App() {
  return (
    
<>
      <div style={{ width: "100%", position: "absolute", zIndex: "14" }}>
        
        <Navbar />        
      </div>

      <Routes>

        <Route path="/" element={ <Home /> }> </Route>
        {/* <Route path="/product" element={ < Products/> }> </Route> */}
        <Route path="/product/:id" element={ < Products/> }> </Route>
         
        {/* <Route path= "/login" element = {SigninMain}></Route> */}
        


        <Route path="/paymentpage" element={<Paymentpage/>}></Route>

        {/* <Route path="/signin" element={<Signup />}></Route> */}
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/bookingPage" element={<Booking />}></Route> */}
        {/* <Route path="/checkout/:id" element={<Checkout />}></Route> */}
        {/* <Route path="/checkout/paymentpage/:total" element={<Paymentpage />}></Route> */}

      </Routes>
    
      <Footer />
      
    </>
   
  )
}

export default App;
