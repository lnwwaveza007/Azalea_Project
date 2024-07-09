import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Card from '../components/homepage/card';

import { useEffect, useState } from 'react';

const BlogDescription = () => {
    const id = useLocation().state?.id;

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const requestBody = {
                id: id, // Assuming you want to send the 'id' obtained from useLocation
            };

            const response = await fetch('http://10.4.53.25:4012/blogDesc', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            
            const tempData = await response.json();
            console.log(tempData);
            setData(tempData);
            setTitle(tempData[0].title);
            setContent(tempData[0].content);
            setAuthor(tempData[0].author);
            setDate(tempData[0].postdate);
            setImg(tempData[0].img);
            
        };

        fetchData();
    }, []);
 

    return <>
        <Navbar type={1} />
        <div className='w-full h-96' style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
        </div>
        <div className='mt-4 mx-3'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-[28px] text-[#252525] font-bold'>{title}</h1>
            </div>
            <div>
                <p className='text-[21px] text-[#B5B5B5]'>Post by {author} {date.substring(0,10)}</p>
            </div>
            <div className='mt-5 text-[#505050]'>
                <p>{content}</p>
                <img src={img} alt='img' className='mt-4 w-full h-full' />
            </div>
        </div>

    </>;
};

export default BlogDescription;