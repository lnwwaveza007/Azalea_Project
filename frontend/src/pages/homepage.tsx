import Card from "../components/homepage/card";
import Navbar from "../components/navbar/navbar";
import PageBar from "../components/navbar/pagebar";
import Plant from "../components/homepage/plant";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [plants, setPlants] = useState([]);

    console.log(localStorage.getItem('email'));

    useEffect(() => {
        fetch('http://10.4.53.25:4012/products')
        .then(res => res.json())
        .then(data => setPlants(data))
    }, []);

    const productList = plants.map((Product) => (<Plant 
        id={Product.id}
        name={Product.name}
        img={Product.img}
        price={Product.price}
    />)) 
    
    return <>
        <Navbar />
        <PageBar selected={1} />
        <div className="mt-5 mx-4">
            <Card type="love" content={<>
                <p className="text-black">Get <b>15%</b> off</p>
                <p className="uppercase text-[#252525]">If you buy <span className=" text-pink-500">Lovers plants</span></p>
                </>} />
        </div>
        <div className="flex flex-col px-5 mt-5">
            <h1 className="text-[#252525] text-[21px] font-bold">Interesting Deals</h1>
            <div className="flex flex-row gap-5 mt-5 overflow-scroll">
                {productList}
            </div>
        </div>
        <div className="flex flex-col px-5 mt-5">
            <h1 className="text-[#252525] text-[21px] font-bold">Categories</h1>
            <div className="flex flex-row gap-5 mt-5 flex-wrap justify-center">
                {productList}
            </div>
        </div>
    </>;
};

export default Homepage;