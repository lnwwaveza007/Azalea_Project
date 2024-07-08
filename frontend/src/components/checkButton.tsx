import DarkButton from "./button/darkButton";
import TransaprentButton from "./button/transparentButton";
import './button/button.css';

const Checkbutton = () => {
    return <>
        <DarkButton text="Sign up"/>
        <TransaprentButton text = "Sign in"/>
    </>;
};
export default Checkbutton;



// import GreenButton from "../components/login/greenButton";

// const Description = () => {
//     return <>
//         <h1>Description</h1>
//         <h2>Welcome to Description</h2>
//         <GreenButton text="Yes"/>
//         <GreenButton text="No"/>
//     </>;
// };

// export default Description;