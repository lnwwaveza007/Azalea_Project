import { useLocation } from 'react-router-dom';

const Description = () => {
    const q = useLocation().state?.id;

    return <>
        <h1 className='text-black'>Hey description Here!!</h1>
        <h2 className='text-black'>{q}</h2>
    </>;
};

export default Description;