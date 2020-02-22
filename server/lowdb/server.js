const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8500;

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileAsync");

const adapter = new FileSync("data/db.json");
const db = low(adapter);

app.use(bodyParser.json());

require("./routes/index")(app, db);
app.listen(port, () => {
	console.log("We are live on " + port);
});
