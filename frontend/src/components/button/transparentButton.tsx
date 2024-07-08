import './button.css';
interface TransaprentButtonProps {
    text: string;
    onClick?: () => void; 
  }
  
  const TransaprentButton: React.FC<TransaprentButtonProps> = (props) => {
    const { text, onClick } = props;
  
    return (
      <button className='transprentButton' onClick={onClick} >
        <h1 className='tran-h1'>
          {}
          <span className='tran-span'>{text}</span>
        </h1>
      </button>
    );
  };
  
  export default TransaprentButton;
  

