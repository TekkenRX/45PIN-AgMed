import "./CRUD.css";
let selectedoption;
let clicktype;

const CrudButton = ({ option, handleFormClick }) => {

  return (
    <>
      <button
        className="CRUDButton"
        onClick={() => {
          if (selectedoption !== option.text) {
            clicktype = "simple";
            selectedoption = option.text;
          }else{
            clicktype = "doubleclick";
            selectedoption = "none"
          }
          console.log(clicktype)
          console.log(selectedoption);
          handleFormClick(option.text, clicktype);
        }}
        style={selectedoption === option.text? {color: "white", "background-color": "#244070"} : {"background-color": "#a3a2a2"}}
      >
        {option.text}
      </button>
    </>
  );
};

export default CrudButton;
