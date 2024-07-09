import { Link } from "react-router-dom";
import CartItem from "../components/cart/cartItem";
import PaymentBar from "../components/cart/paymentBar";
import PurpleBox from "../components/cart/PurpleBox";

import { useEffect, useState } from 'react';

const Cart = () => {
    const [data, setData] = useState([]);
    const email = localStorage.getItem('email');

    useEffect(() => {
        const fetchData = async () => {
            const requestBody = {
                email: email, // ssuming you want to send the 'id' obtained from useLocation
            };

            const response = await fetch('http://10.4.53.25:4012/cartList', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const tempData = await response.json();
            console.log(tempData);
            setData(tempData);
        };

        fetchData();


    }, []);

    useEffect(() => {
        cartList = data.map((Product) => (<CartItem
            id={Product.id}
            title={Product.name}
            imgSrc={Product.img}
            price={Product.price}
            method={reload}
        />))
    }, [data]);

    const reload = () => {
        const fetchData = async () => {
            const requestBody = {
                email: email, // ssuming you want to send the 'id' obtained from useLocation
            };

            const response = await fetch('http://10.4.53.25:4012/cartList', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const tempData = await response.json();
            console.log(tempData);
            setData(tempData);
        };

        fetchData();



    }

    var cartList = data.map((Product) => (<CartItem
        id={Product.id}
        title={Product.name}
        imgSrc={Product.img}
        price={Product.price}
        method={reload}
    />))

    return <>
        <div className="bg-[#ECFFF5]">

            <PaymentBar text="My Cart" />
            <div className="flex flex-col">
                {cartList}
            </div>

        </div>
        <div className="">
            <div className="flex justify-between px-8 py-8">
                <h1 className="text-[20px] text-black font-roboto font-medium">Total</h1>
                <h1 className="text-[20px] text-black font-roboto font-light">XXX Baht</h1>
            </div>
            <Link
                to="/choose"
            >
                <PurpleBox text="Order Now" />
            </Link>
        </div>

    </>;
};

export default Cart;