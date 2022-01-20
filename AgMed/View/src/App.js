import { useState } from "react";
import Sidebar from "./Components/Sidebar/Container";
import "./App.css";
import Workbar from "./Components/Workbar/Container";
import LoginBox from "./Components/LoginAgent/Container";
import logo from "./Components/LoginAgent/Logo.svg";


function App() {
  function handleOptionFocus(ClickedOptionID) {
    console.log(ClickedOptionID);

    if (4 !== ClickedOptionID) {
      options = optionsList;
    }

    const newOption = options.map((option) => {
      if (option.id === ClickedOptionID) {
        return { ...option, id: 4 };
      } else {
        return option;
      }
    });

    setOptions(newOption);
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

  return (
    <div className="App">
      {render.map((walk) => {
        if (walk.texto === "Login") {
          return (
          <div>
            <LoginBox handleClick={handleClick}>
            </LoginBox>
          </div>

            );
        } else {
          return (
          <div>
            <Workbar
              options={options}
              handleOptionFocus={handleOptionFocus}
              handleClick={handleClick}
            ></Workbar>
          <div className="sidebarcontainer">
            <Sidebar/>
          </div>
          </div>
          );
        }
      })}
    </div>
  );
}

export default App;
