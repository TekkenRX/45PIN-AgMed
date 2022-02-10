import "./CRUD.css";
let clicktype;
let selectedoption = "none";
let permission = "user";

// s/ permissao, apenas ver, editar e ver

const CrudButton = ({ option, handleFormClick }) => {
  // Permissao completa : admin
  if (option.editLevel === permission) {
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
  } 
  // Apenas ver : user
  else if (option.viewLevel === permission) {
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
          <pre className="btntxt">{option.text}</pre>
        </button>
      </>
    );
  } 
  // Sem permissao : user
  else {
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
          <pre className="btntxt">{option.text}</pre>
        </button>
      </>
    );
  }
};

export default CrudButton;
