import PasswordField from "./PasswordField"
import TextField from "./TextField"
import PerformLogin from "./PerformLogin"
import "./LoginAgent.css"
import logo from "./Logo.svg"


const LoginBox = ({handleClick}) => {
    return (
        <>
            <div className="toolbox">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logoImg"/>
                </div>
                <TextField></TextField>
                <PasswordField></PasswordField>
                <PerformLogin handleClick={handleClick}></PerformLogin>
            </div>
        </>
    );
}
 
export default LoginBox;