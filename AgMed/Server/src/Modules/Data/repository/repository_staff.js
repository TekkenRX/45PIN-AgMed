const db = require("../database/database");

class repository_staff {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_staff");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_staff where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_staff where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }

  async add(id_employee) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_staff (id, degree, id_employee)" +
          "VALUES (DEFAULT, '"+id_employee+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }

  async update(id, id_employee) {
    try {
      const procedure = await db.query(
        "UPDATE table_staff" +
          " SET " +

            "id_employee = "+
            "'"+id_employee+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_staff WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_staff";
    }
  }
}

module.exports = repository_staff;
