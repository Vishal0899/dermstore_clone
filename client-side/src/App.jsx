import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Middle from "./Components/Middle";
import Middle from "./Components/Middle";
import Navbar from "./Components/Navbar/Navbar";
import { second_extra } from "./Components/slider";



function App() {
  return (
      
    <div >
   <Navbar/>
   <Middle slides = {second_extra}/>
 
    </div>
  );
}

export default App;
