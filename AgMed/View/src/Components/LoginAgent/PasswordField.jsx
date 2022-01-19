import "./LoginAgent.css";
import { useState } from "react";
import eyewo from "./eye-w-o.svg";
import eyewc from "./eye-w-c.svg";
import eyebo from "./eye-b-o.svg";
import eyebc from "./eye-b-c.svg";



const PasswordField = () => {
    
    const [passwordShown, setPasswordShown] = useState(false);

    const showPassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
    <div className="passwordbar">
            <input type={passwordShown ? "text" : "password"} name="" id="password" className="password" placeholder="Senha.."/>
                <button onClick={showPassword} className="button">
                    <img
                    src={
                    passwordShown === true
                          ? require("./eye-w-c.svg").default
                          : require("./eye-w-o.svg").default
                      } alt="Hide/Show password" className="img"/>
                </button>
    </div>
            );
}




 
export default PasswordField;