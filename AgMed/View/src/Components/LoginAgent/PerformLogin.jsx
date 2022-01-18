import "./LoginAgent.css"

const PerformLogin = ({handleClick}) => {
    return (<div>
                <button onClick={() => handleClick()} className = "clickbutton">Entrar</button>
            </div>);
}
 
export default PerformLogin;