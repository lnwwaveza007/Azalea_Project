interface CartItemProps {
  name: string;
  price: number;
}

function cartItem(props: CartItemProps) {
  return (
    <>
      <div className="w-390 h-125 shrink-0 ">
        <div className="w-370 h-110 shrink-0 br rounded-lg bg-white shadow-md">
          <div className="w-80 h-80 shrink-0 rounded-md border border-gray-400">
            <div className="w-80 h-80 flex-shrink-0 rounded-md bg-cover bg-no-repeat bg-center bg-lightGray-200" style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a2ab968-040e-41e2-a7d6-432b0d7956c4/dgg7728-99309691-6245-4d73-9f64-2b0a21e14989.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFhMmFiOTY4LTA0MGUtNDFlMi1hN2Q2LTQzMmIwZDc5NTZjNFwvZGdnNzcyOC05OTMwOTY5MS02MjQ1LTRkNzMtOWY2NC0yYjBhMjFlMTQ5ODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DERxjzfv-EqkDirUUJmn1A2v_CCjpPS_JP-PQSCDhzo')" }}></div>
            <div className="text-center text-gray-800 font-roboto font-medium text-base leading-4">
              {props.name}
            </div>
            <div className="text-center text-black font-roboto text-sm font-light leading-5">
              {props.price}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H10.625V14.375C10.625 14.5408 10.5592 14.6997 10.4419 14.8169C10.3247 14.9342 10.1658 15 10 15C9.83424 15 9.67527 14.9342 9.55806 14.8169C9.44085 14.6997 9.375 14.5408 9.375 14.375V10.625H5.625C5.45924 10.625 5.30027 10.5592 5.18306 10.4419C5.06585 10.3247 5 10.1658 5 10C5 9.83424 5.06585 9.67527 5.18306 9.55806C5.30027 9.44085 5.45924 9.375 5.625 9.375H9.375V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5Z" fill="black" />
            </svg>
            <div className="w-35 h-80 flex-shrink-0 rounded-10 bg-Super-Light-Gray"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_102_249)">
                <path d="M14.4444 9.44434H5.55556C5.40821 9.44434 5.26691 9.50287 5.16272 9.60705C5.05853 9.71124 5 9.85255 5 9.99989C5 10.1472 5.05853 10.2885 5.16272 10.3927C5.26691 10.4969 5.40821 10.5554 5.55556 10.5554H14.4444C14.5918 10.5554 14.7331 10.4969 14.8373 10.3927C14.9415 10.2885 15 10.1472 15 9.99989C15 9.85255 14.9415 9.71124 14.8373 9.60705C14.7331 9.50287 14.5918 9.44434 14.4444 9.44434Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_102_249">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default cartItem