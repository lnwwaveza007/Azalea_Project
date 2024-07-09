import cart from "/public/navbar/mdi_cart-outline.png";
import tree from "/public/navbar/tree.png"

import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
    type?: number;

}

const Navbar = (props: NavbarProps) => {
    const navigate = useNavigate();

    return <>

        {props.type != 1 && <div className="flex flex-row justify-between items-center bg-white p-3">
            <Link to= {{
                pathname: "/profileNormal"
            }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#8E44AD" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
            </div>
            </Link>
            <Link
                to={{
                    pathname: "/homepage",
                }}
            >
                <div className="flex flex-row justify-center items-center">
                    <img src={tree} alt="tree" />
                    <a className=" font-semibold text-[28px] text-[#8E44AD]">Azalea</a>
                </div>
            </Link>
            <Link to={{
                pathname: "/cart"
            }}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 18C17.5304 18 18.0391 18.2107 18.4142 18.5858C18.7893 18.9609 19 19.4696 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20C15 18.89 15.89 18 17 18ZM1 2H4.27L5.21 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9268C7.29011 14.9737 7.3537 15 7.42 15H19V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5858C8.78929 18.9609 9 19.4696 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20C5 18.89 5.89 18 7 18ZM16 11L18.78 6H6.14L8.5 11H16Z" fill="#8E44AD" />
                </svg>
            </div>
            </Link>

        </div>}

        {props.type == 1 && <div className="flex flex-row justify-between items-center bg-white p-3">
            <button onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30" fill="none">
                    <path d="M11.935 21.775L10.6088 23.1L3.38502 15.8788C3.26857 15.7631 3.17616 15.6255 3.1131 15.4739C3.05004 15.3223 3.01758 15.1598 3.01758 14.9956C3.01758 14.8315 3.05004 14.6689 3.1131 14.5174C3.17616 14.3658 3.26857 14.2282 3.38502 14.1125L10.6088 6.88751L11.9338 8.21251L5.15377 14.9938L11.935 21.775Z" fill="black" />
                </svg>
            </button>
            <Link
                to={{
                    pathname: "/homepage",
                }}
            >
                <div className="flex flex-row justify-center items-center">
                    <img src={tree} alt="tree" />
                    <a className=" font-semibold text-[28px] text-[#8E44AD]">Azalea</a>
                </div>
            </Link>
            <div>

            </div>
        </div>}

    </>;
};

export default Navbar;