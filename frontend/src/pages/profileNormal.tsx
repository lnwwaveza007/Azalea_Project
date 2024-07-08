
import TransaprentButton from '../components/button/transparentButton';
import SettingProfile from '../components/checkProfile';

const ProfileNormal = () => {   
    return (<>
        <div className='w-full h-72 flex flex-col justify-center items-center bg-[#63CB95]'>  
        </div>
        <div className='bg-white mt-[-60px] rounded-t-full flex flex-col justify-center items-center'>
            <h1 > $nbsp; </h1>
            <TransaprentButton text='Back to home'/>
        </div>

        <div>
                <SettingProfile/>
            </div>

        </>
    );
}

export default ProfileNormal;