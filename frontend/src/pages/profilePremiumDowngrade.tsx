
import profilePic from '../../public/profile.png';


const ProfilePremiumDowngrade = () => {   
    return (<>
        <div className='w-full h-[19em] flex flex-col justify-center items-center bg-[#8E44AD]'>  
        </div>
        <div className='bg-white mt-[-9em]  rounded-[5rem] flex flex-col justify-center items-center'>
            
            <div className='mt-[-5.8em]'>
                <img src={profilePic} alt="Profile" />
            </div>
            
            <div className='flex flex-col items-center pb-[7em]'>
                
            </div>
            
        </div>
        
        <div className='mt-[-5em] m-auto  flex flex-col justify-center items-center bg-[#63CB95] w-[20em] h-[20em] rounded-xl opacity-85 drop-shadow-xl'>
            <div className='flex items-start justify-start mt-[1em]'>
                <p className='items-start justify-start font-bold flex ml-[-1em]'>STANDARD</p>
                <div className='pt-[-2em] pl-[6em] flex flex-col justify-end  text-2xl '>
                    0$
                </div>
                
            </div>
            <p className='pt-[1em] ml-[-5.8em] text-[0.8em]'>Plants can be chosen to match your <br />horoscope from birth date.</p>
            
            <div className='flex flex-col items-center justify-center mt-[3em]'>
                <p className='mb-[1em] text-[0.8em] font-semibold'>CONFIRM DOWN-GRADE TO STANDARD:</p>
                <div className=' bg-white p-[20px] rounded-[24px] cursor-pointer text-[#63CB95] w-[286px] h-[28px] flex items-center justify-center'> 
                    <p className='font-medium text-[0.8em]'>CONFIRM</p>
                </div>
                
            </div>

            
        </div>

        <div className='m-auto mt-[4em] bg-white p-[20px] rounded-[24px] cursor-pointer border border-[#8E44AD] text-[#8E44AD] w-[286px] h-[28px] flex items-center justify-center'> 
                    <p className='font-bold text-[0.8em]'>Back to Home</p>
        </div>

        </>
    );
}

export default ProfilePremiumDowngrade;