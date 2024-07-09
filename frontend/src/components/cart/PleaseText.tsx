interface PleaseTextProps {
    text: String;
}

function PleaseText(props: PleaseTextProps) {
    return (
        <>
            <div className="text-black text-center font-roboto font-bold text-[20px] leading-[18px] my-[30px]">
                {props.text}
            </div>
        </>
    )
}

export default PleaseText