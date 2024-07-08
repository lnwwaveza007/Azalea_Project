interface FormBoxProp {
    text: string;
    textBox: string;
}

function FormBox(props: FormBoxProp) {
    return (
        <>
            {/* <div className="flex flex-col items-center flex-shrink-0 ">
                <div className="text-black font-roboto text-sm font-normal leading-[18px]">
                    {props.text}
                </div>
                <div className="rounded-[10px] border-black border w-[320px] h-[60px] opacity-50">

                </div>
            </div> */}

            <div className="flex items-center justify-center px-[19px] pb-[21px]">
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

export default FormBox;