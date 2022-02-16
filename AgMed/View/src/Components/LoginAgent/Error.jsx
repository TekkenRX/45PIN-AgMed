import "./LoginAgent.css";

const Error = ({ handleLogin }) => {
  return (
    <>
      <div onClick={() => {
            handleLogin();
          }} className="error">
            Usuário ou senha errados!
      </div>
    </>
  );
};

export default Error;
