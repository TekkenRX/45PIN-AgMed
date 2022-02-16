import { useState } from "react";
import axios from "axios";

import Sidebar from "./Components/Sidebar/Container";
import MassDataInput from "./Components/CRUD/MassDataInput";
import TableStarter from "./Components/CRUD/TableStarter";
import Error from "./Components/LoginAgent/Error";

import "./App.css";
import Workbar from "./Components/Workbar/Container";
import LoginBox from "./Components/LoginAgent/Container";

function App() {
  function handleOptionFocus(ClickedOptionID) {
    if (ClickedOptionID !== 4) {
      options = optionsList;

      const newOption = options.map((option) => {
        if (option.id === ClickedOptionID) {
          return { ...option, id: 4 };
        } else {
          return option;
        }
      });

      setOptions(newOption);
    } else {
      setOptions(optionsList);
    }
  }
  let [options, setOptions] = useState([
    {
      id: "1",
      texto: "Agenda",
    },
    {
      id: "2",
      texto: "Cadastros",
    },
    {
      id: "3",
      texto: "Horários",
    },
  ]);

  // Lista para armazenar as cores padrões das opções
  const optionsList = [
    {
      id: "1",
      texto: "Agenda",
    },
    {
      id: "2",
      texto: "Cadastros",
    },
    {
      id: "3",
      texto: "Horários",
    },
  ];

  let [fields, setFields] = useState([
    { name: "Opção 1" },
    { name: "Opção 2" },
    { name: "Opção 3" },
    { name: "Opção 4" },
    { name: "Opção 5" },
    { name: "Opção 6" },
    { name: "Opção 7" },
    { name: "Opção 8" },
    { name: "Opção 9" },
  ]);

  let [render, setRender] = useState([
    {
      texto: "Login",
    },
  ]);

  let [data, setData] = useState([]);

  let [formRender, setFormRender] = useState([
    { render: "noform", formtype: "none" },
    { render: "form", formtype: "none" },
  ]);

  let [massDataInputRender, setMassDataInputRender] = useState([
    { render: "noform", formtype: "none", tag: "" },
    { render: "form", formtype: "none", tag: "" },
  ]);

  function handleLogin() {
    setOptions(optionsList);
    let auth = false;

    if (render[0].texto === "Login") {
      const key = document.getElementsByClassName("password")[0].value;
      const user = document.getElementsByClassName("usernamebar")[0].value;
      axios
        .get("http://localhost:3001/logins/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          response.map((res) => {
            const { login, password } = res;
            if ((login === user, password === key)) {
              auth = true;
            }
          });
          let newRender = render.map((walk) => {
            if (auth === true) {
              return { ...walk, texto: "Main" };
            } else if (render[0].texto === "Erro") {
              return { ...walk, texto: "Login" };
            } else {
              return { ...walk, texto: "Erro" };
            }
          });
          setRender(newRender);
        })
        .catch((err) => {});
    }
    if (render[0].texto === "Erro") {
      const key = document.getElementsByClassName("password")[0].value;
      const user = document.getElementsByClassName("usernamebar")[0].value;
      axios.get("http://localhost:3001/logins/get/objects").then((resp) => {
        let response = resp.data.response;
        response.map((res) => {
          const { login, password } = res;
          if ((login === user, password === key)) {
            auth = true;
          }
        });
        let newRender = render.map((walk) => {
          if (auth === true) {
            return { ...walk, texto: "Main" };
          } else if (render[0].texto === "Erro") {
            return { ...walk, texto: "Erro" };
          } else {
            return { ...walk, texto: "Erro" };
          }
        });
        setRender(newRender);
      });
    } else {
      let newRender = render.map((walk) => {
        return { ...walk, texto: "Login" };
      });
      setRender(newRender);
    }
  }

  function handleFieldsRender(form) {
    let fields;
    if (form === "Clientes") {
      fields = [
        { name: "Nome" },
        { name: "Sobrenome" },
        { name: "CPF" },
        { name: "Contato" },
        { name: "Endereço" },
      ];
    }
    if (form === "Médicos") {
      fields = [
        { name: "Nome" },
        { name: "Sobrenome" },
        { name: "CPF" },
        { name: "Contato" },
        { name: "Endereço" },
        { name: "CRM" },
        { name: "Formção" },
      ];
    }
    setFields(fields);
  }

  function getTableData(form) {
    if (form === "Clientes") {
      axios
        .get("http://localhost:3001/clients/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([{ id: 0 }]);
        });
    } else {
      setData([]);
    }
    if (form === "Médicos") {
      axios
        .get("http://localhost:3001/doctors/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([{ id: 0 }]);
        });
    } else {
      setData([]);
    }
  }

  function handleFormClick(form, clicktype) {
    handleFieldsRender(form);
    getTableData(form);
    let newRender;
    if (clicktype === "simple") {
      newRender = formRender.map((walk) => {
        return { ...walk, render: "form", formtype: form };
      });
    } else if (form === "none") {
      newRender = formRender.map((walk) => {
        return { ...walk, render: "noform", formtype: form };
      });
    } else {
      newRender = formRender.map((walk) => {
        return { ...walk, render: "form", formtype: form };
      });
    }
    setFormRender(newRender);
  }

  function handleMassDataInputRenderClick(form, clicktype, tag) {
    let newRender;
    if (clicktype === "open") {
      newRender = massDataInputRender.map((walk) => {
        return { ...walk, render: "form", formtype: form, tag: tag };
      });
    } else if (clicktype === "close") {
      newRender = massDataInputRender.map((walk) => {
        return { ...walk, render: "noform", formtype: form, tag: tag };
      });
    } else {
      newRender = massDataInputRender.map((walk) => {
        return { ...walk, render: "form", formtype: form, tag: tag };
      });
    }
    setMassDataInputRender(newRender);
  }

  return (
    <div className="App">
      {render.map((walk) => {
        if (walk.texto === "Login") {
          return (
            <div>
              <LoginBox handleLogin={handleLogin}></LoginBox>
            </div>
          );
        }
        if (walk.texto === "Erro") {
          return (
            <div>
              <LoginBox handleLogin={handleLogin}></LoginBox>
              <Error handleLogin={handleLogin} />
            </div>
          );
        } else {
          return (
            <div>
              <Workbar
                options={options}
                handleOptionFocus={handleOptionFocus}
                handleLogin={handleLogin}
                handleFormClick={handleFormClick}
              ></Workbar>

              <div className="sidebarcontainer">
                <TableStarter
                  state={formRender[0]}
                  handleMassDataInputRenderClick={
                    handleMassDataInputRenderClick
                  }
                  data={data}
                ></TableStarter>
                <Sidebar elements={options} handleFormClick={handleFormClick} />
              </div>
              <MassDataInput
                state={massDataInputRender[0]}
                fields={fields}
                handleMassDataInputRenderClick={handleMassDataInputRenderClick}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
