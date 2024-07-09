import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  method: any;
}


function CartItem(props: CardItemProps) {
  const [count, setCount] = useState(1);

  const handleCartRemove = () => {
        const fetchData = async () => {
            const requestBody = {
                id: props.id,
            };

            const response = await fetch('http://10.4.53.25:4012/cartRemove', {
                method: 'POST', // or 'PUT' if you're updating data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
        };

        fetchData();
        props.method();
       
    }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }else {
      handleCartRemove();
    }
  };

  return <>
    <div className="px-5 py-2">
      <div className="py-2 px-5 bg-white flex items-center p-2 rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <div className="border border-black rounded">
          <img src={props.imgSrc} className="w-20 h-20 rounded-md" />
        </div>
        <div className="ml-5 flex-1"  >
          <h2 className="text-black text-lg font-bold">{props.title}</h2>
          <p className="text-black">{props.price} Baht</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_187_215)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87248 1.68844C5.76002 1.68594 5.64822 1.70623 5.54382 1.74809C5.43942 1.78996 5.34457 1.85252 5.26499 1.93202C5.18541 2.01152 5.12275 2.10631 5.08079 2.21067C5.03883 2.31503 5.01842 2.42681 5.02081 2.53927C5.03415 3.1276 5.17665 3.95594 5.57665 4.80344C5.79915 5.2751 6.08498 5.69844 6.44331 6.05677C6.6772 6.29011 6.93637 6.49344 7.22081 6.66677H4.99998C4.55795 6.66677 4.13403 6.84237 3.82147 7.15493C3.50891 7.46749 3.33331 7.89141 3.33331 8.33344V10.0001C3.33332 10.2949 3.41154 10.5845 3.55999 10.8392C3.70844 11.094 3.9218 11.3048 4.17831 11.4501C4.29415 14.5043 5.24081 16.6318 5.70915 17.5084C6.00081 18.0551 6.56165 18.3334 7.11248 18.3334H12.8875C13.4375 18.3334 13.9991 18.0551 14.2908 17.5084C14.7591 16.6318 15.7058 14.5043 15.8216 11.4501C16.0782 11.3048 16.2915 11.094 16.44 10.8392C16.5884 10.5845 16.6666 10.2949 16.6666 10.0001V8.33344C16.6666 7.89141 16.4911 7.46749 16.1785 7.15493C15.8659 6.84237 15.442 6.66677 15 6.66677H13.4183C13.5994 6.47788 13.7558 6.26955 13.8875 6.04177C14.063 5.73511 14.188 5.40483 14.2625 5.05094C14.4066 4.38594 14.3766 3.70261 14.245 3.05011L14.125 2.5751C14.0609 2.38042 13.9273 2.21618 13.7497 2.1138C13.5722 2.01141 13.3631 1.97805 13.1625 2.0201C12.6029 2.1469 12.0684 2.36601 11.5808 2.66844C11.0341 3.00427 10.585 3.42844 10.2791 3.95844C10.238 4.03011 10.1997 4.10288 10.1641 4.17677C9.96173 3.78377 9.70038 3.42405 9.38915 3.11011C9.02498 2.75086 8.60118 2.45762 8.13665 2.24344C7.42774 1.90578 6.65718 1.7169 5.87248 1.68844ZM6.87498 3.54177C7.06331 3.60011 7.24748 3.66677 7.42498 3.7501C7.73165 3.89511 7.99665 4.07427 8.21165 4.28927C8.42581 4.50344 8.60498 4.76844 8.74998 5.07511C8.82831 5.25594 8.89998 5.43594 8.95748 5.62511C8.76947 5.5687 8.58568 5.49908 8.40748 5.41677C8.11621 5.2844 7.85028 5.10223 7.62165 4.87844C7.39778 4.64955 7.2156 4.38333 7.08331 4.09177C7.001 3.91357 6.93138 3.72978 6.87498 3.54177ZM12.685 3.95844L12.69 4.1501C12.69 4.34122 12.6714 4.52455 12.6341 4.7001C12.5976 4.8784 12.5335 5.0499 12.4441 5.20844C12.29 5.47511 12.04 5.71177 11.7133 5.9126L11.4808 6.04094L11.4766 5.85094C11.4766 5.66038 11.4955 5.47677 11.5333 5.30011C11.5739 5.11066 11.6369 4.94122 11.7225 4.79177C11.8766 4.5251 12.1266 4.28927 12.4533 4.08761L12.685 3.95844ZM5.85665 11.6668H14.1433C13.9983 14.1859 13.2325 15.9376 12.8508 16.6668H7.14915C6.76748 15.9376 6.00081 14.1859 5.85665 11.6668ZM15 10.0001H4.99998V8.33344H15V10.0001Z" fill="#BF9670" />
            </g>
            <defs>
              <clipPath id="clip0_187_215">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-between">
          <button className="text-black bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={increment}>+</button>
          <span className="my-1 text-black">{count}</span>
          <button className="text-black bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  </>
};

export default CartItem;