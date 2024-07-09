import InfoRegis from '../components/register/infoRegis';
import BlockInfo from '../components/login/blockInfo';
import DarkButton from '../components/button/darkButton';
import '../components/button/button.css';
import '../components/button/transparentButton'
import TransaprentButton from '../components/button/transparentButton';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');

    const handleSignUp = () => {
        const fetchData = async () => {
            const requestBody = {
                email: email,
                username: username,
                password: password,
                birthday: birthday,
                gender: gender
            };

            const response = await fetch('http://10.4.53.25:4012/register', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            
            const tempData = await response.json();
            console.log(tempData);
        };

        fetchData();
       
    }

    const handleInputChange = (setter) => (value) => {
        setter(value);
    };

    return (
        <>
        <div className='flex flex-col justify-center items-center pt-[7em]'>
            <div className='justify-center content-center flex text-normal'>
               <InfoRegis text='Email' method={handleInputChange(setEmail)} />
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Username' method={handleInputChange(setUsername)}/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Password' method={handleInputChange(setPassword)}/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Confirm Password' method={handleInputChange(setConfirmPassword)}/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Birthday' method={handleInputChange(setBirthday)} />
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Gender' method={handleInputChange(setGender)}/>
            </div>

            
                <div className='mt-[1em]' onClick={handleSignUp}>
                    <DarkButton text='Sign up'/>    
                </div>
            
            
            <Link
                to={{
                    pathname: "/Login",
                }}
                >
                <div className='mt-[1em]'>
                    <TransaprentButton text='Cancle'/>
                </div>
            </Link>
            
            
            
        </div>
        </>
    );
}

export default Register;