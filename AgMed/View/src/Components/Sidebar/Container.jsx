import "./Sidebar.css";
import filter from "./filter.svg"
import plus from "./plus.svg"

const Sidebar = ({handleClick}) => {
    return (
    <>
        <div className="container">
            <img src={plus} alt="+" className="icons"/>
            <img src={filter} alt="^" className="icons"/>
        </div>
    </>);
}
 
export default Sidebar;