interface GreenButtonProps {
    text: string;
}

function GreenButton(props: GreenButtonProps) {

    return (
      <>
        <div className="p-5 bg-green-300">
            <h1 className="text-red-700">
                {props.text}
            </h1>
        </div>
      </>
    )
  }
  
  export default GreenButton
  