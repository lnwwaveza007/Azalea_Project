import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PageBarProps {
    selected: number;
}

function PageBar(props: PageBarProps) {
    const [bgColor, setBgColor] = useState<string[]>(["bg-[#63CB95]", "bg-[#E1E1E1]", "bg-[#E1E1E1]"]);

    useEffect(() => {
        if (props.selected == 1) {
            setBgColor(["bg-[#63CB95]", "bg-[#E1E1E1]", "bg-[#E1E1E1]"]);
        } else if (props.selected == 2) {
            setBgColor(["bg-[#E1E1E1]", "bg-[#63CB95]", "bg-[#E1E1E1]"]);
        } else {
            setBgColor(["bg-[#E1E1E1]", "bg-[#E1E1E1]", "bg-[#63CB95]"]);
        }
    }, [props.selected]);

    return <>
        <div className="mt-5 flex flex-row px-6 justify-between items-center">
            <Link
                to={{
                    pathname: "/homepage",
                }}
            >
                <div className={`flex flex-row gap-2 rounded-md px-4 py-4 text-[12px] uppercase tracking-widest font-medium text-[#252525] ${bgColor[0]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        s   <path d="M1.5 2V0H17.5V2H1.5ZM1.5 16V10H0.5V8L1.5 3H17.5L18.5 8V10H17.5V16H15.5V10H11.5V16H1.5ZM3.5 14H9.5V10H3.5V14ZM2.55 8H16.45L15.85 5H3.15L2.55 8Z" fill="black" />
                    </svg>
                    <a>Store</a>
                </div>
            </Link>
<Link
                to={{
                    pathname: "/blog",
                }}
            >
            <div className={`flex flex-row gap-2 rounded-md px-4 py-4 text-[12px] uppercase tracking-widest font-medium text-[#252525] ${bgColor[1]}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16 2V16H2V2H16ZM18 0H0V18H18V0ZM14 14H4V13H14V14ZM14 12H4V11H14V12ZM14 9H4V4H14V9Z" fill="black" />
                </svg>
                <a>BLOG</a>
            </div></Link>
            <Link
                to={{
                    pathname: "/workshop",
                }}
            >
            <div className={`h-[50px] flex flex-row gap-2 rounded-md px-4 py-4 text-[12px] uppercase tracking-widest font-medium text-[#252525] ${bgColor[2]}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 7C19 7 14 14 6.5 14M6.5 14C4.5 14 1 15 1 19V23H12V19C12 16.5 15 18 19 11L17.5 9.5M6.5 14C7.42826 14 8.3185 13.6313 8.97487 12.9749C9.63125 12.3185 10 11.4283 10 10.5C10 9.57174 9.63125 8.6815 8.97487 8.02513C8.3185 7.36875 7.42826 7 6.5 7C5.57174 7 4.6815 7.36875 4.02513 8.02513C3.36875 8.6815 3 9.57174 3 10.5C3 11.4283 3.36875 12.3185 4.02513 12.9749C4.6815 13.6313 5.57174 14 6.5 14ZM3 5V2H23V16H20M11 1H15V3H11V1Z" stroke="black" stroke-width="2" />
                </svg>
                <a>WORKSHOP</a>
            </div>
            </Link>
        </div>
    </>
}

export default PageBar;