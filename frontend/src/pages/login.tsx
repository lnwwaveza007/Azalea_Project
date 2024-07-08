import BlockInfo from '../components/login/blockInfo';
import DarkButton from '../components/button/darkButton';

import '../components/button/button.css';
import '../components/button/transparentButton'


const Login = () => {
    return (
    <>
    <div className='flex flex-col justify-center items-center pt-[9em]'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row just'>
                <img src="public\treeLogo.png" className='w-[104px] h-[180px]'  />
                <div className = 'text-black flex flex-col justify-center '>
                    <h1 className='text-[28px] text-normal'>Welcome To</h1>
                    <h1 className='text-[38px] font-semibold text-medium text-[#8E44AD] drop-shadow-xl'>Azalea</h1>
                </div>
            </div>    
            <div className='justify-center content-center flex text-normal'>
                <BlockInfo text="Username" />
                
            </div>
            <div className='justify-center content-center flex flex-col'>
                <BlockInfo text="Password"/>
                <p className='text-[#505050] text-[0.6em] mt-[-2em] justify-end content-end items-end flex'>Forget password?</p>
            </div>

            <div className='mt-[2em]'>
                <DarkButton text='Sign in'/>
            </div>
            
            <div className='flex text-xs mt-[1em]'>
                <p className='text-[#B5B5B5]'>Do not have an account? &nbsp; </p>
                <p className='text-black'>Sign up</p>
            </div>

            
            
        </div>
    </div>
    </>
    );
};

export default Login;   