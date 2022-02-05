import { useState } from "react";
import Calendar from "../Calendar/Container";
import CRUDBar from "../CRUD/Cointainer";


const ElementsContainer = ({ elements, handleFormClick}) => {
console.log(elements[0])

  const [days] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
    { value: 26 },
    { value: 27 },
    { value: 28 },
    { value: 29 },
    { value: 30 },
    { value: 31 },
  ]);

  const [weeks] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);

  const [months] = useState([
    { name: "Janeiro", tag: 31 },
    { name: "Fevereiro", tag: 28 },
    { name: "Março", tag: 31 },
    { name: "Abril", tag: 30 },
    { name: "Maio", tag: 31 },
    { name: "Junho", tag: 30 },
    { name: "Julho", tag: 31 },
    { name: "Agosto", tag: 31 },
    { name: "Setembro", tag: 30 },
    { name: "Outubro", tag: 31 },
    { name: "Novembro", tag: 30 },
    { name: "Dezembro", tag: 31 },
  ]);

  const [scheduleButtons] = useState([
    { text: "Visualizar Horários"},
    { text: "Editar Escala"},
    { text: "Definir um Horário"},
    { text: "Limpar registros"},
  ]);

  const [formButtons] = useState([
    { text: "Gestão de Clientes"},
    { text: "Gestão de Médicos"},
    { text: "Gestão de Enfermeiros"},
    { text: "Gestão de Equipe"},
  ]);

  // Prenche a barra lateral com o caléndário
  if (elements[0].id === 4) {
    console.log("Pen");
    return (
      <>
        <div className="elements-container">
          <div className="diary">
            {months.map((month) => (
              <Calendar day={days} week={weeks} month={month} tag={month.tag} handleFormClick={handleFormClick} />
            ))}
          </div>
        </div>
      </>
    );
  }
  // Prenche a barra lateral com os botões de cadastro
  if (elements[1].id === 4) {
    console.log("Banana");
    return (
      <>
        <div className="elements-container">
          <CRUDBar options={formButtons} handleFormClick={handleFormClick}></CRUDBar>
        </div>
      </>
    );
  }
  // Prenche a barra lateral com os botões de horário 
  if (elements[2].id === 4) {
    console.log("Catdance");
    return (
      <>
        <div className="elements-container">
          <CRUDBar options={scheduleButtons} handleFormClick={handleFormClick}></CRUDBar>
        </div>
      </>
    );
  } 
  // Prenche a barra lateral com uma chamada para tipos de elementos
  else {
    return (
      <>
        <div className="elements-container">
            <div className="text">
                Selecione uma seção!
            </div>
        </div>
      </>      
    );
  }
};

export default ElementsContainer;
