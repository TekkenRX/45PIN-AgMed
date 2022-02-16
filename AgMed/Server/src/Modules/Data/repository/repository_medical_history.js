const db = require("../database/database");

class repository_medical_history {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_medical_history");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_medical_history where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_medical_history where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }

  async add(id_client, entry, time) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_medical_history (id, id_client, entry, time)" +
          "VALUES (DEFAULT, '"+id_client+"', '"+entry+"', '"+time+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }

  async update(id, id_client, entry, time) {
    try {
      const procedure = await db.query(
        "UPDATE table_medical_history" +
          " SET " +

          "id_client ="+
            "'"+id_client+"'"+

            ", entry = "+
            "'"+entry+"'"+

            ", time = "+
            "'"+time+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_medical_history WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_medical_history";
    }
  }
}

module.exports = repository_medical_history;
