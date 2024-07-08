import { useState, useEffect } from 'react';
import iconImage from '../../../public/arrow_forward.png'
import './profile.css'


const SettingProfile = ({text} : {text:string}) => {
  const [image, setImage] = useState('');


  useEffect(()=>{
    let imageUrl = '';
    if (text === 'EDIT PROFILE'){imageUrl = 'edit.png'}
    else if (text === 'MY CART'){imageUrl = 'shoppingCart.png'}
    else if (text === 'SETTING'){imageUrl = 'setting.png'}
    else if (text === 'LOGOUT'){imageUrl = 'logout.png'}
    setImage(`../../../public/${imageUrl}`);
  },[text])

  return (
    <div>
            <div className='title w-[289px] h-[80px] bg-[#fff] text-black justify-between  '>

                <img src={image} alt="image" style={{ width: '25px', height: '25px' }}/>
                
                <p className='text '>
                    {text} 
                </p>
                <img src={iconImage} alt="arrow_forward" style={{ width: '20px', height: '20px' }} />

                
            </div>
            
        
    </div>
    )

    
}

export default SettingProfile;
