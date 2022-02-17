import "./CRUD.css";

const formInput = ({ field, id}) => {
  return (
    <>
      <div className="inputFiledsCollections">
        <label className="inputFiledsLabel">{field.name}</label>
        <input className="inputFiledsInput" id={id} type={field.type} placeholder={field.name} />
      </div>
    </>
  );
};

export default formInput;
