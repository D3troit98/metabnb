import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/placetoStay" element={<PlaceToStay />} />
      </Routes>
    </Router>
  );
};

export default App;
