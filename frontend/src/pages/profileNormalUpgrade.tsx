import profilePic from '../../public/profile.png';
import TransaprentButton from '../components/button/transparentButton';
// import SettingProfile from '../components/checkProfile';

const ProfileNormalUpgrade = () => {   
    return (<>
        <div className='w-full h-[19em] flex flex-col justify-center items-center bg-[#63CB95]'>  
        </div>
        <div className='bg-white mt-[-9em]  rounded-[5rem] flex flex-col justify-center items-center'>
            
            <div className='mt-[-5.8em]'>
                <img src={profilePic} alt="Profile" />
            </div>
            
            <div className='flex flex-col items-center pb-[7em]'>
                
            </div>
            
        </div>

        <div className='mt-[-5em] m-auto flex flex-col justify-center items-center bg-[#8E44AD] w-[20em] h-[20em] rounded-xl opacity-85 drop-shadow-xl'>
            <div className='flex items-start justify-start '>
                <p className='items-start justify-start font-bold flex'>UPGRADE TO PREMIUM</p>
                <div className='pt-[-2em] pl-[2em] flex flex-col justify-end  text-2xl '>
                    7$
                    <br />
                    <p className='text-[0.4em]'>/MOUNTH</p>
                </div>
                
            </div>
            <p className='pt-[-2em] ml-[-5.8em] text-[0.8em]'>Increase accuracy in selecting plants <br /> to match your horoscope.</p>
            
            <div className='flex flex-col items-center justify-center mt-[2em]'>
                <p className='mb-[1em] text-[0.8em] '>CONFIRM UPGRADE TO PREMIUM.</p>
                <div className=' bg-white p-[20px] rounded-[24px] cursor-pointer text-[#8E44AD] w-[286px] h-[28px] flex items-center justify-center'> 
                    <p className='font-medium text-[0.8em]'>CONFIRM</p>
                </div>
                
            </div>

            
        </div>

        <div className='flex flex-col justify-center items-center mt-20 font-extrabold'>
            <TransaprentButton text='Back to home'/>
        </div>

        </>
    );
}

export default ProfileNormalUpgrade;