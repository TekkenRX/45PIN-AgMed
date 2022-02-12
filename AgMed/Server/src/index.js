const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./Modules/Data/routes/authDataRoutes")(app);
require("./Modules/Data/routes/documentsRoutes")(app);

app.listen(3001);
