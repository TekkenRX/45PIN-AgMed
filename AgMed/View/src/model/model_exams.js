const model_exams = (
    [
      {
        name: "ID",
        selector: (row) => row.id,
      },
      {
        name: "ID do Cliente",
        selector: (row) => row.id_client,
      },
      {
        name: "ID do Médico",
        selector: (row) => row.id_doctor,
        omit: true
      },
      {
        name: "Hora",
        selector: (row) => row.time_frame,
      },
      {
        name: "Descrição",
        selector: (row) => row.desc,
      },
      ]
  );

  module.exports = model_exams;