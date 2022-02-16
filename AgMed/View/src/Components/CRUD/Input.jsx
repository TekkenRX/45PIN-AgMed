import "./CRUD.css";

const formInput = ({ field }) => {
  return (
    <>
      <div className="inputFiledsCollections">
        <label className="inputFiledsLabel">{field.name}</label>
        <input className="inputFiledsInput" type="date" placeholder={field.name} />
      </div>
    </>
  );
};

export default formInput;
