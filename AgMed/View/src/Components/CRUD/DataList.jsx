import "./CRUD.css";
import DataTable from "react-data-table-component";
import React, { useState } from "react";
import confirmButton from "./Ok.svg";
import editButton from "./Edit.svg";
import deleteButton from "./Del.svg";
import CXEButton from "./CXEButton";

let selectedData;

const Form = ({
  state,
  handleMassDataInputRenderClick,
  tableDataItems,
  tableModel
}) => {
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

  if (state.render === "noform") {
    return <></>;
  } else {
      return  (
      <>
        <div className="Form">
          <DataTable
            responsive
            pagination
            paginationPerPage={20}
            paginationComponentOptions={paginationComponentOptions}
            highlightOnHover
            pointerOnHover
            onSelectedRowsChange={handleChange}
            clearSelectedRows
            columns={tableModel}
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
