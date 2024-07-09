import { useState, useEffect } from 'react';


const InfoRegis = ({text} : {text:string})  => {
    const [image, setImage] = useState('');


    useEffect(()=>{
      let imageUrl = '';
      if (text === 'Email'){imageUrl = 'mail.png'}
      else if (text === 'Username'){imageUrl = 'personGray.png'}
      else if (text === 'Password'){imageUrl = 'lock.png'}
      else if (text === 'Confirm Password'){imageUrl = 'lock.png'}
      else if (text === 'Birthday'){imageUrl = 'cake.png'}
      else if (text === 'Gender'){imageUrl = 'agender.png'}
      setImage(`../../../public/${imageUrl}`);
    },[text])

    

    return (
        <>
            <div>
                <p style={{ fontSize: '16px', fontWeight: 'regular', color: 'black', backgroundColor: '#ffffff', borderBottom: '1px solid #b5b5b5', marginBottom: '22px' }}>
                    {}
                    <span style={{ fontFamily: 'Roboto',  display: 'flex' }}>{text}
                        <p style={{color: 'red', paddingLeft: '4px'}}>  *</p>
                    </span>

                    <div style={{display: 'flex'
                        , justifyContent: 'center'
                        , alignItems: 'center'
                        , paddingLeft: '15px'
                        , paddingTop: '5px'}}>
                        
                        {/* มันควรจะใส่รูปมาจากตรงอื่นได้ แต่ยังคิดไม่ออก */}
                        <img src={image} alt="image" style={{ width: '14px', height: '14px' }}/>

                        <input type="text" placeholder = {`Enter your ${text}`}
                                style={{ backgroundColor: '#FFFFFF'
                                        , color: '#e5e5e5'
                                        , fontFamily : 'roboto'
                                        , fontSize: '12px'
                                        , padding: '20px'
                                        , width: '268px'
                                        , height: '33px'
                                        , cursor: 'pointer'
                                        , display: 'flex'
                                        , alignItems: 'center'
                                        , justifyContent: 'center' }} 
                        />
                            
                    </div>
                    

                </p>  

            
            </div> 
        </>
    );
}

export default InfoRegis;