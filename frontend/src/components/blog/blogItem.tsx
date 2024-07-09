import { Link } from "react-router-dom";

interface blogProps {
    id: number;
    title: string;
    img: string;
    author: string;
    date: string;
    description: string;
}

function blogItem(props: blogProps) {
    const sendId = props.id;

    const desc = props.description.substring(0, 180)+'. . .'

    return (
        <>
            <Link
                to={{
                    pathname: "/blogdescription",
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
                </div>
            </Link>
        </>
    );
}

export default blogItem;
