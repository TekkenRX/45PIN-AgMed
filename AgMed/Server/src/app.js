const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require("./Modules/Data/router/router");


class App {
    constructor() {
      this.server = express();
  
      this.middlewares();
      this.routes();
    }
  
    middlewares() {
      this.server.use(bodyParser.json());
      this.server.use(bodyParser.urlencoded({ extended: false }));
      this.server.use(cors());
      this.server.use(express.json());
    }
  
    routes() {
      this.server.use(router);
    }
  
  }
  
module.exports = new App().server;