import "./Workbar.css"
import exitButton from "./exitButton.svg"

const ExitBtn = ({style, handleClick}) => {
    return (
        <>  
            <img src={exitButton} alt="" onClick={() => handleClick()} className="Exit" style={style}/>
        </>
    )
}
 
export default ExitBtn;