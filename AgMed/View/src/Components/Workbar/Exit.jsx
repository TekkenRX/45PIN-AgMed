import "./Workbar.css"
import exitButton from "./exitButton.svg"

const ExitBtn = ({HandleExitButton, style}) => {
    return (
        <>  
            <img src={exitButton} alt="" onClick={() => HandleExitButton()} className="Exit" style={style}/>
        </>
    )
}
 
export default ExitBtn;