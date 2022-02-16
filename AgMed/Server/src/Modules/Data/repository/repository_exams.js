const db = require("../database/database");

class repository_exams {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_exams");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_exams where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_exams where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }

  async add(id_client, id_doctor, id_exam_info) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_exams (id, id_client, id_doctor, id_exam_info)" +
          "VALUES (DEFAULT, '"+id_client+"', '"+id_doctor+"', '"+id_contacts+"', '"+id_exam_info+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }

  async update(id, id_client, id_doctor, id_exam_info) {
    try {
      const procedure = await db.query(
        "UPDATE table_exams" +
          " SET " +

          "id_client ="+
            "'"+id_client+"'"+

            ", id_doctor = "+
            "'"+id_doctor+"'"+

            ", id_exam_info = "+
            "'"+id_exam_info+"'"+
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_exams WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_exams";
    }
  }
}

module.exports = repository_exams;
