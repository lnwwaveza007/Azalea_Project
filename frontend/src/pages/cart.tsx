import { Link } from "react-router-dom";
import CartItem from "../components/cart/cartItem";
import PaymentBar from "../components/cart/paymentBar";
import PurpleBox from "../components/cart/PurpleBox";


const Cart = () => {
    return <>
    <div className="bg-[#ECFFF5]">
        
        <PaymentBar text="My Cart"/>
            <CartItem
                imgSrc="https://lh6.googleusercontent.com/proxy/PcimSxSVDrECVh1wbStqGeYqOos35MvotFod54aICFmj2gUu2fXo626riIZooPyUa2kec5cRtBOhv_XHQ-ihZZJv5d4wpludY4OPjfqmtD0"
                title="Tree"
                price="100" />
            <CartItem
                imgSrc="https://lh6.googleusercontent.com/proxy/PcimSxSVDrECVh1wbStqGeYqOos35MvotFod54aICFmj2gUu2fXo626riIZooPyUa2kec5cRtBOhv_XHQ-ihZZJv5d4wpludY4OPjfqmtD0"
                title="Tree"
                price="100" />
            <CartItem
                imgSrc="https://lh6.googleusercontent.com/proxy/PcimSxSVDrECVh1wbStqGeYqOos35MvotFod54aICFmj2gUu2fXo626riIZooPyUa2kec5cRtBOhv_XHQ-ihZZJv5d4wpludY4OPjfqmtD0"
                title="Tree"
                price="100" />
            <CartItem
                imgSrc="https://lh6.googleusercontent.com/proxy/PcimSxSVDrECVh1wbStqGeYqOos35MvotFod54aICFmj2gUu2fXo626riIZooPyUa2kec5cRtBOhv_XHQ-ihZZJv5d4wpludY4OPjfqmtD0"
                title="Tree"
                price="100" />
    </div>
    <div className="">
        <div className="flex justify-between px-8 py-8">
            <h1 className="text-[20px] text-black font-roboto font-medium">Total</h1>
            <h1 className="text-[20px] text-black font-roboto font-light">XXX Baht</h1>
        </div>
        <Link
            to="/choose"
            >
             <PurpleBox text="Order Now"/>  
        </Link>
    </div>

    </>;
};

export default Cart;