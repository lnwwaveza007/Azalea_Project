import InfoRegis from '../components/register/infoRegis';
import BlockInfo from '../components/login/blockInfo';
import DarkButton from '../components/button/darkButton';
import '../components/button/button.css';
import '../components/button/transparentButton'
import TransaprentButton from '../components/button/transparentButton';
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center pt-[7em]'>
            <div className='justify-center content-center flex text-normal'>
               <InfoRegis text='Email'/> 
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Username'/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Password'/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Confirm Password'/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <InfoRegis text='Birthday'/>
            </div>
            <div className='justify-center content-center flex text-normal'>
                <BlockInfo text='Gender'/>
            </div>

            <Link
                to={{
                    pathname: "/homepage",
                }}
                >
                <div className='mt-[1em]'>
                    <DarkButton text='Sign up'/>    
                </div>
            </Link>
            
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