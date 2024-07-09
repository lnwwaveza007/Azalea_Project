
import { Link } from "react-router-dom";
import GreenBox from "../components/cart/greenBox";
import PurpleBox from "../components/cart/PurpleBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import PleaseText from "../components/cart/PleaseText";

const Choose = () => {
    return <>
        <div className="flex flex-col">
            <PaymentBar text="Payment"/>
            <PayStep isActive={true} />
            <PleaseText text="Please Select Your Receiving Method"/>
            <Link
                to="/pickUpDetails"
            >
                <GreenBox text="Pick Up"/>
            </Link>

            <Link
                to="/shippingDetails"
            >
                <PurpleBox text="Delivery"/>
            </Link>
        </div>

    </>
};

export default Choose