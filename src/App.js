import React from "react";
import routes from "./routes";
import Navbar from './Components/Navbar/Navbar'
import './Counters.css'

function App() {
  return <div className="App">
    <Navbar />
    {routes}
    </div>;
}

export default App;
