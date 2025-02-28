import { Link } from "react-router-dom";

interface plantProps {
  id: number;
  name: string;
  img: string;
  price: number;
}

function Plant(props: plantProps) {
  const sendId = props.id;

  return (
    <>
      <Link
        to={{
          pathname: "/description",
        }}
        state={{ id: sendId }}
      >
        <div
          className=" shadow-lg w-[159px] h-[12rem] rounded-md"
          style={{
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="left-2 relative top-[8.8rem] z-10">
            <h3 className="text-black text-[16px] font-normal ">
              {props.name}
            </h3>
            <div className="flex flex-row justify-between pr-3">
              <h3 className="text-[#005F2E] text-[12px] font-normal">
                ${props.price}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_122_487)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.125 19.972C13.903 20.136 13.662 20.272 13.397 20.342C12.651 20.542 11.836 20.244 11.124 20.044C6.35099 18.701 3.15399 16.598 2.23699 13.46C1.50499 10.954 2.20899 8.444 3.75699 6.884C5.19099 5.439 7.31699 4.853 9.49799 5.792C10.918 3.888 13.053 3.332 15.017 3.867C17.137 4.444 19.001 6.266 19.62 8.802C19.7413 9.29933 19.8023 9.80566 19.803 10.321C20.059 10.4523 20.299 10.6123 20.523 10.801C21.68 11.78 22.298 13.443 21.953 15.172C21.513 17.378 19.468 18.927 16.543 20.033C16.042 20.223 15.494 20.458 14.947 20.362C14.643 20.308 14.371 20.152 14.125 19.972ZM4.15699 12.899C3.62199 11.066 4.15999 9.318 5.17699 8.293C6.15299 7.309 7.59999 6.943 9.19999 7.879C9.75899 8.206 10.48 8.012 10.8 7.451C11.718 5.84 13.154 5.433 14.491 5.797C15.885 6.177 17.225 7.421 17.677 9.276C17.7323 9.49866 17.769 9.727 17.787 9.961C17.4206 10.0079 17.0633 10.1093 16.727 10.262C15.653 9.215 14.231 9.009 12.977 9.471C11.555 9.994 10.405 11.346 10.137 13.089C9.86399 14.874 10.707 16.614 12.276 18.287C12.078 18.237 11.873 18.177 11.666 18.119C7.03499 16.816 4.76599 14.984 4.15699 12.899ZM12.115 13.392C12.275 12.342 12.954 11.611 13.668 11.347C14.328 11.105 15.061 11.232 15.618 12.037C15.701 12.1569 15.807 12.2592 15.9299 12.338C16.0527 12.4167 16.1899 12.4703 16.3336 12.4957C16.4772 12.5211 16.6245 12.5177 16.7669 12.4859C16.9092 12.454 17.0439 12.3942 17.163 12.31C17.963 11.743 18.695 11.875 19.231 12.328C19.813 12.82 20.199 13.74 19.991 14.781C19.766 15.911 18.623 17.109 15.836 18.162C15.659 18.229 15.483 18.301 15.301 18.354C15.148 18.241 15.007 18.114 14.863 17.991C12.605 16.048 11.94 14.531 12.115 13.391V13.392Z"
                    fill="#F87D7D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_122_487">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <svg
            className=" relative bottom-[-43px] rounded-md"
            xmlns="http://www.w3.org/2000/svg"
            width="159"
            height="101"
            viewBox="0 0 159 101"
            fill="none"
          >
            <path
              d="M176.5 112.5V39V0.5C138.833 26.1667 49.8 69.8 -5 39V112.5H176.5Z"
              fill="#BCFFDC"
            />
          </svg>
        </div>
      </Link>
    </>
  );
}

export default Plant;
