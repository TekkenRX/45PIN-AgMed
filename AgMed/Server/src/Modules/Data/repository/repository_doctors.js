const db = require("../database/database");

class repository_doctors {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_doctors");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_doctors where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_doctors where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async add(crm, degree, id_employee, id_login) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_doctors (id, crm, degree, id_employee, id_login)" +
          "VALUES (DEFAULT, '"+crm+"', '"+degree+"', '"+id_employee+"', '"+id_login+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async update(id, crm, degree, id_employee, id_login) {
    try {
      const procedure = await db.query(
        "UPDATE table_doctors" +
          " SET " +

          "crm ="+
            "'"+crm+"'"+

            ", degree = "+
            "'"+degree+"'"+

            ", id_employee = "+
            "'"+id_employee+"'"+

            ", id_login = "+
            "'"+id_login+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_doctors WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_doctors";
    }
  }
}

module.exports = repository_doctors;