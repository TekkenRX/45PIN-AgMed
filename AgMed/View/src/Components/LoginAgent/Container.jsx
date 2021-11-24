import "./LoginAgent.css"

const LoginBox = ({handleClick}) => {
    return (
        <>
            <div className="toolbox" onClick={() => handleClick()} ></div>
        </>
    );
}
 
export default LoginBox;