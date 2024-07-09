import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Card from '../components/homepage/card';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Description = () => {
    const negative = useNavigate();
    const id = useLocation().state?.id;

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState(0);
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [img, setImg] = useState('');
    const [love, setLove] = useState(0);
    const [health, setHealth] = useState(0);
    const [work, setWork] = useState(0);
    const [money, setMoney] = useState(0);

    const handleCartAdd = () => {
        const fetchData = async () => {
            const requestBody = {
                id: id,
                email: localStorage.getItem('email')
            };

            const response = await fetch('http://10.4.53.25:4012/cartAdd', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            
            await negative('/cart');
        };

        fetchData();
       
    }

    useEffect(() => {
        const fetchData = async () => {
            const requestBody = {
                id: id, // Assuming you want to send the 'id' obtained from useLocation
            };

            const response = await fetch('http://10.4.53.25:4012/plantDesc', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            
            const tempData = await response.json();
            console.log(tempData);
            setData(tempData);
            setName(tempData[0].name);
            setPrice(tempData[0].price);
            setRating(tempData[0].rating);
            setReviews(tempData[0].review);
            setDescription(tempData[0].description);
            setType(tempData[0].type);
            setImg(tempData[0].img);
            setLove(tempData[0].love);
            setHealth(tempData[0].health);
            setWork(tempData[0].work);
            setMoney(tempData[0].money);
        };

        fetchData();
    }, []);
    

    return <>
        <Navbar type={1} />
        <div className='w-full h-96'>
            <img src={img} alt='img' className='w-full h-full' />
        </div>
        <div className='mt-2 mx-3'>
            <p className='text-[21px] text-[#B5B5B5]'>{type}</p>
            <div className='flex flex-row justify-between'>
                <h1 className='text-[28px] text-[#252525] font-bold'>{name}</h1>
                <h1 className='text-[28px] font-bold text-[#252525]'>${price}</h1>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                    <path d="M13.8482 7.88666C15.6959 4.57333 16.619 2.91666 18.0001 2.91666C19.3811 2.91666 20.3042 4.57333 22.1519 7.88666L22.6303 8.74416C23.1553 9.68625 23.4178 10.1573 23.8261 10.4679C24.2344 10.7785 24.7449 10.8937 25.7657 11.1242L26.6932 11.3342C30.2807 12.1465 32.073 12.5519 32.5003 13.9242C32.9261 15.295 31.704 16.7256 29.2584 19.5854L28.6255 20.3248C27.9313 21.1371 27.5828 21.544 27.4267 22.0456C27.2707 22.5487 27.3232 23.0912 27.4282 24.1748L27.5244 25.1621C27.8934 28.9785 28.0786 30.886 26.9615 31.7333C25.8444 32.5821 24.1644 31.8077 20.8073 30.2619L19.9367 29.8623C18.983 29.4219 18.5061 29.2031 18.0001 29.2031C17.494 29.2031 17.0171 29.4219 16.0634 29.8623L15.1942 30.2619C11.8357 31.8077 10.1557 32.5806 9.04006 31.7348C7.92152 30.886 8.10672 28.9785 8.47568 25.1621L8.57193 24.1762C8.67693 23.0912 8.72943 22.5487 8.57193 22.0471C8.41735 21.544 8.06881 21.1371 7.37464 20.3262L6.74173 19.5854C4.2961 16.7271 3.07402 15.2965 3.49985 13.9242C3.92714 12.5519 5.72089 12.145 9.30839 11.3342L10.2359 11.1242C11.2553 10.8937 11.7642 10.7785 12.174 10.4679C12.5824 10.1573 12.8448 9.68625 13.3698 8.74416L13.8482 7.88666Z" stroke="#505050" stroke-width="1.5" />
                </svg>
                <p className='text-[21px] text-[#505050] font-medium'>{rating}</p>
                <p className='text-[21px] text-[#63CB95]'>({reviews} Reviews)</p>
            </div>
            <div className='mt-2 text-[#505050]'>
                <p>{description}</p>
            </div>
            <div className='mt-4 flex flex-col gap-4'>
                <Card type="love" content={<><p className='text-[#252525]'>Power up your love at level {love}</p></>} />
                <Card type="money" content={<><p className='text-[#252525]'>Power up your money at level {money}</p></>} />
                <Card type="work" content={<><p className='text-[#252525]'>Power up your work at level {work}</p></>} />
                <Card type="health" content={<><p className='text-[#252525]'>Power up your health at level {health}</p></>} />
            </div>
            <div className='mt-7 flex flex-col gap-2'>
                <div className='p-3 bg-[#63CB95] rounded-md w-full flex justify-center'>
                    <p className='font-[24px] text-[#FFF]'>Buy Now</p>
                </div>
                <div className='p-3 bg-[#8E44AD] rounded-md w-full flex justify-center' onClick={handleCartAdd}>
                    <p className='font-[24px] text-[#FFF]'>Add to Cart</p>
                </div>
            </div>
        </div>

    </>;
};

export default Description;