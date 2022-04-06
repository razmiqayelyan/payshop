import React, { useState } from "react";
import CreateProduct from "./components/CreateProduct";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  // const [active, setActive] = useState({sidebar : "sidebar-tab  turn-on", main: "main active"})
  return (
    <div>
        <Navbar />
        <Main/>
        <CreateProduct/>
    </div>
  );
}

export default App;
