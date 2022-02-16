const { Router } = require("express")
const router = new Router();
const routes = require("../routes/routes")

router.use("/auth", routes)

module.exports = routes;