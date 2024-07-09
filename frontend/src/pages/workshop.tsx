import Card from "../components/homepage/card";
import Navbar from "../components/navbar/navbar";
import PageBar from "../components/navbar/pagebar";
import WorkshopItem from "../components/workshop/workshopItem";
import { useEffect, useState } from "react";

const workshop = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        fetch('http://10.4.53.25:4012/workshops')
        .then(res => res.json())
        .then(data => setWorkshops(data))
    }, []);

    const productList = workshops.map((Product) => (<WorkshopItem 
        id={Product.id}
        title={Product.title}
        img={Product.img}
        author={Product.author}
        date={Product.postdate}
        description={Product.postdesc}
        location={Product.location}
        status={Product.status}
    />)) 
    
    return <>
        <Navbar />
        <PageBar selected={3} />
        <div className="flex flex-col px-5 mt-5">
            <h1 className="text-[#252525] text-[21px] font-bold">Categories</h1>
            <div className="flex flex-row gap-5 mt-5 flex-wrap">
                {productList}
            </div>
        </div>
    </>;
};

export default workshop;