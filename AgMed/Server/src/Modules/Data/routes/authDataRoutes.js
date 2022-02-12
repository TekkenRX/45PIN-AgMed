const { Router } = require('express');

const router = new Router();

const AuthDataController = require('../controllers/authDataController');
const authDataController = new AuthDataController()

router.get("/person/get", authDataController.getPersons);
// router.delete("/assignments/remove", authDataController.removeAssignments)
// router.put("/assignment/add", authDataController.addAssignment);
// router.patch("/assignment/altername", authDataController.updateName);

module.exports = (app) => app.use("/auth", router);