import "./CRUD.css";
let clicktype;
let selectedoption = "none";

const CrudButton = ({ option, handleFormClick }) => {

  return (
    <>
      <button
        className="CRUDButton"
        onClick={() => {
          if (selectedoption !== option.text) {
            clicktype = "simple";
            selectedoption = option.text;
          } else {
            clicktype = "doubleclick";
            selectedoption = "none";
          }
          handleFormClick(option.text, clicktype);
        }}
      >
        <pre className="btntxt"> {option.text}</pre>
      </button>
    </>
  );
};

export default CrudButton;
