import GreenBox from "../components/cart/greenBox";
import PurpleBox from "../components/cart/PurpleBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import PleaseText from "../components/cart/PleaseText";

const Choose = () => {
    return <>
        <div className="flex flex-col items-center justify-center bg-white h-screen">
            <PaymentBar/>
            <PayStep isActive={true} />
            <PleaseText text="Please Select Your Receiving Method"/>
            <GreenBox text="Pick Up"/>
            <PurpleBox text="Delivery"/>
        </div>

    </>
};

export default Choose