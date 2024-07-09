import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Description from "./pages/description";
import Cart from "./pages/cart";
import Choose from "./pages/choose";
import Homepage from "./pages/homepage";
import OrderCompleteDelivery from "./pages/orderCompleteDelivery";
import OrderCompletePickUp from "./pages/orderCompletePickUp";
import PickUpDetails from "./pages/pickUpDetails";
import Blog from "./pages/blog";
import Workshop from "./pages/workshop";
import BlogDescription from "./pages/blogdescription";
import WorkshopDescription from "./pages/workshopdescription";

import Checkbutton from "./components/checkButton";
import InfoRegis from "./components/checkblockInfo";
import BlockSettingProfile from "./components/checkProfile"; 


import Login from "./pages/login";
import Register from "./pages/register";
import ProfileNormal from "./pages/profileNormal";


import './components/button/button.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/blogdescription" element={<BlogDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/orderCompleteDelivery" element={<OrderCompleteDelivery />} />
        <Route path="/orderCompletePickUp" element={<OrderCompletePickUp />} />
        <Route path="/pickUpDetails" element={<PickUpDetails/>} />
        <Route path="/darkbutton" element={<Checkbutton />} />
        <Route path="/BlockTypeInfo" element={<InfoRegis />} />
        <Route path="/checkProfile" element={<BlockSettingProfile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profileNormal" element={<ProfileNormal />} />
        <Route path="/workshop" element={<Workshop />} /> 
        <Route path="/workshopdescription" element={<WorkshopDescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
