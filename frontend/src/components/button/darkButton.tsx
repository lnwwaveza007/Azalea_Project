import './button.css';

interface DarkButtonProps {
    text: string;
    onClick?: () => void; 
  }
  
  const DarkButton = (props : DarkButtonProps) => {
    const { text, onClick } = props;
  
    return (
      <button className="dark-button" onClick={onClick} >
        <h1 className="dark-h1">
          {}
          <span>{text}</span>
        </h1>
      </button>
    );
  };
  
  export default DarkButton;
  



// interface DarkButtonProps {
//     text : string
// }

// function DarkButton(props: DarkButtonProps) {
//     return (
//         <>
//             <div style={{ backgroundColor: '#63CB95', padding :'20px', borderRadius : '24px'
                        
//                         ,width: '268px', height: '33px', color: '#FFFFFF'
//             }}>
//                 <h1 className="text-white-900" fontFamily: 'Roboto', fontSize: '12px', fontWeight: 'regular'>
//                     {props.text}
//                 </h1>
//             </div>
//         </>
//     );
// }

// export default DarkButton;


  