import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/team/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
