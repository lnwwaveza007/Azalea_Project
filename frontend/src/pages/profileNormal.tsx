import profilePic from '../../public/profile.png';

import TransaprentButton from '../components/button/transparentButton';
import SettingProfile from '../components/checkProfile';

const ProfileNormal = () => {   
    return (<>
        <div className='w-full h-[19em] flex flex-col justify-center items-center bg-[#63CB95]'>  
        </div>
        <div className='bg-white mt-[-9em] pb-[3em] rounded-[5rem] flex flex-col justify-center items-center'>
            
            <div className='mt-[-5.8em]'>
                <img src={profilePic} alt="Profile" />
            </div>
            
            <div className='flex flex-col items-center'>
                <p className='text-black font-bold text-4xl mb-[0.3em]'>Fah</p>
                <p className='text-[#B5B5B5] font-semibold'>Standard</p>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-center'>
                <SettingProfile/>
        </div>

        <div className='m-auto flex flex-col justify-center items-center bg-[#8E44AD] w-[20em] h-[9em] rounded-xl opacity-85 drop-shadow-xl'>
            <div className='flex '>
                <p className='pt-[0.5em] pl-[0em] font-bold flex'>Upgrade To Premium</p>
                <div className='pt-[0.25em] pl-[3.5em] flex justify-end  text-2xl '>
                    7$
                </div>
            </div>
            
            <p className='pt-[1em] pl-[1.6em]'>Increase accuracy in selecting plants to match your horoscope.</p>

        </div>

        <div className='flex flex-col justify-center items-center mt-10 font-extrabold'>
            <TransaprentButton text='Back to home'/>
        </div>

        </>
    );
}

export default ProfileNormal;