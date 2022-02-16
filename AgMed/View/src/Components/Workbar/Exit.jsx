import "./Workbar.css"
import exitButton from "./exitButton.svg"

const ExitBtn = ({style, handleLogin}) => {
    return (
        <>  
            <img src={exitButton} alt="" onClick={() => handleLogin()} className="Exit" style={style}/>
        </>
    )
}
 
export default ExitBtn;