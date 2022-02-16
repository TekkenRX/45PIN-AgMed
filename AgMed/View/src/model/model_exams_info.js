const model_exams_info = ([
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "time_frame",
    selector: (row) => row.time_frame,
  },
  {
    name: "desc",
    selector: (row) => row.desc,
  },

  {
    name: "id_procedure",
    selector: (row) => row.id_procedure,
  },
  {
    name: "",
    selector: (row) => row.id_login,
  },
]);

module.exports = model_exams_info;