import FormBox from "../components/cart/FormBox"
import GreenBox from "../components/cart/greenBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import PleaseText from "../components/cart/PleaseText";

const pickUpDetails = () => {
    return <>
        <PaymentBar/>
        <PayStep isActive={true}/>
        <PleaseText text="Please Enter Your Pickup Details"/>
        <div className="flex flex-col gap-3">
        <FormBox text="Firstname" textBox="      Enter your firstname"/>
        <FormBox text="Lastname" textBox="      Enter your lastname"/>
        <FormBox text="Phone Number" textBox="      Enter your phone number"/>
        <FormBox text="Date" textBox="      Enter your date"/>
        <GreenBox text="Confirm Pickup"/>
        </div>
    </>
}

export default pickUpDetails;