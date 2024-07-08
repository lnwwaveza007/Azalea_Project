interface PleaseTextProps {
    text: String;
}

function PleaseText(props: PleaseTextProps) {
    return (
        <>
            <div className="text-black text-center font-roboto text-lg font-medium leading-[18px] my-[60px]">
                {props.text}
            </div>
        </>
    )
}

export default PleaseText