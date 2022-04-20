import logo from './logo.svg';
import './App.css';
import { Data } from './Components/Data';
import {store} from './Redux/store';
import {MediaCard} from "./Components/Home" 
import { Home } from "./components/Home.jsx"
import { About } from "./components/About.jsx"
import { Contact } from "./components/Contact.jsx"
import { Navbar } from "./components/Navbar.jsx"
import { Product } from "./components/Product.jsx"
import { Users } from "./components/Users.jsx"
import { Usedet } from "./components/Usedet.jsx"

function App() {
  return (
    <>
    <Data/>
   <MediaCard />
   <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users/" element={<Users />}></Route>
        <Route path="/users/:userid" element= {<Usedet/>} >  </Route>
        <Route path="/users/admin" element= {<div>admin page</div>} >  </Route>
        <Route path="/products/:id" element={ <Product />}></Route>
         <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>    
    </>
  );
}

export default App;
