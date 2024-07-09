import profilePic from '../../public/profile.png';
import { Link } from "react-router-dom";
import BlockSettingProfile from '../components/checkProfile';
import SettingProfile from '../components/profile/settingProfile';

const ProfilePremium = () => {   
    return (<>
        <div className='w-full h-[19em] flex flex-col justify-center items-center bg-[#8E44AD]'>  
        </div>
        <div className='bg-white mt-[-9em] pb-[3em] rounded-[5rem] flex flex-col justify-center items-center'>
            
            <div className='mt-[-5.8em]'>
                <img src={profilePic} alt="Profile" />
            </div>
            
            <div className='flex flex-col items-center'>
                <p className='text-black font-bold text-4xl mb-[0.3em]'>Fah</p>
                <p className='text-[#BF9670] font-bold'>Premium</p>
            </div>
            
        </div>
        
        

        <div className='flex flex-col justify-center items-center'>
                <BlockSettingProfile/>
                <Link
                to={{
                    pathname: "/profilePremiumDowngrade",
                }}
                >
                    <SettingProfile text="PACKAGE" />
                </Link>
                
        </div>
        
        
        <Link
                to={{
                    pathname: "/homepage",
                }}
                >
                <div className='m-auto bg-[#8E44AD] p-[20px] rounded-[24px] cursor-pointer text-white w-[286px] h-[28px] flex items-center justify-center'> 
                    <p className='font-normal text-[0.8em]'>Back to Home</p>
                </div>
        </Link>
        

        </>
    );
}

export default ProfilePremium;