import Forminput from "./Input";
import "./CRUD.css";

const MassDataInput = ({ fields, state, handleMassDataInputRenderClick}) => {
  if (state.render === "noform") {
    return <></>;
  } else {
    return (
      <div className="inputFileds">
        <p style={{color: "white"}}>{state.tag}</p>
        {fields.map((field) => (
          <Forminput field={field} />
        ))} *
        <div className="inputFiledsButtonsContainer">
          <button className="inputFiledsButton" >Confirmar</button>
          <button className="inputFiledsButton" onClick={() => {handleMassDataInputRenderClick("", "close")}}>Cancelar</button>
        </div>
      </div>
    );
  }
};

export default MassDataInput;
