import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./Components/cartprovider/cart";


import {Middle} from "./Components/Middle"
import { second_extra } from "./Components/slider";


function App() {
  return (
      
    <div >
    <Routes>
      <Route path = "/" element ={<Middle slides={second_extra}/>}/>
      <Route path="/cart" element = {<Cart/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
