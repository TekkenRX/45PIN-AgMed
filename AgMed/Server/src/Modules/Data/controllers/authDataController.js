const RepositoryPerson = require('../repository/repository_person')

repositoryPerson = new RepositoryPerson()

class authDataController {

  async getPersons(req, res) {
    try {

      // const {id} = req.body

      // const response = await repositoryPerson.getPersonById(id);
      const response = await repositoryPerson.addPerson(1,1,1,"Denis", "Zickuhr")

      return res.send({response});
    } catch (err) {
      return res.status(400).send({ error: "couldn't connect" });
    }
  }
}


module.exports = authDataController;
