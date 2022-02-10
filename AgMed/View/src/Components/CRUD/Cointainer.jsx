import CrudButton from './CRUDButton';

import './CRUD.css';



const CRUDBar = ({options, handleFormClick}) => {
    return (
    <>
        <div className="CRUDBar">
            {options.map((option) => 
                (
                    <CrudButton option={option} handleFormClick={handleFormClick}></CrudButton>
                ))}
        </div>
    </>);
}
 
export default CRUDBar;