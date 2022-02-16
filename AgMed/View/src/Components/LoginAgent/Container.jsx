import PasswordField from "./PasswordField"
import TextField from "./TextField"
import PerformLogin from "./PerformLogin"
import ForgotPassword from "./ForgotPassword"

import "./LoginAgent.css"
import logo from "./Logo.svg"

const LoginBox = ({handleLogin}) => {
    return (
        <>
            <div className="toolbox">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logoImg"/>
                </div>
                <TextField></TextField>
                <PasswordField></PasswordField>
                <div className = "buttons">
                    <ForgotPassword/>
                    <PerformLogin handleLogin={handleLogin}/>
                </div>
            </div>
        </>
    );
}
 
export default LoginBox;