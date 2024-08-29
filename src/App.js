import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Viewer from "../src/views/Viewer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Viewer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
