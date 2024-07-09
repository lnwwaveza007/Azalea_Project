interface GreenBoxProp {
    text: string;
}

function GreenBox(props: GreenBoxProp) {
    return (
        <>
            <div className="flex items-center justify-center mt-[20px]">
                <div className="w-[300px] h-[60px] shrink-0 bg-[#63CB95] rounded-[10px] flex items-center justify-center">
                    <div className="text-white text-center font-roboto text-lg font-bold leading-none">
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GreenBox