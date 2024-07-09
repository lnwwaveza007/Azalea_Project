import FormBox from "../components/cart/FormBox"
import GreenBox from "../components/cart/greenBox";
import PaymentBar from "../components/cart/paymentBar";
import PayStep from "../components/cart/PayStep";
import PleaseText from "../components/cart/PleaseText";

const shippingDetails = () => {
    return <>
        <PaymentBar text="Payment"/>
        <PayStep isActive={true}/>
        <PleaseText text="Please Enter Your Shipping Details"/>
        <div className="flex flex-col gap-3">
        <FormBox text="Firstname" textBox="Enter your firstname"/>
        <FormBox text="Lastname" textBox="Enter your lastname"/>
        <FormBox text="Phone Number" textBox="Enter your phone number"/>
        <FormBox text="Address" textBox="Enter your address"/>
        <FormBox text="ZIP/Postal code" textBox="Enter your ZIP/Postal code"/>
        <GreenBox text="Confirm Address"/>
        </div>
    </>
}

export default shippingDetails