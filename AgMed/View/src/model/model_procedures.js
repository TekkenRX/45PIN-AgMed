const model_procedures = (
    [
      {
        name: "ID",
        selector: (row) => row.id,
      },
      {
        name: "Descrição",
        selector: (row) => row.desc,
      },
      {
        name: "Valor",
        selector: (row) => row.price,
      },
      {
        name: "ID do Médico responsavél",
        selector: (row) => row.id_doctor,
      },
      ]
  );

  module.exports = model_procedures;