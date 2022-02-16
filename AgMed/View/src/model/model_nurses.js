const model_nurses = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "degree",
        selector: (row) => row.degree,
      },
      {
        name: "id_employee",
        selector: (row) => row.id_employee,
      },
      ]
  );

  module.exports = model_nurses;