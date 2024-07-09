import FormBox from "../components/cart/FormBox"
import MiniFormBox from "../components/cart/MiniFormBox";
import GreenBox from "../components/cart/greenBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import PleaseText from "../components/cart/PleaseText";
import { Link } from "react-router-dom";

const pickUpDetails = () => {
    return <>
        <PaymentBar text="Payment"/>
        <PayStep isActive={true}/>
        <PleaseText text="Please Enter Your Pickup Details"/>
        <div className="flex flex-col gap-3">
        <FormBox text="Firstname" textBox="Enter your firstname"/>
        <FormBox text="Lastname" textBox="Enter your lastname"/>
        <FormBox text="Phone Number" textBox="Enter your phone number"/>
        <div className="flex flex-row justify-center">
            <MiniFormBox text="Date" textBox="DD/MM"/>
            <MiniFormBox text="Time" textBox="00:00"/>
        </div>
        <Link
                to="/transaction"
            >
                <GreenBox text="Confirm Pickup"/>
            </Link>
        </div>
    </>
}

export default pickUpDetails;