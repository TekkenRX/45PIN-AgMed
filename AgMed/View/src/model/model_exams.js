const model_exams = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "id_client",
        selector: (row) => row.id_client,
      },
      {
        name: "id_doctor",
        selector: (row) => row.id_doctor,
      },
      {
        name: "id_exam_info",
        selector: (row) => row.id_exam_info,
      },
      ]
  );

  module.exports = model_exams;