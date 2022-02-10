import DataTable from "react-data-table-component";
import { useState } from "react";
import React from "react";
import confirmButton from "./Ok.svg";
import editButton from "./Edit.svg";
import deleteButton from "./Del.svg";
import CXEButton from "./CXEButton";
import { procedure } from "../APICall/requests/getUsers";

import "./CRUD.css";
let selectedData;

const Form = ({ state, handleMassDataInputRenderClick}) => {
  const tableDataItems = [
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
    {
      Nome: "Nome",
      Endereço: "Endereço",
      Contato: "Contato",
      CPF: "CPF",
      Código: "Código",
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    value: "15",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const handleChange = ({ selectedRows }) => {
    selectedData = selectedRows;
    console.log("Selected Rows: ", selectedRows);
  };

  const table_doctors = [
    {
      name: "Nome",
      selector: (row) => row.Nome,
    },
    {
      name: "Sobrenome",
      selector: (row) => row.Sobrenome,
    },
    {
      name: "Cidade",
      selector: (row) => row.Cidade,
      omit: true,
    },
    {
      name: "UF",
      selector: (row) => row.UF,
      omit: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      omit: true,
    },
    {
      name: "Telefone",
      selector: (row) => row.Telefone,
      omit: true,
    },
    {
      name: "CPF",
      selector: (row) => row.CPF,
      omit: true,
    },
    {
      name: "RG",
      selector: (row) => row.RG,
      omit: true,
    },
    {
      name: "CRM",
      selector: (row) => row.CRM,
    },
    {
      name: "Especialização",
      selector: (row) => row.ESPC,
    },
    
  ];

  const table_clients = [
    {
      name: "Nome",
      selector: (row) => row.Nome,
    },
    {
      name: "Sobrenome",
      selector: (row) => row.Sobrenome,
    },
    {
      name: "Cidade",
      selector: (row) => row.Cidade,
      omit: true,
    },
    {
      name: "UF",
      selector: (row) => row.UF,
      omit: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      omit: true,
    },
    {
      name: "Telefone",
      selector: (row) => row.Telefone,
      omit: true,
    },
    {
      name: "CPF",
      selector: (row) => row.CPF,
      omit: true,
    },
    {
      name: "RG",
      selector: (row) => row.RG,
      omit: true,
    },
    
  ];

  const table_nurses = [
    {
      name: "Nome",
      selector: (row) => row.Nome,
    },
    {
      name: "Sobrenome",
      selector: (row) => row.Sobrenome,
    },
    {
      name: "Cidade",
      selector: (row) => row.Cidade,
      omit: true,
    },
    {
      name: "UF",
      selector: (row) => row.UF,
      omit: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      omit: true,
    },
    {
      name: "Telefone",
      selector: (row) => row.Telefone,
      omit: true,
    },
    {
      name: "CPF",
      selector: (row) => row.CPF,
      omit: true,
    },
    {
      name: "RG",
      selector: (row) => row.RG,
      omit: true,
    },
    {
      name: "Especialização",
      selector: (row) => row.ESPC,
    },
    
  ];

  console.log(state);

  if (state.render === "noform") {
    return <></>;
  } else {
    return (
      <>
        <div className="Form">
          <DataTable
            responsive
            pagination
            paginationPerPage={20}
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            // onRowClicked={() => {}
            onSelectedRowsChange={handleChange}
            clearSelectedRows
            columns={table_doctors}
            data={tableDataItems}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          />
        </div>
        <div className="buttonPannel">
          <div className="formLabelBox">
            <p className="formLabelText">{state.formtype}</p>
          </div>
          <CXEButton
            buttonsrc={confirmButton}
            tag={"confirm"}
            selectedData={selectedData}
            handleMassDataInputRenderClick={handleMassDataInputRenderClick}
          />
          <CXEButton
            buttonsrc={deleteButton}
            tag={"delete"}
            selectedData={selectedData}
            handleMassDataInputRenderClick={handleMassDataInputRenderClick}
          />
          <CXEButton
            buttonsrc={editButton}
            tag={"edit"}
            selectedData={selectedData}
            handleMassDataInputRenderClick={handleMassDataInputRenderClick}
          />
        </div>
      </>
    );
  }
};

export default Form;
