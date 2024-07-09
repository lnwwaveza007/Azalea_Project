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
import ShippingDetails from "./pages/shippingDetails";
import Transaction from "./pages/transaction";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/orderCompleteDelivery" element={<OrderCompleteDelivery />} />
        <Route path="/orderCompletePickUp" element={<OrderCompletePickUp />} />
        <Route path="/pickUpDetails" element={<PickUpDetails/>} />
        <Route path="/shippingDetails" element={<ShippingDetails/>} />
        <Route path="/transaction" element={<Transaction/>} />
        <Route path="/darkbutton" element={<Checkbutton />} />
        <Route path="/BlockTypeInfo" element={<InfoRegis />} />
        <Route path="/checkProfile" element={<BlockSettingProfile />} />
        
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profileNormal" element={<ProfileNormal />} />

      
      </Routes>
    </BrowserRouter>
  )
}

export default App
