import { Link } from "react-router-dom";

interface workshopProps {
    id: number;
    title: string;
    img: string;
    author: string;
    date: string;
    description: string;
    location: string;
    status: string;
}

function WorkshopItem(props: workshopProps) {
    const sendId = props.id;

    const desc = props.description.substring(0, 180) + '. . .'

    return (
        <>
            <Link
                to={{
                    pathname: "/workshopdescription",
                }}
                state={{ id: sendId }}
                className="w-full"
            >
                <div className="flex flex-col rounded-md shadow-xl p-4">
                    <div className="w-full h-40 rounded-md" style={{
                        backgroundImage: `url(${props.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>

                    </div>
                    <div className="mt-2">
                        <h1 className="uppercase text-[#252525] font-semibold text-[16px]">{props.title}</h1>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-[#BF9670] text-[12px]">{props.author}</p>
                            <p className="text-[#252525] text-bold">-</p>
                            <p className="text-[#B5B5B5] text-[12px]">{props.date.substring(0,10)}</p>
                        </div>
                        <p className="text-[#B5B5B5] font-normal text-[12px]">{desc}</p>
                    </div>
                    <div className="mt-5 flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99996 9.58333C9.44743 9.58333 8.91752 9.36384 8.52682 8.97314C8.13612 8.58244 7.91663 8.05253 7.91663 7.5C7.91663 6.94746 8.13612 6.41756 8.52682 6.02686C8.91752 5.63616 9.44743 5.41666 9.99996 5.41666C10.5525 5.41666 11.0824 5.63616 11.4731 6.02686C11.8638 6.41756 12.0833 6.94746 12.0833 7.5C12.0833 7.77358 12.0294 8.04449 11.9247 8.29725C11.82 8.55002 11.6666 8.77968 11.4731 8.97314C11.2796 9.16659 11.05 9.32005 10.7972 9.42475C10.5445 9.52944 10.2735 9.58333 9.99996 9.58333ZM9.99996 1.66666C8.45286 1.66666 6.96913 2.28125 5.87517 3.37521C4.78121 4.46917 4.16663 5.9529 4.16663 7.5C4.16663 11.875 9.99996 18.3333 9.99996 18.3333C9.99996 18.3333 15.8333 11.875 15.8333 7.5C15.8333 5.9529 15.2187 4.46917 14.1247 3.37521C13.0308 2.28125 11.5471 1.66666 9.99996 1.66666Z" fill="#8E44AD" />
                            </svg>
                            <p className="text-[#252525] text-[12px] font-medium">{props.location}</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <p className="text-[#63CB95] text-[12px]">{props.status}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default WorkshopItem;
