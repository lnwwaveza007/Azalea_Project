interface MiniFormBoxProp {
    text: string;
    textBox: string;
}

function MiniFormBox(props: MiniFormBoxProp) {
    return (
        <>

            <div className="flex justify-center px-[19px] pb-[21px]">
                    <div className="flex flex-col">
                        <label className="text-[14px] text-[#1E1E1E]">
                            {props.text}
                        </label>
                        <input
                            type="text"
                            placeholder={props.textBox}
                            className="border border-black w-[320px] h-[60px] opacity-50 rounded-[10px] bg-white text-[#1E1E1E] "
                        />
                    </div>

            </div>
        </>
    )
}

export default MiniFormBox;