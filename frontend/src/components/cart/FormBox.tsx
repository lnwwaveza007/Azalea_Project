interface FormBoxProp {
    text: string;
}

function FormBox(props: FormBoxProp) {
    return (
        <>
            <div>
                <div className="text-black font-roboto text-sm font-normal leading-[18px]">
                    {props.text}
                </div>
                <div className="rounded-[10px] border-black border w-[320px] h-[60px]">
                    <h1>d</h1>
                </div>
            </div>


        </>
    )
}

export default FormBox;