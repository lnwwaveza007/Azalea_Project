import { useState, useEffect } from 'react';
import iconImage from '../../../public/arrow_forward.png'
import './profile.css'


const SettingProfile = ({text} : {text:string}) => {
  const [image, setImage] = useState('');


  useEffect(()=>{
    let imageUrl = '';
    if (text === 'EDIT PROFILE'){imageUrl = 'edit.png'}
    else if (text === 'MY CART'){imageUrl = 'shoppingCart.png'}
    else if (text === 'SETTING'){imageUrl = 'settings.png'}
    else if (text === 'LOGOUT'){imageUrl = 'logout.png'}
    else if (text === 'PACKAGE'){imageUrl = 'star.png'}
    setImage(`../../../public/${imageUrl}`);
  },[text])

  return (
    <div>
            <div className='title w-[250px] h-[60px] bg-[#fff] text-black justify-between  '>

                
                
                <div className='flex'>
                  <img src={image} alt="image" style={{ width: '25px', height: '25px' }}/>
                    <p className='text-start flex items-start justify-start font-semibold text-[1em] ml-8'>
                        {text} 
                    </p>
                </div>
               
                <img src={iconImage} alt="arrow_forward" style={{ width: '20px', height: '20px' }} />

                
            </div>
            
        
    </div>
    )

    
}

export default SettingProfile;
