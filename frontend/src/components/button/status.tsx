import { useEffect } from 'react';
import nextArrow from '../../../public/arrow_forward.png';

const StatusCart = ({text} : {text:string})  => {
    


    useEffect(()=>{
      let x,y;
      if (text === 'Payment'){ x ='100'}
      else (text === 'Complete'){y ='100'}
      
      
    },[text])

    return (    
        <>  
            <div className='bg-[#ECFFF5] h-[2em] flex justify-around items-center'>

                <div className='flex '>
                    <p>Shipping</p>
                    <img src= {nextArrow} className='w-[1em] ml-[0.7em]'/>
                </div>
                <div className={`opacity-[${x}] flex`}>
                    <p>Payment</p>
                    <img src= {nextArrow} className='w-[1em] ml-[0.7em]'/>
                </div>
                <div className={`opacity-[${y}] flex`}>
                    <p>Complete</p>
                </div>
            </div>
        </>
    );    

}    

export default StatusCart;
