import { Link, useNavigate } from "react-router-dom";

interface PaymentBarProp {
    text: string;
}

function PaymentBar(props: PaymentBarProp) {
    const navigator = useNavigate();

    return (
        <div className="h-[54px] flex items-center justify-between px-4 relative">
            
            
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 30"
                    className="w-[15px] h-[30px]"
                    fill="none"
                    onClick={() => navigator(-1)}
                >
                    <path d="M11.935 21.7749L10.6088 23.0999L3.38502 15.8787C3.26857 15.763 3.17616 15.6254 3.1131 15.4738C3.05004 15.3223 3.01758 15.1597 3.01758 14.9956C3.01758 14.8314 3.05004 14.6689 3.1131 14.5173C3.17616 14.3658 3.26857 14.2282 3.38502 14.1125L10.6088 6.88745L11.9338 8.21245L5.15377 14.9937L11.935 21.7749Z" fill="black" />
                </svg>
        

            <div className="w-full text-center top-1/2">
                <span className="text-black font-bold font-roboto text-base leading-4">
                    {props.text}
                </span>
            </div>
        </div>
    );
}

export default PaymentBar;
