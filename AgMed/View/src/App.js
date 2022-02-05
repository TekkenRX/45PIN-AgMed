import { useState } from "react";
import Sidebar from "./Components/Sidebar/Container";
import "./App.css";
import Workbar from "./Components/Workbar/Container";
import LoginBox from "./Components/LoginAgent/Container";
import logo from "./Components/LoginAgent/Logo.svg";
import Form from "./Components/CRUD/FormContainer";

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

  let [render, setRender] = useState([
    {
      texto: "Login",
    },
  ]);

  function handleClick() {
    setOptions(optionsList);

    let newRender = render.map((walk) => {
      if (render[0].texto === "Login") {
        return { ...walk, texto: "Main" };
      } else {
        return { ...walk, texto: "Login" };
      }
    });

    setRender(newRender);
  }

  let [formRender, setFormRender] = useState([
    { render: "noform", formtype: "none" },
    { render: "form", formtype: "none" },
  ]);

  function handleFormClick(form, clicktype) {
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

  return (
    <div className="App">
      {render.map((walk) => {
        if (walk.texto === "Login") {
          return (
            <div>
              <LoginBox handleClick={handleClick}></LoginBox>
            </div>
          );
        } else {
          return (
            <div>
              <Workbar
                options={options}
                handleOptionFocus={handleOptionFocus}
                handleClick={handleClick}
                handleFormClick={handleFormClick}
              ></Workbar>

              <div className="sidebarcontainer">
                <Form state={formRender[0]}></Form>
                <Sidebar elements={options} handleFormClick={handleFormClick} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
