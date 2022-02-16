const db = require("../database/database");

class repository_employees {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_employees");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_employees where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_employees where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }

  async add(id_persons, role) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_employees (id, id_persons, role)" +
          "VALUES (DEFAULT, '"+id_persons+"', '"+role+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }

  async update(id, id_persons, role) {
    try {
      const procedure = await db.query(
        "UPDATE table_employees" +
          " SET " +

          "id_persons ="+
            "'"+id_persons+"'"+

            ", role = "+
            "'"+role+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_employees WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_employees";
    }
  }
}

module.exports = repository_employees;