const model_logins = (
    [
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "login",
        selector: (row) => row.login,
      },
      {
        name: "password",
        selector: (row) => row.password,
      },
        {
        name: "token",
        selector: (row) => row.token,
      },
      {
        name: "id_person",
        selector: (row) => row.id_person,
      },
      ]
  );

  module.exports = model_logins;