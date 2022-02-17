import { useState } from "react";
import axios from "axios";

import Sidebar from "./Components/Sidebar/Container";
import MassDataInput from "./Components/CRUD/MassDataInput";
import Error from "./Components/LoginAgent/Error";
import modelClients from "./model/model_clients";
import modelDoctors from "./model/model_doctors";
import modelNurses from "./model/model_nurses";
import modelExams from "./model/model_exams";
import modelLogins from "./model/model_logins";
import modelMedicalHis from "./model/model_medical_history";
import modelSchedule from "./model/model_schedule";
import modelProcedures from "./model/model_procedures";
import modelStaff from "./model/model_staff";
import DataList from "./Components/CRUD/DataList";

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

  let [tableModel, setTableModel] = useState([]);

  function handleLogin() {
    setOptions(optionsList);
    let auth = false;

    if (render[0].texto === "Login") {
      const key = document.getElementById("#password");
      const user = document.getElementById("#usernamebar");
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

  async function handleAdditon(form) {
    if (form === "Clientes") {
      let data = 
        {
          "Nome" : "",
          "Sobrenome" : "",
          "CPF" : "",
          "Contato" : "",
          "Endereço" : "",
        }
      ;

      

      data.Nome = await document.getElementById("#Nome")
      data.Sobrenome = await  document.getElementById("#Sobrenome")
      data.CPF =  await document.getElementById("#CPF")
      data.Contato = await  document.getElementById("#Contato")
      data.Endereço = await  document.getElementById("#Endereço")

      

      axios
        .post("http://localhost:3001/clients/post/object", data)
        .then(() => {
          getTableData(form);
        })
        .catch((err) => {
          getTableData(form);
        });
    } else {
      getTableData(form);
    }
    if (form === "Médicos") {
      axios
        .get("http://localhost:3001/doctors/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Enfermeiros") {
      axios
        .get("http://localhost:3001/nurses/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Equipe") {
      axios
        .get("http://localhost:3001/staff/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Médicos⠀") {
      axios
        .get("http://localhost:3001/''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Enfermeiros⠀") {
      axios
        .get("http://localhost:3001/''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Equipe⠀") {
      axios
        .get("http://localhost:3001/''''''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Procedimentos") {
      axios
        .get("http://localhost:3001/procedures/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Usuários") {
      axios
        .get("http://localhost:3001/logins/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (
      !(form === "Clientes") &
      !(form === "Médicos") &
      !(form === "Enfermeiros") &
      !(form === "Equipe") &
      !(form === "Médicos⠀") &
      !(form === "Enfermeiros⠀") &
      !(
        (form === "Equipe⠀") &
        !(form === "Procedimentos") &
        !(form === "Usuários")
      )
    ) {
      setData([{ id: 0 }]);
    }
  }


  function handleFieldsRender(form) {
    let fields;

    if (form === "Clientes") {
      fields = [
        { name: "Nome", type: "text" },
        { name: "Sobrenome", type: "text" },
        { name: "CPF", type: "number" },
        { name: "Contato", type: "text" },
        { name: "Endereço", type: "text" },
      ];
    }
    if (form === "Médicos") {
      fields = [
        { name: "Nome", type: "text" },
        { name: "Sobrenome", type: "text" },
        { name: "CPF", type: "number" },
        { name: "Contato", type: "text" },
        { name: "Endereço", type: "text" },
        { name: "CRM", type: "text" },
        { name: "Formação", type: "text" },
      ];
    }
    if (form === "Enfermeiros") {
      fields = [
        { name: "Nome", type: "text" },
        { name: "Sobrenome", type: "text" },
        { name: "CPF", type: "number" },
        { name: "Contato", type: "text" },
        { name: "Endereço", type: "text" },
        { name: "Formação", type: "text" },
      ];
    }
    if (form === "Equipe") {
      fields = [
        { name: "Nome", type: "text" },
        { name: "Sobrenome", type: "text" },
        { name: "CPF", type: "number" },
        { name: "Contato", type: "text" },
        { name: "Endereço", type: "text" },
      ];
    }
    if (form === "Médicos⠀") {
      fields = [
        { name: "ID do funcionário", type: "number" },
        { name: "UseDomingo", type: "checkbox" },
        { name: "Domingo1", type: "time" },
        { name: "Domingo2", type: "time" },
        { name: "Domingo3", type: "time" },
        { name: "Domingo4", type: "time" },
        { name: "UseSegunda", type: "checkbox" },
        { name: "Segunda1", type: "time" },
        { name: "Segunda2", type: "time" },
        { name: "Segunda3", type: "time" },
        { name: "Segunda4", type: "time" },
        { name: "UseTerça", type: "checkbox" },
        { name: "Terça1", type: "time" },
        { name: "Terça2", type: "time" },
        { name: "Terça3", type: "time" },
        { name: "Terça4", type: "time" },
        { name: "UseQuarta", type: "checkbox" },
        { name: "Quarta1", type: "time" },
        { name: "Quarta2", type: "time" },
        { name: "Quarta3", type: "time" },
        { name: "Quarta4", type: "time" },
        { name: "UseQuinta", type: "checkbox" },
        { name: "Quinta1", type: "time" },
        { name: "Quinta2", type: "time" },
        { name: "Quinta3", type: "time" },
        { name: "Quinta4", type: "time" },
        { name: "UseSexta", type: "checkbox" },
        { name: "Sexta1", type: "time" },
        { name: "Sexta2", type: "time" },
        { name: "Sexta3", type: "time" },
        { name: "Sexta4", type: "time" },
        { name: "UseSabádo", type: "checkbox" },
        { name: "Sabádo1", type: "time" },
        { name: "Sabádo2", type: "time" },
        { name: "Sabádo3", type: "time" },
        { name: "Sabádo4", type: "time" },
      ];
    }
    if (form === "Enfermeiros⠀") {
      fields = [
        { name: "ID do funcionário", type: "number" },
        { name: "UseDomingo", type: "checkbox" },
        { name: "Domingo1", type: "time" },
        { name: "Domingo2", type: "time" },
        { name: "Domingo3", type: "time" },
        { name: "Domingo4", type: "time" },
        { name: "UseSegunda", type: "checkbox" },
        { name: "Segunda1", type: "time" },
        { name: "Segunda2", type: "time" },
        { name: "Segunda3", type: "time" },
        { name: "Segunda4", type: "time" },
        { name: "UseTerça", type: "checkbox" },
        { name: "Terça1", type: "time" },
        { name: "Terça2", type: "time" },
        { name: "Terça3", type: "time" },
        { name: "Terça4", type: "time" },
        { name: "UseQuarta", type: "checkbox" },
        { name: "Quarta1", type: "time" },
        { name: "Quarta2", type: "time" },
        { name: "Quarta3", type: "time" },
        { name: "Quarta4", type: "time" },
        { name: "UseQuinta", type: "checkbox" },
        { name: "Quinta1", type: "time" },
        { name: "Quinta2", type: "time" },
        { name: "Quinta3", type: "time" },
        { name: "Quinta4", type: "time" },
        { name: "UseSexta", type: "checkbox" },
        { name: "Sexta1", type: "time" },
        { name: "Sexta2", type: "time" },
        { name: "Sexta3", type: "time" },
        { name: "Sexta4", type: "time" },
        { name: "UseSabádo", type: "checkbox" },
        { name: "Sabádo1", type: "time" },
        { name: "Sabádo2", type: "time" },
        { name: "Sabádo3", type: "time" },
        { name: "Sabádo4", type: "time" },
      ];
    }
    if (form === "Equipe⠀") {
      fields = [
        { name: "ID do funcionário", type: "number" },
        { name: "UseDomingo", type: "checkbox" },
        { name: "Domingo1", type: "time" },
        { name: "Domingo2", type: "time" },
        { name: "Domingo3", type: "time" },
        { name: "Domingo4", type: "time" },
        { name: "UseSegunda", type: "checkbox" },
        { name: "Segunda1", type: "time" },
        { name: "Segunda2", type: "time" },
        { name: "Segunda3", type: "time" },
        { name: "Segunda4", type: "time" },
        { name: "UseTerça", type: "checkbox" },
        { name: "Terça1", type: "time" },
        { name: "Terça2", type: "time" },
        { name: "Terça3", type: "time" },
        { name: "Terça4", type: "time" },
        { name: "UseQuarta", type: "checkbox" },
        { name: "Quarta1", type: "time" },
        { name: "Quarta2", type: "time" },
        { name: "Quarta3", type: "time" },
        { name: "Quarta4", type: "time" },
        { name: "UseQuinta", type: "checkbox" },
        { name: "Quinta1", type: "time" },
        { name: "Quinta2", type: "time" },
        { name: "Quinta3", type: "time" },
        { name: "Quinta4", type: "time" },
        { name: "UseSexta", type: "checkbox" },
        { name: "Sexta1", type: "time" },
        { name: "Sexta2", type: "time" },
        { name: "Sexta3", type: "time" },
        { name: "Sexta4", type: "time" },
        { name: "UseSabádo", type: "checkbox" },
        { name: "Sabádo1", type: "time" },
        { name: "Sabádo2", type: "time" },
        { name: "Sabádo3", type: "time" },
        { name: "Sabádo4", type: "time" },
      ];
    }
    if (form === "Procedimentos") {
      fields = [
        { name: "ID do Médico responsavél", type: "number" },
        { name: "Descrição", type: "text" },
        { name: "Preço", type: "text" },
      ];
    }
    if (form === "Usuários") {
      fields = [
        { name: "ID da Pessoa", type: "number" },
        { name: "Login", type: "text" },
        { name: "Senha", type: "password" },
        { name: "Confirmar Senha", type: "password" },
        { name: "Token", type: "text" },
      ];
    } else if (
      !(form === "Clientes") &
      !(form === "Médicos") &
      !(form === "Enfermeiros") &
      !(form === "Equipe") &
      !(form === "Médicos⠀") &
      !(form === "Enfermeiros⠀") &
      !(
        (form === "Equipe⠀") &
        !(form === "Procedimentos") &
        !(form === "Usuários")
      )
    ) {
      fields = [
        { name: "ID do Cliente", type: "number" },
        { name: "ID do Médico", type: "number" },
        { name: "ID do Procedimento", type: "number" },
        { name: "Hora", type: "time" },
        { name: "Descrição", type: "text" },
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
          setData([]);
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
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Enfermeiros") {
      axios
        .get("http://localhost:3001/nurses/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Equipe") {
      axios
        .get("http://localhost:3001/staff/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Médicos⠀") {
      axios
        .get("http://localhost:3001/''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Enfermeiros⠀") {
      axios
        .get("http://localhost:3001/''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Equipe⠀") {
      axios
        .get("http://localhost:3001/''''''''''''/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Procedimentos") {
      axios
        .get("http://localhost:3001/procedures/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (form === "Usuários") {
      axios
        .get("http://localhost:3001/logins/get/objects")
        .then((resp) => {
          let response = resp.data.response;
          setData(response);
        })
        .catch((err) => {
          setData([]);
        });
    } else {
      setData([]);
    }
    if (
      !(form === "Clientes") &
      !(form === "Médicos") &
      !(form === "Enfermeiros") &
      !(form === "Equipe") &
      !(form === "Médicos⠀") &
      !(form === "Enfermeiros⠀") &
      !(
        (form === "Equipe⠀") &
        !(form === "Procedimentos") &
        !(form === "Usuários")
      )
    ) {
      setData([{ id: 0 }]);
    }
  }

  function getTableModel(form) {
    if (form === "Clientes") {
      setTableModel(modelClients);
      // modelExams
      // modelMedicalHis
    }
    if (form === "Médicos") {
      setTableModel(modelDoctors);
    }
    if (form === "Enfermeiros⠀") {
      setTableModel(modelNurses);
    }
    if (form === "Equipe") {
      setTableModel(modelStaff);
    }
    if (form === "Médicos⠀") {
      setTableModel(modelSchedule);
    }
    if (form === "Enfermeiros⠀") {
      setTableModel(modelSchedule);
    }
    if (form === "Equipe⠀") {
      setTableModel(modelSchedule);
    }
    if (form === "Procedimentos") {
      setTableModel(modelProcedures);
    }
    if (form === "Usuários") {
      setTableModel(modelLogins);
    } else if (
      !(form === "Clientes") &
      !(form === "Médicos") &
      !(form === "Enfermeiros") &
      !(form === "Equipe") &
      !(form === "Médicos⠀") &
      !(form === "Enfermeiros⠀") &
      !(
        (form === "Equipe⠀") &
        !(form === "Procedimentos") &
        !(form === "Usuários")
      )
    ) {
      setTableModel(modelExams);
    }
  }

  function handleFormClick(form, clicktype) {
    handleFieldsRender(form);
    getTableModel(form);
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
                <DataList
                  state={formRender[0]}
                  handleMassDataInputRenderClick={
                    handleMassDataInputRenderClick
                  }
                  tableDataItems={data}
                  tableModel={tableModel}
                ></DataList>
                <Sidebar elements={options} handleFormClick={handleFormClick} />
              </div>
              <MassDataInput
                state={massDataInputRender[0]}
                fields={fields}
                handleMassDataInputRenderClick={handleMassDataInputRenderClick}
                handleAdditon={handleAdditon}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
