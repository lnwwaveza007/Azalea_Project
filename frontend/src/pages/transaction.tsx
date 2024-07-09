import FormBox from "../components/cart/FormBox"
import GreenBox from "../components/cart/greenBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import MiniFormBox from "../components/cart/MiniFormBox";
import { Link } from "react-router-dom";

const transaction = () => {
    return <>
        <PaymentBar text="Payment"/>
        <PayStep isActive={true}/>
        <div className="flex justify-between px-8 py-10">
            <h1 className="text-[20px] text-black font-roboto font-medium">Total</h1>
            <h1 className="text-[20px] text-black font-roboto font-light">XXX Baht</h1>
        </div>

        <div className="flex justify-center pb-5">
            <img src="../public/creditcardicon.png"/>
        </div>
        <FormBox text="Name on card" textBox="Enter your name"/>
        <FormBox text="Card Number" textBox="Enter your card number"/>
        <div className="flex flex-row justify-center">
            <MiniFormBox text="Expiry Date" textBox="MM/YY"/>
            <MiniFormBox text="Security Code" textBox="CVV"/>
        </div>
        <FormBox text="ZIP/Postal code" textBox="Enter your ZIP/Postal code"/>
        <Link
                to="/orderCompleteDelivery"
            >
            <GreenBox text="Complete Transaction"/>

            </Link>
    </>
}

export default transaction