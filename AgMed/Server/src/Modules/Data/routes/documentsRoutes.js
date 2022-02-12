const { Router } = require('express');
const Controller = require('../controllers/documentsController');
const controller = new Controller()

const router = new Router();



router.get("/get/objects", controller.get);
router.get("/get/object", controller.getByID);
router.get("/get/model", controller.getModel);
router.get("/get/id", controller.getID);
router.post("/post/object", controller.add);
router.delete("/delete/object", controller.remove);

module.exports = (app) => app.use("/documents", router);