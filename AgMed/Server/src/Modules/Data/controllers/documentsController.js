const Repository = require("../repository/repository_documents");

repository = new Repository();

class documentsController {
  async get(req, res) {
    try {
      const response = await repository.get();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getModel(req, res) {
    try {
      const response = await repository.getModel();

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getID(req, res) {
    try {
      let { Property, PropertyType } = req.body;

      const response = await repository.getID(Property, PropertyType);

      return res.send({response});
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async getByID(req, res) {
    try {
      const { id } = req.body;

      const response = await repository.getByID(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async add(req, res) {
    try {
      const { cpf, rg } = req.body;

      const response = await repository.add(cpf, rg);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }

  async remove(req, res) {
    try {
      const { id } = req.body;

      const response = await repository.remove(id);

      return res.send({ response });
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }
}

module.exports = documentsController;