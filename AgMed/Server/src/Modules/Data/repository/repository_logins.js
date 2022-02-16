const db = require("../database/database");

class repository_logins {
  async get() {
    try {
      const procedure = await db.query("SELECT * FROM table_logins");
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }

  async getID(Property, PropertyType) {
    try {
      const procedure = await db.query(
        "SELECT id FROM table_logins where " +
          PropertyType +
          " = '" +
          Property +
          "'"
      );

      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }

  async getById(id) {
    try {
      const procedure = await db.query(
        "SELECT * FROM table_logins where id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }

  async add(login, password, token, id_person) {
    try {
      const procedure = await db.query(
        "INSERT INTO table_logins (id, login, password, token, id_person)" +
          "VALUES (DEFAULT, '"+login+"', '"+password+"', '"+token+"', '"+id_person+"')"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }

  async update(id, login, password, token, id_person) {
    try {
      const procedure = await db.query(
        "UPDATE table_logins" +
          " SET " +

          "login ="+
            "'"+login+"'"+

            ", password = "+
            "'"+password+"'"+

            ", token = "+
            "'"+token+"'"+

            ", id_person = "+
            "'"+id_person+"'" +
 
          " WHERE "+
          
            "id = " +
            "'" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }

  async remove(id) {
    try {
      const procedure = await db.query(
        "DELETE FROM table_logins WHERE id = '" + id + "'"
      );
      return procedure;
    } catch (QueryResultError) {
      return "QueryResultError FROM table_logins";
    }
  }
}

module.exports = repository_logins;
