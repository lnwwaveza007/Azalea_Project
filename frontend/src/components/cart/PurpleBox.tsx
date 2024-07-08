interface PurpleBoxProp {
    text: string;
}

function PurpleBox(props: PurpleBoxProp) {
    return (
        <>
            <div className="flex items-center justify-center m-[60px]">
                <div className="w-[300px] h-[60px] shrink-0 bg-[#8E44AD] rounded-[10px] flex items-center justify-center">
                    <div className="text-white text-center font-roboto text-lg font-bold leading-none">
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurpleBox