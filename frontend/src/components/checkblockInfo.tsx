import BlockInfo from "./login/blockInfo";
import InfoRegis from "./register/infoRegis";
import './button/button.css';

const BlockTypeInfo = () => {
    return <>
        <BlockInfo text="Username"/>
        <BlockInfo text="Password"/>
        <InfoRegis text="Email"/>
    </>;
};
export default BlockTypeInfo;
