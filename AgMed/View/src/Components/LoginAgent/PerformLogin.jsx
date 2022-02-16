import "./LoginAgent.css"

const PerformLogin = ({handleLogin}) => {
    return (<div>
                <button onClick={() => handleLogin()} className = "clickbutton">Entrar</button>
            </div>);
}
 
export default PerformLogin;