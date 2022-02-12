const db = require("../database/database");

class repository_contactcs {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_contactcs");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_contactcs";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_contactcs where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_contactcs where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async add(email, phone) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_contactcs (id, email, phone)" +
          "VALUES (DEFAULT, '"+email+"', '"+phone+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async update(id, email, phone) {
    try {
      const procedure = await db.query(
        "UPDATE table_contactcs" +
          " SET " +

          "email ="+
            "'"+email+"'"+

            ", phone = "+
            "'"+phone+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_contactcs WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError";
    }
  }
}

module.exports = repository_contactcs;