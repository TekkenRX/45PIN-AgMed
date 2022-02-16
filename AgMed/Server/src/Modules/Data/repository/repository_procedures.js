const db = require("../database/database");

class repository_procedures {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_procedures");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_procedures where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_procedures where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }

  async add(desc, price, id_doctor) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_procedures (id, "+"desc"+", price, id_doctor)" +
          "VALUES (DEFAULT, '"+desc+"', '"+price+"', '"+id_doctor+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }

  async update(id, desc, price, id_doctor) {
    try {
      const procedure = await db.query(
        "UPDATE table_procedures" +
          " SET " +

          ""+"desc"+" ="+
            "'"+desc+"'"+

            ", price = "+
            "'"+price+"'"+

            ", id_doctor = "+
            "'"+id_doctor+"'"+
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_procedures WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_procedures";
    }
  }
}

module.exports = repository_procedures;