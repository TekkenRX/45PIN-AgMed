const model_staff = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "id_employee",
        selector: (row) => row.id_employee,
      },
      ]
  );

  module.exports = model_staff;