const db = require("../database/database");

class repository_exams_info {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_exams_info");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_exams_info where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_exams_info where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }

  async add(timeframe, desc , id_procedure, id_login) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_exams_info (id, timeframe, "+"desc"+" , id_procedure, id_login)" +
          "VALUES (DEFAULT, '"+timeframe+"', '"+desc+"', '"+id_procedure+"', '"+id_login+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }

  async update(id, timeframe, desc , id_procedure, id_login) {
    try {
      const procedure = await db.query(
        "UPDATE table_exams_info" +
          " SET " +

          "timeframe ="+
            "'"+timeframe+"'"+

            ", "+"desc"+" = "+
            "'"+desc+"'"+

            ", id_procedure = "+
            "'"+id_procedure+"'"+

            ", id_login = "+
            "'"+id_login+"'"+
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_exams_info WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams_info";
    }
  }
}

module.exports = repository_exams_info;
