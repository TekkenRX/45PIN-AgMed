const model_schedule = (
    [
      {
        name: "ID",
        selector: (row) => row.id,
      },
      {
        name: "ID do Funcionário",
        selector: (row) => row.id_employee,
      },
      {
        name: "Domingo",
        selector: (row) => row.sun,
      },{
        name: "Segunda",
        selector: (row) => row.mon,
      },{
        name: "Terça",
        selector: (row) => row.tues,
      },
      {
        name: "Quarta",
        selector: (row) => row.wed,
      },{
        name: "Quinta",
        selector: (row) => row.thu,
      },{
        name: "Sexta",
        selector: (row) => row.fri,
      },{
        name: "Sabádo",
        selector: (row) => row.sat,
      },
      ]
  );

  module.exports = model_schedule;