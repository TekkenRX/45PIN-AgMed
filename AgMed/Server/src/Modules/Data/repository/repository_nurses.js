const db = require("../database/database");

class repository_nurses {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_nurses");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_nurses where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_nurses where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async add(degree, id_employee) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_nurses (id, degree, id_employee)" +
          "VALUES (DEFAULT, '"+degree+"', '"+id_employee+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async update(id, degree, id_employee) {
    try {
      const procedure = await db.query(
        "UPDATE table_nurses" +
          " SET " +

          "degree ="+
            "'"+degree+"'"+

            ", id_employee = "+
            "'"+id_employee+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_nurses WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_nurses";
    }
  }
}

module.exports = repository_nurses;
