import "./CRUD.css";

const formInput = ({ field }) => {
  return (
    <>
      <div className="inputFiledsCollections">
        <label className="inputFiledsLabel">{field.name}</label>
        <input className="inputFiledsInput" placeholder={field.name} />
      </div>
    </>
  );
};

export default formInput;
